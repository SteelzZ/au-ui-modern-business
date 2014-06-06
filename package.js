Package.describe({
    summary: "Bootstrap 3 template with integrated CmsInn "
});

Package.on_use(function (api, where) {
    api.imply('au-cmsinn');
    api.use(['au-cmsinn'], ['client', 'server']);
    api.use(['jquery',  'bootstrap-3', 'templating'], ['client']);
    api.add_files([
        'client/styles/css/modern-business.css',

        'client/views/templates/loading.html',
        'client/views/templates/layout.html',
        'client/views/templates/home.html',
        'client/views/templates/about.html',
        'client/views/templates/blog_home_first.html',
        'client/views/templates/blog_home_second.html',
        'client/views/templates/blog_post_item.html',
        //'client/views/templates/contact.html',
        //'client/views/templates/faq.html',
        //'client/views/templates/four_column_portfolio.html',
        //'client/views/templates/three_column_portfolio.html',
        //'client/views/templates/two_column_portfolio.html',
        'client/views/templates/one_column_portfolio.html',
        //'client/views/templates/full_width.html',
        //'client/views/templates/pricing_table.html',
        'client/views/templates/services.html',
        'client/views/templates/single_portfolio_item.html',
        //'client/views/templates/side_bar.html',

        'assets/loader.gif',
    
        'config.js'
    ], ['client', 'server']);
});

Package.on_test(function (api) {
});
