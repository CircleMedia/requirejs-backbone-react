define([
    'backbone',
    'react',
    'jsx!views/sidebar',
    'jsx!views/wrapper',
    'collections/data1',
    'collections/data2'
], function () {
    'use strict';

    var React = require('react');
    var data1 = require('collections/data1');
    var data2 = require('collections/data2');
    var data = [];
    data.push(data1);
    data.push(data2);

    var View = ReactClasses.DashboardView = React.createClass({

        getInitialState: function() {
            return {
                isDataset1: true,
                isDataset2: false,
                data: data[0]}
        },

        handleUserInput: function(isDataset1, isDataset2) {
            this.setState({
                data: isDataset1 ? data[0] : data[1],
                isDataset1: isDataset1,
                isDataset2: isDataset2
            });
        },

        render: function () {
            //var that = this;
            //console.log('')
            return (
                <div className="dashboard-container">
                    <div className="logo">
                        <h4><a href="#">Circle <strong>Media</strong></a></h4>
                    </div>
                    <ReactClasses.Sidebar />
                    <ReactClasses.Wrapper isDataset2={this.state.isDataset2} isDataset1={this.state.isDataset1}  data={this.state.data} onUserInput={this.handleUserInput}/>
                </div>
            );
        }

    });
    return View;
});
