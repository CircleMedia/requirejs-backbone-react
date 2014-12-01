define([
    'core/app',
    'templates',
    'underscore',
    'backbone'
], function (app, JST) {
    'use strict';
    app.Views.Login = app.Views.Base.extend({

        events: {
            'submit #login-form': 'onSubmit'
        },

        template: JST['app/scripts/templates/login.ejs'],

        initialize: function (data) {
            var that = this;
            _.bindAll(this, 'render');
            this.model = app.currentUser;
            if (!this.model) {
                this.model = app.currentUser = new app.Models.User();
            }
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },

        onSubmit: function (e) {
            var $form = $(e.currentTarget),
                data = $form.serializeObject(),
                that = this;
            e.preventDefault();
            this.toggleSpinner(true);
            app.helpers.validationErrorCleanup();
            this.model.login(data, function (err) {
                if (err) {
                    if (err.errors) {
                        _.each(err.errors, function (error) {
                            app.helpers.validationError({
                                message: error.msg,
                                target: $form.find('[name="' + error.param + '"]')
                            });
                        });
                    } else {
                        app.helpers.validationError({
                            message: err.message || 'Login error',
                            target: $form
                        });
                    }

                    return;
                }
                app.core.goTo('entitlements');
                that.toggleSpinner(false);
            });
        },

        onCreate: function (e) {
        },
        onDestroy: function (e) {
        }
    });

});
