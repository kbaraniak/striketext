class strikeText {
  _ra(char, oldText, newText) {
    return char.replaceAll(oldText, newText);
  }
  strike(text) {
    let result;

    // Unicode Letters
    result = this._ra(text, "a", "̶a̶");
    result = this._ra(result, "b", "̶b̶");
    result = this._ra(result, "c", "̶c̶");
    result = this._ra(result, "d", "̶d̶");
    result = this._ra(result, "e", "̶e̶");
    result = this._ra(result, "f", "̶f̶");
    result = this._ra(result, "g", "̶g̶");
    result = this._ra(result, "h", "̶h̶");
    result = this._ra(result, "i", "̶i̶");
    result = this._ra(result, "j", "̶j̶");
    result = this._ra(result, "k", "̶k̶");
    result = this._ra(result, "l", "̶l̶");
    result = this._ra(result, "m", "̶m̶");
    result = this._ra(result, "n", "̶n̶");
    result = this._ra(result, "o", "̶o̶");
    result = this._ra(result, "p", "̶p̶");
    result = this._ra(result, "q", "̶q̶");
    result = this._ra(result, "r", "̶r̶");
    result = this._ra(result, "s", "̶s̶");
    result = this._ra(result, "t", "̶t̶");
    result = this._ra(result, "u", "̶u̶");
    result = this._ra(result, "w", "̶w̶");
    result = this._ra(result, "v", "̶v̶");
    result = this._ra(result, "x", "̶x̶");
    result = this._ra(result, "y", "̶y̶");
    result = this._ra(result, "z", "̶z̶");

    // Polish Letters
    result = this._ra(result, "ą", "̶ą̶");
    result = this._ra(result, "ć", "̶ć̶");
    result = this._ra(result, "ę", "̶ę̶");
    result = this._ra(result, "ł", "̶ł̶");
    result = this._ra(result, "ń", "̶ń̶");
    result = this._ra(result, "ó", "̶ó̶");
    result = this._ra(result, "ś", "̶ś̶");
    result = this._ra(result, "ź", "̶ź̶");
    result = this._ra(result, "ż", "̶ż̶");

    return result;
  }
}

module.exports = strikeText;
