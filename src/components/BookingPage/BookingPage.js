import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import bgImage from '../../images/coxBazarRec.png';
import { useHistory, useParams } from 'react-router-dom';
import fakeDataDestination from '../../fakeDataDestination';
import './BookingPage.css'
import { useForm } from 'react-hook-form';

const BookingPage = () => {
    //console.log(fakeDataDestination);
    const { id } = useParams();

    const bookingPlace = fakeDataDestination.find(place => parseInt(place.id) === parseInt(id));
    //console.log(bookingPlace);
    const { register, errors } = useForm();

    const history = useHistory();
    const handleProceedBooking =()=>{
        history.push(`/hotelPage/${id}`)
    }

    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})` }} className="home">
            <Header></Header>
            <Container>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <div className="col-md-5 bookingPage-info text-white">
                        <h1>{bookingPlace.placeName}</h1>
                        <p>{bookingPlace.description}</p>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <div className="row">
                            <form className="bookingPage-form" onSubmit={handleProceedBooking}>
                                <label>Origin</label>
                                <input name="origin" placeholder="Enter your origin" ref={register({ required: true })} />
                                {errors.origin && <span className="error">Origin is required</span>}

                                <label>Destination</label>
                                <input name="destination" defaultValue={bookingPlace.placeName} ref={register({ required: true })} />
                                {errors.destination && <span className="error">Destination is required</span>}

                                <div className="d-flex justify-content-between">
                                    <div className="mr-2">
                                        <label>From</label>
                                        <input name="from" type="date" ref={register({ required: true })} />
                                        {errors.from && <span className="error">Date is required</span>}
                                    </div>
                                    <div>
                                        <label>To</label>
                                        <input name="to" type="date" ref={register({ required: true })} />
                                        {errors.to && <span className="error">Date is required</span>}
                                    </div>
                                </div>
                                <input type="submit"  variant="warning" value="Start Booking" className="my-3 btn-block font-weight-bold"/>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default BookingPage;