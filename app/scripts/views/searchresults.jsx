define([
    'backbone',
    'react',
    'core/helpers'
], function() {
    'use strict';
    var React = require('react');
    var h = require('core/helpers');

    var View = ReactClasses.Searchresults = React.createClass({
        render: function () {
            var search = h.formatCommas(this.props.data.iTotalDisplayRecords);
            var total = h.formatCommas(this.props.data.iGlobalRecords);
            return (
                <div className="row-fluid box-row">
                    <div className="span2">
                        <div className="box">
                            <div className="big-text">{search}</div>
                            <div className="description">Search</div>
                        </div>
                    </div>
                    <div className="span2">
                        <div className="box">
                            <div className="big-text">{this.props.data.iGlobalPercent}%</div>
                            <div className="description">of Total Fans</div>
                        </div>
                    </div>
                    <div className="span2">
                        <div className="box">
                            <div className="big-text">{total}</div>
                            <div className="description">Total Fans</div>
                        </div>
                    </div>
                    <div className="span2">
                        <div className="box">
                            <div className="big-text">{this.props.data.fandexScore}</div>
                            <div className="description">Fandex Score</div>
                        </div>
                    </div>
                </div>

            );

        }
    });

    return View;

});
