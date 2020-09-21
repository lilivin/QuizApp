import React from 'react'
import './Styles/aboutUs.scss'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'
import photoKarol from './Photos/karolPhoto.jpg'
import photoSonik from './Photos/sonikPhoto.jpg'

function AboutUs() {
    return (
        <div className="aboutUsContainer">
            <Link to="/">
                <FontAwesomeIcon className="exitButton" icon={faTimes} />
            </Link>
            <div className="about">
                <p className="about__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus et felis volutpat laoreet. Fusce 
                    scelerisque ante in mauris mollis gravida condimentum luctus sapien. Integer ullamcorper sodales velit, quis rhoncus enim. 
                    Suspendisse mattis risus est, sed aliquam augue venenatis ut. Fusce nec arcu tempor, sollicitudin ligula a, ultrices ligula. 
                    Mauris id molestie mauris. In sagittis eu ligula at pharetra. Pellentesque diam nunc, mattis eget tristique sit amet, 
                    consectetur sit amet justo. Suspendisse est nulla, tempor et sapien id, cursus efficitur risus. Maecenas facilisis placerat 
                    leo, at aliquet felis suscipit vitae.
                </p>
                <div className="person">
                    <img className="person__photo" src={photoKarol} alt="Sanah" />
                    <div className="person__description">
                        <h1 className="person__description-name">Karol</h1>
                        <p className="person__description-about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus et felis volutpat laoreet. 
                            Fusce scelerisque ante in mauris mollis gravida condimentum luctus sapien. Integer ullamcorper sodales velit, 
                            quis rhoncus enim.
                        </p>
                        <div className="person__description-socialMedia">
                            <FontAwesomeIcon className="personIcon" icon={faInstagram} />
                            <FontAwesomeIcon className="personIcon" icon={faGithub} />
                        </div>
                    </div>
                </div>
                <div className="person">
                    <img className="person__photo" src={photoSonik} alt="Sanah" />
                    <div className="person__description">
                        <h1 className="person__description-name">Mikołaj</h1>
                        <p className="person__description-about">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus et felis volutpat laoreet. 
                            Fusce scelerisque ante in mauris mollis gravida condimentum luctus sapien. Integer ullamcorper sodales velit, 
                            quis rhoncus enim.
                        </p>
                        <div className="person__description-socialMedia">
                            <FontAwesomeIcon className="personIcon" icon={faInstagram} />
                            <FontAwesomeIcon className="personIcon" icon={faYoutube} />
                        </div>
                    </div>
                </div>
                <p className="about__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin metus et felis volutpat laoreet. Fusce 
                    scelerisque ante in mauris mollis gravida condimentum luctus sapien. Integer ullamcorper sodales velit, quis rhoncus enim. 
                    Suspendisse mattis risus est, sed aliquam augue venenatis ut. Fusce nec arcu tempor, sollicitudin ligula a, ultrices ligula. 
                    Mauris id molestie mauris. In sagittis eu ligula at pharetra. Pellentesque diam nunc, mattis eget tristique sit amet, 
                    consectetur sit amet justo. Suspendisse est nulla, tempor et sapien id, cursus efficitur risus. Maecenas facilisis placerat 
                    leo, at aliquet felis suscipit vitae.
                </p>
                <div className="youtubeLink">
                    <FontAwesomeIcon className="youtubeLink__icon" icon={faYoutube} />
                    <p className="youtubeLink__text">YouTube</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
