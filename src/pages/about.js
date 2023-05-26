import moment from 'moment'
import styles from '@/styles/about.module.scss'
import Link from 'next/link'
import Dialog from '@mui/material/Dialog'
import { useState } from 'react'

export default function About() {
    const [modalVisible, setModalVisible] = useState(false);
    const currentAge = moment().diff(moment('1999-09-09'), 'years', false);

    const openModal = () => {
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <>
            <h1>About</h1>

            <div className={styles.intro}>
                <p>Hi, I'm Russel. I'm a {currentAge}-year-old software developer from Edmonton, Alberta, Canada. </p>
                <p className={styles.pronouns}>he/him</p>
            </div>

            <div className={styles.devBackground}>
                <div className={styles.school}>
                    <p>
                        I graduated from the Northern Alberta Institute of Technology (NAIT)'s Digital Media and IT - Computer Software Development program in September 2022.
                    </p>
                    <p>
                        During my time there, I learned a multitude of languages, skills, and a foundation of knowledge surrounding the software development life cycle
                        — from programming languages such as C#, SQL, and JavaScript to project management, communications, and agile/scrum methodologies.
                    </p>
                </div>
                <div className={styles.postSchool}>
                    <p>
                        After school, I decided to work part-time while in pursuit of a software career. I took on a <Link href='/projects'>project</Link> that I would work
                        on during my off-days, which gave me more software experience and a sense of direction career-wise.
                    </p>
                </div>
            </div>

            <div className={styles.interests}>
                <p>Outside of software development, I enjoy music, going to the gym, and video games.</p>
                <div className={styles.music}>
                    <p>
                        Music has always been an important part of my life.It can serve as a form of expression, a mood enhancer, and can bring people together.
                        I have also I took up the guitar at the age of 10, and continue to play to this day (albeit terribly).
                        I also believe that music and sound, or a lack thereof, can help portray expression in other forms of media.
                        Movies like Baby Driver and Guardians of the Galaxy wouldn't be what they are without the accompanying music.
                    </p>
                    <p>
                        Music has also taken a more physical form in my life, as I have recently started a vinyl record collection.
                        I currently have 14 records, 6 of which are <button className={styles.recordWallButton} onClick={() => setModalVisible(true)}>hung up on one of my
                            bedroom wall </button>,
                        while the others wait because I can't afford to buy more shelving at the moment. Eventually, I wish to plaster my entire wall full of records.
                    </p>
                </div>
                <div className={styles.gym}>
                    <p>
                        Around August 2021, I started going to the gym. Initially, it was just another thing to do with my friends while attempting to improve my appearance.
                        Now, it has become a routine that has improved my physical and mental health.
                    </p>
                </div>
                <div className={styles.games}>
                    <p>
                        Video games have always been prevalent in my life. Growing up, my cousins and I would play my grandfather's games almost daily. I vividly recall
                        playing GoldenEye 007 on the N64 after eating dinner. Eventually, I would get a computer at home, and I could play games whenever I wanted to,
                        leading to the destruction of my eyesight.
                    </p>
                </div>
            </div>
            <Dialog
                onClose={closeModal}
                open={modalVisible}
            >
                <img src='./assets/images/vinyl-records.png' alt='My vinyl wall' />
            </Dialog>
        </>
    )
}