import './css/reset.css';
import './css/sanitize.css';
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import * as $ from "jquery";
import ListCollection from './components/ListCollection';
import Text from './components/Text';

$(function () {
//     "use strict";
    let listCollection = ReactDOM.render(<ListCollection/>, document.getElementById('list'));
    let text = ReactDOM.render(<Text handleChangeText={listCollection.handleChangeText}
                                     listCollection=""/>, document.getElementById('text'));
    listCollection.setTextComponent(text);
    text.setCurrentMemo(listCollection.getCurrentMemo());
    listCollection.load();

    //コントローラー部分もReactにしたかったけれど時間切れ・・・・
    $(".controller__button_new").on("click", (e) => {
        e.preventDefault();
        listCollection.createNewMemo();
        let currentMemo = listCollection.getCurrentMemo();
        text.setCurrentMemo(currentMemo);
        $(".text__textarea").focus();
    });

    $(".controller__button_delete").on("click", (e) => {
        e.preventDefault();
        listCollection.deleteCurrentMemo();
    });

    $('.controller__search').on('change', (e) => {
            listCollection.search(e.currentTarget.value);
    });
    $('.controller__search').on('keyup', (e) => {
        listCollection.search(e.currentTarget.value);
    });

});
