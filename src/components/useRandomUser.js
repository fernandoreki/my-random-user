import { useEffect } from "react";
import { useState } from "react";

const useRandomUser = (urlApi) => {
    //const url = 'https://randomuser.me/api/?nat=mx';
    const [userData, setUserData] = useState();
    let userAux = {};
    const fetchApi = async () => {
        const response = await fetch(urlApi);
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
            age: responseJSON.results[0].dob.age,
            phone: responseJSON.results[0].phone,
            picture: responseJSON.results[0].picture.medium,
            nat: responseJSON.results[0].nat
        }
        //console.log(userAux);
        setUserData(userAux)
    };

    useEffect(() => {
        fetchApi()
    });
    console.log('data', userData);
    return userData;
};

export default useRandomUser;