import './Experience.scss'
import JustIt from '../assets/justit.jpg';
import RR from '../assets/readingroom.jpg';
import MemoryGame from '../assets/memory-game-screenshot.da2c5114.png';
import TravelPlanner from '../assets/travel-tracker-screenshot36960ade.png';
import ToDo from '../assets/to-do-app-screenshot4966c09c.png';

function Experience() {
  return (
    <div class="Experience">
      <div class="Experience__left-container">
        <h2>Experience</h2>

        <div class="Experience__jobs">

          <div class="Experience__job">
            <div class="Experience__job-header">
              <div>
                <h3>Web Developer Bootcamp</h3>
                <p>Just IT - Bristol</p>
                <p>2020 - 2021</p>
              </div>
            <img src={JustIt} alt="Just IT Project" />
            </div>
            <p>
              During my time at Reading Room, I worked on various web development projects, focusing on front-end development and user interface design. I gained experience in building responsive websites, optimizing performance, and ensuring cross-browser compatibility.
            </p>
          </div>

          <div class="Experience__job">
            <div class="Experience__job-header">
              <div>
                <h3>Front-end Developer</h3>
                <p>Reading Room - Bristol</p>
                <p>2021 - 2025</p>
              </div>
              <img src={RR} alt="Reading Room Project" />
            </div>
            <p>
              At Just IT, I have been responsible for developing and maintaining web applications using modern front-end technologies. I have collaborated with cross-functional teams to deliver high-quality user experiences and have contributed to the implementation of responsive designs and interactive features.
            </p>
          </div>
        </div>
      </div>

      <div class="Experience__right-container">
        <h2>Projects</h2>
        <div class="Experience__projects">

          <a class="Experience__project" href="https://michaelwarr3n.github.io/To-Do-App/" target="_blank" rel="noopener noreferrer">
            <h3>To-Do App</h3>
            <img src={ToDo} alt="To-do app website"/>         
          </a>

          <a class="Experience__project" href="https://michaelwarr3n.github.io/Memory-Game/" target="_blank" rel="noopener noreferrer">
            <h3>Memory Game</h3>
            <img src={MemoryGame} alt="Memory game website" />
          </a>

          <a class="Experience__project" href="https://michaelwarr3n.github.io/Travel-Planner/" target="_blank" rel="noopener noreferrer">
            <h3>Travel Planner</h3>
            <img src={TravelPlanner} alt="Travel planner website" />
          </a>

        </div>
      </div>
    </div>
  )
}

export default Experience
