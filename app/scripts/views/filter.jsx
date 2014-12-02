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
            var input1 = this.props.isDataset1 ?
                <input type="radio" name="dataset" ref="dataset1Input" value={this.props.isDataset1} className="uniform" onChange={this.handleChange} checked/> :
                <input type="radio" name="dataset" ref="dataset1Input" value={this.props.isDataset1} className="uniform" onChange={this.handleChange} />
            var input2 = this.props.isDataset2 ?
                <input type="radio" name="dataset" ref="dataset2Input" value={this.props.isDataset2} className="uniform" onChange={this.handleChange} checked/> :
                <input type="radio" name="dataset" ref="dataset2Input" value={this.props.isDataset2} className="uniform" onChange={this.handleChange} />

            return (
                <div className="row-fluid">
                    <div className="span4">
                        <section className="widget">
                            <header>
                                <h4>
                                    <i className="icon-check"></i> Filters
                                </h4>
                            </header>
                            <body>
                                <form className="form-horizontal">
                                    <fieldset>
                                        <div className="control-group">
                                            <label className="control-label">Data set</label>
                                            <div className="controls">
                                                <label className="radio inline">
                                                    {input1}
                                                1</label>
                                                <label className="radio inline">
                                                    {input2}
                                                2 </label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </body>
                        </section>
                    </div>
                </div>
            );
        }
    });

    return View;
});
