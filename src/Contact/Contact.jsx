import './Contact.scss';
import Github from '../assets/github.png';
import LinkedIn from '../assets/linked-in.png';
import Email from '../assets/envelope.png';
import MemoryGame from '../assets/memory-game-screenshot.da2c5114.png';
import TravelPlanner from '../assets/travel-tracker-screenshot36960ade.png';
import ToDo from '../assets/to-do-app-screenshot4966c09c.png';

const projects = [
  {
    name: 'To-Do App',
    image: ToDo,
    url: 'https://michaelwarr3n.github.io/To-Do-App/',
  },
  {
    name: 'Memory Game',
    image: MemoryGame,
    url: 'https://michaelwarr3n.github.io/Memory-Game/',
  },
  {
    name: 'Travel Planner',
    image: TravelPlanner,
    url: 'https://michaelwarr3n.github.io/Travel-Planner/',
  },
];

const contactLinks = [
  {
    name: 'Email',
    image: Email,
    url: 'mailto:mjwarren96@yahoo.co.uk',
  },
  {
    name: 'GitHub',
    image: Github,
    url: 'https://github.com/MichaelWarr3n',
  },
  {
    name: 'LinkedIn',
    image: LinkedIn,
    url: 'https://www.linkedin.com/in/michael-warren-b03367176/',
  },
];

function Contact() {
  return (
    <div className="Contact">
      <section className="Contact__projects-container">
        <h2>Projects</h2>

        <div className="Contact__projects">
          {projects.map((project) => (
            <article className="Contact__project" key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={project.image} alt="" />
                <h3>{project.name}</h3>
                <button className="Contact__project-button">View Project</button>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="Contact__contact-container">
        <h2>Contact</h2>

        <div className="Contact__contact-links">
          {contactLinks.map((link) => (
            <a
              className="Contact__contact-link"
              href={link.url}
              key={link.name}
              target={link.name === 'Email' ? undefined : '_blank'}
              rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
            >
              <img src={link.image} alt="" />
              <p>{link.name}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Contact;
