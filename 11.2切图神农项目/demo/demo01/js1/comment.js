 /* ========
    Debugger plugin, simple demo plugin to console.log some of callbacks
    ======== */
    Swiper.prototype.plugins.debugger = function (swiper, params) {
        if (!params) return;
        // Need to return object with properties that names are the same as callbacks
        return {
            onInit: function (swiper){
                console.log('onInit');
            },
            onClick: function (swiper, e) {
                console.log('onClick');
            },
            onTap: function (swiper, e) {
                console.log('onTap');
            },
            onDoubleTap: function (swiper, e) {
                console.log('onDoubleTap');
            },
            onSliderMove: function (swiper, e) {
                console.log('onSliderMove');
            },
            onSlideChangeStart: function (swiper) {
                console.log('onSlideChangeStart');
            },
            onSlideChangeEnd: function (swiper) {
                console.log('onSlideChangeEnd');
            },
            onTransitionStart: function (swiper) {
                console.log('onTransitionStart');
            },
            onTransitionEnd: function (swiper) {
                console.log('onTransitionEnd');
            },
            onReachBeginning: function (swiper) {
                console.log('onReachBeginning');
            },
            onReachEnd: function (swiper) {
                console.log('onReachEnd');
            }
        };
    };



        var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // Enable debugger
        debugger: true
    });