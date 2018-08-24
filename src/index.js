import './css/reset.css';
import './css/sanitize.css';
import './css/style.css';
import * as $ from "jquery";
import Controller from './components/Controller';
import ListCollection from './components/ListCollection.js';
import Text from './components/Text.js';

$(function () {
  const listCollection = new ListCollection();
  const text = new Text({handleChangeText: listCollection.handleChangeText});
  $('#list').append(listCollection.render());
  $('#text').append(text.render());
  listCollection.setTextComponent(text);
  text.setCurrentMemo(listCollection.getCurrentMemo());
  listCollection.load();
  const controller = new Controller({listCollection: listCollection, text: text});
  $('#controller').append(controller.render());

});
