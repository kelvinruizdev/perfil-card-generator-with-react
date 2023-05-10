import React from "react";
import { PropTypes } from "prop-types";

function Error({message}) {
    return(
        <div className="alert alert-danger mt-3 mb-3" role="alert">
            {message}
        </div> 
    )
}

export default Error;

Error.propTypes = {
    message : PropTypes.string
}