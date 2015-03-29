(function ($) {
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            directionNav:false
        });
    });

    $(window).load(function () {
        var $navparent = $('.nav'),
            $elem = $navparent.find('li'),
            $field = $('.field-items');

        $elem.on('hover', function () {
            var $this = $(this),
                $index = $this.index();

            if ($this.hasClass('hoverel')) {
                $this.removeClass('hoverel');
                $field.eq($index).css('display', 'none');
            } else {
                $this.addClass('hoverel');
                $field.eq($index).css('display', 'block');
            }

        })

        $field.on('hover', function () {
            var $this = $(this);

            if ($this.hasClass('hoverel')) {
                $this.removeClass('hoverel');
                $field.css('display', 'none');
            } else {
                $this.addClass('hoverel');
                $field.css('display', 'block');
            }
        })
    })

})(jQuery);

