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
                <div className="Res_Subtitle Res_TitleSpace row">
                  <div className="title">Education</div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Liberty University, Lynchburg, VA</div>
                  <div class="date">May, 2026</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc lowertitle">
                    B.S., Cybersecurity; Minor: Mathematics
                  </div>
                </div>

                {/* Experience */}
                <div className="Res_Subtitle Res_TitleSpace row">
                  <div className="title">Experience</div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Software Engineer Intern</div>
                  <div class="date">Aug, 2025 - Current</div>
                </div>
                <div class="row Res_margin">
                  <div class="title Res_JobDesc lowertitle">Electronic Theatre Controls / HighEnd Systems</div>
                  <div class="date lowertitle">Remote</div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Broadcast Apprentice</div>
                  <div class="date">Jan, 2025 - Current</div>
                </div>
                <div class="row Res_margin">
                  <div class="title Res_JobDesc lowertitle">Liberty University Campus Production</div>
                  <div class="date lowertitle">Lynchburg, VA</div>
                </div>
                <div class="row Res_ExpSpace">
                  <div class="title Res_Title">DevOps Intern</div>
                  <div class="date">May, 2025 - Aug, 2025</div>
                </div>
                <div class="row Res_margin">
                  <div class="title Res_JobDesc lowertitle">Electronic Theatre Controls</div>
                  <div class="date lowertitle">Middleton, WI</div>
                </div>                
                <div class="row Res_ExpSpace">
                  <div class="title Res_Title">Technical Services Intern</div>
                  <div class="date">Jul, 2025 - Aug, 2024</div>
                </div>
                <div class="row Res_margin">
                  <div class="title Res_JobDesc lowertitle">ACT Entertainment</div>
                  <div class="date lowertitle">Hackensack, NJ</div>
                </div>
                <div class="row Res_ExpSpace">
                  <div class="title Res_Title">Production Intern</div>
                  <div class="date">May, 2023 - Aug, 2023</div>
                </div>
                <div class="row Res_margin">
                  <div class="title Res_JobDesc lowertitle">Cherry Hills Community Church</div>
                  <div class="date lowertitle">Highlands Ranch, CO</div>
                </div>

                {/* Volunteering */}
                <div className="Res_Subtitle Res_TitleSpace row">
                  <div className="title">Volunteering</div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Student Tutor</div>
                  <div class="date">Jan, 2025 - Current</div>
                </div>
                <div class="row Res_margin">
                  <div class="title Res_JobDesc lowertitle">
                    Computer Architecture, Operating Systems Design
                  </div>
                </div>
                <div class="row">
                  <div class="title Res_Title">Lighting / Prod. Volunteer</div>
                  <div class="date">Apr, 2022 - Current</div>
                </div>
                <div class="row">
                  <div class="title Res_JobDesc lowertitle">
                    Cherry Hills Community Church
                  </div>
                </div>

                <div class="Res_Subtitle Res_TitleSpace row">
                  
                </div>
        
                <a className="Res_Subtitle Res_TitleSpace" href="/resume/skills">Skills (click me!)</a>
                <h3 className="Res_Title">
                  I like Linux!
                </h3>
              </header>
              <Footer/>
            </div>
          );

}
