import moment from 'moment'
import InstagramIcon from '../../public/assets/svgs/instagram.svg'
import GithubIcon from '../../public/assets/svgs/github.svg'
import LinkedInIcon from '../../public/assets/svgs/linkedin.svg'

export default function Footer() {
    const year = moment().format("YYYY");

    return (
        <div>
            <div>
                <p>ruddel · {year}</p>
                <div>
                    <a href='https://www.instagram.com/ruddel.ca/' target='_blank' rel='noreferrer'><InstagramIcon /></a>
                    <a href='https://github.com/ruddelbenito' target='_blank' rel='noreferrer'><GithubIcon /></a>
                    <a href='https://www.linkedin.com/in/russel-benito-284261226/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
                </div>
            </div>
        </div>
    )
}