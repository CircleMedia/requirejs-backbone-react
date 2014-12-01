define([
    'core/app',
    'jquery',
    'underscore',
    'backbone'
], function (app) {
    'use strict';
    app.Routers.Main = Backbone.Router.extend({

        routes: {
            "dashboard": "dashboard",
            "login": "login"
            //"entitlements(/:page)": "entitlements",
            //"entitlement/:entitlementId": "entitlement",
            //"api/entitlement/json(/:query)": "entitlement_list",
            //"users(/:page)": "users",
            //"user/:userId": "user"
        },

        dashboard: function () {
            app.core.switchToReactView('dashboard');
        },

        login: function () {
            app.core.switchToReactView('login');
        }


    });

});
