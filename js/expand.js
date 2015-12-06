self.onmessage = function (event) {
  var buf = new Uint8Array(event.data);
  postMessage(buf, [buf.buffer]);
  buf = null;
  self.close();
};
