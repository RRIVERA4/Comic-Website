var $thumbs = $('.thumbnails');

$thumbs.on('click', '.thumbnails a', function (e) {
    e.preventDefault();
    var big = $(this).attr('href');
    console.log(big);
});

