import './css/reset.css';
import './css/sanitize.css';
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from "jquery";
import ListCollection from './components/ListCollection';
import Text from './components/Text';

$(function () {
//ここにJSを記述
    "use strict";


    let listCollection = ReactDOM.render(<ListCollection/>, document.getElementById('list'));
    let text = ReactDOM.render(<Text handleChangeText={listCollection.handleChangeText}
                                     listCollection=""/>, document.getElementById('text'));
    listCollection.setTextComponent(text);
    text.setCurrentMemo(listCollection.getCurrentMemo());
    listCollection.load();


    $(".controller__button_new").on("click", (e) => {
        e.preventDefault();
        listCollection.createNewMemo();
        let currentMemo = listCollection.getCurrentMemo();
        text.setCurrentMemo(currentMemo);
    });

    $(".controller__button_delete").on("click", (e) => {
        e.preventDefault();
        listCollection.deleteCurrentMemo();
    });

    $('.controller__search').keypress((e) => {
        if (e.which === 13) {
            // ここに処理を記述
            alert('時間切れで検索実装できませんでしたー♫');
            return false;
        }
    });

});
