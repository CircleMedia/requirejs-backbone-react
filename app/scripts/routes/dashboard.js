/*global define*/
define([
    'jquery',
    'backbone',
    'collections/dashboard',
    'views/dashboard'
], function ($, Backbone, DashboardCollection, View) {
    'use strict';
    var DashboardRouter = Backbone.Router.extend({
        routes: {
            "login": "login",
            "dashboard": "showDashboard",
            "chart": "showChart",
            "*other": "defaultRoute"
        },

        login: function () {
            var LoginView = View.LoginView;
            var view = new LoginView();
            view.render();
        },

        showDashboard: function () {
            var DashboardView = View.DashboardView;
            var view = new DashboardView();
            view.render();
        },

        showChart: function () {
            var items = new DashboardCollection([{
                name: 'Tokyo',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
            }, {
                name: 'New York',
                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
            }, {
                name: 'Berlin',
                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
            }, {
                name: 'London',
                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
            }]);
            var DashboardView = View.DashboardView;
            var view = new DashboardView({ data: items });
            view.render();
        },

        defaultRoute: function (other) {
            console.log('Invalid. You attempted to reach:' + other);
        }
    });

    return DashboardRouter;
});
