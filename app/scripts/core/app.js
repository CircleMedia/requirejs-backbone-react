define([
    'jquery',
    'underscore',
    'backbone',
    'react'
], function () {
    'use strict';
    $.ajaxSetup({
        xhrFields:{
            // Enables CORS for all ajax calls.
            withCredentials: true
        }
    });
    var React = require('react');
    var app = {
        Models: {},
        Collections: {},
        Views: {},
        Routers: {},
        data: {
            brands: {
                "louisville": "Louisville",
                "rutgers": "Rutgers"
            },
            accessLevel: {
                "1": "User",
                "100": "Admin"
            }
        },
        init: function () {
            switch(window.location.hostname){
                case 'local.circlemedia.io':
                    app.data.apiURL = 'http://local.circlemedia.io:3000';
                    break;
                case 'localhost':
                    app.data.apiURL = 'http://localhost:3000';
                    break;
            }
            app.core.router = new app.Routers.Main();
            app.$appContainer = $('#body_container');
            app.$appContainer.on('click','a',function(e){
                if($(this).attr('href')=='#') e.preventDefault();
            });
            app.checkLogin(function (err) {
                console.log(err);
                Backbone.history.start();
            });

        },

        checkLogin: function (cb) {
            var user = app.currentUser;
            if(!user){
                user = app.currentUser = new app.Models.User();
            }
            user.fetch({full: true}, function (err, r) {
                if(err){
                    app.core.goTo('login');
                } else if(user.get('acessLevel')<100){
                    user.logout(function () {
                        if(cb) cb(err);
                    });
                    return;
                }

                if(cb) cb(err);
            });
        },

        core: {
            goTo: function(url){
                window.location.hash = '#'+url;
            },
            switchToView: function(Class,args){
                if (app.currentView){
                    app.currentView.destroy();
                }
                app.currentView = new Class(args);
                app.$appContainer.append(app.currentView.el);
            },
            switchToReactView: function(View,args){
                var container = app.$appContainer[0];
                React.unmountComponentAtNode(container);
                require(['jsx!views/'+View], function(view){
                    React.render(React.createElement(view, args), container);
                });
            },
            storage: {
                set: function(key,data){
                    if(this.enabled)
                    {
                        if (typeof data === 'string') window.localStorage[key]=data;
                        if (typeof data === 'object') window.localStorage[key]=JSON.stringify(data);
                    }
                    else
                    {
                        return false;
                    }
                },
                get: function(key){
                    if(this.enabled)
                    {
                        var data;
                        try{
                            data = JSON.parse(window.localStorage[key]);
                        }
                        catch (e){
                            console.log('Local storage: return as string');
                            data = window.localStorage[key];
                        }
                        return data;
                    }
                    else
                    {
                        return false;
                    }
                },
                enabled: typeof(Storage)!=="undefined" ? true : false
            },

            apiCall: function (url, method, data, callback, progressCallback) {

                var requestObj, apiURL = app.data.apiURL+'/api/'+url;
                if (!data) data = {};
                function onSuccess(responseObj, textStatus, jqXHR){
                    if(responseObj.response===false){
                        onError(jqXHR,null,null,responseObj);
                    } else if (callback) {
                        app.data.list = responseObj.list;
                        callback(null,responseObj);
                    }
                }
                function onError(jqXHR, textStatus, errorThrown,responseObj) {
                    var errorObj = responseObj;
                    if (!errorObj && jqXHR.responseText){
                        //try to convert responseText into error json
                        try {
                            errorObj = JSON.parse(jqXHR.responseText);
                        } catch(er){
                        }
                    }
                    if(!errorObj) {
                        errorObj = {response: false, msg: 'Unknow error'};
                    }
                    errorObj.response = false;
                    errorObj.jqXHR = jqXHR;
                    errorObj.status = jqXHR.status;
                    if (callback) callback(errorObj);
                }
                requestObj = {
                    url: apiURL,
                    dataType: 'json',
                    type: method,
                    data: data,
                    success: onSuccess,
                    error: onError
                }
                if (data.file){
                    requestObj.cache = false;
                    requestObj.contentType = false;
                    requestObj.processData = false;
                    requestObj.type = 'POST';
                    var formData = new FormData();
                    for (var i in data){
                        formData.append(i,data[i]);
                    }
                    requestObj.data = formData;
                    if (progressCallback){
                        requestObj.xhr = function() {
                            var myXhr = $.ajaxSettings.xhr();
                            if(myXhr.upload){
                                myXhr.upload.addEventListener('progress',progressCallback, false);
                            }
                            return myXhr;
                        }
                    }
                }
                return $.ajax(requestObj);
            },
            router: null
        },
        helpers: {}

    };
    window.ReactClasses = {};
    return app;
});
