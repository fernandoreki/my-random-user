import React, { useEffect, useState } from 'react'
import '../componentStyles/RandomUserCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const RandomUserCard = (props) => {
    const [userData, setUserData] = useState({});
    const [randomNumber, setRandomNumber] = useState([]);
    let userAux = {};
    const fetchApi = async () => {
        const response = await fetch(props.url);
        const responseJSON = await response.json();
        userAux = {
            title: responseJSON.results[0].name.title,
            name: responseJSON.results[0].name.first,
            lastname: responseJSON.results[0].name.last,
            gender: responseJSON.results[0].gender,
            street_number: responseJSON.results[0].location.street.number,
            street_name: responseJSON.results[0].location.street.name,
            city: responseJSON.results[0].location.city,
            state: responseJSON.results[0].location.state,
            country: responseJSON.results[0].location.country,
            email: responseJSON.results[0].email,
            birth: responseJSON.results[0].dob.date,
            age: responseJSON.results[0].dob.age,
            phone: responseJSON.results[0].phone,
            picture: responseJSON.results[0].picture.large,
            nat: responseJSON.results[0].nat
        }
        setUserData(userAux);
    };

    const getRandomNumber = () => {
        return Math.floor((Math.random() * 1000) + 1);;
    }

    let randomNumberAux = [];

    for (let i = 0; i < 4; i++) {
        randomNumberAux.push(getRandomNumber());
    }

    const Number = ({ number }) => {
        return <p>{number}</p>
    }

    useEffect(() => {
        fetchApi();
        setRandomNumber(randomNumberAux);
    }, []);

    return (
        <div className='container'>
            <section className="section about-section gray-bg pt-3" id="about">
                <div>
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-lg-6">
                            <div className="about-text go-to">
                                <h3 className="dark-color text-dark">{userData.title + ' ' + userData.name + ' ' + userData.lastname}</h3>
                                <h6 className="theme-color lead">Personal data ⬇</h6>
                                <div className="row about-list">
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Birthday</label>
                                            <p>{userData.birth}</p>
                                        </div>
                                        <div className="media">
                                            <label>Age</label>
                                            <p>{userData.age}</p>
                                        </div>
                                        <div className="media">
                                            <label>Residence</label>
                                            <p>{userData.state + ', ' + userData.country}</p>
                                        </div>
                                        <div className="media">
                                            <label>Address</label>
                                            <p>{userData.city + ', ' + userData.street_name + ', #' + userData.street_number}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>E-mail</label>
                                            <p>{userData.email}</p>
                                        </div>
                                        <div className="media">
                                            <label>Phone</label>
                                            <p>{userData.phone}</p>
                                        </div>
                                        <div className="media">
                                            <label>Gender</label>
                                            <p>{userData.gender}</p>
                                        </div>
                                        <div className="media">
                                            <label>Nacionality</label>
                                            <p>{userData.nat}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-avatar">
                                <img src={userData.picture} title="" alt="picture" height='250px' />
                            </div>
                        </div>
                    </div>
                    <div className="counter">
                        <div className="row">
                                <div className="col-6 col-lg-3 text-dark">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="500" data-speed="500">{randomNumber[0]}</h6>
                                        <p className="m-0px font-w-600">Happy Clients</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="150" data-speed="150">{randomNumber[1]}</h6>
                                        <p className="m-0px font-w-600">Project Completed</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="850" data-speed="850">{randomNumber[2]}</h6>
                                        <p className="m-0px font-w-600">Photo Capture</p>
                                    </div>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <div className="count-data text-center">
                                        <h6 className="count h2" data-to="190" data-speed="190">{randomNumber[3]}</h6>
                                        <p className="m-0px font-w-600">Telephonic Talk</p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
