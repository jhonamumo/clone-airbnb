import React, { useEffect, useState } from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from './../../components/Button'
import { useParams } from 'react-router-dom'
import { FramePage }  from './../FramePage'
import { requestHttp } from '../../config/HttpRequest'

const buttonStyle = {
    backgroundColor: '#FC642D',
    boderColor: '#FE530C',
}

// hook

export const DetailPage = () => {

    const { id } = useParams();

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = async () => {
        try {
            const response = await requestHttp('get', `/experiences/detail/${id}`);
            const { detail } = response;
            setDetail(response.experience);
        } catch (error) {
            console.error('error', error);
        }
    }

    return (
        <FramePage>
            <Title label={detail.place} />
            <CardDetail { ...detail } />
            <Button isLink={true} linkTo={`/booking/${id}`} style={buttonStyle} label="Reserva ahora!" type="Submit" />
        </FramePage>
    )
}
