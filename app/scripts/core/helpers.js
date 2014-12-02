define([
    'core/app',
    'jquery',
    'underscore',
    'backbone'
], function (app) {
    'use strict';

    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };

    var h = {};
    h.validationError = function (options) {
        var $elem = $(options.target);
        var classes = 'qtip-validation' + (options.classes ? ' ' + options.classes : '');
        var errorContent = '<i class="glyphicon glyphicon-remove"></i>' + options.message;
        $elem.qtip({
            overwrite: false,
            content: errorContent,
            position: {
                my: 'left center',
                at: 'right center',
                effect: false,
                viewport: options.viewport || $(window),
                container: options.container || $('body')
            },
            show: {delay: 0, event: false, ready: true},
            style: {
                classes: classes,
                tip: {
                    width: 10,
                    height: 10
                }
            },
            hide: false
        });
        if (!app.data._validatioQtips) app.data._validatioQtips = [];
        app.data._validatioQtips.push($elem.data('qtip'));
    };
    h.validationErrorCleanup = function () {
        if (!app.data._validatioQtips) return;
        _.each(app.data._validatioQtips, function (qtip) {
            qtip.destroy();
        });
        app.data._validatioQtips = [];
    }

    h.validateForm = function ($form, err, defaultMessage) {
        if (err.errors) {
            _.each(err.errors, function (error) {
                app.helpers.validationError({
                    message: error.msg,
                    target: $form.find('[name="' + error.param + '"]')
                });
            });
        } else {
            app.helpers.validationError({
                message: err.message || (defaultMessage || 'Error'),
                target: $form
            });
        }
    }

    h.formatCommas = function(nStr) {
        nStr += ''; var x = nStr.split('.'); var x1 = x[0]; var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) { x1 = x1.replace(rgx, '$1' + ',' + '$2'); }
        return x1 + x2;
    };

    return h;
});
