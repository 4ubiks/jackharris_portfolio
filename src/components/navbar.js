export default function Navbar(){
    return (
      <nav className="Navbar-header Navbar-text">
      <div className="Navbar-left">
        <a href="/">{'>'} jackharris@lighting:~$</a>
        <a className="Sudo" href="/terminal"> wsl</a>
      </div>
      <div className="Navbar-right">
        <a href="/portfolio">Portfolio</a>
        <a href="/resume">Resume</a>
        <a href="/blog">Blog</a>
      </div>
    </nav>
    );
}