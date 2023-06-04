import styles from '@/styles/projects.module.scss'
import PSALogo from '../../public/assets/svgs/psa.svg'
import Link from 'next/link'

export default function Projects() {
    return (
        <>
            <h1>Projects</h1>

            {/* PSA */}
            <div className={styles.project}>
                <img
                    src='./assets/images/psa.png'
                    alt='PSA Screenshot'
                    className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                    <div className={styles.projectHeader}>
                        <div className={styles.PSATitle}>
                            <PSALogo className={styles.PSALogo} />
                            <h2 className={styles.projectTitle}>Philippine Sports Association (PSA)</h2>
                        </div>
                        <p className={styles.projectLink}>No public access yet. Please check back soon or <Link href='/contact'>message me</Link> for inquiries!</p>
                        <p className={styles.projectTimeline}>November 2022 - Present</p>
                    </div>
                    <div className={styles.projectDescription}>
                        <p>
                            PSA is a Filipino, Edmonton-based community basketball league. With that in mind, having an online presence where users can keep
                            tabs on games, announcements, and standings is important.
                        </p>
                        <div className={styles.messageSegment}>
                            <p>
                                The PSA web app is one I developed entirely on my own. My client hit me up with a
                            </p>
                            <div className={styles.messageBox}>
                                <p className={styles.messageReceived}>yo can u make PSA a web app</p>
                                <p>to which I responded with</p>
                                <p className={styles.messageSent}>i got you</p>
                            </div>
                        </div>
                        <p>
                            Through this project, I had the opportunity to manage an entire project solo. I was able to sharpen my skills with Firebase's back-end
                            and authentication, meanwhile improving my abilities with front-end development. My client came to me with an idea in casual conversation,
                            which led to <a href='https://imgur.com/a/vv4hS5C' target='_blank' rel='noreferrer'>shoddy drafts</a>, and, of course, to the web app
                            itself.
                        </p>
                        <p className={styles.technologies}>Technologies used: JavaScript, React, Firebase, CSS, EmailJS</p>
                    </div>
                </div>
            </div>

            {/* Surfselect */}
            <div className={styles.project}>
                <img
                    src='./assets/images/surfselect.png'
                    alt='Surfselect screenshot'
                    className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                    <div className={styles.projectHeader}>
                        <h2 className={styles.projectTitle}>Surfselect</h2>
                        <p className={styles.projectLink}><a href='https://surfselect.ca/' target='_blank' rel='noreferrer'>surfselect.ca</a></p>
                        <p className={styles.projectTimeline}>January 2022 - April 2022</p>
                    </div>

                    <div className={styles.projectDescription}>
                        <p>
                            Surfselect was a capstone project created during my Winter 2022 semester at NAIT. Our group of 7 software development, 2 visual
                            communications, and 2 business analyst students were tasked with making a wake boat comparison web application. Similar to
                            PCPartPicker, users can take two different wake boats and compare their statistics side-to-side.
                        </p>
                        <p>
                            On this project, I was tasked with back-end functionality and authentication. Additionally, I worked on the implementation of the graph
                            on the 'Comparison' page.
                        </p>
                        <p className={styles.technologies}>Technologies used: JavaScript, React, Firebase, CSS</p>
                    </div>
                </div>
            </div>

            {/* Personal Portfolio */}
            <div className={styles.project}>
                <img
                    src='./assets/images/ruddel.png'
                    alt='ruddel.ca screenshot'
                    className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                    <div className={styles.projectHeader}>
                        <h2 className={styles.projectTitle}>Personal Portfolio</h2>
                        <p className={styles.projectLink}><Link href='/'>ruddel.ca</Link></p>
                        <p className={styles.projectTimeline}>April 2023 - Present</p>
                    </div>

                    <div className={styles.projectDescription}>
                        <p>How is someone with the knowledge and ability to make a web app not going to make one for themself?</p>
                        <p>
                            With this web app, I wanted to expand my skillset while staying within the realm of React. In my previous projects, I had not used a
                            framework, nor had I tried implementing Sass, so I figured I would try them on a low-stakes project.
                        </p>
                        <p className={styles.technologies}>Technologies used: Javascript, React, Next.JS, Sass, EmailJS</p>
                    </div>
                </div>
            </div>
        </>
    )
}