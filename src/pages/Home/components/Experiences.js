import React, {useEffect, useState} from 'react'
import { requestHttp } from '../../../config/HttpRequest';
import { Housing } from './Housing'

export const Experiences = () => {

    const [experiences, setExperiences] = useState([]);

    useEffect( () => {
        getAllExperiences();
    }, []);

    const getAllExperiences = async () => {
        try{
            const response = await requestHttp('get', '/experiences');
            const { experiences } = response;
            setExperiences(response.experiences);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <section className="experiences" >
            {
                experiences.map( el => <Housing key={ el._id } { ...el } /> )
            }
        </section>
    )
}
