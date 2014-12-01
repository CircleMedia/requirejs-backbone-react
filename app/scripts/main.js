/*global require*/
'use strict';
require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        react: '../bower_components/react/react-with-addons',
        JSXTransformer: '../bower_components/react/JSXTransformer',
        jsx: '../bower_components/requirejs-react-jsx/jsx',
        text: '../bower_components/requirejs-text/text',
        component: '../bower_components/backbone-react-component/lib/component',
        highcharts: '../bower_components/highcharts/highcharts',
        moment: '../bower_components/moment/moment'
    },
    shim: {
        jquery: {
            exports: "$"
        },
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            exports: "_"
        },
        backbone: {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        highcharts: {
            deps: ['jquery'],
            exports: 'Highcharts'
        },
        component: {
            deps: ['backbone', 'react'],
            exports: 'Backbone'
        },
        moment: {
            exports: 'moment'
        },
        react: {
            exports: "React"
        },
        JSXTransformer: "JSXTransformer"
    },
    jsx: {
        fileExtension: ".jsx",
        transformOptions: {
            harmony: true,
            stripTypes: false
        },
        usePragma: false
    }
});

require([
    'core/app', 'core/router', 'core/helpers',
    'models/base', 'models/user'
    //'views/base', 'views/login'
], function(app) {
    $(document).ready(function () {
        app.init();
    });
});