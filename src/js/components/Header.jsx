import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';

@connect(null, (dispatch) => {
    return {
        onClick: () => {
            dispatch(push("/log"));
        }
    };
})
class Header extends React.Component {
    /*componenteDidMount() {
    }*/
    /*componenteWillUnmount() {
    }*/

    render() {
        const { onClick } = this.props;

        return (
            <div>
                <h1>DN500</h1>
                <Link to="/">Status</Link>
                <span>  </span>
                <Link to="/log">Log</Link>
            </div>
        )
    }
}

export default Header;
