var express =  require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('app/index.html');
});

app.listen(8080, 'localhost', function() {
  console.log('Server port 8080');
});
