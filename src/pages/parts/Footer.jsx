import footer from "../css/footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-a footer-a-container">
        <ul className="ul-footer-menu">
          <li>
            <ul className="footer-a-ul">
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
            <ul className="footer-icons-ul">
              <li>
                <div className="f-icons">
                  <img className="footer-icons" src="/icons/newFB.png" />
                </div>
              </li>
              <li>
                <div className="f-icons">
                  <img className="footer-icons" src="/icons/gitNew.png" />
                </div>
              </li>
              <li>
                <div className="f-icons">
                  <img className="footer-icons" src="/icons/instaNew.png" />
                </div>
              </li>
              <li>
                <div className="f-icons">
                  <img className="footer-icons" src="/icons/linkinNew.png" />
                </div>
              </li>
              <li>
                <div className="f-icons">
                  <img className="footer-icons" src="/icons/twitterNew.png" />
                </div>
              </li>
            </ul>
          </li>
          <li>
            <h6 className="footer-brand">
              &copy; Sonic Wave 2023. All Rights Reserved.
            </h6>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
