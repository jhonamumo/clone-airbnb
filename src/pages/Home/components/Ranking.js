import React, {useEffect, useState} from 'react'
import { requestHttp } from '../../../config/HttpRequest';
import { Card } from './Card'


export const Ranking = () => {

    const [booking, setBooking] = useState([]);

    useEffect( () => {
        getAllRanking();
    }, []);

    const getAllRanking = async () => {
        try{
            const response = await requestHttp('get', '/experiences/top5');
            const { booking } = response;
            setBooking(response.top5);
        } catch (error) {
            console.error('error', error);
        }
    }

    return (
        <section className="ranking">
            {
                booking.map(el => <Card key={el.id} { ...el } />)
            } 
            {
                //posts.map((el, i) => <Card key={i} id={ el.id } image={el.image} description={el.description} place={el.place} />)
            } 
        </section>
    )
}
