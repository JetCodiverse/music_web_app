import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="brand">
          <a href="#">
            <img class="logo" src="/icons/sonicWaveLogo.png" />
          </a>
        </div>

        <form id="form">
          <input
            type="text"
            id="search"
            class="search"
            placeholder="Search for a movie..."
          />
        </form>
      </header>

      <a href="#">
        <img class="icon-image" src="/icons/up-black.png" />
      </a>

      <main id="main"></main>
      <footer class="footer-a footer-a-container">
        <ul class="ul-footer-menu">
          <li>
            <ul class="footer-a-ul">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </li>
          <li>
            <h6 class="footer-brand">
              &copy; Sonic Wave 2023. All Rights Reserved.
            </h6>
          </li>
          <li>
            <ul class="footer-icons-ul">
              <li>
                <div class="f-icons">
                  <img class="footer-icons" src="/icons/fb-gold.png" />
                </div>
              </li>
              <li>
                <div class="f-icons">
                  <img class="footer-icons" src="/icons/git-gold.png" />
                </div>
              </li>
              <li>
                <div class="f-icons">
                  <img class="footer-icons" src="/icons/insta-gold.png" />
                </div>
              </li>
              <li>
                <div class="f-icons">
                  <img class="footer-icons" src="/icons/linkin-gold.png" />
                </div>
              </li>
              <li>
                <div class="f-icons">
                  <img class="footer-icons" src="/icons/twitter-gold.png" />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
