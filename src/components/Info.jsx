import profilePic from '../assets/profile-pic.jpg';
import emailIcon from '../assets/email-icon.png';
import linkedinIcon from '../assets/linkedin-icon.png';

export default function Info() {
  return (
    <section className='info'>
      <div className='info--profile-pic'>
        <img src={profilePic} alt='Ezana Gebre' />
      </div>
      <div className='info--basic-info'>
        <h1 className='name'>Ezana Gebre</h1>
        <h3 className='title'>Frontend Developer</h3>
        <p className='website'>
          <a hef='#'>ezana-gebre-pw</a>
        </p>
      </div>
      <div className='info--action'>
        <button className='email-btn'>
          <img src={emailIcon} alt='Email icon' />
          Email
        </button>
        <button className='linkedin-btn'>
          <img src={linkedinIcon} alt='LinkedIn icon' />
          LinkedIn
        </button>
      </div>
    </section>
  );
}
