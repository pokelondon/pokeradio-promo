define(['jquery', 'jquery.debounce'],
    function($) {

    var LayoutHandler = function() {
        this.minDesktopWidth = 768;
        this.previousWidth = this.getWidth();

        var self = this;
        //$(window).on('resize', $.throttle(50, function(e) {
        $(window).on('resize', function(e) {
            var currentWidth = self.getWidth();
            if ((self.previousWidth < self.minDesktopWidth) && (currentWidth >= self.minDesktopWidth)) {
                // mobile -> desktop transition
                $(window).trigger('got:mobileToDesktop');
            }
            else if ((self.previousWidth >= self.minDesktopWidth) && (currentWidth < self.minDesktopWidth)) {
                // desktop -> mobile transition
                $(window).trigger('got:desktopToMobile');
            }
            self.previousWidth = currentWidth;
        //}));
        });

        return this;
    };

    LayoutHandler.prototype.getWidth = function() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    LayoutHandler.prototype.getHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };

    LayoutHandler.prototype.isDesktop = function() {
        return (this.getWidth() >= this.minDesktopWidth);
    };

    LayoutHandler.prototype.isMobile = function() {
        return !this.isDesktop();
    };

    LayoutHandler.prototype.isTouch = function() {
        return $('html').hasClass('touch');
    };

    return new LayoutHandler();

});
