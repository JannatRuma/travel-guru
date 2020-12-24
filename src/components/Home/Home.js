import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import bgImage from '../../images/coxBazarRec.png';
import Header from '../Header/Header';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import fakeDataDestination from '../../fakeDataDestination'
import SinglePlace from '../SinglePlace/SinglePlace';
import { Link } from 'react-router-dom';

const Home = () => {
    const travelPlace = fakeDataDestination;
    const [place, setPlace] = useState(travelPlace);

    const [content, setContent] = useState(place[0]);
    const handlePlaceContent = (id) => {
        setContent(place[id]);
    }
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${bgImage})` }} className="home">
            <Container>
                <Header></Header>
                <Row>
                    <div className="d-flex justify-content-center align-items-center px-1">
                        <div className="col-md-4 slide-info text-white">
                            <h1>{content.placeName}</h1>
                            <p>{content.smallDescription}</p>
                            <Link to={`/bookingPage/${content.id}`}>
                                <Button variant="warning" className="customButton">Booking <FontAwesomeIcon icon={faArrowRight} /></Button>
                            </Link>
                        </div>
                        <div className="col-md-8 slide">
                            <div className="row">
                                {
                                    place.map(place =>
                                        <SinglePlace place={place} key={place.id} handlePlaceContent={handlePlaceContent}></SinglePlace>)
                                }
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Home;