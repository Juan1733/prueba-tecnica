import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';

export default function LandingPage() {

    const [cars, setCars] = useState([]);

    return(
        
        <div className='container row'>
            <Navbar />
            <h2 className='mt-2'>Carros</h2>
        </div>              
              
    )
}