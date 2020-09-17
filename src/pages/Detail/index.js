import React from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from './../../components/Button'
import { useParams } from 'react-router-dom'
import { FramePage }  from './../FramePage'

const buttonStyle = {
    backgroundColor: '#FC642D',
    boderColor: '#FE530C',
}

// hook

export const DetailPage = () => {

    const { id } = useParams();

    return (
        <FramePage>
            <Title label="Parapente San Felix" />
            <CardDetail id={id} />
            <Button isLink={true} linkTo={`/booking/${id}`} style={buttonStyle} label="Reserva ahora!" type="Submit" />
        </FramePage>
    )
}
