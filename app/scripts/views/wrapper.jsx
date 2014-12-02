define([
    'backbone',
    'react',
    'jsx!views/header',
    'jsx!views/content',
    'jsx!views/tables'
], function() {
    'use strict';
    var React = require('react');

    var View = ReactClasses.Wrapper = React.createClass({
        render: function () {

            // temporary accordion page for demo
            var content = this.props.data ?
                <ReactClasses.Content isDataset2={this.props.isDataset2} isDataset1={this.props.isDataset1} data={this.props.data} onUserInput={this.props.onUserInput}/> :
                <ReactClasses.Tables />
            return (
                <div className="wrap">
                    <ReactClasses.Header />
                    {content}
                </div>
            );

        }
    });

    return View;

});
