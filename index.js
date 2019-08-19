#!/usr/bin/env node

const io = require('socket.io-client');
const config = require('./config');
const events = require('events');
const store = {};

const subscribe = () => {
  store.socket.emit('action', {
    type: 'subscribe',
    filterId: config.io.filterId
  });
};

const initSocket = () => {
  const uri = config.io.server;
  store.socket = io(uri);
  store.socket.on('connect', subscribe);
  store.socket.on('articles', handleNewArticles);
};

const handleNewArticles = ({ articles = [] }) => {
  if (articles.length > 0) {
    store.eventEmitter.emit('articles', articles);
  }
};

module.exports.close = () => {
  if (store.socket.close) {
    store.socket.close();
  }
};

module.exports = () => {
  initSocket();
  store.eventEmitter = new events.EventEmitter();
  return store.eventEmitter;
};
