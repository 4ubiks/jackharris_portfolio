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
      
                <h3 className="Footer-text">Maria Anderson - LD, ma2</h3>
                <img alt="maria anderson concert" width="500" height="400" src={require('../img/portfolio/lighting/maria_anderson.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Broadway to Africa - LD, ma3</h3>
                <img alt="bta" width="500" height="400" src={require('../img/portfolio/lighting/bta2025.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Liberty University Student Events - LD, ma2</h3>
                <img alt="karaoke korea" width="500" height="400" src={require('../img/portfolio/lighting/karaoke_korea.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Cherry Hills Community Church - Lighting Design, ma3</h3>
                <img alt="chcc" width="500" height="400" src={require('../img/portfolio/lighting/chcc.jpg')}/>
                
                <h3 className="Footer-text Portfolio-space">Daft Punk mock stage - LD, hog4</h3>
                <img alt="hog4" width="500" height="400" src={require('../img/portfolio/lighting/hog4daftpunk.jpg')}/>

                <h3 className="Footer-text Portfolio-space">Generic mock stage - Capture</h3>
                <img alt="mock stage" width="500" height="400" src={require('../img/portfolio/lighting/mockstage.jpg')}/>
                
                <p className="Title Spacing">
                  coding
                </p>
                <h3 className="Footer-text Portfolio-space">32-bit ascii tetris - C</h3>
                <img alt="tetris" width="500" height="400" src={require('../img/portfolio/coding/tetris.jpg')}/>
                
                <h3 className="Footer-text Portfolio-space">Artifactory Purge Script - Python</h3>
                <img alt="artifactory_purge" width="500" height="400" src={require('../img/portfolio/coding/purge.jpg')}/>
              
                <h3 className="Footer-text Portfolio-space">ma3 plugins - Lua</h3>

              
              </header>
          <Footer></Footer>
        </div>
    );
}