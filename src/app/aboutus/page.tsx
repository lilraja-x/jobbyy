import './aboutus.css';
import NavBar from '../components/navbar/NavBar';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';

export default function Page() {
      return (
        <div className='Main'>
          <NavBar />
          <HeroSection Heading="About Us Page" Descriptive_Text="Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle."/>
          {/* //className='threeD' */}

          <div className='container_main'>
            <h1 className='head'>Our Team</h1>
            <div className="row">
              <div className="column">
                <ProfileCard name='Appie' position='Developer'/>
              </div>

              <div className="column">
                <ProfileCard name='Appie' position='Developer'/>
              </div>

              <div className="column">
                <ProfileCard name='Appie' position='Developer'/>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        );
    }