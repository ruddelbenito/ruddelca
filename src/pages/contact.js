import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Contact() {
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    const onError = errors => {
        console.log(errors)
    }

    return (
        <>
            <h1>Contact</h1>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label>Name</label>
                <input {...register('name', { required: true })}></input>

                <label>Email</label>
                <input {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}></input>

                <label>Message</label>
                <textarea {...register('message', { required: true })} />

                <button type='submit'>Send</button>
                <button>Clear</button>
            </form>

            <div>
                Alternatively, you can email me at ruddel.benito@gmail.com
            </div>
        </>
    )
}