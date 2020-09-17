import React, { useEffect, useState } from 'react'
import { requestHttp } from '../../../config/HttpRequest';

export const CardDetail = ( {id} ) => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = async () => {
        try {
            const response = await requestHttp('get', `/experiences/detail/${id}`);
            const { detail } = response;
            setDetail(response.experiences);
        } catch (error) {
            console.error('error', error);
        }
    }

    return (
        <article className="card-detail">
            <img src={detail.image} />
            <p>
                {detail.description}
            </p>
        </article>
    )
}
