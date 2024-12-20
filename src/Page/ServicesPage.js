import React from "react";
import styles from "./ServicesPage.module.css";
import CardContainers from "../components/CardContainers";
import "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-free/css/all.min.css';

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>

 
    

function ServicesPage({ data, pageData })  {
  console.log(data, pageData)

    return (
      <div className={styles.page}>
        <header className={styles.servicesHeader}>
         <div className={styles.headerTopBar}>
          <div className={styles.contactInfo}>
            <p>
              <i className="fa-solid fa-location-dot"></i> 256 Avenue, 
            </p>
            <p><span> | </span></p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@gmail.com
            </p>
          </div>

          <div className={styles.headerLinks}>
            <p>
              <i className="fa-solid fa-phone"></i> +123 4884 4889
            </p>
            
            <div  className={styles.socialIcons}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <div className={styles.iconHolder}>
                <img src="/facebook.svg" alt="Facebook"   className={styles.icons} />
               </div>     
              </a>

              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
               <div className={styles.iconHolder}>
                <img src="/twitter.svg" alt="Twitter/X"   className={styles.icons}/>
               </div>
              </a>

              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <div className={styles.iconHolder}>
                <img src="/instagram.svg" alt="Instagram"   className={styles.icons}/>
               </div>
              </a>

              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
               <div className={styles.iconHolder}>
                <img src="/pinterest.svg" alt="Pinterest"   className={styles.icons}/>
               </div>
              </a>

              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
               <div className={styles.iconHolder}>
                <img src="/youtube.svg" alt="Youtube"   className={styles.icons}/>
               </div>
              </a>
            </div>  
           </div>
         </div>
        

         <div className={styles.headerMain}>
            <div className={styles.headerContents}>
             <h1 className={styles.mainTitle}>Our Services</h1>
             <p className={styles.breadcrumb}>Home &gt; Our Services</p>
            </div>
         </div>
        </header>

        <div className={styles.contents}>
          <h3 className={styles.main}>Our Dedicated Services</h3>
          <h2 className={styles.subTitle}>Marketing Solutions</h2>
          <h2 className={styles.subTitle}>For Business Excellence</h2>
          <p className={styles.description}>
            Transform your business with our transformative consulting solutions. We go beyond.
          </p>
        </div>
            

       <section className={styles.servicesSection}>
       <div className={styles.servicesContainers}>
         {data.map((service, index) => (
          <CardContainers
            key={service.id}
            icon={service.icon}
            title={service.title}
            text={service.text}
          />
          ))}
       </div>
       </section>


       <footer className={styles.footer}>
         <div className={styles.footerContent}>
         
          <div className={styles.footerSection}>
          <img src="/logo.svg" alt="Beeko Logo" className={styles.logo} />
            <p>{pageData.title}</p>
            <p>+123 888 9999</p>
            <p>info@beeko.com</p>
          </div>
          <div className={styles.footerSection}>
            <h3>About Company</h3>
            <ul>
              <li>About Us</li>
              <li>Sustainability</li>
              <li>Leadership</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li>How It Works</li>
              <li>Partners</li>
              <li>Testimonials</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className={styles.footerSection}>
          <h3>Instagram Photos</h3>
        <div className={styles.instagramPhotos}>
          <img src="/footer_insta01.jpg" alt="Instagram 1" />
          <img src="/footer_insta02.jpg" alt="Instagram 3" />
          <img src="/footer_insta03.jpg" alt="Instagram 4" />
          <img src="/footer_insta04.jpg" alt="Instagram 2" />
          <img src="/footer_insta05.jpg" alt="Instagram 5" />
          <img src="/footer_insta06.jpg" alt="Instagram 6" />
        </div>
        </div>
      </div>
      <hr className={styles.divider} />
        <div className={styles.footerBottom}>
          <p className="">
              Copyright © Beeko | All Rights Reserved 
          </p>

          <div  className={styles.socialIcons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <div className={styles.iconHolder}>
             <img src="/facebook.svg" alt="Facebook"   className={styles.icons} />
            </div>     
        </a>

        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <div className={styles.iconHolder}>
             <img src="/twitter.svg" alt="Twitter/X"   className={styles.icons}/>
            </div>
        </a>

        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconHolder}>
         <img src="/instagram.svg" alt="Instagram"   className={styles.icons}/>
        </div>
        </a>

        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconHolder}>
          <img src="/pinterest.svg" alt="Pinterest"   className={styles.icons}/>
        </div>
        </a>

        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <div className={styles.iconHolder}>
          <img src="/youtube.svg" alt="Youtube"   className={styles.icons}/>
        </div>
        </a>

        </div>
       </div>
      </footer>
    </div>
    );
};

export default ServicesPage;