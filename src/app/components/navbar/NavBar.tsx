import Link from "next/link";
import './NavBar.css';


export default function NavBar() {
    return(
        <header className="header">
        <nav className="nav">
          <h1 className="title">
            <span className="logo-first">JO</span><span className="logo-second">BB</span><span className="logo-third">YY</span>
          </h1>
          <ul className="flex space-x-1 ">
            <li>
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/aboutus">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/category">
                Category
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/pricing">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
            {/* <!--Dropdown> */}
            {/* <li className="dropdown">
                <span className="span_item">Pages</span>
                <div className="dropdown-content">
                    <Link href="/jobsearch">Job Search</Link>
                    <Link href="/pricingplan">Pricing Plan</Link>
                </div>
            </li> */}
          </ul>
        </nav>
      </header>
    );
}