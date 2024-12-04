import React from "react";
import styles from "./CardContainers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChartLine,
  faEnvelope,
  faChartPie,
  faLightbulb,
  faClipboardCheck,
  faBalanceScale,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt,  faBullseye, faCalculator } from "@fortawesome/free-solid-svg-icons";

library.add(
  faChartLine,
  faEnvelope,
  faChartPie,
  faLightbulb,
  faClipboardCheck,
  faBalanceScale,
  faFileAlt,
  faBullseye, 
  faCalculator
);


 const CardContainers = ({ icon, title, text}) => {
    return( 
        <div ClassName={styles.cardText}>
         <div className={styles.iconContainer}>
          <FontAwesomeIcon icon={icon} alt={title} className={styles.icon} size="2x" />
         </div> 
          <h3 className={styles.title}>{title}</h3>
          <p ClassName={styles.text}>{text}</p>  
          <button className={styles.button}>Read More →</button>
        </div>
    )
}


export default CardContainers;