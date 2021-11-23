"use strict";

//https://e.infogram.com/79acdebc-18ad-4399-8936-bce3b3a49068?parent_url=https%3A%2F%2Fwww.gob.cl%2Fcoronavirus%2Fcifrasoficiales%2F&src=embed#
// url de vacunados https://atlas.jifo.co/api/connectors/e465a67e-df65-4576-8d6b-c6cb25184de1
//import electron
var _require = require("electron"),
    app = _require.app;

var _require2 = require("./main"),
    createWindow = _require2.createWindow;

app.on("ready", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //create window
          createWindow();

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});