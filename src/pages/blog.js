import Navbar from "../components/navbar.js"

export const Blog = () =>{
    return(
        <div className="App">
          <Navbar></Navbar>
              <header className="App-header">
                <div className="Blog-title">
                  posts
                </div>
                <div className="article">
                <p className="Year Blog-subtitle">
                  <u>2025</u>
                </p>
                <a className="Blog-postTitle" href="/blog/etcDevOps">DevOps with Electronic Theatre Controls</a>
                </div>
              </header>
            </div>
          );
}