import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Loader from './Loader';

const uriGetOne = "https://api-crud-stack-mern.herokuapp.com/api/get-one/"
const uriSave = "https://api-crud-stack-mern.herokuapp.com/api/save"
const uriUpdate = "https://api-crud-stack-mern.herokuapp.com/api/update/"

function Form(props) {

    let history = useHistory()
    const [state, setState] = useState()
    const { register, handleSubmit } = useForm()
    let onSubmit
    let { id } = useParams()

    if (props.value === 'Add') {
        onSubmit = data => {
            axios.post(uriSave, {
                name: data.name,
                email: data.email,
                number: data.number,
                location: data.location
            })
                .then(() => {
                    Swal.fire({
                        title: 'Succes',
                        text: props.message,
                        icon: 'success'
                    })
                        .then(result => {
                            if (result.isConfirmed)
                                history.push('/')
                        })
                })
        }
    }

    else if (props.value === 'Update') {

        async function fetcher() {
            await axios.get(uriGetOne + id)
                .then(res => setState(res.data.item))
        }

        fetcher()

        onSubmit = data => {
            axios.post(uriUpdate + id, {
                name: data.name,
                email: data.email,
                number: data.number,
                location: data.location
            })

            Swal.fire({
                title: 'Success',
                text: 'User data updated correctly',
                icon: 'success'
            })
        }
    }

    if (!state && props.value === 'Update') {
        return (
            <Loader/>
        );
    }

    return (
        <>
            <img id="form-img" src={props.img} alt="form-img" />
            <form className="form-default" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name</label>
                    {props.value === 'Add' &&
                        <input type="text" {...register("name")} />
                    }
                    {props.value === 'Update' && state &&
                        <input type="text" defaultValue={state.name} {...register("name")} />
                    }
                </div>
                <div>
                    <label>Email</label>
                    {props.value === 'Add' &&
                        <input type="text" {...register("email")} />
                    }
                    {props.value === 'Update' && state &&
                        <input type="text" defaultValue={state.email} {...register("email")} />
                    }
                </div>
                <div>
                    <label>Phone number</label>
                    {props.value === 'Add' &&
                        <input type="text" {...register("number")} />
                    }
                    {props.value === 'Update' && state &&
                        <input type="text" defaultValue={state.number} {...register("number")} />
                    }
                </div>
                <div>
                    <label>Ubication</label>
                    {props.value === 'Add' &&
                        <input type="text" {...register("location")} />
                    }
                    {props.value === 'Update' && state &&
                        <input type="text" defaultValue={state.location} {...register("location")} />
                    }
                </div>
                <input id="button-default" type="submit" value={props.value} />
            </form>
        </>
    );
}

export default Form;