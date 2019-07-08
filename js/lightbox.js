var $thumbs = $('.thumbnails');
var $lightboxIMG = $('.lightbox-img');
var $lightbox = $('.lightbox');
var $btnClose = $('.btn-close');

$thumbs.on('click', 'a', function (e) {
    e.preventDefault();
    var $big = $(this).attr('href');
    //console.log(big);
    $lightboxIMG.attr('src', $big);
    $lightbox.attr('data-state', 'visible');
});

$btnClose.on('click', function () {
    $lightbox.attr('data-state', 'hidden');

});