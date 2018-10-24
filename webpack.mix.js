let mix = require('laravel-mix');

mix.autoload({
  jquery: ['$', 'jQuery', 'window.jQuery']
});

mix.js(['js/main.js'], 'dist/js/main.js').sass('sass/main.scss', 'dist/css/main.css').sourceMaps();

mix.setPublicPath(path.normalize('dist'));

mix.options({
  processCssUrls: false,
  postCss: [require('autoprefixer')({
    browsers: [
      'last 2 versions',
    ]
  })],
});

if (mix.inProduction()) {
  mix.disableNotifications();
} else {
  mix.browserSync({
    files: [
      'dist/css/{*,**/*}.css',
      'dist/js/{*,**/*}.js',
      'index.html'
    ],
    proxy: false,
    server: true
  });
}