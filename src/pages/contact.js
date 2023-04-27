import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Alert, AlertTitle } from '@mui/material';

export default function Contact() {
    const { register, errors, handleSubmit, reset } = useForm();
    const [showAlert, setShowAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertDescription, setAlertDescription] = useState('');

    const onSubmit = (data) => {
        setShowAlert(true)
        console.log(data)
        reset()
    }

    const onError = (errors) => {
        console.log(errors)
    }

    return (
        <>
            <h1>Contact</h1>

            {showAlert ?
                <Alert severity='success'>
                    <AlertTitle>This is a test alert</AlertTitle>
                    {alertDescription}
                </Alert>
                :
                <></>
            }

            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label>Name</label>
                <input {...register('name', { required: true })}></input>

                <label>Email</label>
                <input {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}></input>

                <label>Message</label>
                <textarea {...register('message', { required: true })} />

                <button type='submit'>Send</button>
                <button onClick={(e) => reset()}>Clear</button>
            </form>

            <div>
                Alternatively, you can email me at ruddel.benito@gmail.com
            </div>
        </>
    )
}