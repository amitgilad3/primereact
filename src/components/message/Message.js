import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class Message extends Component {

    static defaultProps = {
        id: null,
        className: null,
        style: null,
        text: null,
        severity: 'info'
    }

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        text: PropTypes.string,
        severity: PropTypes.string
    };

    render() {

        let className = classNames('ui-message ui-widget ui-corner-all', {
            'ui-messages-info': this.props.severity === 'info',
            'ui-messages-warn': this.props.severity === 'warn',
            'ui-messages-error': this.props.severity === 'error',
            'ui-messages-success': this.props.severity === 'success'
        });

        let icon = classNames('ui-message-icon fa fa-fw', {
            'fa-info-circle': this.props.severity === 'info',
            'fa-warning': this.props.severity === 'warn',
            'fa-close': this.props.severity === 'error',
            'fa-check': this.props.severity === 'success',
        });

        return <div id={this.props.id} aria-live="polite" className={className} style={this.props.style}>
            <span className={icon}></span>
            <span className="ui-message-text">{this.props.text}</span>
        </div>;
    }
}