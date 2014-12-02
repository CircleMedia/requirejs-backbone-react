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
                <ReactClasses.Content data={this.props.data}/> :
                <ReactClasses.Tables />
            console.log(this.props.data ? 'wrapper content' : 'wrapper accordion');
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
