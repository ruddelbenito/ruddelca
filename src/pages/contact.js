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
        console.log('save attempt')
        setAlertSeverity('success')
        setAlertTitle('Message sent successfully')
        setAlertDescription('Thank you for your message. If it warrants a response, I will reply via email!')
        setShowAlert(true)
        reset()
    }

    const onError = () => {

    }

    const onClear = () => {
        reset()
        setShowAlert(false)
    }

    return (
        <>
            <h1>Contact</h1>

            {showAlert ?
                <Alert className={styles.alert} severity={alertSeverity} icon={false}>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    {alertDescription}
                </Alert>
                :
                <></>
            }

            <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit, onError)}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} {...register('name', { required: true })}></input>

                <label className={styles.label}>Email</label>
                <input className={styles.input} {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}></input>

                <label className={styles.label}>Message</label>
                <textarea className={styles.input} {...register('message', { required: true })} />

                <div className={styles.buttons}>
                    <button className={styles.buttonSend} type='submit'>Send</button>
                    <button className={styles.buttonClear} onClick={() => onClear()}>Clear</button>
                </div>
            </form>

            <p className={styles.emailText}>Alternatively, I can be reached at ruddel.benito@gmail.com</p>
        </>
    )
}