import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePlace.css'

const SinglePlace = (props) => {
    const { placeName, img, id } = props.place;
    // console.log(props);
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 my-5 single-place">
            <Link to={`/bookingPage/${id}`} onClick={() =>{props.handlePlaceContent(props.id)}}>
                <img src={img} alt="" />
                <h3 className="place-name text-white ml-4">{placeName}</h3>
            </Link>
        </div>
    );
};

export default SinglePlace;