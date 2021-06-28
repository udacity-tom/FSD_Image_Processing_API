'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var app = express_1.default();
var port = 3000;
app.get('/convertImage', function(req, res) {
  res.send('Request received');
});
app.listen(port, function() {
  console.log('Server started at http://localhost:' + port);
});
//initial middlware stub
function convertImage() {
  console.log('\u00C0n image will be converted');
}
