export default function Projects() {
    return (
        <>
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
                    PSA is a Filipino, Edmonton-based community basketball league. With that in mind, having an online presence where users can keep
                    tabs on games, announcements, and standings is important.
                </p>
                <p>
                    The PSA web app is one I developed entirely on my own. My client hit me up saying "yo can u make PSA a web app"
                    to which I responded with "i got you".
                </p>
                <p>
                    Through this project, I had the opportunity to manage an entire project solo. I was able to sharpen my skills with Firebase's back-end
                    and authentication, meanwhile improving my abilities with front-end development. My client came to me with an idea in casual conversation,
                    which led to <a href='https://imgur.com/a/vv4hS5C' target='_blank' rel='noreferrer'>poorly-made drafts</a> and, of course, to the web app
                    itself.
                </p>
                <p>Technologies used: JavaScript, React, Firebase, CSS, EmailJS</p>
            </div>

            {/* Surfselect */}
            <div>
                <h2>Surfselect</h2>
                <p>January 2022 - April 2022</p>
                <p><a href='https://surfselect.ca/' target='_blank' rel='noreferrer'>surfselect.ca</a></p>
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

            {/* Personal Portfolio */}
            <div>
                <h2>Personal Portfolio</h2>
                <p>April 2023 - Present</p>
                <p>How is someone with the knowledge and ability to make a web app not going to make one for themself?</p>
                <p>
                    With this web app, I wanted to expand my skillset while staying within the realm of React. In my previous projects, I had not used a
                    React Framework, nor have I tried implementing Sass, so I figured I would try them on a low-stakes project.
                </p>
                <p>Technologies used: Javascript, React, Next.JS, Sass</p>
            </div>
        </>
    )
}