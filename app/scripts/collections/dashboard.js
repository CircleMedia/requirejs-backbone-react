/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'models/dashboard'
], function ($, _, Backbone, DashboardModel) {
    'use strict';
    console.log('DashboardCollection');
    var DashboardCollection = Backbone.Collection.extend({
        model: DashboardModel
    });

    return DashboardCollection;
});
