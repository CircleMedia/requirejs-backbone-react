define([
    'backbone',
    'react'
], function() {
    'use strict';
    var React = require('react');

    var View = ReactClasses.Searchresults = React.createClass({
        render: function () {
            return (
                <div className="row-fluid box-row">
                    <div className="span2">
                        <div className="box">
                            <div className="big-text">{this.props.data.iTotalDisplayRecords}</div>
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
                            <div className="big-text">{this.props.data.iGlobalRecords}</div>
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
