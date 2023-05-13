import moment from 'moment'
import styles from '@/styles/about.module.scss'

export default function About() {
    const currentAge = moment().diff(moment('1999-09-09'), 'years', false);

    return (
        <>
            <h1>About</h1>

            <div className={styles.intro}>
                <p>Hi, I'm Russel. I'm a {currentAge}-year-old software developer from Edmonton, Alberta, Canada. </p>
                <p className={styles.pronouns}>he/him</p>
            </div>

            <div className={styles.schoolBackground}>
                <p>
                    I graduated from the Northern Alberta Institute of Technology (NAIT)'s Digital Media and IT - Computer Software Development program in September 2022.
                </p>
                <p>
                    During my time there, I learned a multitude of languages, skills, and a foundation of knowledge surrounding the software development life cycle
                    — from programming languages such as C#, SQL, and JavaScript to project management, communications, and agile/scrum methodologies.
                </p>
            </div>
        </>
    )
}