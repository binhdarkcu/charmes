// JavaScript Document
var animationPage = (function() {
	var tl = null;

	var setting = {
        player : null,
        loop : false,
        startLoop : 0,
        endLoop : 0,
        nextslide : 'intro',
        prevslide : '',
        running : false
	}

	//FUNCTIONS
	function init(){
		initVideo();
        respone_video();

        $(window).resize(function(){
            respone_video();
        });


	}


	//VIDEOS
	function initVideo(){ 
        // step 1
        $('.btn_intro_discover').click(function(){
            gotoStep();
        });

        // install videos
        setting.player = videojs('video_intro', { /* Options */ }, function() {

            this.on('ended', function() {

            });

            this.on('timeupdate', function() {

                var currentTime = this.currentTime();

                if(currentTime > setting.endLoop){
                    setting.running = false;

                    if(setting.loop) {
                        this.currentTime(setting.startLoop);
                    }else {
                        this.pause();
                    }
                }
            });


        });

        gotoStep();
	}

    function respone_video(){
        var w = $(window).width();
        var h = $(window).height();

        // 1280 * 720
        var nh = h;
        var nw = nh * 1280 / 720;
        if(nw < w){
            nw = w;
            nh = nw * 720 / 1280;
        }

        //console.log(nh,nw);

        $('.scense_container').css({width: parseInt(nw) , height:parseInt(nh)});//set height
    }

    function create_mouseWheel(){
        $('#slides').bind('mousewheel DOMMouseScroll', function(event){
            event.preventDefault();

            if (setting.running)
                return false;

            setting.running = true;

            if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
                // scroll up

            }
            else {
                // scroll down
                gotoStep();
            }

            return false;
        });
    }

    function gotoStep(){
        if(setting.nextslide == 'intro') {
            setting.running = true;
            setting.loop = true;
            setting.startLoop = 0;
            setting.endLoop = 3;

            setting.prevslide = '';
            setting.nextslide = 'slide1';

            setting.player.play();
        }
        else if(setting.nextslide == 'slide1') {
            setting.loop = true;
            setting.startLoop = 18;
            setting.endLoop = 22;

            setting.prevslide = 'intro';
            setting.nextslide = 'slide2';

            setting.player.currentTime(7);
            setting.player.play();

            //css
            $('.video_intro').css('display','none');

            create_mouseWheel();
        }

        else if(setting.nextslide == 'slide2') {
            setting.loop = true;
            setting.startLoop = 41;
            setting.endLoop = 45;

            setting.prevslide = 'slide1';
            setting.nextslide = 'slide3';

            setting.player.currentTime(22);
            setting.player.play();

            //css

        }

        else if(setting.nextslide == 'slide3') {
            setting.loop = false;
            setting.startLoop = 56;
            setting.endLoop = 56;

            setting.prevslide = 'slide2';
            setting.nextslide = 'slide4';

            setting.player.currentTime(44);
            setting.player.play();

            //css

        }

        else if(setting.nextslide == 'slide4') {
            setting.loop = false;
            setting.startLoop = 86;
            setting.endLoop = 86;

            setting.prevslide = 'slide3';
            setting.nextslide = 'slide5';

            setting.player.currentTime(56);
            setting.player.play();

            //css

        }
        else if(setting.nextslide == 'slide5') {
            setting.loop = false;
            setting.startLoop = 102;
            setting.endLoop = 102;

            setting.prevslide = 'slide4';
            setting.nextslide = '';

            setting.player.currentTime(86);
            setting.player.play();

            //css

        }


    }


	//RETURN
	return {
		init:init
	};
})();		