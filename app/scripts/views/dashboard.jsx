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

    var View = ReactClasses.DashboardView = React.createClass({

        getInitialState: function() {
            return {data: data1};
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
                    <ReactClasses.Wrapper data={this.state.data}/>
                </div>
            );
        }

    });
    return View;
});
