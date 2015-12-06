(function() {
  if (typeof performance === 'undefined') {
    performance = {};
    Date.now = (Date.now || function() {
      return new Date().getTime();
    });
    var nowOffset = Date.now();
    performance.now = function now() {
      return Date.now() - nowOffset;
    };
  }
})();

self.onmessage = function(event) {
  var monteData = {};
  for (var i = 0; i < 10; i++) {
    monteData[i + 1] = monte(event.data);
  }
  postMessage(monteData);
  self.close();
};

function monte(imax) {
  var monteStart = performance.now();
  var n = 0;
  for (var i = 0; i < imax; i++) {
    var x = Math.random();
    var y = Math.random();
    if (Math.pow(x, 2) + Math.pow(y, 2) < 1) {
      n++;
    }
  }
  var monteEnd = performance.now();
  return monteEnd - monteStart;
}
