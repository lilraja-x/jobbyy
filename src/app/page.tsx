import Link from 'next/link';
import Image from 'next/image';
import JobTypeSelector from './components/jobTypeSelector/jobTypeSelector'
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import SubscribeForm from './components/SubscribeForm/SubscribeForm';

export default function Home() {

  const jobs = [
    {
      name: 'Product Manager 1',
      description: 'Description for Product Manager 1',
      jobLocation: 'Onsite',
      jobType: 'FullTime',
      jobTag: 'Product Manager',
    },
    {
      name: 'Product Manager 2',
      description: 'Description for Product Manager 2',
      jobLocation: 'Remote',
      jobType: 'PartTime',
      jobTag: 'Product Manager',
    },
    {
      name: 'Architect 1',
      description: 'Description for Architect 1',
      jobLocation: 'Onsite',
      jobType: 'Intern',
      jobTag: 'Architect',
    },
    {
      name: 'Architect 2',
      description: 'Description for Architect 2',
      jobLocation: 'Remote',
      jobType: 'RecentJob',
      jobTag: 'Architect',
    },
  ];

  return (
    <div className="header-bg min-h-screen">
      <NavBar />
      <main className="main-container container mx-auto">
        <Image
          src="/job-1.jpg"
          alt="Photo by Andrea Piacquadio from Pexels"
          className="rounded-lg shadow-lg mb-4"
          width={700}
          height={300}
        />
        <div className='dashboard'>
          <h1 className="dashboard_heading">
            FIND YOUR DREAM JOB WITH JOBBYY
          </h1>
          <p className='dashboard_text text'>
            Wherein herb beginning. Moved after gathering. Sea hi crate fowl man replenish place divided likeness herb one two lnetn Winged moving saw, may over.
            <Link href="/Pages" className="text-black p-2 rounded ">
            <button className="cta">
              <span>EXPLORE NOW</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
            </Link>
          </p>
        </div>
      </main>
      <main className='find_box'>
        <div className='box'>
          <div className='search_form'>
            <select className="input-field">
              <option value="category">Category</option>
              <option value="part_time">Part Time</option>
              <option value="full_time">Full Time</option>
              <option value="remote">Remote</option>
              <option value="office_job">Office Job</option>
            </select>
            <select className="input-field">
              <option value="location">Location</option>
              <option value="rawalpindi">Rawalpindi</option>
              <option value="islamabad">Islamabad</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
            </select>
            <div className="group">
                <svg className="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
                <input placeholder="Keyword" type="search" className="input" />
            </div>
            <button className="search-button">Find Job</button>
          </div>
        </div>
        <div className='careers'>
          <div className="card">
            <div className="image">
              <img
                  src="/ui_ux_job.jpg"
                  alt="UI/UX JOBS"
                  className="w-full h-40 object-cover"
              />
            </div>
              <div className="content">
                <a href="#">
                  <span className="title">
                    UI/UX Designer
                  </span>
                </a>

                <p className="desc">
                Design your career path with passion and purpose. Let every pixel you create be a step toward your dream job.
                </p>

                <a className="action" href="#">
                  Find out more
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
            <img
                  src="/web_designer.jpg"
                  alt="WEB DESIGNER JOBS"
                  className="w-full h-40 object-cover"
              />
            </div>
              <div className="content">
                <a href="#">
                  <span className="title">
                    Web Designer
                  </span>
                </a>

                <p className="desc">
                Crafting the web, one pixel at a time. Your creativity is the blueprint for the digital future.
                </p>

                <a className="action" href="#">
                  Find out more
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
            </div>
          </div>
          <div className="card">
            <div className="image">
              <img
                  src="/acccount_and_finance_job.jpg"
                  alt="acccount_and_finance_job JOBS"
                  className="w-full h-40 object-cover"
              />
            </div>
              <div className="content">
                <a href="#">
                  <span className="title">
                    Account And Finance
                  </span>
                </a>

                <p className="desc">
                Numbers are your canvas, financial success your masterpiece. Paint your career with precision and purpose.
                </p>

                <a className="action" href="#">
                  Find out more
                  <span aria-hidden="true">
                    →
                  </span>
                </a>
            </div>
          </div>
        </div>
      </main>
      <main className='job_category_section'>
        <div className='main_div'>
          <div className='header_of_category'>
            <h1>Find Job By Category</h1>
            <p>Open lesser winged midst wherein may morning</p>
          </div>
          <div className='categories'>
            <div className='row1'>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='row2'>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="category">
                <img src='/d_a_c.jpg' alt='Design And Creativity'/>
                <div className="category__content">
                  <p className="category__title">Design And Creativity</p>
                  <p className="category__description">250 Jobs Open</p>
                  <div className='link_btn'>
                    <Link href="/" className='category__link_css'>
                          Apply Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <main className='recent_jobs'>
        <div className='recent_jobs_body'>
          <div className='recent_jobs_body_header'>
            <h1 className='recent_jobs_body_header_text'>
              Explore Recent Jobs Now
            </h1>
          </div>
          <div className="recent_jobs_body_content">
              <JobTypeSelector jobs={jobs}/>
          </div>
          <div className='recent_jobs_body_footer'>
            <Link href='/'>
              <button className='recent_jobs_body_footer_btn'>
                Explore All Jobs
              </button>
            </Link>
          </div>
        </div>
      </main>
      <SubscribeForm />
      <main className='footer'>
        <Footer />
      </main>
    </div>
  );
}
