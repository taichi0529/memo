import React, {Component} from 'react';
import List from './List';
import Memo from '../classes/Memo';
class ListCollection extends Component {
    constructor(){
        super();
        this.state =  {
            data: [],
            currentMemo: null
        };
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleClickList = this.handleClickList.bind(this);
    }
    createNewMemo() {
        //空の新規メモがあった場合は実行しない。
        if(this.state.data.length > 0 && this.state.data[0].text === ""){
            return;
        }

        let memo = new Memo();
        this.state.data.unshift(memo);
        this.setCurrentMemo(memo);
    }

    getCurrentMemo(){
        return this.state.currentMemo;
    }

    setCurrentMemo(memo){
        this.state.currentMemo = memo;
        this.textComponent.setCurrentMemo(memo);
        this.setState(this.state);
    }

    save() {
        localStorage.setItem('memoData', JSON.stringify(this.state.data));
        let currentMemoId = null;
        if(this.state.currentMemo){
            currentMemoId = this.state.currentMemo.id;
        }
        localStorage.setItem('currentMemoId', currentMemoId);
    }

    search(word){

    }


    load() {
        let memoData = JSON.parse(localStorage.getItem('memoData'));
        if(memoData === null){
            return;
        }
        let currentMemoId = parseInt(localStorage.getItem('currentMemoId'), 10);
        memoData.map((v) => {
            let memo = new Memo(v.data);
            this.state.data.push(memo);
            if(currentMemoId !== null && v.data.id === currentMemoId){
                this.setCurrentMemo(memo);
            }
        });
        this.setState(this.state);

    }

    handleChangeText(){
        this.save();
        this.setState(this.state);
    }


    handleClickList (memo) {
        //一番初めのデータをクリックしていなくて、空ならデータを削除する。
        if(this.state.data.length > 0 && this.state.data[0].text === ""){
            if(memo.id !== this.state.data[0].id) {
                this.state.data.shift();
            }
        }
        this.setCurrentMemo(memo);
        this.save();
    }


    setTextComponent(textComponent){
        this.textComponent = textComponent;
    }

    deleteCurrentMemo(){
        if(this.state.currentMemo === null){
            return;
        }
        let tmp = [];
        this.state.data.map((d) => {
            if(d.id !== this.state.currentMemo.id){
                tmp.push(d);
            }
        });
        this.state.data = tmp;
        if(this.state.data.length > 0){
            this.setCurrentMemo(this.state.data[0]);
        } else {
            this.setCurrentMemo(null);
        }
        this.save();
        this.setState(this.state);
    }


    render() {
        return (
            <ul className="list__ui">
                {
                    this.state.data.map((memo) => (
                        <List key={memo.id} memo={memo} handleClickList={this.handleClickList} active={this.state.currentMemo && this.state.currentMemo.id === memo.id}/>
                    ))
                }
            </ul>
        );
    }
}

export default ListCollection;