if (Meteor.isClient) {
    // Will proxy this config to Router.configure( ... );
    CmsInn.configure({
        loadingTemplate: 'loading',
        layoutTemplate: 'layout',
        plugins: {
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
                ],
                defaultTemplate: 'home'     // On initial load as there is no routes, 
                                            // package automatically adds route and uses 'defaultTemplate' value to set as its template
            }
        }
    });
}

if (Meteor.isServer) {
    CmsInn.configure({
        plugins: {
            versioning:{
                insecure : true
            }
        }
    });
}