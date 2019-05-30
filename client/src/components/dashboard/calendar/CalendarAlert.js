import React, { Component } from 'react';
import { Icon } from "@blueprintjs/core";

class CalendarAlert extends Component {

    state = {
        done: ''
    }

    componentDidMount() {
        window.setTimeout(() => {
            this.setState({done: 'go-away'});
        }, 2000);
    }

    render() {
        return (
            <div onClick={() => this.props.toggleAlert('', '')} className={'calendar-alert ' + this.props.alertType + ' ' + this.state.done }>
                <span>{this.props.alertMessage}</span>
                <span><Icon icon="cross" /></span>
            </div>
        )
    }
}

export default CalendarAlert;