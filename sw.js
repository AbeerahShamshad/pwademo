if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log("Service Worker Registered");
    });
}


self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('fox-store').then(function (cache) {
      return cache.addAll([
        '/Dope-Tech/',
        '/Dope-Tech/index.html',
        '/Dope-Tech/work-single.html',
        '/Dope-Tech/work.html',
        '/Dope-Tech/services.html',
        '/Dope-Tech/contact.html',
        '/Dope-Tech/about.html',

        '/Dope-Tech/style.css',
        '/Dope-Tech/css/bootstrap/bootstrap.css',
        '/Dope-Tech/css/bootstrap/bootstrap-grid.css',
        '/Dope-Tech/css/bootstrap/bootstrap-reboot.css',
        '/Dope-Tech/css/aos.css',
        '/Dope-Tech/css/bootstrap-datepicker.css',
        '/Dope-Tech/css/bootstrap.min.css',
        '/Dope-Tech/css/jquery-ui.css',
        '/Dope-Tech/css/magnific-popup.css',
        '/Dope-Tech/css/mediaelementplayer.css',
        '/Dope-Tech/css/owl.carousel.min.css',
        '/Dope-Tech/css/owl.theme.default.min.css',
        '/Dope-Tech/css/style.css',

        '/Dope-Tech/fonts/flaticon/font',
        '/Dope-Tech/fonts/flaticon/backup.txt',
        '/Dope-Tech/fonts/icomoon',

        '/Dope-Tech/images/123.jpg',
        '/Dope-Tech/images/a.png',
        '/Dope-Tech/images/abc.jpg',
        '/Dope-Tech/images/about_1.jpg',
        '/Dope-Tech/images/b.png',
        '/Dope-Tech/images/c.png',
        '/Dope-Tech/images/d.png',
        '/Dope-Tech/images/e.png',
        '/Dope-Tech/images/f.png',
        '/Dope-Tech/images/covidmap.JPG',
        '/Dope-Tech/images/dfgadjofbpjabf;.jpg',
        '/Dope-Tech/images/hero_1.jpg',
        '/Dope-Tech/images/img_1.jpg',
        '/Dope-Tech/images/img_2.jpg',
        '/Dope-Tech/images/img_3.jpg',
        '/Dope-Tech/images/img_4.jpg',
        '/Dope-Tech/images/img_5.jpg',
        '/Dope-Tech/images/img_6.jpg',
        '/Dope-Tech/images/person_1.jpg',
        '/Dope-Tech/images/person_2.jpg',
        '/Dope-Tech/images/person_3.jpg',
        '/Dope-Tech/images/person_4.jpg',
        '/Dope-Tech/images/post_1.jpg',
        '/Dope-Tech/images/post_2.jpg',
        '/Dope-Tech/images/post_3.jpg',
        '/Dope-Tech/images/resturant.JPG',
        '/Dope-Tech/images/showcase.jpg',
        '/Dope-Tech/images/snakegame.JPG',
        '/Dope-Tech/images/xyz.jpg',

        '/Dope-Tech/js/typed.js',
        '/Dope-Tech/js/aos.js',
        '/Dope-Tech/js/bootstrap-datepicker.min.js',
        '/Dope-Tech/js/bootstrap.min.js',
        '/Dope-Tech/js/jquery-3.3.1.min.js',
        '/Dope-Tech/js/jquery-migrate-3.0.1.min.js',
        '/Dope-Tech/js/jquery-ui.js',
        '/Dope-Tech/js/jquery.countdown.min.js',
        '/Dope-Tech/js/jquery.magnific-popup.min.js',
        '/Dope-Tech/js/jquery.stellar.min.js',
        '/Dope-Tech/js/main.js',
        '/Dope-Tech/js/mediaelement-and-player.min.js',
        '/Dope-Tech/js/owl.carousel.min.js',
        '/Dope-Tech/js/popper.min.js',
        '/Dope-Tech/js/slick.min.js',
        '/Dope-Tech/js/typed.js',

        '/Dope-Tech/scss/style.scss',
        '/Dope-Tech/scss/_site-navbar.scss',
        '/Dope-Tech/scs/_site-blocks.scss',
        '/Dope-Tech/scss/_site-base.scss',
        '/Dope-Tech/scss/bootstrap',

      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
