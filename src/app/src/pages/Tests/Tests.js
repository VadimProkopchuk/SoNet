import React from "react";
import {connect} from "react-redux";

const Tests = (props) => {
    return (
        <React.Fragment>
            <h2>Test Page</h2>
            <h3>Current User</h3>
            <pre>
                {JSON.stringify(props.user, null, 2) }
            </pre>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.user.current
    }
}

export default connect(mapStateToProps)(Tests);



