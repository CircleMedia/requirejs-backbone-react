define([
    'backbone',
    'react',
    'component',
    'highcharts',
    'jsx!views/chart'
], function () {
    'use strict';

    var React = require('react');

    var View = ReactClasses.DashboardView = React.createClass({
        mixins: [Backbone.React.Component.mixin],

        getDefaultProps: function (nextProps) {
            var data = {
                categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
                series: [{
                    name: 'Year 1800',
                    data: [107, 31, 635, 203, 2]
                }, {
                    name: 'Year 1900',
                    data: [133, 156, 947, 408, 6]
                }, {
                    name: 'Year 2008',
                    data: [973, 914, 4054, 732, 34]
                }]
            }
            return {
                data: data,
                categoriesObject: data.categories,
                seriesObject: new Backbone.Collection(data.series),
                chartObject: {
                    chart: {
                        renderTo: 'container',
                        type: 'bar'
                    },
                    title: {
                        text: 'Historic World Population by Region'
                    },
                    subtitle: {
                        text: 'Source: Wikipedia.org'
                    },
                    xAxis: {
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Population (millions)',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    tooltip: {
                        formatter: function () {
                            return '' +
                                this.series.name + ': ' + this.y + ' millions';
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -100,
                        y: 100,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: '#FFFFFF',
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    }
                }
            }
        },

        componentDidUpdate: function (prevProps, prevState) {
            // disable React's render()
            // always skip React's render step
            return false;
        },

        render: function () {
            var that = this;
            console.log('')
            return (
                <div className="dashboard-container">
                    <ReactClasses.Chart
                        categoriesModel={that.props.categoriesObject}
                        seriesModel={that.props.seriesObject}
                        chartModel={that.props.chartObject} />
                </div>
            );
        }

    });
    return View;
});
