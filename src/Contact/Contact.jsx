import './Contact.scss'
import Github from '../assets/github.png';
import LinkedIn from '../assets/linked-in.png';
import Email from '../assets/envelope.png';

function Contact() {
  return (
    <div class="Contact">
      <h2>Contact</h2>
      <div class="Contact__links">
        <a href="mailto:mjwarren96@yahoo.co.uk" target="_blank" rel="noopener noreferrer" class="Contact__link">
          <img src={Email} alt="Email icon" />
          <p>mjwarren96@yahoo.co.uk</p>
        </a>
        <a href="https://github.com/MichaelWarr3n" target="_blank" rel="noopener noreferrer" class="Contact__link">
          <img src={Github} alt="GitHub icon" />
          <p>MichaelWarr3n</p>
        </a>
        <a href="https://www.linkedin.com/in/michael-warren-b03367176/" target="_blank" rel="noopener noreferrer" class="Contact__link">
          <img src={LinkedIn} alt="LinkedIn icon" />
          <p>Michael Warren</p>
        </a>
      </div>
    </div>
  )
}

export default Contact
