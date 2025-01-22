import axios from 'axios';
import React from 'react';
import "./Card.css";
import { useState } from 'react';

export default function Card({brand, model, year, price, description, id}) {    

    const [updatedData, setUpdatedData] = useState({
        brand: '',
        model: '',
        year: '',
        price: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUpdatedData((prevState) => ({
        ...prevState,
        [id]: value,
        }));
    };
    
    const deleteCar = async () => {
        try {
            const response = await axios.delete('http://localhost:3000/cars');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    const updateCar = async () => {
        try {
          const response = await axios.put(`http://localhost:3000/cars/${id}`, updatedData);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    };

    return(        
        <div className="card text-white p-3">
            <div className="card-header">
                <h5 className="card-title">{brand} {model} {year}</h5>
            </div>
            <div className="card-body">
                <h6 className="card-text">{price} $</h6>
                <p className="card-text">{description}</p>
                <a className="btn btn-primary delete" onClick={deleteCar}>Eliminar</a>
                                
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Actualizar
                </button>

                
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">                            
                            <div className="modal-body">
                                <div className="row my-3">
                                    <div className="col">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Marca"
                                            id='brand'
                                            value={updatedData.brand}
                                            onChange={handleInputChange}/>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Modelo"
                                            id='model'
                                            value={updatedData.model}
                                            onChange={handleInputChange}/>
                                    </div>
                                    <div className="col-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Año"
                                            id='year'
                                            value={updatedData.year}
                                            onChange={handleInputChange}/>
                                    </div>                                    
                                </div>

                                <div className="row my-3">
                                    <div className="col-3">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Precio"
                                            id='price'
                                            value={updatedData.price}
                                            onChange={handleInputChange}/>
                                    </div>
                                    <div className="col">
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Descripcion"
                                            id='description'
                                            value={updatedData.description}
                                            onChange={handleInputChange}/>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary delete" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={updateCar}>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>            
    )
}

