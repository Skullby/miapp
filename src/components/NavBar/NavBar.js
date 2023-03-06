import './NavBar.css';

function NavBar() {
    return (
      <div className='navBar'>
        <h1 className='navTitle'>Nicolas Yunes</h1>
        <ul className='headerMenu'>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    );
  }
  
  export default NavBar;