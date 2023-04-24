import Nav from '@/components/nav'

export default function Projects() {
    return (
        <>
            <Nav />
            <h1>Projects</h1>

            {/* PSA */}
            {/* TODO:
                - turn the quotes into those iphone message speech bubbles
                - add PSA SVG to header
            */}
            <div>
                <h2>Philippine Sports Association (PSA)</h2>
                <p>November 2022 - April 2023-ish</p>
                <p>
                    The PSA web application is one I developed entirely on my own. My client hit me up saying "yo can u make PSA a web app"
                    to which I responded with "i got you".
                </p>
                <p>
                    Through this project, I had the opportunity to manage an entire project solo. I was able to hone my skills with Firebase's back-end
                    and authentication, meanwhile improving my abilities with front-end development. My client came to me with an idea in casual conversation,
                    which led to <a href='https://imgur.com/a/vv4hS5C' target='_blank' rel='noreferrer'>poorly-made drafts</a> and, of course, the web app
                    itself.
                </p>
            </div>

            {/* Surfselect */}
            <div>
                <h2>Surfselect</h2>
                <p>January 2022 - April 2022</p>
                <p><a href='https://surfselect.ca/' target='_blank' rel='noreferrer'>surfselect.ca</a></p>
            </div>

            {/* Personal Portfolio */}
            <div>
                <h2>Personal Portfolio</h2>
            </div>
        </>
    )
}