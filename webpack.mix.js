let mix = require('laravel-mix');

mix.sass('src/scss/app.scss', 'assets/css');
mix.js('src/js/app.js', 'assets/js').vue({
    options: {
        compilerOptions: {
            isCustomElement: (tag) => ['carselector'].includes(tag),
        },
    },
});
mix.browserSync({
    proxy: "tailormade.test", files: ['assets/css/app.css', 'assets/js/app.js', '**/*.+(html|php)',]
});