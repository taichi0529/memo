import './css/reset.css';
import './css/sanitize.css';
import './css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Controller from './components/Controller';
import ListCollection from './components/ListCollection';
import Text from './components/Text';

const listCollection = ReactDOM.render(<ListCollection/>, document.getElementById('list'));
const text = ReactDOM.render(<Text handleChangeText={listCollection.handleChangeText}
                                   listCollection=""/>, document.getElementById('text'));
listCollection.setTextComponent(text);
text.setCurrentMemo(listCollection.getCurrentMemo());
listCollection.load();

// setTextComponent見たいしても、下記みたいにpropsで渡しても同じ事はできる。
ReactDOM.render(<Controller
  listCollection={listCollection} text={text} />, document.getElementById('controller'));
