import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { requestHttp } from '../../config/HttpRequest'
import { FramePage } from './../FramePage'

export const BookingPage = () => {

    const {id} = useParams();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setemail] = useState('');
    const [bookingDate, setBookingDate] = useState('');
    const [isValidForm, setIsValidForm] = useState(false);

    const bookingHandler = (e) => {
        e.preventDefault();
        requestBooking();
    }

    const requestBooking = async () => {

        const body = {
            experience_id: id,
            name, //name: name
            phone,
            email,
            booking_date: bookingDate,
        }

        try {
            const response = await requestHttp('post', '/booking/reserve', body);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect( () => {
        setIsValidForm(name !== ''
            && phone !== ''
            && email !== ''
            && bookingDate !== '');
    },  [name, phone, email, bookingDate] );
    
    return(
    <FramePage>
       <form onSubmit={bookingHandler} className="booking-form">
           <div>
               <label>Nombre:</label>
               <input value={name} onChange={ e => setName(e.target.value) } type="text"></input>
           </div>
           <div>
               <label>Telefono:</label>
               <input value={phone} onChange={ e => setPhone(e.target.value) } type="tel"></input>
           </div>
           <div>
               <label>Correo:</label>
               <input value={email} onChange={ e => setemail(e.target.value) } type="email"></input>
           </div>
           <div>
               <label>Fecha de reserva:</label>
               <input value={bookingDate} onChange={ e => setBookingDate(e.target.value) } type="date"></input>
           </div>
           <Button disabled={!isValidForm} type="submit" label="Reservar ahora"></Button>
       </form>
    </FramePage>
    )
}
