import logo from "../assets/logo.jpeg"


export default function Navbar() {
  return (
    <nav className="navbar">
      <a className="logo">
        <img src={logo} alt="logo image" />
        <div>
          <h1>CREDITSEA</h1>
          <p>TRUST.COMFORT.PROSPER</p>
        </div>
      </a>

      <div className="navbar-list">
        <a>Home</a>
        <a>How it Works</a>
        <a>Why CREDITSEA</a>
        <a>Blog</a>
      </div>

      <div className="navbar-links">
        <a>Login/Signup</a>
        <button>Get the App</button>
      </div>
    </nav>
  )
}
