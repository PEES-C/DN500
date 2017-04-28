import React from "react";
import { connect } from "react-redux";
import { push } from 'react-router-redux';

@connect(null, (dispatch) => {
    return {
        onClick: () => {
            dispatch(push("/log"));
        }
    };
})
class Home extends React.Component {
    /*componenteDidMount() {
    }*/
    /*componenteWillUnmount() {
    }*/

    render() {
        return(
            <div>
                <h1>Hallo Welt!</h1>
                <p>
                    <button onClick={this.props.onClick}>Gehe zu Logging</button>
                </p>
            </div>
        );
    }
}

export default Home;
