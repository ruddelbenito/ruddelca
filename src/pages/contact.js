import { useForm } from 'react-hook-form'
import { useState, useRef } from 'react'
import { Alert, AlertTitle } from '@mui/material'
import styles from '@/styles/contact.module.scss'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const { register, handleSubmit, errors, reset } = useForm();
    const [showAlert, setShowAlert] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [alertTitle, setAlertTitle] = useState('');
    const [alertDescription, setAlertDescription] = useState('');
    const form = useRef();

    const onSubmit = (data) => {
        // console.log(data.email)

        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
            .then((result) => {

            }, (error) => {
                setAlertSeverity('warning')
                setAlertTitle('Could not send message, please try again')
                setAlertDescription('')
                setShowAlert(true)
            }
            )

        setAlertSeverity('success')
        setAlertTitle('Message sent successfully')
        setAlertDescription('Thank you for your message. If it warrants a response, I will reply via email!')
        setShowAlert(true)
        reset()
    }

    const onError = () => {
        setShowAlert(false)
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

            <form
                className={styles.contactForm}
                onSubmit={handleSubmit(onSubmit, onError)}
                ref={form}
            >
                <label className={styles.label}>Name</label>
                <input className={styles.input} name='from_name' {...register('from_name', { required: true })}></input>

                <label className={styles.label}>Email</label>
                <input className={styles.input} name='email' {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}></input>

                <label className={styles.label}>Message</label>
                <textarea className={styles.input} name='message' {...register('message', { required: true })} />

                <div className={styles.buttons}>
                    <button className={styles.buttonSend} type='submit'>Send</button>
                    <button className={styles.buttonClear} onClick={() => onClear()}>Clear</button>
                </div>
            </form>

            <p className={styles.emailText}>Alternatively, you can reach me via email at ruddel.benito@gmail.com</p>
        </>
    )
}