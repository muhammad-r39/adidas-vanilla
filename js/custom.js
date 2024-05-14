'use strict';
$(function() {
    function switchProduct(targetID, currentId) {
        const targets = getElements(targetID);
        const currentActive = getElements(currentId);
        $(`.product-image img[data-product-id=${targetID}]`).detach().appendTo('.product-image').fadeIn();

        for (let i = 0; i < targets.length; i++) {
            currentActive[i].removeClass('active');
            targets[i].addClass('active');
        }

        $('.brick-group').toggleClass('shamble');
    }

    function getElements(productId) {
        const id = `[data-product-id=${productId}]`;
        return [$('.slider-nav-item' + id), $('.product-image img' + id), $('.product' + id)];
    }

    function activeProduct() {
        return $('.slider-nav-item.active').data('product-id');
    }

    function nextSlide() {
        const current = activeProduct();
        if (current < 3) {
            switchProduct(current + 1, current);
        } else {
            switchProduct(1, current);
        }
    }

    function prevSlide() {
        const current = activeProduct();
        if (current > 1) {
            switchProduct(current - 1, current);
        } else {
            switchProduct(3, current);
        }
    }

    switchProduct(1, activeProduct());

    $('.slider-nav-item').on('click', function() {
        switchProduct($(this).data('product-id'), activeProduct());
    });

    $('.slider-arrow').on('click', function(){
        $(this).attr('id') === 'nextSlider' ? nextSlide() : prevSlide();
    });

    $('.product-image img').on('click', function(){
        $('.brick-group').toggleClass('shamble');
    });

    $('#closeMenu, .menu-button').on('click', function() {
        $('.menu').toggleClass('open');
        $('#closeMenu').toggleClass('scramble');
    });
});