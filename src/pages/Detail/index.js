import React from 'react'
import { Title } from './../../components/Title'
import { CardDetail } from './components/CardDetail'
import { Button } from './../../components/Button'

const buttonStyle = {
    backgroundColor: '#FC642D',
    boderColor: '#FE530C',
}

export const DetailPage = () => (
    <section className="page">
        <Title label="Parapente San Felix" />
        <CardDetail />
        <Button style={ buttonStyle } label="Reserva ahora!" type="Submit" />
    </section>
)
