import * as $ from "jquery";
import Component from './Abstract.js';
import Memo from '../classes/Memo';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMemo: new Memo()
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.setCurrentMemo = this.setCurrentMemo.bind(this);
  }

  setCurrentMemo(memo) {
    this.setState({currentMemo: memo});
  }

  handleChangeText(e) {
    this.props.handleChangeText();
    const currentMemo = this.state.currentMemo;
    currentMemo.text = e.target.value;
    currentMemo.updateLastModified();
    // this.setState({currentMemo: currentMemo});
  }

  render() {
    if (this.$dom === null) {
      this.$dom = $('<div class="text__wrap"></div>');
    }
    this.$dom.empty();
    const $time = $(`<time class="text__time"></time>`);
    $time.text(this.state.currentMemo && this.state.currentMemo.lastModifiedForText);
    this.$dom.append($time);
    const $textarea = $(`<textarea cols="30" rows="10" class="text__textarea">${(this.state.currentMemo && this.state.currentMemo.text) || ""}</textarea>`);
    $textarea.on('input', (e) => {
      this.handleChangeText(e);
      $time.text(this.state.currentMemo && this.state.currentMemo.lastModifiedForText);
      this.props.handleChangeText();
    });
    this.$dom.append($textarea);
    return this.$dom;
  }
}
