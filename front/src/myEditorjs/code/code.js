import {detect} from './langDetect'
// import {Editor} from './src/ace.js'
import * as ace from './src/ace.js'

export class Code {
  constructor({data, api}) {
    this.api = api
    this.data = {
      data: data.data || '',
      lang: data.lang || '',
      theme: data.theme || 'eclipse'
    };
    this.wrapper = undefined;
    this.editor = undefined;
    this.codeAnalize = false;
    this.readOnly = false;
    this.dictLang = {
      'JavaScript': "javascript",
      'C': "c_cpp",
      "C++": "c_cpp",
      'Python': 'python',
      'Java': 'java',
      'HTML': 'html',
      'CSS': 'css',
      'Ruby': 'ruby',
      'Go': 'golang',
      'PHP': 'php',
      'Unknown': 'Unknown'
    };
    this.create()
    this.settedLang = false
  }


  setToNext() {
    this.api.caret.setToNextBlock('start', 0)
  }

  setToEnd() {
    this.api.caret.focus(true);

  }

  setToPrev() {
    this.api.caret.setToPreviousBlock()
  }

  createBlock() {
    this.api.blocks.insert();
  }


  getLineNumber() {
    return this.editor.getValue().split('\n').length
  }

  getBLock(idx) {
    return this.api.blocks.getBlockByIndex(idx)
  }

  setLang(lang) {
    this.editor.session.setMode("ace/mode/" + lang);
    let langs = this.wrapper.getElementsByTagName('select')[1]
    langs.value = lang
  }

  setSize() {
    let tempH = document.getElementsByClassName('ace_gutter-cell')[0].style.height;
    tempH = tempH.slice(0, -2);
    let h = +tempH * (this.editor.session.getLength() + 1);
    this.wrapper.style.height = (h).toString() + 'px';
    this.editor.resize();
    return true;
  }

  render() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('code');

    var input = document.createElement('div');
    input.classList.add('ace-code');
    input.textContent = this.data.data;
    let CDN = 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.6/src-min-noconflict';
    ace.config.set('basePath', CDN);
    var editor = ace.edit(input)
    this.editor = editor
    // editor.setPrintMarginColumn(84)
    editor.setShowPrintMargin(false)
    editor.setTheme("ace/theme/" + this.data.theme);
    editor.setFontSize(14);
    let wrapper = this.wrapper
    let api = this;
    editor.on('change', function (event) {
      api.setSize();
      if (event['action'] === 'remove') {
        if (!editor.getValue().trim()) {
          api.settedLang = false;
        }
      }
      if (!api.settedLang && editor.getValue().length % 5 === 0) {
        let tmp = api.dictLang[detect(editor.getValue())]
        if (tmp !== 'Unknown') {
          api.setLang(tmp)
        }
      }
      // editor.renderer.updateFull();
    });
    editor.session.setUseWorker(this.codeAnalize); // анализировать ли код
    editor.setReadOnly(this.readOnly);
    input.addEventListener('paste', (event) => {
      if (this.settedLang) {
        return
      }
      let now = this.dictLang[detect(editor.getValue())]
      if (now !== 'Unknown' && !this.settedLang) {
        this.setLang(now)
      }
    });
    input.addEventListener('keydown', (event) => {
      if (event.shiftKey && event.code === 'Enter') {
        editor.blur()
        let idx = api.api.blocks.getCurrentBlockIndex();
        let total = api.api.blocks.getBlocksCount()
        if (total - idx > 1) {
          this.createBlock();
          this.setToNext();
          this.setToPrev();
          // let next = document.getElementsByClassName('cdx-block')[now]
          // next.focus()
          // next.focus()
          this.api.toolbar.open();
        } else {
          this.createBlock();
          this.setToEnd();
          this.api.toolbar.open();
        }
        return
      }
      if (event.code === "Enter") {
        event.stopPropagation();
      }
    });
    let theme = document.createElement('select')
    let lang = document.createElement('select')
    let btn = document.createElement('button')
    this.themes.forEach(elem => {
      let themeName = document.createElement('option');
      themeName.innerHTML = elem
      theme.appendChild(themeName)
    })
    theme.addEventListener('change', (event) => {
      editor.setTheme("ace/theme/" + theme.value);
    });
    this.langs.forEach(elem => {
      let langName = document.createElement('option');
      langName.setAttribute('value', elem);
      langName.innerHTML = elem
      lang.appendChild(langName)
    })


    let defaultLang = document.createElement('option');
    defaultLang.setAttribute('value', 'Выберете язык');
    defaultLang.innerHTML = 'Выберете язык'
    lang.appendChild(defaultLang)
    lang.value = defaultLang.innerHTML

    theme.value = 'eclipse'

    lang.addEventListener('change', (event) => {
      editor.session.setMode("ace/mode/" + lang.value);
      if (lang.value === 'Выберете язык') {
        this.settedLang = false;
      } else {
        this.settedLang = true;
      }
    });

    let wrapSelects = document.createElement('div');
    wrapSelects.classList.add('ace-code-wrap-select');

    wrapSelects.appendChild(theme);
    wrapSelects.appendChild(lang);

    this.wrapper.appendChild(input);
    this.wrapper.appendChild(wrapSelects);
    if (this.data.lang && this.data.lang != 'Выберете язык') {
      this.setLang(this.data.lang);
    }
    if (this.data.data) {
      editor.renderer.on('afterRender', function() {
        api.setSize();
      });
    }
    return this.wrapper;
  }


  _createTex(texText, final = false,) {
    // console.log('TEX', texText)
    try {
      katex.render(texText, this.elem, {
        strict: false,
        throwOnError: true,
        displayMode: this.middle,
        trust: true,
        // leqno: true,
        // fleqn: false
      })
    } catch (e) {
      let html = (e.message).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")//.replace("Expected 'EOF', got", 'Undefined control sequence:')
      this.elem.innerHTML = html
    }
    if (final) {
      this.data.tex = texText
      this.wrapper.innerHTML = ''
      if (!texText.trim()) {
        return
      }
      this.wrapper.appendChild(this.elem)
    }
  }

  static get toolbox() {
    return {
      title: 'Code',
      icon: '<svg width="19" height="13"><path d="M18.004 5.794c.24.422.18.968-.18 1.328l-4.943 4.943a1.105 1.105 0 1 1-1.562-1.562l4.162-4.162-4.103-4.103A1.125 1.125 0 1 1 12.97.648l4.796 4.796c.104.104.184.223.239.35zm-15.142.547l4.162 4.162a1.105 1.105 0 1 1-1.562 1.562L.519 7.122c-.36-.36-.42-.906-.18-1.328a1.13 1.13 0 0 1 .239-.35L5.374.647a1.125 1.125 0 0 1 1.591 1.591L2.862 6.341z"></path></svg>'
      // icon: '<svg class="tex-icon" viewBox="0 0 18 18"> <path d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"></path> <rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"></rect> <path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"></path> </svg>'
      // icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1370 1670 c0 -17 7 -20 46 -20 25 0 53 -4 63 -9 9 -5 72 -93 140 -194 l123 -185 -111 -165 c-121 -181 -147 -204 -230 -214 -41 -5 -51 -9 -51 -24 0 -15 8 -19 36 -19 l36 0 -7 -37 c-10 -54 -42 -124 -71 -154 -39 -41 -91 -50 -259 -47 l-150 3 -3 189 -2 188 95 -4 c113 -5 132 -17 143 -93 4 -27 13 -50 20 -53 9 -3 12 34 12 162 0 134 -3 166 -14 166 -9 0 -15 -17 -18 -51 -8 -75 -21 -83 -139 -87 l-99 -4 2 174 3 173 160 0 c142 0 164 -2 194 -20 49 -29 69 -61 88 -142 10 -40 22 -73 28 -73 11 0 8 34 -20 238 l-6 42 -284 0 -283 0 -7 88 c-3 48 -8 108 -11 135 l-6 47 -383 0 -383 0 -6 -87 c-4 -49 -9 -112 -12 -140 -4 -41 -2 -53 8 -53 10 0 18 24 26 73 22 130 55 159 194 172 131 11 118 52 118 -376 l0 -369 -26 -10 c-14 -6 -54 -10 -90 -10 -58 0 -64 -2 -64 -20 0 -20 5 -20 232 -18 206 3 233 5 236 19 3 14 -9 17 -73 21 -53 2 -79 8 -85 18 -6 9 -10 168 -10 371 0 302 2 358 15 369 10 9 36 10 87 5 149 -14 169 -28 194 -133 23 -96 21 -102 -31 -102 -38 0 -45 -3 -45 -20 0 -17 7 -20 49 -20 29 0 53 -6 60 -14 8 -9 11 -118 9 -382 l-3 -369 -57 -3 c-50 -3 -58 -6 -58 -22 0 -19 10 -20 359 -20 l359 0 16 113 c9 61 19 124 22 140 l6 27 104 0 c95 0 104 2 104 19 0 12 -9 21 -25 25 -14 4 -32 17 -41 31 -15 23 -14 27 18 78 68 108 153 236 158 236 3 0 51 -71 107 -159 101 -159 102 -160 80 -175 -12 -8 -29 -15 -39 -15 -11 0 -18 -8 -18 -20 0 -19 7 -20 175 -20 168 0 175 1 175 20 0 16 -7 20 -35 20 -19 0 -45 5 -59 11 -15 7 -83 95 -171 221 l-146 209 93 136 c109 159 138 185 214 191 45 4 54 8 54 23 0 18 -10 19 -150 19 -140 0 -150 -1 -150 -19 0 -13 9 -20 30 -25 19 -3 34 -15 42 -31 10 -23 5 -35 -66 -140 -43 -63 -81 -115 -85 -115 -7 0 -147 198 -174 247 -10 16 20 43 49 43 17 0 24 5 24 20 0 19 -7 20 -175 20 -168 0 -175 -1 -175 -20z"/></g></svg>',
    }
  }


  save(blockContent) {
    let data = {
      data: this.editor.getValue(),
      theme: this.wrapper.getElementsByTagName('select')[0].value,
      lang: this.wrapper.getElementsByTagName('select')[1].value
    }
    return data
  }

  static get sanitize() {
    return {
      data: true, // Allow HTML tags
    };
  }


  create() {
    this.themes = [
      // 'clouds',
      // 'cobalt',
      'eclipse',
      // 'nord_dark',
      // 'dawn',
      'solarized_light',
      // 'chaos', //+
      // 'monokai', //+
      'github', //+
      // 'merbivore_soft',
      // 'katzenmilch',
      // 'chrome',
      'tomorrow', //+
      // 'clouds_midnight',
      // 'tomorrow_night_blue',
      // 'gob',
      // 'gruvbox',
      'xcode', //+
      // 'textmate', //+
      'iplastic',
      // 'crimson_editor',
      // 'tomorrow_night_bright', //+
      // 'mono_industrial',
      // 'merbivore',//+
      'sqlserver',
      // 'idle_fingers',
      // 'ambiance',
      'kuroir',
      'pastel_on_dark',
      // 'kr_theme',
      // 'twilight',
      // 'solarized_dark',
      // 'tomorrow_night', //+
      // 'terminal', //+
      // 'dracula',
      // 'vibrant_ink',
      // 'tomorrow_night_eighties',
      'dreamweaver'
    ].sort()

    this.langs = [
      // 'gitignore',
      // 'd',
      // 'haml',
      // 'jack',
      'pascal',
      // 'red',
      // 'powershell',
      'typescript',
      // 'turtle',
      'html',
      // 'eiffel',
      // 'stylus',
      // 'csp',
      // 'io',
      // 'csharp',
      'perl',
      // 'elixir',
      // 'vhdl',
      'xml',
      'sh',
      // 'slim',
      // 'cobol',
      // 'graphqlschema',
      // 'puppet',
      // 'apache_conf',
      // 'livescript',
      // 'mixal',
      // 'verilog',
      'golang',
      // 'ocaml',
      'kotlin',
      // 'zeek',
      // 'perl6',
      // 'jsx',
      'dart',
      'python',
      'ruby',
      'sass',
      // 'c9search',
      // 'actionscript',
      // 'coffee',
      // 'coldfusion',
      // 'cirru',
      'objectivec',
      // 'apex',
      // 'tsx',
      // 'rhtml',
      'tex',
      // 'ejs',
      // 'jsoniq',
      // 'crystal',
      // 'mushcode',
      // 'nix',
      'java',
      // 'r',
      // 'haskell_cabal',
      'c_cpp',
      // 'glsl',
      // 'mask',
      // 'gherkin',
      // 'plain_text',
      'assembly_x86',
      // 'scheme',
      // 'php_laravel_blade',
      // 'lisp',
      // 'wollok',
      // 'handlebars',
      // 'groovy',
      // 'ada',
      // 'properties',
      // 'prisma',
      // 'curly',
      // 'redshift',
      // 'pgsql',
      // 'jade',
      // 'lua',
      // 'batchfile',
      // 'lucene',
      // 'ftl',
      // 'abc',
      // 'nginx',
      // 'nsis',
      // 'sparql',
      // 'jssm',
      // 'abap',
      // 'rdoc',
      // 'nunjucks',
      // 'django',
      'haskell',
      'fortran',
      // 'rst',
      // 'logtalk',
      'javascript',
      // 'velocity',
      // 'textile',
      // 'csound_document',
      // 'less',
      // 'forth',
      // 'drools',
      // 'autohotkey',
      // 'elm',
      // 'jsp',
      // 'visualforce',
      // 'clojure',
      'rust',
      // 'protobuf',
      // 'terraform',
      // 'scad',
      // 'sqlserver',
      // 'fsl',
      'erlang',
      // 'qml',
      // 'toml',
      // 'dot',
      // 'xquery',
      // 'sjs',
      'json',
      'swift',
      // 'haxe',
      // 'asciidoc',
      'php',
      // 'mediawiki',
      'sql',
      // 'ini',
      // 'prolog',
      // 'luapage',
      // 'asl',
      // 'liquid',
      // 'twig',
      'latex',
      // 'julia',
      // 'csound_score',
      // 'alda',
      // 'maze',
      // 'snippets',
      // 'hjson',
      // 'makefile',
      // 'vala',
      // 'razor',
      // 'soy_template',
      // 'json5',
      // 'praat',
      // 'pig',
      // 'yaml',
      // 'aql',
      // 'mel',
      // 'applescript',
      // 'html_ruby',
      // 'space',
      // 'markdown',
      // 'tcl',
      // 'gcode',
      // 'html_elixir',
      // 'svg',
      'matlab',
      'scala',
      // 'csound_orchestra',
      // 'diff',
      // 'vbscript',
      // 'fsharp',
      // 'lsl',
      // 'nim',
      // 'mysql',
      'scss',
      // 'gobstones',
      'css',
      // 'smarty',
      // 'logiql',
      'dockerfile',
      // 'text',
      // 'edifact',
    ].sort()
  }

}

