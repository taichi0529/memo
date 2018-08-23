import React, {Component} from 'react';
import List from './List';
import Memo from '../classes/Memo';

//TODO リファクタリングする場合はcurrentMemoの実装をし直すこと
//TODO setCurrentMemoでsetStateしているのが悪！
class ListCollection extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      currentMemo: null
    };
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClickList = this.handleClickList.bind(this);
    this.createNewMemo = this.createNewMemo.bind(this);
    this.deleteCurrentMemo = this.deleteCurrentMemo.bind(this);
    this.search = this.search.bind(this);

    //表示用のメモデータ
    this.dataForList = [];

    this.searchWord = "";

    this.filteredCurrentMemo = null;
    this.stashedCurrentMemo = null;
    this.textComponent = null;


  }


  createNewMemo() {
    //空の新規メモがあった場合は実行しない。
    if (this.state.data.length > 0 && this.state.data[0].text === "") {
      return;
    }

    const memo = new Memo();
    this.state.data.unshift(memo);
    this.setCurrentMemo(memo);
  }

  getCurrentMemo() {
    return this.state.currentMemo;
  }

  setCurrentMemo(memo) {
    this.textComponent.setCurrentMemo(memo);
    this.setState({currentMemo: memo});
  }

  save() {
    localStorage.setItem('memoData', JSON.stringify(this.state.data));
    let currentMemoId = null;
    if (this.state.currentMemo) {
      currentMemoId = this.state.currentMemo.id;
    }
    localStorage.setItem('currentMemoId', currentMemoId);
  }

  filter() {
    this.filteredCurrentMemo = null;
    if (this.searchWord === "") {
      return this.state.data;
    }
    const filteredData = [];
    for (const memo of this.state.data) {
      if (memo.text.indexOf(this.searchWord) !== -1) {
        filteredData.push(memo);
      }
    }

    //フィルタしたら一番上にcurrentMemoを持って行く。フィルタ数が0だったらnull
    //TODO フィルタリングを辞めたら元々アクティブだったものをアクティブに
    if (filteredData.length > 0) {
      this.filteredCurrentMemo = filteredData[0];
    }

    return filteredData;
  }

  search(word = "") {
    this.searchWord = word;
    this.setState(this.state, () => {
      this.setCurrentMemo(this.filteredCurrentMemo);
    });
  }

  load() {
    const memoData = JSON.parse(localStorage.getItem('memoData'));
    if (memoData === null) {
      return;
    }

    //localStorageは文字列しか保存出来ないので数字を保存すると文字になってしまう。
    const currentMemoId = parseInt(localStorage.getItem('currentMemoId'), 10);

    const tmp = [];
    for (const v of memoData) {
      const memo = new Memo(v.data);
      tmp.push(memo);
      if (currentMemoId && v.data.id === currentMemoId) {
        this.setCurrentMemo(memo);
      }
    }

    this.setState({data: tmp});

  }

  handleChangeText() {
    this.save();
    this.setState(this.state);
  }


  handleClickList(memo) {
    //一番初めのデータをクリックしていなくて、空ならデータを削除する。
    if (this.state.data.length > 0 && this.state.data[0].text === "") {
      if (memo.id !== this.state.data[0].id) {
        this.state.data.shift();
      }
    }
    this.setCurrentMemo(memo);
    this.save();
  }


  setTextComponent(textComponent) {
    this.textComponent = textComponent;
  }

  deleteCurrentMemo() {
    if (this.state.currentMemo === null) {
      return;
    }
    const tmp = [];
    for (const v of this.state.data) {
      if (v.id !== this.state.currentMemo.id) {
        tmp.push(v);
      }
    }
    if (tmp.length > 0) {
      this.setCurrentMemo(tmp[0]);
    } else {
      this.setCurrentMemo(null);
    }
    this.setState({data: tmp});
    this.save();
  }


  render() {
    return (
      <ul className="list__ui">
        {
          this.filter().map((memo) => (
            <List key={memo.id} memo={memo} handleClickList={this.handleClickList}
                  active={this.state.currentMemo && this.state.currentMemo.id === memo.id}/>
          ))
        }
      </ul>
    );
  }
}

export default ListCollection;