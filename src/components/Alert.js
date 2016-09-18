import React from 'react';
import classnames from 'classnames';

export default React.createClass({
	propTypes: {
		message: React.PropTypes.string.isRequired,
		alertType: React.PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired
	},
	render: function() {
		let alertComponent = null;
		let alertClass = null;

		switch(this.props.alertType) {
			case 'success':
				alertClass = classnames('alert', 'alert-success');
				break;
			case 'info':
				alertClass = classnames('alert', 'alert-info');
				break;
			case 'warning':
				alertClass = classnames('alert', 'alert-warning');
				break;
			case 'danger':
				alertClass = classnames('alert', 'alert-danger');
				break;
		}

		if (this.props.message && this.props.message.trim() != "") {
			alertComponent = (<div className={alertClass} role="alert">
                        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <strong className="sr-only">Error:</strong>
                        <strong id="message"> {this.props.message}</strong>
                </div>);
		}

		return (alertComponent);
	}
});