{% assign brexit_words = site.brexicon | map: "slug" %}
var brexitWords = [
{% for word in site.brexicon %}{word: "{{ word.title }}", url: "{{ word.url }}", pos: "{{ word.type | first }}"}{%- if forloop.last != true %},{% endif %}{% endfor %}
];
var size = brexitWords.length;
var i = Math.floor(Math.random()*size);
document.write('<div class="brentry"><div class="term"><div class="word"><a href="' + brexitWords[i].url +'">' +
  brexitWords[i].word + '</a></div> ('+ brexitWords[i].pos +
  ')</div><div class="definition">'+brexitWords[i].word +'</div></div>');
