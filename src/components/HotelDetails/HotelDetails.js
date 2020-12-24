import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './HotelDetails.css';

const HotelDetails = (props) => {
    // console.log(props.hotelDetails)
    const { hotelId, img, description, facilities, hotelName, price, ratings } = props.hotelDetails;
    
    return (
        <div className="my-5 d-flex justify-content-between align-items-center">
            <div className="col-md-5">
                <img src={img} alt="hotel" className="img-fluid" />
            </div>
            <div className="col-md-7 hotel-info">
                <h5>{hotelName}</h5>
                <p>{description}</p>
                <p>{facilities}</p>
                <div className="price-rating d-flex">
                    <div className="rating mr-5">
                        <h6><FontAwesomeIcon icon={faStar} className="star-icon mr-2"/>{ratings}</h6>
                    </div>
                    <div className="price">
                        <h6><span className="font-weight-bold">${price}</span>/night</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelDetails;