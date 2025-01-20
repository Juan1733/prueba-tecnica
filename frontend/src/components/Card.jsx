import axios from 'axios';
import React from 'react';

export default function Card(brand, model, year, price, description){     

    return(
        <div class="card">
            <div class="card-header">
                {brand} {model} {year}
            </div>
            <div class="card-body">
                <h5 class="card-title">{price} $</h5>
                <p class="card-text">{description}</p>
                <a class="btn btn-primary" >Eliminar</a>
                <a class="btn btn-primary" >Actualizar</a>
            </div>
        </div>
    )
}

