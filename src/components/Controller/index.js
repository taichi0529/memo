import * as $ from "jquery";
import Component from '../Abstract.js';

export default class extends Component {

  constructor(props) {
    super(props);
    this.handleClickNewButton = this.handleClickNewButton.bind(this);
    this.handleClickDeleteButton = this.handleClickDeleteButton.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClickNewButton() {
    this.props.listCollection.createNewMemo();
    // const currentMemo = this.props.listCollection.getCurrentMemo();
    // this.props.text.setCurrentMemo(currentMemo);
  }

  handleClickDeleteButton() {
    this.props.listCollection.deleteCurrentMemo();
  }

  handleSearch(e) {
    this.props.listCollection.search(e.currentTarget.value);
  }

  render() {
    if (this.$dom === null) {
      this.$dom = $('<div></div>');
    }
    this.$dom.empty();
    const $deleteButton = $(`<button class="controller__button controller__button_delete"/>`);
    $deleteButton.on('click', this.handleClickDeleteButton);
    this.$dom.append($deleteButton);
    const $newButton = $(`<button class="controller__button controller__button_new"/>`);
    $newButton.on('click', this.handleClickNewButton);
    this.$dom.append($newButton);
    const $search = $(`<input type="text" class="controller__search" placeholder="検索" />`);
    $search.on('input', this.handleSearch);
    this.$dom.append($search);

    return this.$dom;
  }
}