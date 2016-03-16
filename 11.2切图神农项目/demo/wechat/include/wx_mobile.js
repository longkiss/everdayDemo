/**
 * Created by wangxp on 14-3-27.
 */
var wxm = wxm || {};
wxm.areaSelector = function() {
    var $selector = $('#J_areaSelector'),
        $current,
        $list = $('#J_areaList');

    $selector.on('click', function(e){
        e.preventDefault();
        $current = $(this);
        $current.toggleClass('selected');

        $list.toggleClass('on')
            .on('click', 'li', function(){
                $list.find('li').removeClass('selected')
                    .end().removeClass('on');
                $(this).addClass('selected');
                $current.removeClass('selected').text($(this).text());
            });
    });
};

wxm.pageFooter = function () {
    var $footer = $('.footer');

    if (!$footer.length) { return; }

    var $body = $footer.parent();

    var setFooterPos = function () {
        $footer.removeClass('footer-fixed');
        if ($body.height() >= $footer.offset().top + $footer.height()) {
            $footer.addClass('footer-fixed');
        }
    };

    $(window).on('resize load', setFooterPos);
};

wxm.init = function() {
    this.pageFooter();
    var $elems = $('[id^="J_"]');
    if(!$elems.length) return;
    $elems.each(function(){
        var fn = this.id.split('J_').pop();
        if(Object.prototype.toString.call(wxm[fn])=='[object Function]') {
            wxm[fn]();
        }
    });
};

$(function($){
    $('.J_show_page').on('click', function(e){
        e.stopPropagation();
        $($(this).data('page')).removeClass('hide').addClass('show');
        $('.wx-page').toggleClass('hide');
    });
    $('[data-action="back"]').each(function(){
        $(this).on('click', function(){
            $(this).parent().parent().removeClass('show').addClass('hide');
            $('.wx-page').toggleClass('hide');
        });
    });
    wxm.init();
});