import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons"

function Projects() {
    return ( 
        <div className="background-alt" id="projects">
            <h2 className="heading"><FontAwesomeIcon icon={faCode} /> Roles / Projects</h2>
            <div className="container">
            <div className="row">
                <div className="shadow-large project">
                <div className="project-image"><img alt="scu banner" draggable="false" src={require('../images/SpearlineLogo.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Intern Software Engineer Test (Spearline)</h3>
                    <p>Spearline | Skibbereen | Aug-2019 - Jan -2020 and July- 2020 - September-2020
                        In this position I created selenium test scripts to automate test our platform, these tests were then
                        deployed on Jenkins and maintained . I was also on sprints during this time developing tests for the
                        created software.
                        ▪ Creating manual test cases for testing.
                        ▪ Creating automated selenium test scripts to test our platform.
                        ▪ Verifying pipeline tickets.
                        ▪ Reviewing teammates' work to maintain quality code .
                    </p><FontAwesomeIcon icon={faGithub} />
                </div>
                </div>
                <div className="shadow-large project">
                <div className="project-image"><img alt="scu banner" draggable="false" src={require('../images/SpearlineLogo.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Junior Software Engineer Test (Spearline)</h3>
                    <p>Spearline | Skibbereen | October- 2020 - January-2021
                        In this position I worked part time on backend testing, this was a more involved process for me as it
                        required me to work directly with the backend developers to make the backend components of the
                        platform testable.
                        ▪ Develop unittest tests for pre-existing scripts.
                        ▪ Develop tests that could be integrated into pre-existing backend infrastructure.
                        ▪ Working with developers to make changes so the code is more testable.
                        ▪ Documenting the scripts created.
                    </p><FontAwesomeIcon icon={faGithub} />
                </div>
                </div>
                <div className="shadow-large project">
                <div className="project-image"><img alt="scu banner" draggable="false" src={require('../images/SpearlineLogo.webp')} width="300" height="50%"/></div>
                <div className="project-info">
                    <h3>Junior Software Engineer Test (Spearline)</h3>
                    <p>Spearline | Skibbereen | January- 2021 - Present
                        In this position I started full time and worked predominantly on backend testing as well as creating interal tooling. 
                        ▪ Developing internal software for our sales team.
                        ▪ Using React. JS to create a web page that gets its data using a Flask API.
                        ▪ Working as a part of sprints, creating test plans becaused on PRD requirements.
                        ▪ Supporting Junior members of the team through our mentorship system in our team.
                    </p><FontAwesomeIcon icon={faGithub} />
                </div>
                </div>
                </div>
                </div>
        </div> 
    )
}

export default Projects;