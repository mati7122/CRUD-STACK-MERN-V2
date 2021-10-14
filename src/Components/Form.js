import React from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';

const uri = "https://api-crud-stack-mern.herokuapp.com/api/save"

function Form(props) {

    const { register, handleSubmit } = useForm()
    // const onSubmit = data => console.log(data)
    const onSubmit = data => {
        axios.post(uri, {
            name: data.name,
            email: data.email,
            number: data.number,
            location: data.location
        })
            .then(() => {
                setTimeout(() => { mutate('get-data') }, 500)
            })
    }

    function Alert() {

        // axios.post('uri', {
        //     name: data.name
        // })

        Swal.fire({
            title: 'Succes',
            text: props.message,
            icon: 'success'
        })
    }

    return (
        <>
            <img id="form-img" src={props.img} alt="form-img"/>
            <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    <input type="text" {...register("name")}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" {...register("email")}/>
                </div>
                <div>
                    <label>Phone number</label>
                    <input type="text" {...register("number")}/>
                </div>
                <div>
                    <label>Ubication</label>
                    <input type="text" {...register("location")}/>
                </div>
                <input id="button-default" type="submit" value={props.value} onClick={() => Alert()} />
            </form>
        </>
    );
}

export default Form;