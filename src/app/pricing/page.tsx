import PricingCard from '../components/PricingCard/PricngCard';
import NavBar from '../components/navbar/NavBar';
import './pricing.css';

export default function Page() {
      return (
        <div className='main'>
          <NavBar />
          <div className='pricings'>
            <PricingCard price='FREE' lists={['Connect 80 websites', 'Connect up to 1 bank accounts']} action='Get Started'/>
            <PricingCard price='1500PKR' lists={['Connect 80 websites', 'Connect up to 2 bank accounts', 'Track up to 50 credit cards', 'Analytics support']} action='Buy Now'/>
            <PricingCard price='4700PKR' lists={['Connect 80 websites', 'Connect up to 5 bank accounts', 'Track up to 50 credit cards', 'Analytics support', 'Export up to 12 months data', 'Cloud service 24/7']} action='Buy Now'/>
          </div>
        </div>
      );
    }