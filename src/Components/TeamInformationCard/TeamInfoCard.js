import React from "react";
import styles from './teamInfoCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faFacebookF, faPinterestP, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhoneVolume, faLocationDot } from '@fortawesome/free-solid-svg-icons'



function TeamInfoCard({
    profileImage, 
    profileName, 
    role, 
    facebookLink, 
    xLink, 
    instagramLink, 
    pinterestLink, 
    youtubeLink, 
    aboutDescription, 
    secondAboutParagraph,
    location, 
    phone, 
    email, 
    contactDescription, 
    skillsDescription,
    firstPercentageName,
    firstPercentage,
    firstPercentageWidth,
    secondPercentageName,
    secondPercentage,
    secondPercentageWidth,
    thirdPercentageName,
    thirdPercentage,
    thirdPercentageWidth,
    }) {

    return (
    <div className={styles.teamInfoCard}>
        <div className={styles.topSection}>
          {/* Profile Image */}
          <div className={styles.profileImage}>
            <img src={profileImage} alt={`${profileName}'s Profile`} />
          </div>
  
          {/* About Section */}
          <div className={styles.aboutSection}>
            <h3 className={styles.name}>{profileName}</h3>
            <p className={styles.role}>{role}</p>
            <div className={styles.socialLinks}>
              <a href={facebookLink || "#"} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconHolder}>  
                <FontAwesomeIcon icon={faFacebookF}  className={styles.icons}/>
              </div>
              </a>
              
              <a href={xLink || "#"} target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faXTwitter} className={styles.icons} />
                </div>
              </a>
              <a href={instagramLink || "#"} target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faInstagram} className={styles.iconsInstagram} />
                </div>
              </a>
              <a href={pinterestLink || "#"} target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faPinterestP} className={styles.icons} />
                </div>
              </a>
              <a href={youtubeLink || "#"} target="_blank" rel="noopener noreferrer">
                <div className={styles.iconHolder}>
                    <FontAwesomeIcon icon={faYoutube} className={styles.icons} />
                </div>
              </a>
            </div>
            <p className={styles.aboutDescription}>{aboutDescription}</p>
            
            <p className={styles.aboutDescription}>{secondAboutParagraph}</p>
            <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.iconHolderContact}>
              <FontAwesomeIcon icon={faLocationDot} className={styles.iconsContact} />
              </div>
              <p className={styles.infoItemRow}>
               Location  <strong>{location}</strong>
              </p>
              </div>
              <div className={styles.row}>
              <div className={styles.infoItem}>
                <div className={styles.iconHolderContact}>
                    <FontAwesomeIcon icon={faPhoneVolume} className={styles.iconsContact} />
                </div>
              <p className={styles.infoItemRow}>
                Phone <strong>{phone}</strong>
              </p>
              </div>
              <div className={styles.infoItem}>
              <div className={styles.iconHolderContactEmail}>
                <FontAwesomeIcon icon={faEnvelope}  className={styles.iconsContact}/>
              </div>
              <p className={styles.infoItemRow}>
                Email <strong>{email}</strong>
              </p>
              </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Skills Section */}
        <div className={styles.skillsSection}>
        <div className={styles.textSection}>
        <h3 className={styles.sectionTitle}>My Expertise & Skills</h3>
        <p className={styles.skillsDescription}>
         {skillsDescription}
        </p>
      </div>

      {/* Right Section - Skill Bars */}
      <div className={styles.skillsBar}>
        <div className={styles.skill}>
          <div className={styles.skillInfo}>
            <span>{firstPercentageName}</span>
            <span className={styles.percentage}>{firstPercentage}</span>
          </div>
          <div className={styles.skillBar}>
            <div className={styles.progressBar} style={firstPercentageWidth}></div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.skillInfo}>
            <span>{secondPercentageName}</span>
            <span className={styles.percentage}>{secondPercentage}</span>
          </div>
          <div className={styles.skillBar}>
            <div className={styles.progressBar} style={secondPercentageWidth}></div>
          </div>
        </div>

        <div className={styles.skill}>
          <div className={styles.skillInfo}>
            <span>{thirdPercentageName}</span>
            <span className={styles.percentage}>{thirdPercentage}</span>
          </div>
          <div className={styles.skillBar}>
            <div className={styles.progressBar} style={thirdPercentageWidth}></div>
          </div>
        </div>
        </div>
       </div>
  
        <div className={styles.contactSection}>
        {/* Left Section */}
        <div className={styles.contactMeSection}>
            <h3 className={styles.sectionTitle}>Contact With Me</h3>
            <p className={styles.contactDescription}>
            {contactDescription}
            </p>
        </div>

        {/* Right Section - Form */}
        <div className={styles.formContent}>
            <form className={styles.form}>
            <div className={styles.row}>
                <input
                className={styles.inputField}
                type="text"
                placeholder="Name *"
                required
                />
                <input
                className={styles.inputField}
                type="email"
                placeholder="E-mail *"
                required
                />
            </div>
            <div className={styles.row}>
                <input
                className={styles.inputField}
                type="tel"
                placeholder="Phone *"
                required
                />
                <input
                className={styles.inputField}
                type="text"
                placeholder="Service"
                />
            </div>
            <textarea
                className={styles.textareaField}
                placeholder="Comments"
                rows="4"
            ></textarea>
            <button type="submit" className={styles.submitButton}>
                SEND MESSAGE
            </button>
            </form>
        </div>
    </div>
    </div>
    );
}

export default TeamInfoCard;
