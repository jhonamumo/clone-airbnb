import React from 'react'
import { Link } from 'react-router-dom'
import { Score } from '../../../components/Score'

export const Housing = ({ id, score, users, description, image, place }) => (
    <Link className="housing" to={ `/detail/${id}` }>
        <img src={image} />
        <div>
            <h3>{description}</h3>
            <h6>{place}</h6>
            <Score score={score} users={users} />
        </div>
    </Link>
)
