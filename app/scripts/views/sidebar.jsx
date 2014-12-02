define([
    'backbone',
    'react'
], function() {
    'use strict';
    var React = require('react');

    var View = ReactClasses.Sidebar = React.createClass({
        render: function () {
            return (
                <nav id="sidebar" ref="sidebar" className="sidebar nav-collapse collapse">
                    <ul id="side-nav" className="side-nav">
                        <li>
                            <a href="#summary"><i className="icon-bar-chart"></i> <span className="name">Summary</span></a>
                        </li>
                        <li>
                            <a href="#"><i className="icon-bookmark-empty"></i> <span className="name">Tags</span></a>
                        </li>
                        <li>
                            <a href="#"><i className="icon-reorder"></i> <span className="name">Lists</span></a>
                        </li>
                        <li>
                            <a href="#fans"><i className="icon-group"></i> <span className="name">Fans</span></a>
                        </li>
                    </ul>
                </nav>
            );

        }
    });

    return View;

});
