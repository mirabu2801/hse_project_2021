from natasha import (
    Segmenter,
    MorphVocab,
    NewsEmbedding,
    NewsMorphTagger,
    NewsSyntaxParser,
    NewsNERTagger,
    PER,
    NamesExtractor,
    Doc,
)
import pymorphy2

morph = pymorphy2.MorphAnalyzer(lang='ru')

segmenter = Segmenter()
morph_vocab = MorphVocab()

emb = NewsEmbedding()
morph_tagger = NewsMorphTagger(emb)
syntax_parser = NewsSyntaxParser(emb)
ner_tagger = NewsNERTagger(emb)

names_extractor = NamesExtractor(morph_vocab)


def get_male(string):
    doc = Doc(string)
    doc.segment(segmenter)
    doc.tag_morph(morph_tagger)
    doc.parse_syntax(syntax_parser)

    morph_tokens = doc.morph.tokens
    syntax = doc.syntax

    for sentence in range(len(doc.sents)):
        for token_num in range(len(doc.sents[sentence].morph.tokens)):
            morph_token = doc.sents[sentence].morph.tokens[token_num]
            syntax_token = doc.sents[sentence].syntax.tokens[token_num]
            if morph_token.text.lower() in replaces:
                gender = morph_token.feats.get('Gender')
                if gender:
                    return gender
                head = syntax_token.head_id
                sentences_num, word_num = list(map(int, head.split('_')))
                sentences_num -= 1
                word_num -= 1
                if word_num == -1:
                    continue
                head_morph_token = doc.sents[sentences_num].morph.tokens[word_num]
                if head_morph_token.pos in ['ADJ', 'VERB']:
                    res = head_morph_token.feats.get('Gender')
                    if res:
                        return res

    return 'm'


# ['Nom', 'Gent', 'Acc', 'Dat', 'Ins']
def natasha_to_morphy(nat_case):
    dd = {
        'Nom': 'nomn',
        'Gent': 'gent',
        'Gen': 'gent',
        'Dat': 'datv',
        'Acc': 'accs',
        'Ins': 'ablt',
    }
    return dd.get(nat_case, 'loct')


d = dict()

d['я'] = ['он', 'она']
d['мне'] = ['ему', 'ей']
d['мой'] = ['его', 'её']
d['моя'] = ['его', 'её']
d['моей'] = ['его', 'её']
d['мою'] = ['его', 'её']
d['моих'] = ['его', 'её']

d['мои'] = ['его', 'её']
d['моему'] = ['его', 'её']
d['моего'] = ['его', 'её']
d['моим'] = ['его', 'её']
d['моём'] = ['его', 'её']
d['меня'] = ['его', 'её']
d['мне'] = ['ему', 'ей']
d['мной'] = ['им', 'ей']
d['моё'] = ['его', 'её']
d['мое'] = ['его', 'её']

d['мы'] = 'они'

d['нас'] = 'их'
d['нам'] = 'ими'
d['нами'] = 'ими'
d['наш'] = 'их'
d['нашего'] = 'их'
d['нашему'] = 'их'
d['нашем'] = 'их'
d['о нас'] = 'o них'
replaces = d

object_replaces = ['он', 'она', 'ему', 'ей', 'его', 'её', 'ему', 'ей', 'им', 'ней', 'они', 'их', 'ими']
l = len(object_replaces)
for i in range(l):
    object_replaces.append('н' + object_replaces[i])
clomyaemoe = ['его', 'мне', 'мной', 'нас', 'нам', 'нами', 'меня']


def add_n_if_neccessary(prev_morph, string, initial_val):
    if prev_morph.text == 'при' and string == 'ему':
        return 'нём'
    if prev_morph.pos == 'ADP' and initial_val in clomyaemoe:
        return 'н' + string
    return string


def change_form(word):
    return list(map(lambda pp: change_form_2(pp, word[0].isupper()), morph.parse(word)[:2]))[::-1]


def change_form_2(word, is_capital):
    tense = word.tag.tense
    if tense is not None:
        res = word.inflect({'3per', tense})
    else:
        return word.word
    ret = res.word if res is not None else word.word
    if is_capital:
        ret = ret.capitalize()
    return ret


def change_paddeg(raw, word, paddeg):
    return list(map(lambda p: change_paddeg_2(raw, p, paddeg, word[0].isupper()), morph.parse(word)[:2]))[::-1]


def change_paddeg_2(raw, word, paddeg, is_capital):
    if not paddeg:
        paddeg = morph.parse(raw)[0].tag.case
    res = word.inflect({paddeg})
    ret = res.word
    if is_capital:
        ret = ret.capitalize()
    return ret


def apply_replaces(replaces_nums, doc, options):
    tokens = []
    puncts = 0
    for i in range(len(doc.tokens)):
        initial = doc.tokens[i].text
        if options and i in options:
            t = options.pop(i)
            s = set()
            for p in t:
                if isinstance(p, str):
                    s.add(p)
                else:
                    for g in p:
                        s.add(g)
            res = list(s)
            if len(res) != 1 or res[0].lower() != initial.lower():
                options[i - puncts] = res
        res = replaces_nums.get(i, initial)
        if initial[0].isupper():
            res = res.capitalize()
        if doc.morph.tokens[i].pos != 'PUNCT':
            res = ' ' + res
        else:
            puncts += 1
        tokens.append(res)

    return ''.join(tokens).strip()


def solve(string, male):
    opp_male = 'f' if male[0].lower() == 'm' else 'm'
    result_replaces = {}
    result_opt = {}
    doc = Doc(string)
    doc.segment(segmenter)
    doc.tag_morph(morph_tagger)
    doc.parse_syntax(syntax_parser)

    morph_tokens = doc.morph.tokens
    syntax = doc.syntax

    last_object_sentence = None
    last_object_word = None

    last_object_sentence_plur = None
    last_object_word_plur = None
    last_sentence_options = []

    first_pos = 0

    for sentence in range(len(doc.sents)):
        length = len(doc.sents[sentence].morph.tokens)
        for token_num in range(length):
            morph_token = doc.sents[sentence].morph.tokens[token_num]
            syntax_token = doc.sents[sentence].syntax.tokens[token_num]

            feats = morph_token.feats
            person = feats.get('Person')

            lower = morph_token.text.lower()

            def check(t):
                gender = t.tag.gender
                if not gender:
                    return False

                if t.score < 0.1:
                    return False

                return 'NOUN' in t.tag.grammemes and (gender[0].lower() == male[0].lower() or (
                            gender[0].lower() == 'n' and 'm' == male[0].lower()))

            if any(map(check, morph.parse(lower)[:2])):
                last_sentence_options.insert(0, -(first_pos + token_num))

            if (morph_token.pos == 'NOUN' or morph_token.pos == 'PROPN') and morph_token.feats.get('Number') == 'Plur':
                if last_object_sentence_plur is None or morph_token.feats.get('Case') in ['Nom', 'Gen', 'Acc', 'Dat',
                                                                                          'Ins']:
                    last_object_sentence_plur = sentence
                    last_object_word_plur = token_num

            elif (morph_token.pos == 'NOUN' or morph_token.pos == 'PROPN') and (
                    morph_token.feats.get('Gender', 'h')[0].lower() == male[0].lower() or (
                    morph_token.feats.get('Gender', 'h')[0].lower() == 'n' and 'm' == male[0].lower())):
                if last_object_sentence is None or morph_token.feats.get('Case') in ['Nom', 'Gen', 'Acc', 'Dat', 'Ins']:
                    # if last_object_sentence != sentence:
                    #     last_sentence_options = []
                    last_sentence_options.append(token_num)
                    last_object_sentence = sentence
                    last_object_word = token_num

            if (lower in object_replaces and morph_token.feats.get('Gender', '_')[0].lower() != opp_male) or (
                    lower in replaces and morph_token.pos != 'VERB'):
                if lower in object_replaces:
                    try:
                        index1 = last_object_sentence
                        index2 = last_object_word
                        fl = True
                        case = natasha_to_morphy(morph_token.feats.get('Case'))
                        if morph_token.feats.get('Number') == 'Plur':
                            index1 = last_object_sentence_plur
                            index2 = last_object_word_plur
                        else:
                            if len(last_sentence_options) > 1:
                                fl = False
                                case = natasha_to_morphy(morph_token.feats.get('Case'))
                                result = list(map(lambda i: change_paddeg(lower, doc.tokens[-i].text if i < 0 else
                                doc.sents[index1].tokens[i].text, case), last_sentence_options))
                                res = []
                                for i in result:
                                    res.extend(i)
                                rr = result_opt.get(first_pos + token_num, [])
                                rr.extend(result)
                                result_opt[first_pos + token_num] = rr
                                # print(lower, '->', result)

                        if fl:
                            replacement = doc.sents[index1].tokens[index2].text
                            result = change_paddeg(lower, replacement, case)
                            result_replaces[first_pos + token_num] = result[-1]
                            rr = result_opt.get(first_pos + token_num, [])
                            rr.extend(result)
                            result_opt[first_pos + token_num] = rr

                            # print(lower, '->', result)
                    except Exception as e:
                        pass
                        # print('AA', e)
                else:
                    replace = replaces[lower]

                    if isinstance(replace, str):
                        rep = replaces[lower]
                    else:
                        rep = replaces[lower][int(male[0].lower() == 'f')]
                    if token_num != 0:
                        rep = add_n_if_neccessary(doc.sents[sentence].morph.tokens[token_num - 1], rep, lower)
                    result_replaces[first_pos + token_num] = rep
                    rr = result_opt.get(first_pos + token_num, [])
                    rr.append(rep)
                    result_opt[first_pos + token_num] = rr
                    # print(morph_token.text.lower(), '->', rep)
                head = syntax_token.head_id
                sentences_num, word_num = list(map(int, head.split('_')))
                sentences_num -= 1
                word_num -= 1
                numm = first_pos + word_num
                if word_num == -1 or result_replaces.get(numm):
                    continue
                head_morph_token = doc.sents[sentences_num].tokens[word_num]
                result = change_form(head_morph_token.text)
                result_replaces[numm] = result[-1]
                rr = result_opt.get(numm, [])
                rr.extend(result)
                result_opt[numm] = rr
                # print(head_morph_token.text, '->', result)
            else:
                head = syntax_token.head_id
                sentences_num, word_num = list(map(int, head.split('_')))
                sentences_num -= 1
                word_num -= 1
                numm = first_pos + word_num
                if word_num != -1 and numm in result_replaces:
                    numm = token_num + first_pos
                    result = change_form(lower)
                    result_replaces[numm] = result[-1]
                    rr = result_opt.get(numm, [])
                    rr.extend(result)
                    result_opt[numm] = rr
                    # print(lower, '->', result)

        first_pos += length
    # print(result_replaces)
    return apply_replaces(result_replaces, doc, result_opt), result_opt


s = '''Так, 11.05.2015 года я с напарником по цирковой студии Галич Денисом Юрьевичем
поехали в г. Челябинск на выступление в ледовой арене «Трактор». 19.05.2015 года я с Галич Д.Ю. возвращались обратно в г. Омск, для чего на станции Челябинск мы осуществили
посадку в пассажирский поезд № 098 сообщением «Кисловодск-Тында» в вагон № 14 на
места № 22, 24, 26. На одном месте находился реквизит. Осуществив посадку и заняв свои
места мы легли спать, телефон был все время при мне, однако перед тем как лечь спать он
выключился, т.к. сел заряд аккумулятора. Проснувшись утром по станции Петропавловск
мы находились на своих местах, так как в вагоне работали пограничники, проводили проверку пассажиров. В вагоне было много пассажиров, некоторые из них в пути следования
распивали спиртные напитки. В том числе в вагоне из числа пассажиров были военнослужащие, других отличительных признаков я не запомнила. После того как проводник прошел по вагону и предупредил, что до станции Омск оставалось около 15 минут, я решила
пойти поставить свой мобильный телефон на зарядку для того, чтобы позвонить маме и
сказать о прибытии поезда. Так, я прошла в нерабочий тамбур, где напротив туалета над
окном поставила свой мобильный телефон заряжаться, положив его на верхний уступ окна.
В момент, когда я ставила телефон на зарядку, в тамбуре напротив туалета стоял проводник вагона, он видел все мои действия. Проводник дожидался пассажира, который находился в туалете, для того чтобы закрыть туалет перед прибытием на станцию Омск. Поставив телефон на зарядку я решила вернуться на свое место, через минуту за мной вышел из
тамбура и проводник и прошел к себе. Я находилась на свое месте около 7-10 минут, после
чего решила проверить свой мобильный телефон. Также у меня вызвала подозрение женщина, на вид цыганка, которая прошла в сторону туалета. Так, подойдя к нерабочему тамбуру я увидела, что в розетке осталось только зарядное устройство от моего мобильного
телефона, самого телефона не было. Я сразу поняла, что его похитили и пошла к проводнику, сообщила о случившемся, на что проводник ответил что по станции Омск вызовет сотрудников полиции для разбирательств.'''

# s = 'В итоге Егор добился-таки от меня поцелуя неделю спустя. Но он был легким, почти мимолетным. Я решила подразнить его.'
res = "Ему нравится Маша. Маша очень смелая. Они с Машей пошли в кино и он ударил Машу битой. Хорошо что бита была игрушечная из сахарной ваты."

from transformers import GPT2LMHeadModel, GPT2Tokenizer

def algos(string):
    return solve(string, get_male(string))

from django.conf import settings

MAX_LENGTH = int(10000)
def adjust_length_to_model(length, max_sequence_length):
    if length < 0 and max_sequence_length > 0:
        length = max_sequence_length
    elif 0 < max_sequence_length < length:
        length = max_sequence_length  # No generation bigger than model size
    elif length < 0:
        length = MAX_LENGTH  # avoid infinite loop
    return length
repetition_penalty = 1.0
device = 'cuda' # Поменять при необходимости
k = 50
p = 0.5
num_return_sequences = 1
stop_token = '</s>'

def predict_raw(model, tokenizer, prompt_text):
    length = adjust_length_to_model(100, max_sequence_length=model.config.max_position_embeddings)
    temperature = 1.0
    generated_sequences = []
    encoded_prompt = tokenizer.encode(prompt_text, add_special_tokens=False, return_tensors="pt")
    encoded_prompt = encoded_prompt.to(device)
    output_sequences = model.generate(
        input_ids=encoded_prompt,
        max_length=length + len(encoded_prompt[0]),
        temperature=temperature,
        top_k=k,
        top_p=p,
        repetition_penalty=repetition_penalty,
        do_sample=True,
        num_return_sequences=num_return_sequences,
    )
    if len(output_sequences.shape) > 2:
        output_sequences.squeeze_()
    for generated_sequence_idx, generated_sequence in enumerate(output_sequences):
        generated_sequence = generated_sequence.tolist()
        text = tokenizer.decode(generated_sequence, clean_up_tokenization_spaces=True)

        text = text[: text.find(stop_token) if stop_token else None]
        total_sequence = (
                prompt_text + text[len(tokenizer.decode(encoded_prompt[0], clean_up_tokenization_spaces=True)) :]
        )
        generated_sequences.append(total_sequence)
    return generated_sequences[0]

def predict(text, model=settings.MODEL, tokenizer=settings.TOKENIZER):
    return predict_raw(model, tokenizer, f'in: {text} [end] out: ').split('[end] out: ')[1]

def pr(txt):
    algoss = algos(txt)
    pr = predict(txt)
    return pr
