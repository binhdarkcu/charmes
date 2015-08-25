var Responsize = (function() {
    var setting = {
        font: 13,
        w: 1200,
        h: 780
    }

    function init() {
        respone();
        $(window).resize(function(e) {
            respone();
        });
    }

    function respone() {
        setting.font = ($(window).height() * 13) / setting.h;
        if ($('html').hasClass('ie8'))
            setting.font = Math.round(setting.font);
        $('.scense_container').css('font-size', setting.font + 'px');
    }

    function getSetting() {
        return setting;
    }
    return {
        init: init,
        getSetting: getSetting
    }
})();