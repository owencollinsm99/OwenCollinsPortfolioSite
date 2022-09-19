import { Link } from 'react-scroll' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faCopy } from '@fortawesome/free-solid-svg-icons' 

function HomeScreen() {  
    return ( 
        <div id="lead">
            <div id="lead-content">
                {/* <h1>Owen Collins</h1>
                <h2>I am a software engineer who has a passion for Quality
                Assurance and helping deliver high quality software to the consumer
                </h2> */}
{/* <a aria-label="resume" draggable="false" href="https://javab3ans.github.io/portfolio/resume.html" target="_blank" rel="noopener noreferrer" className="btn-rounded-white"><FontAwesomeIcon icon={faCopy}/> My Résumé!</a> */}
            <div className="project-image"><img alt="" draggable="false" src={require('../images/Owen Collins Software Engineer-1.webp')} width="300" height="50%"/></div>
            </div>
            <div id="lead-overlay"></div>
            <div id="lead-down"> 
                <Link rel="nofollow" to="about" spy={true} smooth={true}><span><FontAwesomeIcon icon={faChevronDown} /></span></Link>
            </div> 
        </div>
    ) 
}

export default HomeScreen;
