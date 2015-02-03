var rows = document.querySelectorAll('.subjectCell');

//var i, main_link;
// start at 1, 0 is the title header
// stop before last 3 because of bottom links
var openBoth = function() {
  window.open(this.getAttribute('data-comment-link'));
  window.open(this.getAttribute('data-main-link'));
};

var lowercase = Function.prototype.call.bind(String.prototype.toLowerCase)

var snakecase = function(name) {
  return name.split(' ').map(lowercase).join('_')
}

var i;
for (i = 0; i < rows.length; i++) {
  var row = rows[i];
  var artistLink = row.querySelector('a');
  var link = 'https://rateyourmusic.com/artist/' + snakecase(artistLink.innerHTML);
  row.innerHTML += '<a href=' + link +'>rym</a>';
}
