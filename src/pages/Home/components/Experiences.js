import React from 'react'
import { Housing } from './Housing'

const posts = [
    {
        id: 1,
        image: 'https://a0.muscache.com/im/pictures/f3f1ac58-66b0-4d52-b754-a3b112431e52.jpg',
        description: "Lorem ipsum, dolor",
        place: '$ 33 evenings',
        score: 2,
        users: "300",
    },
    {
        id: 2,
        image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/08/3a/bd/fe.jpg',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        place: '$ 323 evenings',
        score: 1,
        users: "300",
    },
    {
        id: 3,
        image: 'https://i2.wp.com/parquestematicos.com/wp-content/uploads/2020/01/disneylandpark2020.jpeg',
        description: "Inventore corporis mollitia ipsam temporibus",
        place: '$ 222 evenings',
        score: 3,
        users: "300",
    },
    {
        id: 4,
        image: 'https://miro.medium.com/max/2560/1*_bfBYAoHLR3WsLWhLenw0A.jpeg',
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, odio.",
        place: '$ 310 evenings',
        score: 5,
        users: "396",
    },
    {
        id: 5,
        image: 'https://img.freepik.com/foto-gratis/hermosa-playa-tropical-mar-palmera-coco-isla-paradisiaca_74190-2206.jpg',
        description: "Sit amet consectetur adipisicing elit.",
        place: '$ 33 evenings',
        score: 4,
        users: "66",
    }
]

export const Experiences = () => (
    <section className="experiences" >
        {
            posts.map( el => <Housing key={ el.id } { ...el } /> )
        }
    </section>
)
