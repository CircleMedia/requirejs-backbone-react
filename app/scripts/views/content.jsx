define([
    'backbone',
    'react',
    'jsx!views/searchresults',
    'jsx!views/chart1',
    'jsx!views/chart2',
    'jsx!views/chart3'
], function() {
    'use strict';
    var React = require('react');

    var View = ReactClasses.Content = React.createClass({
        render: function () {
            return (
                <div className="content container-fluid">
                    <div className="row-fluid">
                        <div className="span12">
                            <h2 className="page-title">Summary</h2>
                        </div>
                    </div>
                    <ReactClasses.Searchresults />

                    <div className="row-fluid">
                        <div className="span3">
                            <section className="widget large">
                                <header>
                                    <h4><i className="eicon-cd"></i> Pie Chart</h4>
                                </header>
                                <div className="body">
                                    <div id="sources-chart-pie" className="chart pie-chart">
                                        <ReactClasses.Chart3 data={this.props.data.chart3} height={280} />
                                    </div>
                                </div>
                                <footer id="data-chart-footer" className="pie-chart-footer">
                                </footer>
                            </section>
                        </div>
                        <div className="span9 half-width-responsive">
                            <section className="widget large">
                                <header>
                                    <h4><i className="icon-bar-chart"></i> Column Chart</h4>
                                </header>
                                <div id="sources-chart-bar" className="body chart">
                                    <ReactClasses.Chart2 data={this.props.data.chart2} height={280} />
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row-fluid">
                        <div className="span6">
                            <section className="widget large">
                                <header>
                                    <h4><i className="icon-bar-chart"></i> Bar Chart</h4>
                                </header>
                                <div id="sources-chart-stacked" className="body chart">
                                    <ReactClasses.Chart1 data={this.props.data.chart1} height={280} />
                                </div>
                            </section>
                        </div>
                        <div className="span6">
                            <section className="widget large">
                                <header>
                                    <h4><i className="eicon-chart-line"></i> Line Chart</h4>
                                </header>
                                <div id="sources-chart-line" className="body chart">
                                    <svg></svg>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            );

        }
    });

    return View;

});
