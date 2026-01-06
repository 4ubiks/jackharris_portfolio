import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'

export const Portfolio = () =>{
    return(
        <div className="App">
          <Navbar></Navbar>
              <header className="App-header">
                <p className="Title Spacing">
                  lighting projects
                </p>

                <h3 className="Footer-text">Revive Worship - LD, ma3</h3>
                <img alt="Revive Worship, 2025" width="500" height="400" src={require('../img/portfolio/lighting/revive_nov2025.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Taste of Nations - LD, ma3</h3>
                <img alt="Taste of Nations, 2025" width="500" height="400" src={require('../img/portfolio/lighting/taste_of_nations2025.jpg')}/>
      
                <h3 className="Footer-text Portfolio-space">Maria Anderson - LD, ma2</h3>
                <img alt="Maria Anderson, 2025" width="500" height="400" src={require('../img/portfolio/lighting/maria_anderson.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Broadway to Africa - LD, ma3</h3>
                <img alt="Broadway to Africa, 2025" width="500" height="400" src={require('../img/portfolio/lighting/bta2025.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Liberty University Student Events - LD, ma2</h3>
                <img alt="Karaoke Korea, 2025" width="500" height="400" src={require('../img/portfolio/lighting/karaoke_korea.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Cherry Hills Community Church - Lighting Design, ma3</h3>
                <img alt="Cherry Hills Community Church, Christmas 2023" width="500" height="400" src={require('../img/portfolio/lighting/chcc.jpg')}/>
                
                <h3 className="Footer-text Portfolio-space">Daft Punk mock stage - LD, hog4</h3>
                <img alt="hog4 Draft Stage Render" width="500" height="400" src={require('../img/portfolio/lighting/hog4daftpunk.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Generic mock stage - Capture</h3>
                <img alt="Generic Mock Stage" width="500" height="400" src={require('../img/portfolio/lighting/mockstage.jpg')}/>
                
                <p className="Title Spacing">
                  coding
                </p>
                <h3 className="Footer-text Portfolio-space">32-bit ascii Tetris - C/x86</h3>
                <img alt="tetris" width="500" height="400" src={require('../img/portfolio/coding/tetris.jpg')}/>

                <h3 className="Footer-text Portfolio-space">32-bit ascii Snake - C/x86</h3>
                <img alt="snake" width="500" height="400" src={require('../img/portfolio/coding/snake.jpg')}/>
                
                <h3 className="Footer-text Portfolio-space">Artifactory Purge Script - Python</h3>
                <img alt="artifactory_purge" width="500" height="400" src={require('../img/portfolio/coding/purge.jpg')}/>
              
                <h2 className="Footer-text Portfolio-space">ma3 plugins - Lua</h2>

                <h3 className="Footer-text">Text to Lights</h3>
                <img alt="tetris" width="500" height="400" src={require('../img/portfolio/coding/text_to_light.jpg')}/>

                <h3 className="Footer-text">Export Patch as txt</h3>

                <h3 className="Footer-text">Save To All Drives</h3>

                <h3 className="Footer-text">Universe Tracer</h3>

                <h3 className="Footer-text Portfolio-space">My portfolio</h3>
                <img alt="tetris" width="500" height="400" src={require('../img/portfolio/coding/myportfolio.jpg')}/>
                

              
              </header>
          <Footer></Footer>
        </div>
    );
}