import React, {Component} from 'react';

/**
 * 使っていないけどこんな風にComponentとして切り出すのもあり。
 * メリットデメリットを考えてバランスよく。
 */
export default class extends Component {

  constructor(props) {
    super(props);
    this.handleClickList = this.handleClickList.bind(this);
  }

  handleClickList() {
  }

  render() {
    return (
      <button className="controller__button controller__button_new" onClick={this.handleClickList}/>
    );

  }
}

