import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";

export const Home = () =>{
    return(
        <div className="App">
            <Navbar></Navbar>

              <header className="App-header">
                <p className="Title Spacing">
                  Jack Harris
                </p>
                <p className="Subtitle">
                  Software Engineer
                </p>
                <p className="Subtitle icon">
                  <a href="https://github.com/4ubiks" target="_blank" rel="noreferrer"><DiGithubBadge/></a><a href="https://www.linkedin.com/in/jack-harris-professional/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
                </p>
              </header> 
              <Footer></Footer>
            </div>
          );
}