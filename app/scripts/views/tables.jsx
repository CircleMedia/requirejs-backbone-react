define([
    'backbone',
    'react'
], function() {
    'use strict';
    var React = require('react');

    var View = ReactClasses.Tables = React.createClass({
        render: function () {
            return (
                <div className="content container-fluid">
                    <div className="row-fluid">
                        <div className="span12">
                            <h2 className="page-title">Profiles</h2>
                        </div>
                    </div>
                    <div className="row-fluid">
                        <div className="span6">
                            <section className="widget">
                                <header>
                                    <h4>
                                        <i className="icon-table"></i>
                                    Simple table
                                    </h4>
                                </header>
                                <div className="body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>№</th>
                                                <th>First Name</th>
                                                <th className="hidden-phone-portrait">Last Name</th>
                                                <th>Email</th>
                                                <th className="hidden-phone-portrait">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td className="hidden-phone-portrait">Otto</td>
                                                <td><a href="#">ottoto@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-success">New</span></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td className="hidden-phone-portrait">Thornton</td>
                                                <td><a href="#">fat.thor@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-warning">Unconfirmed</span></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td className="hidden-phone-portrait">the Bird</td>
                                                <td><a href="#">larry@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-important">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Peter</td>
                                                <td className="hidden-phone-portrait">Horadnia</td>
                                                <td><a href="#">peter@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-info">Active</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <blockquote>
                                    No distraction. Perfect. Just add <code>.table</code> className.
                                    </blockquote>
                                </div>
                            </section>
                        </div>
                        <div className="span6">
                            <section className="widget">
                                <header>
                                    <h4>
                                        <i className="icon-list-alt"></i>
                                    Stripped one
                                    </h4>
                                </header>
                                <div className="body">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>№</th>
                                                <th>First Name</th>
                                                <th className="hidden-phone-portrait">Last Name</th>
                                                <th>Email</th>
                                                <th className="hidden-phone-portrait">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Mark</td>
                                                <td className="hidden-phone-portrait">Otto</td>
                                                <td><a href="#">ottoto@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-success">New</span></td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Jacob</td>
                                                <td className="hidden-phone-portrait">Thornton</td>
                                                <td><a href="#">fat.thor@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-important">Pending</span></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Larry</td>
                                                <td className="hidden-phone-portrait">the Bird</td>
                                                <td><a href="#">larry@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-warning">Unconfirmed</span></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Peter</td>
                                                <td className="hidden-phone-portrait">Horadnia</td>
                                                <td><a href="#">peter@example.com</a></td>
                                                <td className="hidden-phone-portrait"><span className="badge badge-success">New</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <blockquote>
                                    Each row highlighted. You'll never lost. <code>.table-srtiped</code> it.
                                    </blockquote>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="row-fluid">
                        <div className="span10 offset1">
                            <section className="widget">
                                <header>
                                    <h4>
                                        <i className="icon-list-ol"></i>
                                    Varius content
                                    </h4>
                                </header>
                                <div className="body">
                                    <table className="table table-striped table-images">
                                        <thead>
                                            <tr>
                                                <th className="hidden-phone-portrait">№</th>
                                                <th>Picture</th>
                                                <th>Description</th>
                                                <th className="hidden-phone-portrait">Info</th>
                                                <th className="hidden-phone">Date</th>
                                                <th className="hidden-phone">Size</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="hidden-phone-portrait">1</td>
                                                <td>
                                                    <img src="img/jpeg/1.jpg" alt="" />
                                                </td>
                                                <td>
                                                Palo Alto
                                                </td>
                                                <td className="hidden-phone-portrait">
                                                    <p>
                                                        <small>
                                                            <strong>Type:</strong>
                                                        &nbsp; JPEG
                                                        </small>
                                                    </p>
                                                    <p>
                                                        <small>
                                                            <strong>Dimensions:</strong>
                                                        &nbsp; 200x150
                                                        </small>
                                                    </p>
                                                </td>
                                                <td className="hidden-phone">
                                                September 14, 2012
                                                </td>
                                                <td className="hidden-phone">
                                                45.6 KB
                                                </td>
                                                <td>
                                                    <button className="btn btn-small btn-primary">
                                                    Show
                                                    </button>
                                                    <button className="btn btn-small btn-warning" data-toggle="button">
                                                    Mark
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="hidden-phone-portrait">2</td>
                                                <td>
                                                    <img src="img/jpeg/2.jpg" alt="" />
                                                </td>
                                                <td>
                                                The Sky
                                                </td>
                                                <td className="hidden-phone-portrait">
                                                    <p>
                                                        <small>
                                                            <strong>Type:</strong>
                                                        &nbsp; PSD
                                                        </small>
                                                    </p>
                                                    <p>
                                                        <small>
                                                            <strong>Dimensions:</strong>
                                                        &nbsp; 2400x1455
                                                        </small>
                                                    </p>
                                                </td>
                                                <td className="hidden-phone">
                                                November 14, 2012
                                                </td>
                                                <td className="hidden-phone">
                                                15.3 MB
                                                </td>
                                                <td>
                                                    <button className="btn btn-small btn-primary">
                                                    Show
                                                    </button>
                                                    <button className="btn btn-small btn-warning" data-toggle="button">
                                                    Mark
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="hidden-phone-portrait">3</td>
                                                <td>
                                                    <img src="img/jpeg/3.jpg" alt="" />
                                                </td>
                                                <td>
                                                Down the road
                                                </td>
                                                <td className="hidden-phone-portrait">
                                                    <p>
                                                        <small>
                                                            <strong>Type:</strong>
                                                        &nbsp; JPEG
                                                        </small>
                                                    </p>
                                                    <p>
                                                        <small>
                                                            <strong>Dimensions:</strong>
                                                        &nbsp; 200x150
                                                        </small>
                                                    </p>
                                                </td>
                                                <td className="hidden-phone">
                                                September 14, 2012
                                                </td>
                                                <td className="hidden-phone">
                                                49.0 KB
                                                </td>
                                                <td>
                                                    <button className="btn btn-small btn-primary">
                                                    Show
                                                    </button>
                                                    <button className="btn btn-small btn-warning" data-toggle="button">
                                                    Mark
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="hidden-phone-portrait">4</td>
                                                <td>
                                                    <img src="img/jpeg/4.jpg" alt="" />
                                                </td>
                                                <td>
                                                The Edge
                                                </td>
                                                <td className="hidden-phone-portrait">
                                                    <p>
                                                        <small>
                                                            <strong>Type:</strong>
                                                        &nbsp; PNG
                                                        </small>
                                                    </p>
                                                    <p>
                                                        <small>
                                                            <strong>Dimensions:</strong>
                                                        &nbsp; 210x160
                                                        </small>
                                                    </p>
                                                </td>
                                                <td className="hidden-phone">
                                                September 15, 2012
                                                </td>
                                                <td className="hidden-phone">
                                                69.1 KB
                                                </td>
                                                <td>
                                                    <button className="btn btn-small btn-primary">
                                                    Show
                                                    </button>
                                                    <button className="btn btn-small btn-warning" data-toggle="button">
                                                    Mark
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="hidden-phone-portrait">5</td>
                                                <td>
                                                    <img src="img/jpeg/11.jpg" alt="" />
                                                </td>
                                                <td>
                                                Fortress
                                                </td>
                                                <td className="hidden-phone-portrait">
                                                    <p>
                                                        <small>
                                                            <strong>Type:</strong>
                                                        &nbsp; JPEG
                                                        </small>
                                                    </p>
                                                    <p>
                                                        <small>
                                                            <strong>Dimensions:</strong>
                                                        &nbsp; 1452x1320
                                                        </small>
                                                    </p>
                                                </td>
                                                <td className="hidden-phone">
                                                October 1, 2012
                                                </td>
                                                <td className="hidden-phone">
                                                2.3 MB
                                                </td>
                                                <td>
                                                    <button className="btn btn-small btn-primary">
                                                    Show
                                                    </button>
                                                    <button className="btn btn-small btn-warning" data-toggle="button">
                                                    Mark
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <div className="clearfix">
                                        <div className="pull-right">
                                            <button className="btn btn-small">
                                            Send to ...
                                            </button>
                                            <div className="btn-group">
                                                <button className="btn btn-small btn-inverse dropdown-toggle" data-toggle="dropdown">
                                                &nbsp; Clear &nbsp;
                                                    <i className="icon-caret-down"></i>
                                                </button>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Clear</a></li>
                                                    <li><a href="#">Move ...</a></li>
                                                    <li><a href="#">Something else here</a></li>
                                                    <li className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="pagination no-margin">
                                            <ul>
                                                <li className="disabled"><a href="#">Prev</a></li>
                                                <li className="active"><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">Next</a></li>
                                            </ul>
                                        </div>
                                    </div>
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


