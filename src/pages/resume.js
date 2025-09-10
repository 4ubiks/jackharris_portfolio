import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

export const Resume = () =>{
    return(
        <div className="App">
          <Navbar></Navbar>
              
              <header className="App-header">
                
                
                <p className="Title Spacing">
                  resume
                </p>
                <p className="Res_Subtitle Spacing">
                  Education
                </p>
                <div class="row">
                  <div class="title Res_Title">Liberty University, Lynchburg, VA</div>
                  <div class="date">May, 2026</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc">
                    B.S., Cybersecurity; Minor: Mathematics
                  </div>
                </div>

                <p className="Res_Subtitle Res_TitleSpace">
                  Experience
                </p>
                <div class="row">
                  <div class="title Res_Title">Software Engineer Intern</div>
                  <div class="date">Aug, 2025 - Current</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc">
                    Electronic Theatre Controls / HighEnd Systems
                  </div>
                </div>
                <div class="row Res_ExpSpace">
                  <div class="title Res_Title">DevOps Intern</div>
                  <div class="date">May, 2025 - Aug, 2025</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc">
                    Electronic Theatre Controls
                  </div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Student Production Technician</div>
                  <div class="date">Jan, 2025 - Current</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc">
                    Liberty University Campus Production
                  </div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Technical Services Intern</div>
                  <div class="date">Jul, 2025 - Aug, 2024</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc">
                    ACT Entertainment
                  </div>
                </div>

                <p className="Res_Subtitle Res_TitleSpace">
                  Volunteering
                </p>
                <div class="row">
                  <div class="title Res_Title">Student Tutor</div>
                  <div class="date">Jan, 2025 - Current</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc">
                    Computer Architecture, Operating Systems Design
                  </div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Lighting / Prod. Volunteer</div>
                  <div class="date">Apr, 2022 - Current</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc">
                    Cherry Hills Community Church
                  </div>
                </div>

                


                <a className="Res_Subtitle Res_TitleSpace" href="/resume/skills">Skills (click me!)</a>
                <h3 className="Res_Title">
                  I like Linux!
                </h3>
              <h3 className="Res_TitleSpace">
                
              </h3>
              </header>
              <Footer/>
            </div>
          );
}