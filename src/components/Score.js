import React from 'react'

const StarFill = () => (
    <i className="fa fa-star" />
)

const StarOutline = () => (
    <i className="fa fa-star-o" />
)

export const Score = ({ score=0, users=0 }) => (
    <section className="score">
        <div>
            {
                [1,2,3,4,5].map( el => el <= score? <StarFill /> : <StarOutline/> )
            }
        </div>
        <p>{ users }</p>
    </section>
)
