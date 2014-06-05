if (Meteor.isClient) {
    CmsInn.configPlugins({
        navigation: {
            pageTypes: [
                {
                    type: "about"
                },
                {
                    type: "services"
                },
                {
                    type: "one_column_portfolio"
                },
                {
                    type: "single_portfolio_item"
                },
                {
                    type: "blog_home_first"
                },
                {
                    type: "blog_home_second"
                },
                {
                    type: "blog_post_item"
                },
                {
                    type: "home"
                }
            ]
        }
    });

    Router.configure({
        layoutTemplate: 'layout'
    });
}