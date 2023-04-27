import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Alert, AlertTitle } from '@mui/material'
import styles from '@/styles/contact.module.scss'

export default function Contact() {
    const { register, handleSubmit, errors, reset } = useForm();
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertDescription, setAlertDescription] = useState('');

    const onSubmit = (data) => {
        // console.log(data.email)
        setAlertSeverity('success')
        setAlertTitle('Message sent successfully')
        setAlertDescription('Thank you for your message. If it warrants a response, I will reply via email!')
        setShowAlert(true)
        reset()
    }

    const onError = (errors) => {
        setAlertSeverity('error')
        setAlertTitle('Could not send message')
        setAlertDescription('One or more inputs are invalid. Please double-check them and try again')
        setShowAlert(true)

    }

    const onClear = () => {
        reset()
        setShowAlert(false)
    }

    return (
        <>
            <h1>Contact</h1>

            {showAlert ?
                <Alert severity={alertSeverity}>
                    <AlertTitle>{alertTitle}</AlertTitle>
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
                <button onClick={() => onClear()}>Clear</button>
            </form>

            <div>
                Alternatively, you can email me at ruddel.benito@gmail.com
            </div>
        </>
    )
}