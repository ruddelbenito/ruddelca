import { useForm } from 'react-hook-form'
import { useState, useRef } from 'react'
import { Alert, AlertTitle } from '@mui/material'
import emailjs from '@emailjs/browser'
import styles from '@/styles/contact.module.scss'

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
            <h1 className={styles.title}>Contact</h1>

            {showAlert ?
                <Alert className={styles.alert} severity={alertSeverity} icon={false}>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    {alertDescription}
                </Alert>
                :
                <></>
            }

            <form
                className={styles.form}
                onSubmit={handleSubmit(onSubmit, onError)}
                ref={form}
            >
                <div className={styles.name}>
                    <label>Name</label>
                    <input name='from_name' {...register('from_name', { required: true })}></input>
                </div>

                <div className={styles.email}>
                    <label>Email</label>
                    <input name='email' {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}></input>
                </div>

                <div className={styles.message}>
                    <label>Message</label>
                    <textarea name='message' {...register('message', { required: true })} />
                </div>

                <div className={styles.buttons}>
                    <button type='submit'>SEND</button>
                    <button onClick={() => onClear()}>CLEAR</button>
                </div>
            </form>

            <p className={styles.altContact}>Alternatively, you can reach me via email at <a className={styles.emailRedirect} href='mailto:ruddel.benito@gmail.com'>ruddel.benito@gmail.com</a></p>
        </>
    )
}