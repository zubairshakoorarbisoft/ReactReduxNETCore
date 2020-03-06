import React, { Component } from "react";
import { fetchWeatherForcasts } from "../actions";
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'


class PostList extends Component {
    componentDidMount() {
        this.props.fetchWeatherForcasts();
    }

    renderWeathersList() {
        return this.props.weathers.map(weather => {
            return (
                <tr key={weather.date}>
                    <td>{weather.date}</td>
                    <td>{weather.temperatureC}</td>
                    <td>{weather.temperatureF}</td>
                    <td>{weather.summary}</td>
                </tr>
            );
        });
    }

    render() {
        debugger
        if (!this.props.isLoggedIn) {
            return <Redirect to='/Account/Login' />
        }
        return (<table className="table">
            <thead>
                <th>Date</th>
                <th>Temp In C</th>
                <th>Temp In F</th>
                <th>Summary</th>
            </thead>
            <tbody>
                {this.renderWeathersList()}
            </tbody>
        </table>);
    }
}

function MapStateToProps(state) {
    return { weathers: state.weathers, isLoggedIn: state.isLoggedIn };
}

export default connect(MapStateToProps, { fetchWeatherForcasts })(PostList);
