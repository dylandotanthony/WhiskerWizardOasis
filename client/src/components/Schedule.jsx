import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import { Table, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, } from 'react';
import { format, compareAsc } from 'date-fns'
import banner from '../img/catBanner.png'




const Schedule = (props) => {

    const { reservation, setReservation } = props;
    const navigate = useNavigate();

    const sortedActivities = reservation.sort((a, b) => b.date - a.date)
    console.log(sortedActivities);


    useEffect(() => {
        axios.get("http://localhost:8000/api/reservations")
            .then((res) => {
                console.log(res.data);
                setReservation(res.data);
            })
            .catch((err) => console.log(err));
    }, [])


    const deleteReservation = (reservationId) => {
        axios.delete('http://localhost:8000/api/reservations/' + reservationId)
            .then(res => {
                console.log(res.data);
                const newList = reservation.filter((reservations, index) => reservations._id !== reservationId)
                setReservation(newList);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <div>
            <img src={banner} style={{ width: '750px', marginLeft: '300px', borderRadius: '25px' }} />
            <div className='d-flex p-2 justify-content-center'>
                <div >
                    <Table hover style={{ width: '750px' }}>
                        <thead>
                            <tr>
                                <th> Pet Name </th>
                                <th> Date </th>
                                <th> Service </th>
                                <th> Update </th>
                                <th> Delete </th>
                            </tr>
                        </thead>
                        {reservation.map((booking, index) => (
                            <tbody>
                                <tr key={index}>
                                    <td>{booking.petName}</td>
                                    <td>{format(new Date(booking.date), 'MM/dd/yyyy')}</td>
                                    <td>{booking.service}</td>
                                    <td>
                                        <Link to={`/reservations/update/${booking._id}`}>
                                            <Button variant="outline-secondary">
                                                Update
                                            </Button>{' '}
                                        </Link>
                                    </td>
                                    <td>
                                        <Button variant="outline-danger" onClick={() => deleteReservation(booking._id)}>
                                            Delete
                                        </Button>{' '}
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </div>

    )
}

export default Schedule;