import React from "react";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faAt,
    faLink,
    faPenToSquare
  } from '@fortawesome/free-solid-svg-icons'

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
                <h5>
                    <FontAwesomeIcon className="pe-2" icon={faUser} style={{color: "#000000",}} />
                    {fullname}
                </h5>
                <h5>
                    <FontAwesomeIcon className="pe-1" icon={faPenToSquare} style={{color: "#000000",}} />
                    {description}
                </h5>
                <h5><FontAwesomeIcon icon={faAt} style={{color: "#000000",}} /> {email}</h5>
                <h5><FontAwesomeIcon icon={faLink} style={{color: "#000000",}} />{github}</h5>
            </div>
        </div>
    );
}

export default Card;

Card.propTypes = {
    item: PropTypes.object
}