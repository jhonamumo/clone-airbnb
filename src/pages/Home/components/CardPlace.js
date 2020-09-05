import React from 'react'
import { Link } from 'react-router-dom'

export const CardPlace = ( props ) => (
    <Link className="card-place link" to={ `/${props.id}` }>
        <article style={{ backgroundImage: `url(${props.image})`}} />
        <section className="place-detail">
            <h4> { props.Title } </h4>
            <p> { props.price } </p>
            <section className="place-score">
            {
                Array( props.score ).fill( <i class="fa fa-star" /> )
            }
            <p> {props.vote} </p>
            </section>
        </section>
    </Link>
)
