$(document).ready(function () {
    $('.sticky-section').waypoint(function (direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
    },
        {
            offset: '5%;'
        });

    $('.plan-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('.section-plans').offset().top }, 1500)
    })
    $('.start-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('.section-features').offset().top }, 1000)
    })
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('.section-features').waypoint(function(){
        $('#flist').addClass('animate__fadeInUp')
    },{offset: '15%;'})

    $('.section-steps').waypoint(function(){
        $('#phone').addClass('animate__fadeInLeft')
    },{offset: '25%;'})

    $('.section-cities').waypoint(function(){
        $('.section-cities img').addClass('animate__fadeIn')
    },{offset: '50%;'})

    $('.section-plans').waypoint(function(){
        $('#main-plan').addClass('animate__pulse')
    },{offset: '30%;'})

   /*
    $('.mobile-nav').click(function () {
        $('.main-nav').slideToggle(300)
        if($('.mobile-nav:last-of-type').hasClass('.invisible2'))
            {
                $('.mobile-nav:last-of-type').removeClass('invisible2')
                $('.mobile-nav:first-of-type').addClass('invisible2')
            }
        else
            {
                $('.mobile-nav:first-of-type').removeClass('invisible2')
                $('.mobile-nav:last-of-type').addClass('invisible2')
            }
    })*/

});

