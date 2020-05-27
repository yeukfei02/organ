function unimplemented () {
  throw new Error('Node.js readline module is not supported by jspm core' + (typeof Deno !== 'undefined' ? '. Deno support here is tracking in https://github.com/jspm/jspm-core/issues/4, +1\'s are appreciated!' : ' in the browser'));
}

export default {
  Interface: unimplemented,
  clearLine: unimplemented,
  clearScreenDown: unimplemented,
  createInterface: unimplemented,
  cursorTo: unimplemented,
  emitKeypressEvents: unimplemented,
  moveCursor: unimplemented
};

export {
  unimplemented as Interface,
  unimplemented as clearLine,
  unimplemented as clearScreenDown,
  unimplemented as createInterface,
  unimplemented as cursorTo,
  unimplemented as emitKeypressEvents,
  unimplemented as moveCursor
}
