import React, {Component} from 'react';

export default class extends Component {

  constructor(props) {
    super(props);
    this.handleClickList = this.handleClickList.bind(this);
  }

  handleClickList() {
    this.props.handleClickList(this.props.memo);
  }

  render() {
    return (
      <div>aaaaaaaaaaaa</div>
    );
  }
}

