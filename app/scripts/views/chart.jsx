define([
    'backbone',
    'react',
    'component',
    'highcharts'
], function() {
    'use strict';
    var React = require('react');

    var Chart = React.createClass({
        mixins: [Backbone.React.Component.mixin],

        componentWillReceiveProps: function (nextProps) {
            var chartModel = this.props.chartModel;
            var nextChartModel = nextProps.chartModel;
            var width = this.props.width;
            var nextWidth = nextProps.width;
            var height = this.props.height;
            var nextHeight = nextProps.height;
            if (chartModel !== nextChartModel
                || width !== nextWidth
                || height !== nextHeight) {
                this.state.chartInstance.destroy();
                this.initializeChart();
            }
        },

        componentDidUpdate: function (prevProps, prevState) {
            // disable React's render()
            // always skip React's render step
            return false;
        },

        initializeChart: function () {
            var chartModel = this.props.chartModel;
            var categoriesModel = this.props.categoriesModel.toJSON();
            console.log('categoriesModel: '+categoriesModel);
            var seriesModel = this.props.seriesModel.toJSON();
            var width = this.props.width || null;
            var height = this.props.height || null;
            var selector = this.refs.myChart.getDOMNode();

            var chartOptions = React.addons.update(chartModel, {
                chart: {
                    renderTo: {$set: selector},
                    width: {$set: width},
                    height: {$set: height}
                },
                xAxis: {
                    categories: {$set: categoriesModel}
                },
                series: {$set: seriesModel}
            });

            var chartInstance = new Highcharts.Chart(chartOptions);
            this.setState({
                chartInstance: chartInstance
            });
        },

        render: function () {
            return (
                <div ref="myChart"></div>
            );
        },

        componentDidMount: function () {
            this.initializeChart();
        }

    });

    var Data = {
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
    };

    var categoriesObject = new Backbone.Collection(Data.categories);
    var seriesObject = new Backbone.Collection(Data.series);

    var chartObject = {
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

    var chart = React.render(
        <Chart
            categoriesModel={categoriesObject}
            seriesModel={seriesObject}
            chartModel={chartObject} />,
        document.getElementById('body_container')
    );

});
