import React from "react";
import { PropTypes } from "prop-types";


function Card({item}) {
    //Destructuracion
    const {fullname, description, email, github} = item;

    return(
        <div className="personal-card border border-secondary rounded ">
            <div>
                <img src={`https://unavatar.io/github/${github}`} 
                    alt={`Github de ${fullname}`}/>
            </div>
            <div>
                <p>{fullname}</p>
                <p>{email}</p>
                <p>{github}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object
}