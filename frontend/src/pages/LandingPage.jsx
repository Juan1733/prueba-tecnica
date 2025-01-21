import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import axios from 'axios';

export default function LandingPage() {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars()
    }, []);

    const getCars = async () => {
        try {
            const response = await axios.get('http://localhost:3000/cars');
            setCars(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        
        <div style={{height: '100vh'}}>
            <Navbar />
            <h3 className='mt-4'>Carros Disponibles</h3>
        </div>              
              
    )
}