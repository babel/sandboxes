/* eslint-disable */

// from developit
function memo(fn, c = {}) {
  return p => c[p] || (c[p] = fn(p));
}

// npm.im/greenlet
function greenlet(e) {
  var n = new Worker(
      URL.createObjectURL(
        new Blob([
          "onmessage=(" +
            function (e) {
              return function (n) {
                var t = n.data;
                return Promise.resolve()
                  .then(function () {
                    return e.apply(e, t[1]);
                  })
                  .then(
                    function (e) {
                      postMessage([t[0], null, e]);
                    },
                    function (e) {
                      postMessage([t[0], "" + e]);
                    }
                  );
              };
            } +
            ")(" +
            e +
            ")",
        ])
      )
    ),
    t = 0,
    r = {};
  return (
    (n.onmessage = function (e) {
      var n = e.data,
        t = n[0],
        o = n[1];
      r[t][o ? 1 : 0](o || n[2]), delete r[t];
    }),
    function () {
      for (var e = [], o = arguments.length; o--; ) e[o] = arguments[o];
      return new Promise(function (o, a) {
        (r[++t] = [o, a]), n.postMessage([t, e]);
      });
    }
  );
}

export const gzipSize = memo(
  greenlet(code => {
    if (!self.pako)
      importScripts("https://unpkg.com/pako@1.0.11/dist/pako_deflate.min.js");
    const compressed = self.pako.gzip(code);
    return compressed.byteLength || compressed.length;
  })
);
