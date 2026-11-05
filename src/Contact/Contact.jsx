import './Contact.scss'
import Github from '../assets/github.png';
import LinkedIn from '../assets/linked-in.png';
import Email from '../assets/envelope.png';
import MemoryGame from '../assets/memory-game-screenshot.da2c5114.png';
import TravelPlanner from '../assets/travel-tracker-screenshot36960ade.png';
import ToDo from '../assets/to-do-app-screenshot4966c09c.png';

function Contact() {
  return (
    <div className="Contact">

      <div className="Contact__projects-container">
        <h2>Projects</h2>
        <div className="Contact__projects">

          <a className="Contact__project" href="https://michaelwarr3n.github.io/To-Do-App/" target="_blank" rel="noopener noreferrer">
            <h3>To-Do App</h3>
            <img src={ToDo} alt="To-do app website"/>         
          </a>

          <a className="Contact__project" href="https://michaelwarr3n.github.io/Memory-Game/" target="_blank" rel="noopener noreferrer">
            <h3>Memory Game</h3>
            <img src={MemoryGame} alt="Memory game website" />
          </a>

          <a className="Contact__project" href="https://michaelwarr3n.github.io/Travel-Planner/" target="_blank" rel="noopener noreferrer">
            <h3>Travel Planner</h3>
            <img src={TravelPlanner} alt="Travel planner website" />
          </a>

        </div>
      </div>

      <div className="Contact__contact-container">
        <h2>Contact</h2>
        <a href="mailto:mjwarren96@yahoo.co.uk" target="_blank" rel="noopener noreferrer" className="Contact__link">
          <img src={Email} alt="Email icon" />
          <p>mjwarren96@yahoo.co.uk</p>
        </a>
        <a href="https://github.com/MichaelWarr3n" target="_blank" rel="noopener noreferrer" className="Contact__link">
          <img src={Github} alt="GitHub icon" />
          <p>MichaelWarr3n</p>
        </a>
        <a href="https://www.linkedin.com/in/michael-warren-b03367176/" target="_blank" rel="noopener noreferrer" className="Contact__link">
          <img src={LinkedIn} alt="LinkedIn icon" />
          <p>Michael Warren</p>
        </a>
      </div>

    </div>
  )
}

export default Contact
