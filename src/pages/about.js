import moment from 'moment'
import Link from 'next/link'
import Dialog from '@mui/material/Dialog'
import { useState } from 'react'
import styles from '@/styles/about.module.scss'

export default function About() {
    const [modalVisible, setModalVisible] = useState(false);
    const currentAge = moment().diff(moment('1999-09-09'), 'years', false);

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <>

            <div className={styles.header}>
                <p className={styles.greeting}>Hi, I'm Russel</p>
                <p className={styles.pronouns}>he/him</p>
                <p className={styles.developer}>A {currentAge} year old software developer</p>
                <p className={styles.location}>Based in Edmonton, Alberta</p>
            </div>

            <div className={styles.info}>
                <div className={styles.textblock}>
                    <div>
                        <p>
                            I graduated from the Northern Alberta Institute of Technology (NAIT)'s Digital Media and IT - Computer Software Development program in September 2022.
                        </p>
                        <p>
                            During my time there, I learned a multitude of languages, skills, and a foundation of knowledge surrounding the software development life cycle
                            — from programming languages such as C#, SQL, and JavaScript to project management, communications, and agile/scrum methodologies.
                        </p>
                        <p>
                            After school, I decided to work part-time while in pursuit of a software career. I took on some <Link href='/projects'>projects</Link> that I would work
                            on during my off-days, which gave me more software experience and a sense of direction career-wise.
                        </p>
                    </div>
                </div>

                <div className={styles.textblock}>
                    <p>Outside of software development, I enjoy music, going to the gym, and video games.</p>
                </div>
                <div className={styles.textblock}>
                    <p>
                        Music has always been an important part of my life. It can serve as a form of expression, a mood enhancer, and can bring people together. I also believe
                        that music and sound, or a lack thereof, can help portray expression in other forms of media. Movies like Baby Driver and Guardians of the Galaxy
                        wouldn't be what they are without the accompanying music.
                    </p>
                    <p>I took up the guitar at the age of 10, played trumpet throughout junior high and high school, and have touched a drum kit once or twice in my lifetime.
                        Today, the only instrument I continue to play is the guitar (albeit terribly).</p>
                    <p>
                        Music has also taken a more physical form in my life, as I have recently started a vinyl record collection.
                        I currently have 21 records, all of which are <span className={styles.vinylModal} onClick={() => setModalVisible(true)}>hung up on my
                            bedroom walls</span>. Eventually, I wish to plaster my entire wall full of records.
                    </p>
                </div>
                <div className={styles.textblock}>
                    <p>
                        Around August 2021, I started going to the gym. Initially, it was a half-baked attempt to change how I looked while going out with my friends.
                        Now, it has become a routine that has improved my physical and mental health.
                    </p>
                    <p>
                        The COVID-19 pandemic and other life events during that time brought my life to a standstill. My days felt both mundane and hectic at the same time.
                        I dropped school for a semester, wasn't working, and was taking care of my parents due to injuries, meanwhile trying to adjust to the restrictions
                        placed due to the pandemic. Once I started going to the gym, I felt like my days had purpose again. I started working on myself most days of the week
                        and had goals I would work towards.
                    </p>
                </div>
                <div className={styles.textblock}>
                    <p>
                        Video games have always been prevalent in my life. Growing up, my cousins and I would play my grandfather's games almost daily. I vividly recall
                        playing GoldenEye 007 on the N64 after eating dinner every night. Eventually, I would get a computer at home, and I could play games whenever I wanted
                        to.
                    </p>
                    <p>
                        To this day I enjoy playing games when I have time. Recently, I have been playing Legend of Zelda: Tears of the Kingdom,
                        Genshin Impact, Honkai: Star Rail, and first-person shooters like Valorant now and then. <span>My mental health will not let me
                            play those last two for extended periods of time.</span>
                    </p>
                </div>
            </div>

            <Dialog
                onClose={closeModal}
                open={modalVisible}
                className='record-dialog'
            >
                <img src='./assets/images/vinyl-records.jpg' alt='My vinyl wall' />
            </Dialog>
        </>
    )
}