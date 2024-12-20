import React from "react";
import styles from './teamDetails.module.css'
import TeamInfoCard from "../Components/TeamInformationCard/TeamInfoCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebookF, faPinterestP, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons'


function teamDetails() {
    const teamData = [
        {
            profileImage: "../../../team_details.jpg",
            profileName: "Esther Howard",
            role: "Finance Advisor",
            facebookLink: "https://facebook.com",
            xLink: "https://twitter.com",
            instagramLink: "https://instagram.com",
            pinterestLink: "https://pinterest.com",
            youtubeLink: "https://youtube.com",
            aboutDescription: "Need a little help from our friends from time to time. Although we of annery integrated range of legal, finiancial service under one roof ther are occasions where our clients area need.",
            secondAboutParagraph: "Need a little help from our friends from time to time. Although we of annery integrated range of legal, finiancial service.",
            location: "24/DA, Hilton Street, United States",
            phone: "+123 8989 444",
            email: "info@gmail.com",
            contactDescription: "Need a little help from our friends from time to time. Although we of annery intergrated range of legal, finiancial services there are ocassions when our clients",
            skillsDescription: "Need a little help from our friends from time to time. Although we of annery integrated range of legal, finiancial services under one there are ocassions when our clients are need a little help from our friends from time to time. ",
            firstPercentageName: "Consulting",
            firstPercentage: "80%",
            firstPercentageWidth: { width: "80%" },
            secondPercentageName: "Website Design",
            secondPercentage: "70%",
            secondPercentageWidth: { width: "70%" },
            thirdPercentageName: "10x Growth",
            thirdPercentage: "90%",
            thirdPercentageWidth: { width: "90%" },
        
        },
        {
            profileImage: "../../../team_details.jpg", 
            profileName: "Jonathan David", 
            role: "Social Media Manager", 
            facebookLink: "https://facebook.com",
            xLink: "https://twitter.com",
            instagramLink: "https://instagram.com",
            pinterestLink: "https://pinterest.com",
            youtubeLink: "https://youtube.com", 
            aboutDescription: "Need a little help from our friends from time to time. Although we of annery integrated range of legal, finiancial service under one roof ther are occasions where our clients area need.", 
            location: "20/DA, Brooklyn Street, United States",
            phone: "+176 4884 620",
            email: "info@gmail.com",
            contactDescription: "Need a little help from our friends from time to time. Although we of annery intergrated range of legal, finiancial services there are ocassions when our clients",
            skillsDescription: "Need a little help from our friends from time to time. Although we of annery integrated range of legal, finiancial services under one there are ocassions when our clients are need a little help from our friends from time to time. ",
            firstPercentageName: "Marketing",
            firstPercentage: "75%",
            firstPercentageWidth: { width: "75%" },
            secondPercentageName: "Social Media Analysis",
            secondPercentage: "85%",
            secondPercentageWidth: { width: "85%" },
            thirdPercentageName: "10x Growth",
            thirdPercentage: "80%",
            thirdPercentageWidth: { width: "80%" },
        }
    ];
 

    return (
        <div className={styles.teamDetails}>
            {/* Banner Section */}
            <div className={styles.teamHeader}>
                <div className={styles.overlay} >
                    <h1>Team Details</h1>
                    <p>Home &gt; Team Details</p>
                </div>
            </div>
           

            {/* Team Information Cards */}
            <div>
                {teamData.map((member, index) => (
                    <TeamInfoCard key={index} {...member} />
                ))}
            </div>
            <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogoContent}>
            <img src="/logo.svg" alt="Logo" />
            <h2 className={styles.footerLogo}>Beeko</h2>
          </div>
          <div className={styles.locationPgph}>
            <FontAwesomeIcon icon={faLocationDot}  className={styles.contactIcons}/>
            <p >Sydney Harbour Circular City of Sydney, Australia.</p>
          </div>
          <div className={styles.iconsContact}>
          <FontAwesomeIcon icon={faPhoneVolume}  className={styles.contactIcons}/>
            <p className={styles.numberPgph}>+123 888 9999</p>
          </div>
          <div className={styles.iconsContact}>
            <FontAwesomeIcon icon={faEnvelope}  className={styles.contactIcons}/>
            <p>info@beeko.com</p>
          </div>
        </div>
        <div className={styles.footerSection}>
          <h3>About Company</h3>
          <ul>
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Leadership</li>
            <li>Team News & Media</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h3>Quick Links</h3>
          <ul>
            <li>How It's Work</li>
            <li>Partners</li>
            <li>Testimonials</li>
            <li>Case Studies</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className={`${styles.footerSection} ${styles.instagramSection}`}>
          <h3>Instagram Photos</h3>
          <div className={styles.instagramGrid}>
            <img src="../../footer_insta01.jpg" alt="Instagram 1" />
            <img src="../../footer_insta02.jpg" alt="Instagram 2" />
            <img src="../../footer_insta03.jpg" alt="Instagram 3" />
            <img src="../../footer_insta04.jpg" alt="Instagram 4" />
            <img src="../../footer_insta05.jpg" alt="Instagram 5" />
            <img src="../../footer_insta06.jpg" alt="Instagram 6" />
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>Copyright © Beeko | All Rights Reserved</p>
        <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <div className={styles.iconHolder}>  
                <FontAwesomeIcon icon={faFacebookF}  className={styles.icons}/>
              </div>
              </a>
              
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faXTwitter} className={styles.icons} />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.iconsInstagram} />
                </div>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faPinterestP} className={styles.icons} />
                </div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faYoutube} className={styles.icons} />
                </div>
              </a>
            </div>
      </div>
    </footer>
        </div>
    );
}

export default teamDetails;