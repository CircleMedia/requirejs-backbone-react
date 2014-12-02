define([
    'backbone',
    'react'
], function() {
    'use strict';
    var React = require('react');
    var View = ReactClasses.Filter = React.createClass({
        handleChange: function() {
            this.props.onUserInput(
                this.refs.dataset1Input.getDOMNode().checked,
                this.refs.dataset2Input.getDOMNode().checked
            );
        },
        render: function () {
            return (
                <div className="row-fluid">
                    <div className="span4">
                        <form className="form-horizontal">
                            <fieldset>
                                <div className="control-group">
                                    <label className="control-label">Data set</label>
                                    <div className="controls">
                                        <label className="radio inline">
                                            <input type="radio" name="dataset" ref="dataset1Input" value={this.props.isDataset1} className="uniform" onChange={this.handleChange} />
                                        1</label>
                                        <label className="radio inline">
                                            <input type="radio" name="dataset" ref="dataset2Input" value={this.props.isDataset2} className="uniform" onChange={this.handleChange} />
                                        2 </label>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            );
        }
    });

    return View;
});
