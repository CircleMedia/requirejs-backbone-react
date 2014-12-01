/*global define*/
define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'collections/dashboard',
    'highcharts'
], function ($, _, Backbone, JST, DashboardCollection) {
    'use strict';
    var View = {};
    var charts = [];

    View.LoginView = Backbone.View.extend({
        template: JST['app/scripts/templates/login.ejs'],
        el: '#container',

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template());
        }
    });

    View.DashboardView = Backbone.View.extend({
        template: JST['app/scripts/templates/dashboard.ejs'],
        el: '#container',

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template());
            var SearchResultsView = View.SearchResultsView;
            var searchresults = new SearchResultsView({el: $('#searchresults')});
            searchresults.render();

            var chart1Categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            var chart1Data = new DashboardCollection([{
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
            var Chart1View = View.Chart1View;
            var chart1 = new Chart1View({ el: $('#sources-chart-bar'), categories: chart1Categories, data: chart1Data });
            chart1.render();

            var chart2Data = {
                type: 'pie',
                name: 'Browser share',
                innerSize: '50%',
                data: [
                    ['Firefox',   45.0],
                    ['IE',       26.8],
                    ['Chrome', 12.8],
                    ['Safari',    8.5],
                    ['Opera',     6.2],
                    {
                        name: 'Others',
                        y: 0.7,
                        dataLabels: {
                            enabled: false
                        }
                    }
                ]
            };

            var Chart2View = View.Chart2View;
            var chart2 = new Chart2View({ el: $('#sources-chart-pie'), data: chart2Data });
            chart2.render();

        }
    });

    View.SearchResultsView = Backbone.View.extend({
        template: JST['app/scripts/templates/searchresults.ejs'],

        initialize: function () {
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }
    });

    View.Chart1View = Backbone.View.extend({
        initialize: function (options) {
            this.data = options.data;
            this.categories = options.categories;
        },
        render: function () {
            this.$el.highcharts({
                title: {
                    text: 'Monthly Average Temperature',
                    x: -20 //center
                },
                subtitle: {
                    text: 'Source: WorldClimate.com',
                    x: -20
                },
                xAxis: {
                    categories: this.categories
                },
                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: '°C'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: this.data.toJSON()
            });
        }
    });

    View.Chart2View = Backbone.View.extend({
        initialize: function (options) {
            this.data = options.data;
        },
        render: function () {
            this.$el.highcharts({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                title: {
                    text: '256<br>shares',
                    align: 'center',
                    verticalAlign: 'middle',
                    y: -10
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            enabled: false,
                            distance: -50,
                            style: {
                                fontWeight: 'bold',
                                color: 'white',
                                textShadow: '0px 1px 2px black'
                            }
                        }
                    }
                },
                series: [this.data]
            });
        }
    });

    return View;
});
