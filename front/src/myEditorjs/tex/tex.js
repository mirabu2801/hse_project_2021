import katex from 'katex';

export class Tex {
  constructor({data, api}) {
    this.api = api
    this.data = {
      data: data.data || '',
      middle: data.middle
    };
    if (this.data.middle === false) {
      this.middle = false;
    } else {
      this.middle = true;
    }
    this.wrapper = undefined;
    this.btnLeft = undefined;
    this.btnRight = undefined;
    this.settings = [
      {
        name: 'Left',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M7 7h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zm0 4h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm0 4h5a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" fill="currentColor" fill-rule="evenodd"></path></svg>'
        // icon: `<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8 10.592v2.043h2.35v2.138H15.8v2.232h-2.25v-2.232h-2.4v-2.138h2.4v-2.28h2.25v.237h1.15-1.15zM1.9 8.455v-3.42c0-1.154.985-2.09 2.2-2.09h4.2v2.137H4.15v3.373H1.9zm0 2.137h2.25v3.325H8.3v2.138H4.1c-1.215 0-2.2-.936-2.2-2.09v-3.373zm15.05-2.137H14.7V5.082h-4.15V2.945h4.2c1.215 0 2.2.936 2.2 2.09v3.42z"/></svg>`
      },
      {
        name: 'Middle',
        icon: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M7 11h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm2.5 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2z" fill="currentColor" fill-rule="evenodd"></path></svg>'
        // icon: `<svg width="17" height="10" viewBox="0 0 17 10" xmlns="http://www.w3.org/2000/svg"><path d="M13.568 5.925H4.056l1.703 1.703a1.125 1.125 0 0 1-1.59 1.591L.962 6.014A1.069 1.069 0 0 1 .588 4.26L4.38.469a1.069 1.069 0 0 1 1.512 1.511L4.084 3.787h9.606l-1.85-1.85a1.069 1.069 0 1 1 1.512-1.51l3.792 3.791a1.069 1.069 0 0 1-.475 1.788L13.514 9.16a1.125 1.125 0 0 1-1.59-1.591l1.644-1.644z"/></svg>`
      },
      {
        name: 'Edit',
        icon: `<svg width="18" height="18" viewBox="2 2 20 20" focusable="false" role="presentation"><path d="M4.02 19.23a1 1 0 0 0 1.18 1.18l3.81-.78-4.21-4.21-.78 3.81zm5.921-2.62l-2.12-2.12L16.306 6h.002l2.121 2.121-8.489 8.49zm9.903-9.903l-2.12-2.122A1.997 1.997 0 0 0 16.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 0 0 0-2.828z" fill="currentColor" fill-rule="evenodd"></path></svg>`
      }
    ];
  }

  setToNext() {
    this.api.caret.setToNextBlock('start', -1)
  }

  setToEnd() {
    this.api.caret.focus(true);
  }

  setToPrev() {
    this.api.caret.setToPreviousBlock()
  }

  createBlock() {
    this.api.blocks.insertNewBlock();
  }


  render() {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('tex');

    var input = document.createElement('textarea');
    // input.classList.add(this.api.styles.input)
    input.classList.add('cdx-quote__text')
    input.contentEditable = true
    input.innerHTML = ''
    input.placeholder = 'Enter TEX here...'
    input.setAttribute('data-placeholder', 'Enter TEX here...')


    input.addEventListener('keydown', (event) => {
      if (event.shiftKey && event.code === 'Enter') {
        return
      }
      if (event.code === "Enter") {
        this._createTex(input.value, true);
      }
    });

    input.addEventListener('input', (event) => {
      this._createTex(input.value)
    });


    var p = document.createElement('p')
    this.elem = p;
    // Если получаем готовый тех
    this.elem.style.cursor = 'pointer';
    this.elem.addEventListener('click', (event) => {
      let arr = this.wrapper.getElementsByTagName('textarea')
      if (arr.length) {
        this._createTex(arr[0].value, true)
        return
      }
      var hiddenInput = document.createElement('textarea');
      hiddenInput.innerHTML = this.data.tex
      hiddenInput.addEventListener('keydown', (event) => {
        event.stopPropagation();
        if (event.shiftKey && event.code === 'Enter') {
          return
        }
        if (event.code === "Enter") {
          event.stopPropagation();
          this._createTex(hiddenInput.value, true);
        }
      });

      hiddenInput.addEventListener('input', (event) => {
        this._createTex(hiddenInput.value)
      });
      this.wrapper.appendChild(hiddenInput)
    })

    this.wrapper.appendChild(this.elem);
    this.wrapper.appendChild(input);
    if (this.data.data) {
      this._createTex(this.data.data, true);
    }
    return this.wrapper;
  }

  _createTex(texText, final = false,) {
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
      title: 'TEX',

      icon: '<svg class="tex-icon" viewBox="0 0 18 18"> <path d="M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z"></path> <rect class="ql-fill" height="1.6" rx="0.8" ry="0.8" width="5" x="5.15" y="6.2"></rect> <path class="ql-fill" d="M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z"></path> </svg>'
      // icon: '<svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"><path d="M1370 1670 c0 -17 7 -20 46 -20 25 0 53 -4 63 -9 9 -5 72 -93 140 -194 l123 -185 -111 -165 c-121 -181 -147 -204 -230 -214 -41 -5 -51 -9 -51 -24 0 -15 8 -19 36 -19 l36 0 -7 -37 c-10 -54 -42 -124 -71 -154 -39 -41 -91 -50 -259 -47 l-150 3 -3 189 -2 188 95 -4 c113 -5 132 -17 143 -93 4 -27 13 -50 20 -53 9 -3 12 34 12 162 0 134 -3 166 -14 166 -9 0 -15 -17 -18 -51 -8 -75 -21 -83 -139 -87 l-99 -4 2 174 3 173 160 0 c142 0 164 -2 194 -20 49 -29 69 -61 88 -142 10 -40 22 -73 28 -73 11 0 8 34 -20 238 l-6 42 -284 0 -283 0 -7 88 c-3 48 -8 108 -11 135 l-6 47 -383 0 -383 0 -6 -87 c-4 -49 -9 -112 -12 -140 -4 -41 -2 -53 8 -53 10 0 18 24 26 73 22 130 55 159 194 172 131 11 118 52 118 -376 l0 -369 -26 -10 c-14 -6 -54 -10 -90 -10 -58 0 -64 -2 -64 -20 0 -20 5 -20 232 -18 206 3 233 5 236 19 3 14 -9 17 -73 21 -53 2 -79 8 -85 18 -6 9 -10 168 -10 371 0 302 2 358 15 369 10 9 36 10 87 5 149 -14 169 -28 194 -133 23 -96 21 -102 -31 -102 -38 0 -45 -3 -45 -20 0 -17 7 -20 49 -20 29 0 53 -6 60 -14 8 -9 11 -118 9 -382 l-3 -369 -57 -3 c-50 -3 -58 -6 -58 -22 0 -19 10 -20 359 -20 l359 0 16 113 c9 61 19 124 22 140 l6 27 104 0 c95 0 104 2 104 19 0 12 -9 21 -25 25 -14 4 -32 17 -41 31 -15 23 -14 27 18 78 68 108 153 236 158 236 3 0 51 -71 107 -159 101 -159 102 -160 80 -175 -12 -8 -29 -15 -39 -15 -11 0 -18 -8 -18 -20 0 -19 7 -20 175 -20 168 0 175 1 175 20 0 16 -7 20 -35 20 -19 0 -45 5 -59 11 -15 7 -83 95 -171 221 l-146 209 93 136 c109 159 138 185 214 191 45 4 54 8 54 23 0 18 -10 19 -150 19 -140 0 -150 -1 -150 -19 0 -13 9 -20 30 -25 19 -3 34 -15 42 -31 10 -23 5 -35 -66 -140 -43 -63 -81 -115 -85 -115 -7 0 -147 198 -174 247 -10 16 20 43 49 43 17 0 24 5 24 20 0 19 -7 20 -175 20 -168 0 -175 -1 -175 -20z"/></g></svg>',
    }
  }


  save(blockContent) {
    let data = {
      data: this.data.tex,
      middle: this.middle
    }
    console.log('save', this.data.tex)
    return data
  }

  _toggleTune(tune) {
    //this.wrapper.getAttribute()
    if (tune == 'Middle') {
      if (!this.middle) {
        this.btnLeft.classList.toggle('cdx-settings-button--active');
        this.btnRight.classList.toggle('cdx-settings-button--active');
      }
      this.middle = true;
      this._createTex(this.data.tex)
    }
    if (tune == 'Left') {
      if (this.middle) {
        this.btnLeft.classList.toggle('cdx-settings-button--active');
        this.btnRight.classList.toggle('cdx-settings-button--active');
      }
      this.middle = false;
      this._createTex(this.data.tex)
    }
    if (tune == 'Edit') {

    }
  }

  static get sanitize() {
    return {
      data: true, // Allow HTML tags
    };
  }

  renderSettings() {
    const wrapper = document.createElement('div');

    this.settings.forEach(tune => {
      let button = document.createElement('div');

      button.classList.add('cdx-settings-button');
      button.innerHTML = tune.icon;
      wrapper.appendChild(button);

      if (tune.name == 'Edit') {
        button.addEventListener('click', (event) => {
          let arr = this.wrapper.getElementsByTagName('textarea')
          if (arr.length) {
            this._createTex(arr[0].value, true)
            return
          }
          var hiddenInput = document.createElement('textarea');
          hiddenInput.innerHTML = this.data.tex
          hiddenInput.addEventListener('keydown', (event) => {
            event.stopPropagation();
            if (event.shiftKey && event.code === 'Enter') {
              return
            }
            if (event.code === "Enter") {
              event.stopPropagation();
              this._createTex(hiddenInput.value, true);
            }
          });

          hiddenInput.addEventListener('input', (event) => {
            this._createTex(hiddenInput.value)
          });
          this.wrapper.appendChild(hiddenInput)
        })
      } else {
        if (tune.name === 'Left') {
          if (!this.middle) {
            button.classList.toggle('cdx-settings-button--active');
          }
          this.btnLeft = button
        }
        if (tune.name === 'Middle') {
          if (this.middle) {
            button.classList.toggle('cdx-settings-button--active');
          }
          this.btnRight = button
        }
        button.addEventListener('click', () => {
          this._toggleTune(tune.name)
          // button.classList.toggle('cdx-settings-button--active');
        })
      }
    });

    return wrapper;
  }
}

