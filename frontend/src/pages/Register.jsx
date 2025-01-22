import axios from "axios";
import React from "react";
import Navbar from "../components/Navbar";

export default function Register() {

    const registerCar = () => {
       let car = verifyData();

       axios.post('http://localhost:3000/cars', car)
       .then((response) => {
           console.log(response);
       })
       .catch((error) => {
           console.log(error);
        })
    }

    const verifyData = () => {        

        const brand = document.getElementById('inputBrand').value;
        const model = document.getElementById('inputModel').value;
        const year = document.getElementById('inputYear').value;
        const price = document.getElementById('inputPrice').value;
        const description = document.getElementById('inputDescription').value;

        if (brand === '' || model === '' || year === '' || price === '' || description === '') {
            alert('Por favor, complete todos los campos');
            return false;
        }

        const car = {
            brand: brand,
            model: model,
            year: year,
            price: price,
            description: description
        }

        return car;
    }

    return (
        <div style={{height: '100vh', backgroundColor: 'lightgray'}}>
            <Navbar />
            <div className="container">
                <form className="row g-3 mt-5">
                    <div className="col-md-6">
                        <label className="form-label">Marca</label>
                        <input type="text" className="form-control" id="inputBrand"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Modelo</label>
                        <input type="text" className="form-control" id="inputModel"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Año</label>
                        <input type="text" className="form-control" id="inputYear"/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Precio</label>
                        <input type="text" className="form-control" id="inputPrice"/>
                    </div>
                    <div class="col-12">
                        <label class="form-label">Descripcion</label>
                        <input type="text" className="form-control" id="inputDescription"/>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary" onClick={registerCar}>Registrar</button>
                    </div>
                </form>
            </div>            
        </div>
        
    )
}