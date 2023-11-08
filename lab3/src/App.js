import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="left">
                <img src="pic copy.png" alt="" />
                <h2>Lương Gia Hân</h2>
                <div className="contact">
                    <i class="fa-regular fa-envelope"></i>
                    <h5>19521468@gm.uit.edu.vn</h5>
                </div>
                <div className="contact">
                    <i class="fa-solid fa-phone"></i>
                    <h5>0974200611</h5>
                </div>
                <h4>INTRODUCTION</h4>
                <ul>
                    <li>ABOUT</li>
                    <li>PROJECTS</li>
                    <li>BLOG</li>
                    <li>TIMELINE</li>
                </ul>
                <ul className="social">
                    <li>
                        <i class="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-circle-info"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-github"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-youtube"></i>
                    </li>
                </ul>
                <div className="contact">
                    <h3>
                        Make with <i class="fa-solid fa-heart-crack"></i> and <i class="fa-solid fa-beer-mug-empty"></i>
                    </h3>
                </div>
                <div className="contact">
                    <h3>Thanks you to read</h3>
                </div>
            </div>
            <div className="right">
                <img src="pic.jpeg" alt="" />
                <div className="name">
                    <h1>
                        Hi! <span>I'm Gia Han</span>
                    </h1>
                    <button>
                        KNOW MORE<i class="fa-solid fa-circle-chevron-down"></i>
                    </button>
                </div>
                <div className="dot">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
}

export default App;
