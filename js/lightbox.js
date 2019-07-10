var $thumbs = $('.thumbnails'); // thumbnails
var $lightboxIMG = $('.lightbox-img'); // lightbox image
var $lightbox = $('.lightbox'); // lightbox container
var $btnClose = $('.btn-close'); // close button

// This triggers the lightbox to hide or display
$thumbs.on('click', 'a', function (e) {
    e.preventDefault(); // prevents default action of the a tag
    var $big = $(this).attr('href'); // get the href from the thumbnail a
    //console.log(big);
    $lightboxIMG.attr('src', $big); // change the source attribute for the lightbox image
    $lightbox.attr('data-state', 'visible'); // change the lightbox from hidden to visible
});

// Triggers the close button
$btnClose.on('click', function () {
    $lightbox.attr('data-state', 'hidden'); // change the lightbox from visible to hidden
});