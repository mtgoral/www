$(document).ready(function() {
  renderheader();
});

function renderheader() {
  $("#header").append('<a href="index.html"><div id="namediv"><h1 id="firstname">sigi</h1><h1 id="lastname">gradwohl</h1></div></a><a href="contact.html"><div id="nav_contact" class="navcircle">contact</div></a><a href="resume.html"><div id="nav_resume" class="navcircle">resume</div></a><a href="work.html"><div id="nav_work" class="navcircle">work</div></a><a href="about.html"><div id="nav_about" class="navcircle">about</div></a><a href="http://twitter.com/sigirette" id="twitter" target="_blank"><img src="twittericon.png"></a><a href="http://www.imdb.com/name/nm3771584/" id="imdb" target="_blank"><img src="imdbicon.png"></a><script type="text/javascript">$(".navcircle").mouseenter(function(){$(this).animate({width:110,height:110,left:"-=5",bottom:"-=5"},100,function(){});});$(".navcircle").mouseleave(function(){$(this).animate({width:100,height:100,left:"+=5",bottom:"+=5",},100,function(){});});</script>');
}