$(function() {
  var crypto = window.crypto || window.msCrypto;
  crypto.subtle = crypto.subtle || crypto.webkitSubtle;
  var aesStart, aesEnd, hugeText;
  var aesData = {};
  var aesAlgorithmKeyGen = {
    name: 'AES-CBC',
    length: 128
  };
  var aesAlgorithmEncrypt = {
    name: 'AES-CBC',
    iv: crypto.getRandomValues(new Uint8Array(16))
  };

  function AESTest() {
    if (navigator.userAgent.indexOf('Trident') !== -1) { // IE
      cryptoOp(1);
    } else { // other browsers
      aesBench();
    }
  }

  function cryptoOp(count) {
    aesStart = performance.now();
    crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']).oncomplete = function(e1) {
      crypto.subtle.encrypt(aesAlgorithmEncrypt, e1.target.result, hugeText).oncomplete = function(e) {
        crypto.subtle.decrypt(aesAlgorithmEncrypt, e1.target.result, e.target.result).oncomplete = function() {
          aesEnd = performance.now();
          aesData[count.toString()] = aesEnd - aesStart;
          if (count === 10) {
            data.aes = aesData;
            send()
              .then(function() {
                disp('<h3>end: ' + new Date() + '</h3>');
                location.reload();
              });
          } else {
            setTimeout(function() {
              cryptoOp(++count);
            }, 1000);
          }
        };
      };
    };
  }

  function aesBench() {
    var key;
    aesStart = performance.now();
    crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['delete me'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['1'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['2'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['3'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['4'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['5'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['6'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['7'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['8'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['9'] = aesEnd - aesStart;
    }).then(function() {
      aesStart = performance.now();
      return crypto.subtle.generateKey(aesAlgorithmKeyGen, false, ['encrypt', 'decrypt']);
    }).then(function(cryptoKey) {
      key = cryptoKey;
      return crypto.subtle.encrypt(aesAlgorithmEncrypt, key, hugeText);
    }).then(function(ct) {
      return crypto.subtle.decrypt(aesAlgorithmEncrypt, key, ct);
    }).then(function() {
      aesEnd = performance.now();
    }).then(function() {
      aesData['10'] = aesEnd - aesStart;
      data.aes = aesData;
      send()
        .then(function() {
          disp('<h3>end: ' + new Date() + '</h3>');
          location.reload();
        });
    });
  }

  function send() {
    console.log(data);
    return $.ajax({
      'type': 'POST',
      'url': 'aes.php',
      'data': {
        name: 'yasuda',
        aesni: true,
        scores: JSON.stringify(data)
      }
    });
  }

  function disp(dom) {
    $('#result').append(dom);
  }

  var data = {};
  var execMontecarlo = new Worker('js/runMontecarlo.js');
  var execExpand = new Worker('js/expand.js');
  execMontecarlo.onmessage = function(e) {
    data.montecarlo = e.data;
    if (navigator.userAgent.indexOf('Trident') !== -1) { // IE
      execExpand.postMessage(64 * 1000 * 10);
    } else { // other browsers
      execExpand.postMessage(64 * 1000 * 1000);
    }
  };
  execExpand.onmessage = function(e) {
    hugeText = e.data;
    AESTest();
  };
  setTimeout(function() {
    if (navigator.userAgent.indexOf('Trident') !== -1) { // IE
      execMontecarlo.postMessage(500000);
    } else { // other browsers
      execMontecarlo.postMessage(50000000);
    }
  }, 1000);
});
