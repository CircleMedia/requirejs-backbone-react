define([
    'backbone',
    'react'
], function() {
    'use strict';
    var React = require('react');

    var View = ReactClasses.Header = React.createClass({
        render: function () {
            return (
                <header className="page-header">
                    <div className="navbar">
                        <div className="navbar-inner">
                            <ul className="nav pull-right">
                                <li className="hidden-phone dropdown">
                                    <a href="#" title="Account" id="account" className="dropdown-toggle" data-toggle="dropdown">
                                        <i className="icon-user"></i>
                                    </a>
                                    <ul id="account-menu" className="dropdown-menu account" role="menu">
                                        <li role="presentation" className="account-picture">
                                            <img src="img/2.jpg" alt="" />
                                        Philip Daineka
                                        </li>
                                        <li role="presentation">
                                            <a href="form_account.html" className="link">
                                                <i className="icon-user"></i>
                                            Profile
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="component_calendar.html" className="link">
                                                <i className="icon-calendar"></i>
                                            Calendar
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a href="#" className="link">
                                                <i className="icon-inbox"></i>
                                            Inbox
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="visible-phone">
                                    <a href="#" className="btn-navbar" data-toggle="collapse" data-target=".sidebar" title="">
                                        <i className="icon-reorder"></i>
                                    </a>
                                </li>
                                <li className="hidden-phone"><a href="login.html"><i className="icon-signout"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </header>
            );

        }
    });

    return View;

});
