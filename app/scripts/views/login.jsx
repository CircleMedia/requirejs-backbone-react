define([
    'react'
], function(){
    'use strict';
    var React = require('react');

    var View = React.createClass({

        render: function() {

            return  <div className="single-widget-container">
                        <section className="widget login-widget">
                            <header className="text-align-center">
                                <h4>Login to your account</h4>
                            </header>
                            <div className="body">
                                <form className="no-margin" action="" method="get" >
                                    <fieldset>
                                        <div className="control-group no-margin">
                                            <label className="control-label" htmlFor="email">Email</label>
                                            <div className="control">
                                                <div className="input-prepend input-padding-increased">
                                                    <span className="add-on">
                                                        <i className="eicon-user icon-large"></i>
                                                    </span>
                                                    <input id="email" type="email" placeholder="Your Email" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="control-group">
                                            <label className="control-label" htmlFor="password">Password</label>
                                            <div className="control">
                                                <div className="input-prepend input-padding-increased">
                                                    <span className="add-on">
                                                        <i className="icon-lock icon-large"></i>
                                                    </span>
                                                    <input id="password" type="password" placeholder="Your Password" />
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <div className="form-actions">
                                        <a className="btn btn-block btn-large btn-danger" href="/#dashboard">
                                            <span className="small-circle"><i className="icon-caret-right"></i></span>
                                            <small>Sign In</small>
                                        </a>
                                        <div className="forgot"><a className="forgot" href="#">Forgot Username or Password</a></div>
                                    </div>
                                </form>
                            </div>
                            <footer>
                                <div className="facebook-login">
                                    <a href="/#dashboard"><span><i className="icon-facebook-sign icon-large"></i> LogIn with Facebook</span></a>
                                </div>
                            </footer>
                        </section>
                    </div>;

        }
    });

    React.render(
        <View />, document.getElementById('body_container'));

    /*
    function App() {
        this.View = React.createClass({
            render: function () {
                return (
                <div>
                <p>Hello, Oleg Kolomiets!</p>
                </div>
                );
            }
        });
    }

    App.prototype.init = function (element) {
        React.render(
            <this.View />,
            document.getElementById(element)
        );
    };

    return App;
    */
});
