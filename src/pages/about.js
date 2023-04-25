import moment from 'moment'

export default function About() {
    const currentAge = moment().diff(moment('1999-09-09'), 'years', false);

    return (
        <>
            <h1>About</h1>
            <div>
                <p>Hi, I'm Russel. I'm a {currentAge}-year-old software developer from Edmonton, Alberta, Canada. </p>
                <p>
                    I graduated from the Northern Alberta Institute of Technology (NAIT)'s Digital Media and IT - Computer Software Development program in September 2022.
                    During my time there, I learned a multitude of languages, skills, and a foundation of knowledge surrounding the software development life cycle
                    — from programming languages such as C#, SQL, and JavaScript to project management, communications, and agile/scrum methodologies.
                </p>
                {/* <p>
                    Since starting my software journey, 
                </p> */}
            </div>
        </>
    )
}