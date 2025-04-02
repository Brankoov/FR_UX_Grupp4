
const Footer = () => {
    return (
      <footer>
         <div className="footer-left">Sandys Foodtruck</div>
          <div className="footer-center">
            <p>Mail: sandra@230volt.se</p>
            <p><a href="tel:0707452853" className="phone-link">Telefon: 070-745 28 53</a></p>
            <div className="socialmedia-icons">
            <a href="https://www.facebook.com/p/Sandys-Food-Truck-Catering-61565706599006/"> 
            <img src="/images/Facebook.png" alt="Facebook" className="footer-icon" ></img></a>
            <a href="https://www.instagram.com/sandysfoodtruckochcatering/?hl=sv"> 
            <img src="/images/Instagram.png" alt="Instagram" className="footer-icon" ></img></a>
           
            </div>
          </div>
          <div className="footer-empty">

          </div>
      </footer>
    );
  }
  
  export default Footer;