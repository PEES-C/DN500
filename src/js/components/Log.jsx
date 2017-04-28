import React from "react";
import { connect } from "react-redux";
import { push } from 'react-router-redux';


@connect(null, (dispatch) => {
    return {
        onClick: () => {
            dispatch(push("/"));
        }
    };
})
class Log extends React.Component {
    /*componenteDidMount() {
    }*/
    /*componenteWillUnmount() {
    }*/

    render() {
        return (
            <div>
                <h1>Logbook</h1>
                <p>
                    <button onClick={this.props.onClick}>Gehe zu Status</button>
                </p>
            </div>
        );
    }
}
export default Log;
