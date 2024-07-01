import PSALogo from '../../public/assets/svgs/psa.svg'
import Link from 'next/link'
import Dialog from '@mui/material/Dialog'
import { useState } from 'react'
import PSACarousel from '@/components/psaCarousel.js'
import styles from '@/styles/projects.module.scss'

export default function Projects() {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    }

    return (
        <>
            <h1>Projects</h1>

            <div className={styles.project}>
                <img
                    className={styles.screenshot}
                    src='./assets/images/levvy.png'
                    alt='levvy Screenshot'
                />
                <div>
                    <div>
                        <div className={styles.heading}>
                            <h2 className={styles.title}>levvy</h2>
                            <p><a href='https://levvy-ten.vercel.app/' target='_blank' rel='noreferrer'>levvy-ten.vercel.app</a></p>
                            <p>June 2024</p>
                        </div>

                        <div className={styles.description}>
                            <p>
                                levvy is a <a href='https://www.geeksforgeeks.org/introduction-to-levenshtein-distance/' target='_blank' rel='noreferrer'>Levenshtein Distance</a> visualisation tool.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PSA */}
            <div className={styles.project}>
                <img
                    className={styles.screenshot}
                    src='./assets/images/psa.png'
                    alt='PSA Screenshot'
                />
                <div>
                    <div className={styles.heading}>
                        <div className={styles.title}>
                            <PSALogo className={styles.titleLogo} />
                            <h2 >Philippine Sports Association (PSA)</h2>
                        </div>
                        <p><a href='https://psaedm.com/' target='_blank' rel='noreferrer'>psaedm.com</a></p>
                        <p>November 2022 - April 2023</p>
                    </div>
                    <div className={styles.description}>
                        <p>
                            PSA is a Filipino, Edmonton-based community basketball league. With that in mind, having an online presence where users can keep
                            tabs on games, announcements, and standings is important.
                        </p>
                        <div>
                            <p>
                                The PSA web app is one I developed entirely on my own. My client hit me up with a
                            </p>
                            <div>
                                <p>yo can u make PSA a web app</p>
                                <p>to which I responded with</p>
                                <p>i got you</p>
                            </div>
                        </div>
                        <p>
                            Through this project, I had the opportunity to manage an entire project solo. I was able to sharpen my skills with Firebase's back-end
                            and authentication, meanwhile improving my abilities with front-end development. My client came to me with an idea in casual conversation,
                            which led to <span className={styles.PSAModalButton} onClick={() => setModalVisible(true)}>shoddy drafts</span>, and, of course, to the web app
                            itself.
                        </p>
                        <p>Technologies used: JavaScript, React, Firebase, CSS, EmailJS</p>
                    </div>
                </div>
            </div>

            {/* Surfselect */}
            <div className={styles.project}>
                <img
                    className={styles.screenshot}
                    src='./assets/images/surfselect.png'
                    alt='Surfselect screenshot'
                />
                <div>
                    <div className={styles.heading}>
                        <h2 className={styles.title}>Surfselect</h2>
                        <p><a href='https://surfselect.ca/' target='_blank' rel='noreferrer'>surfselect.ca</a></p>
                        <p>January 2022 - April 2022</p>
                    </div>

                    <div className={styles.description}>
                        <p>
                            Surfselect was a capstone project created during my Winter 2022 semester at NAIT. Our group of 7 software development, 2 visual
                            communications, and 2 business analyst students were tasked with making a wake boat comparison web application. Similar to
                            PCPartPicker, users can take two different wake boats and compare their statistics side-to-side.
                        </p>
                        <p>
                            On this project, I was tasked with back-end functionality and authentication. Additionally, I worked on the implementation of the graph
                            on the 'Comparison' page.
                        </p>
                        <p>Technologies used: JavaScript, React, Firebase, CSS</p>
                    </div>
                </div>
            </div>

            {/* Personal Portfolio */}
            <div className={styles.project}>
                <img
                    className={styles.screenshot}
                    src='./assets/images/ruddel.png'
                    alt='ruddel.ca screenshot'
                />
                <div>
                    <div className={styles.heading}>
                        <h2 className={styles.title}>Personal Portfolio</h2>
                        <p><Link href='/'>ruddel.ca</Link></p>
                        <p>April 2023 - June 2023</p>
                    </div>

                    <div className={styles.description}>
                        <p>How is someone with the knowledge and ability to make a web app not going to make one for themself?</p>
                        <p>
                            With this web app, I wanted to expand my skillset while staying within the realm of React. In my previous projects, I had not used a
                            framework, nor had I tried implementing Sass, so I figured I would try them on a low-stakes project.
                        </p>
                        <p>Technologies used: Javascript, React, Next.JS, Sass, EmailJS</p>
                    </div>
                </div>
            </div>

            <Dialog
                onClose={closeModal}
                open={modalVisible}
            >
                <PSACarousel />
            </Dialog>
        </>
    )
}