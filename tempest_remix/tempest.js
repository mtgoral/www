$(document).ready(function() {
            resize();render();
		});

		$(window).resize(function() {
			resize();
		});
        
        function goto(page) {
            var target = page;
            $('.container').fadeOut(1000);
            $('#bg').fadeOut(1000);
			setTimeout(function() { window.location.href = target; }, 1000);
		}

		function resize() {
			$('#bg').height($(window).height());
			$('#bg').css('left', ($(window).width()-($(window).height()*(734/600)))/2 + 'px' );
		}

		function render() {
            $(".header").append(
            '<a href="#" id="home" onclick="javascript:goto(\'../index.html\');return false;" style="position:relative;bottom:0;left:0;"><img src="http://www.mattgoral.com/tempest_remix/img/logo.png"></a>' +
            '<a href="#" id="whois" onclick="javascript:goto("whois");return false;" style="position:relative;bottom:5px;left:-60px;">who is tempest</a>' +
            '<a href="#" id="shows" onclick="javascript:shows();return false;" style="position:relative;bottom:5px;left:-50px;">shows</a>' +
            '<a href="#" id="music" onclick="javascript:music();return false;" style="position:relative;bottom:5px;left:-40px;">music</a>' +
            '<a href="#" id="photos" onclick="javascript:goto(\'photos/index.html\');return false;" style="position:relative;bottom:5px;left:-30px;">photos</a>' +
            '<a href="#" id="videos" onclick="javascript:videos();return false;" style="position:relative;bottom:5px;left:-20px;">videos</a>' +
            '<a href="#" id="facebook" onclick="javascript:shows();return false;" style="position:relative;bottom:22px;left:-221px;width:24px;height:28px;"><img src="http://www.mattgoral.com/tempest_remix/img/facebook.png"></a>' +
            '<a href="#" id="twitter" onclick="javascript:shows();return false;" style="position:relative;bottom:19px;left:-214px;width:24px;height:30px;"><img src="http://www.mattgoral.com/tempest_remix/img/twitter.png"></a>' +
            '<a href="#" id="youtube" onclick="javascript:shows();return false;" style="position:relative;bottom:19px;left:-210px;width:24px;height:30px;"><img src="http://www.mattgoral.com/tempest_remix/img/youtube.png"></a>' +
            '<a href="#" id="soundcloud" onclick="javascript:shows();return false;" style="position:relative;bottom:20px;left:-205px;width:24px;height:30px;"><img src="http://www.mattgoral.com/tempest_remix/img/soundcloud.png"></a>'
            );
			setTimeout(function() { $('#home').fadeIn(1000); }, 200);
			setTimeout(function() { $('#whois').fadeIn(1000); }, 300);
			setTimeout(function() { $('#shows').fadeIn(1000); }, 400);
            setTimeout(function() { $('#music').fadeIn(1000); }, 500)
            setTimeout(function() { $('#photos').fadeIn(1000); }, 600)
            setTimeout(function() { $('#videos').fadeIn(1000); }, 700)
			setTimeout(function() { $('#facebook').fadeIn(1000); }, 900);
			setTimeout(function() { $('#twitter').fadeIn(1000); }, 1000);
			setTimeout(function() { $('#youtube').fadeIn(1000); }, 1100);
			setTimeout(function() { $('#soundcloud').fadeIn(1000); }, 1200);
		}