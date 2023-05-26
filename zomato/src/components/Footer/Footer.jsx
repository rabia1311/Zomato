import React from 'react'
import "../Footer/Footer.scss"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppStore from "../../images/AppStore.png"
import Google from "../../images/Google.png"
const Footer = () => {
  return (
   <div className="footer">
    <div className="top">
        <div className="top1">

            <h2>Zomato</h2>
            <div className="lang">
                <select >
                    <option value="i">India</option>
                    <option value="a">Australia</option>
                    <option value="b">Bangladesh</option>
                    <option value="n">Nepal</option>
                </select>

                <select >
                <option value="">English</option>
                <option value="">Hindi</option>
                <option value="">Bengali</option>
                </select>
            </div>
        </div>
        <div className="bottom1">
            <div className="bottomContent">
                <h4>
                    ABOUT ZOMATO
                </h4>
                <p>Who we are</p>
                <p>blog</p>
                <p>work with us</p>
                <p>Investor Relations</p>
                <p>Report Fraud</p>
                <p>Contact Us</p>
            </div>
            <div className="bottomContent">
                <h4>
                    ZOMAVERSE
                </h4>
                <p>Zomato</p>
                <p>Blinkit</p>
                <p>Feeding india</p>
                <p>Hyperpure</p>
                <p>Zomaland</p>
                
            </div>
            <div className="bottomContent">
                <h4>
                    FOR RESTUARANTS
                </h4>
                <p>Partner with us</p>
                <p>Apps For you</p>
                <p>For Enterprises</p>
                <p>Zomato For Work</p>
                
            </div>
            <div className="bottomContent">
                <h4>
                    LEARN MORE
                </h4>
                <p>Privacy</p>
                <p>Security</p>
                <p>Terms</p>
                <p>Sitemap</p>
                
            </div>
            <div className="bottomContent">
                <h4>
                 SOCIAL LINKS
                </h4>
                <div className="links">
<LinkedInIcon/>
<InstagramIcon/>
<TwitterIcon/>
<YouTubeIcon/>
<FacebookIcon/>

                </div>
                <img src={AppStore} alt="app" />
                <img src={Google} alt="app" />
            </div>
        </div>
    </div>
    <hr/>
    <div className="bottom">
    <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2022 © Zomato™ Ltd. All
          rights reserved.
        </p>
    </div>
   </div>
  )
}

export default Footer
