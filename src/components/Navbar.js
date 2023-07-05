import { Link } from "react-router-dom";
// <li class="px-2"><Link to="/about">About</Link></li>

const NavBar = () => (


    <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="#">
            <img src="/images/my-logo.png"></img>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div style={{justifyContent: "end"}} class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="px-2"><Link to="/">Home</Link></li>
                <li class="px-2"><Link to="/projects">Projects</Link></li>
                <li class="px-2"><Link to="/contact">Contact</Link></li>

                <li class="px-2"><a href="/assets/hugo-smith-resume.docx">Resume</a></li>       
            </ul>
        </div>
    </nav>
);



export default NavBar

