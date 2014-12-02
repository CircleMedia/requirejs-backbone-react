define([
    'backbone',
    'react',
    'jsx!views/sidebar',
    'jsx!views/wrapper'
], function () {
    'use strict';

    var React = require('react');

    var View = ReactClasses.ProfilesView = React.createClass({

        getInitialState: function() {
            return {data: null};
        },

        render: function () {
            //var that = this;
            //console.log('')
            return (
                <div className="profiles-container">
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
