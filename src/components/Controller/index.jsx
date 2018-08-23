import React, {Component} from 'react';

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
    return (
      <div>
        <button className="controller__button controller__button_delete"
                onClick={this.handleClickDeleteButton} />
        <button className="controller__button controller__button_new" onClick={this.handleClickNewButton} />
        <input type="text" className="controller__search" placeholder="検索" onInput={this.handleSearch} />
      </div>
    );
  }
}

