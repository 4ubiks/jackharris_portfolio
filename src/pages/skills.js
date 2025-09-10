import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export const Skills = () =>{
    return(
        <div className="App">
            <Navbar></Navbar>
              <header className="App-header">
                <p className="Skills-title">
                  Skills
                </p>
                <div className="mockup-code Skills-space">
                  <code className="pl-8"><code className="codeColorBlue">~/lighting </code>$ ls</code>
                  <pre data-prefix=">" className="text-success"><code>'MA2/3' 'DMX networking' 'Technician'</code></pre>
                  <pre data-prefix=">" className="text-success"><code>'ETC Hog4' 'sACN' 'Art-Net' 'Plot Reading'</code></pre>
                  <pre data-prefix=">" className="text-success"><code>'Power distribution' 'Fixture Troubleshooting'</code></pre>
                  <pre data-prefix=">" className="text-success"><code>'Moving Heads' 'Addressing' 'Universe Management'</code></pre>
                </div>
                <div className="mockup-code Skills-space">
                  <code className="pl-8"><code className="codeColorBlue">~/languages </code>$ ls</code>
                  <pre data-prefix=">" className="text-success"><code>'C' 'C++' 'Lua' 'Bash' 'x86/ARM' 'Ruby' 'Python'</code></pre>
                  <pre data-prefix=">" className="text-success"><code>'Wolfram Alpha' 'MATLAB' 'JavaScript' 'HTML/CSS'</code></pre>
                </div>

                <div className="mockup-code Skills-space">
                  <code className="pl-8"><code className="codeColorBlue">~/devTools </code>$ ls</code>
                    <pre data-prefix=">" className="text-success"><code>'GitHub' 'GitLab' 'Artifactory' 'Perforce'</code></pre>
                    <pre data-prefix=">" className="text-success"><code>'PowerShell' 'WSL2' 'CMD' 'API interaction'</code></pre>
                    <pre data-prefix=">" className="text-success"><code>'VirtualBox' 'VMWare' 'Docker' 'VSphere'</code></pre>
                </div>
              </header>
            <Footer></Footer>
        </div>
          );
}