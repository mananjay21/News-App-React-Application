import React, { Component } from 'react'
import loading from './loading.gif'
import './footer.css';


export class Footer1 extends Component {
    render() {
        return (
            <div>
            <footer>
<div class="row primary">
  <div class="column about">

  <h3>CG Developer</h3>

   <p>
     
  </p>

  <div class="social">
    <i class="fa-brands fa-facebook-square"></i>
    <i class="fa-brands fa-instagram-square"></i>
    <i class="fa-brands fa-twitter-square"></i>
    <i class="fa-brands fa-youtube-square"></i>
    <i class="fa-brands fa-whatsapp-square"></i>
  </div>
</div>

<div class="column links">
<h3>Some Links</h3>

 <ul>

  <li>
   <a href="#faq">F.A.Q</a>
  </li>
  <li>
   <a href="#cookies-policy">Cookies Policy</a>
  </li>
  <li>
   <a href="#terms-of-services">Terms Of Service</a>
  </li>
  <li>
   <a href="#support">Support</a>
  </li>
 </ul>

</div>


<div class="column links">
  <h3>Some Links</h3>
   <ul>
    <li>
     <a href="#faq">F.A.Q</a>
    </li>
    <li>
     <a href="#cookies-policy">Cookies Policy</a>
    </li>
    <li>
    <a href="#terms-of-services">Terms Of Service</a>
    </li>
    <li>
    <a href="#support">Support</a>
    </li>
  </ul>
</div>

<div class="column subscribe">
 <h3> CG Newsletter</h3>
  <div>
   <input type="email" placeholder="Your email id here" />
   <button>Subscribe</button>
  </div>

</div>

</div>

<div class="row copyright">
  <div class="footer-menu">

  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Contact</a>
  <a href="">Blog</a>
  <a href="">Social</a>

  </div>
   <p>Copyright &copy; 2021 CG Developer</p>
</div>
</footer>

            </div>
        )
        
    }
}

export default Footer1
