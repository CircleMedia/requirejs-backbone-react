define([
    'core/app',
    'jquery',
    'underscore',
    'backbone',
    'moment'
], function (app) {
    'use strict';
    app.Models.User = app.Models.Base.extend({
        idAttribute: 'id',
        defaults: function () {
            return {
                id: "",
                accessLevel: 1,
                address: {},
                created: moment(),
                email: "",
                entitlements: [],
                favorite: {athlete: [], team: [], sport: []},
                lastLogin: moment(),
                magplus: [],
                name: {first: '', last: ''},
                password: true,
                role: "user",
                twitter: {},
                facebook: {}
            }
        },
        loaded: false,
        numericAttributes: ['accessLevel'],
        dateAttributes: ['created', 'lastLogin'],
        initialize: function () {
        },
        parse: function (data) {
            _.each(this.numericAttributes, function (attr) {
                if (typeof data[attr] == "undefined") return;
                data[attr] = data[attr] * 1;
            });
            _.each(this.dateAttributes, function (attr) {
                if (!data[attr]) return;
                data[attr] = moment(data[attr]);
            });

            return data;
        },

        fetch: function (aaa, cb) {
            var that = this;
            app.core.apiCall('user/get', 'GET', {id: this.id}, function (err, r) {
                if (!err) {
                    that.set(that.parse(r.user));
                    that.loaded = true;
                }
                if (cb) {
                    cb.call(that, err);
                }
            });
        },

        save: function (data, cb) {
            var that = this,
                apiUrl;
            data.id = this.id;
            apiUrl = data.id ? 'user/update' : 'user/create';
            app.core.apiCall(apiUrl, 'POST', data, function (err, r) {
                if (!err) {
                    that.set(that.parse(r.user));
                    that.loaded = true;
                    if (that.collection) {
                        that.collection.sort();
                    }
                }
                if (cb) cb.call(that, err);
            });
        },

        remove: function (cb) {
            var that = this;
            app.core.apiCall('user/remove', 'POST', {id: this.id}, function (err, r) {
                if (!err) {
                    that.clear();
                    if (that.collection) {
                        that.collection.remove(that);
                    }
                    that.loaded = true;
                }
                if (cb) cb.call(that, err);
            });
        },

        login: function (data, cb) {
            var that = this;
            app.core.apiCall('login', 'POST', data, function (err, r) {
                if (!err && r.user) {
                    if (r.user.accessLevel < 100) {
                        if (cb) cb.call(that, {response: false, message: 'You have insufficient access level!'});
                        that.logout();
                        return;
                    }
                    that.clear();
                    that.set(that.parse(r.user));
                    that.loaded = true;
                }
                if (cb) cb.call(that, err);
            });
        },

        logout: function (cb) {
            var that = this;
            app.core.apiCall('logout', 'get', null, function (err, r) {
                if (!err) {
                    that.clear();
                    that.loaded = false;
                    app.core.goTo('login');
                }
                if (cb) cb.call(that, err);
            });
        },

        uploadImage: function (file, cb, progressCallback) {
            var that = this,
                data = {
                    id: this.id,
                    file: file
                };
            app.core.apiCall('user/addThumbnail', 'POST', data, function (err, r) {
                if (!err) {
                    that.set({thumbnail: r.thumbnail});
                }
                if (cb) cb.call(that, err);
            }, function (e) {
                if (progressCallback) progressCallback.call(that);
            });
        },

        getThumbnailUrl: function (targetSize) {
            if (!this.get('thumbnail')) return '';
            var url = _.find(this.get('thumbnail'), function (tUrl, tSize) {
                if (tSize == 'origin') return false;
                return tSize * 1 >= targetSize * 1;
            });

            if (!url) {
                url = this.get('thumbnail').origin;
            }

            return url ? app.data.apiURL + '/' + url : '';
        }

    });
});
