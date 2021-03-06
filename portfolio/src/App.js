
import './App.css';
import profilePic from './assets/images/mypic.jpg'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <div className="container-fluid">
          <a className="navbar-brand" href="#">Philip Perkins</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#Projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#links">My Links</a>
              </li>


            </ul>

          </div>
        </div>
      </nav>



      <div className="row" >
        <div className="card" >
          <img src={profilePic}  className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"></h5>
            <div className="card-text">
              <h1 id="contact">Contact Info</h1>
              <ul>
                <li> Email:philipperkins2020@gmail.com
                </li>
                <li> Cell: 214-846-5482
                </li>

              </ul>
              <h2 id="links">My Links</h2>
              <ul>
                <a href="https://www.linkedin.com/in/philip-perkins-221846201/" target="_blank"><li>LinkedIn</li></a>
                <a href="C:\Users\phili\code\saturday-thirteen\Portfolio\Philip_Perkins_Resume_2021.pdf" target="_blank"><li>Resume</li></a>
                <a href="https://github.com/philipperkins2020" target="_blank"><li>Github page</li></a>

              </ul>

              <h3>My Skills</h3>
              <ul>
                <li>#Html</li>
                <li>#CSS</li>
                <li>#Javascript</li>
                <li>#NodeJS</li>
                <li>#React</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
      <div className="col-md">
            <h4 id="about">About Me!</h4>
            <p className="shadow p-3 mb-5 bg-body rounded">Hi! My name is Philip and I am a Full
                Stack developer that recently graduated from SMU coding boot camp. It was quite a journey through all
                the triumphs, challenges, and knowledge gained in a span of 6 months. I grew up in Garland, TX and have been
                in the DFW area most of my life. However, I did spend 4 years of my life in Japan in the Navy and it was an
                amazing experience. After the Navy, I attended the University of Texas at Dallas gaining a degree in
                education. I have chosen web development as my new career because of the endless possibilities and
                technologies that are coming out every day and I hope you enjoy the projects in my portfolio.</p>
            <br/>
            
            <h5 id="Projects">My Projects</h5>
                <br/>
                (Click on projects to view.)
​               
            
                <button id="1" className="btn btn-primary" data-toggle="collapse" href="#groupproject" role="button"
                    aria-expanded="false">HotStocks Project</button>
                <button id="2" className="btn btn-primary" type="button" data-toggle="collapse" href="#code"
                    aria-expanded="false">Code
                    Quiz</button>
                <button id="3" className="btn btn-primary" type="button" data-toggle="collapse" href="#workday"
                    aria-expanded="false">gunSafe Project
                    </button>
            
    
    
    </div>
    <div className="row">
                <div className="col">
                  <div className="collapse multi-collapse" id="multiCollapseExample1">
                    <div className="card card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="collapse multi-collapse" id="multiCollapseExample2">
                    <div className="card card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="collapse multi-collapse" id="groupproject">
                    <div className="card card-body">
                        <a href="https://philipperkins2020.github.io/Group-Project-1/" target="_blank"><img src="Assets/images/groupproject.png"/> </a>

                    </div>
                  
                </div>
            </div>

            <div className="col">
                <div className="collapse multi-collapse" id="code">
                    <div className="card card-body">
                        <a href="https://philipperkins2020.github.io/code-quiz/" target="_blank"> <img src="Assets/images/codequiz.png"/></a>
                        
                    </div>
                </div>
                <div className="collapse multi-collapse" id="workday">
                    <div className="card card-body">
                        <a href="https://powerful-bastion-48444.herokuapp.com/" target="_blank"><img src="C:\Users\phili\code\saturday-thirteen\Portfolio\Assets\images\Screenshot(225).png"/></a>
                        
                    </div>
                </div>
            </div>

</div>

  );
}


export default App;
