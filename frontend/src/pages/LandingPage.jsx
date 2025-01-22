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
        
        <div style={{height: '100vh', backgroundColor: 'lightgray'}}>
            <Navbar />
            <h3 className='mt-4'>Carros Disponibles</h3>
            <div className='container-fluid row justify-content-center'>
                <Card 
                    brand='Chevrolet'
                    model='Spark'
                    year='2021'
                    price='10000'
                    description='Carro pequeño'
                />
                <Card 
                    brand='Toyota'
                    model='corolla'
                    year='2020'
                    price='3000'
                    description='Carro sedan'
                />
            </div>
        </div>              
              
    )
}