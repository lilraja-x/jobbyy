import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import './category.css';
import jobs from './jobs';
import JobTypeSelector from "../components/jobTypeSelector/jobTypeSelector";
import SubscribeForm from "../components/SubscribeForm/SubscribeForm";
import HeroSection from "../components/HeroSection/HeroSection";


export default function Page() {

  return (
    <div className="Main">
      <NavBar />
      <HeroSection Heading="Job Category" Descriptive_Text="There spirit beginning bearing the open at own every give appear in third you save two boys" />
      {/* <div className="Main__content">
        <div className="inner-container">
          <h1>Job Category</h1>
          <p>There spirit beginning bearing the open at own every give appear in third you save two boys</p>
        </div>
      </div> */}
      <div className="categories">
        <JobTypeSelector jobs={jobs}/>
      </div>
      <SubscribeForm />
      <Footer />
    </div>
  );
}