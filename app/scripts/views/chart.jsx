define([
    'backbone',
    'react',
    'component',
    'highcharts'
], function() {
    'use strict';
    var React = require('react');

    var View = ReactClasses.Chart = React.createClass({
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

        /*componentDidUpdate: function (prevProps, prevState) {
            // disable React's render()
            // always skip React's render step
            return false;
        },*/

        initializeChart: function () {
            var chartModel = this.props.chartModel;
            var categoriesModel = this.props.categoriesModel.toJSON();
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
            /*
            Don't use setState here as this method is triggered from state change and it will cycle
            this.setState({
                chartInstance: chartInstance
            });
            */
        },

        render: function () {
            return (
                <div className="chart-container" ref="myChart"></div>
            );

        },

        componentDidUpdate: function () {
            this.initializeChart();
            return false;
        },

        componentDidMount: function () {
            this.initializeChart();
        }

    });

    return View;

});
