import * as $ from "jquery";
import Component from "./Abstract";

export default class extends Component {

  constructor(props) {
    super(props);
    this.handleClickList = this.handleClickList.bind(this);
  }

  handleClickList() {
    this.props.handleClickList(this.props.memo);
  }

  render() {
    let activeClass = '';
    if (this.props.active) {
      activeClass = 'list__li_active';
    }
    this.$dom = $(`<li class="list__li ${activeClass}" onClick={this.handleClickList}>
          <div class="list__li__div">
            <p class="list__li__title">${this.props.memo.title}</p>
            <p class="list__li__head">
              <time class="list__li__time">${this.props.memo.lastModifiedForList}</time>
              ${this.props.memo.head}
            </p>
          </div>
        </li>`);
    this.$dom.on('click', this.handleClickList);
    return this.$dom;

  }
}

