import React from "react";
import './App.css';
import ServicesPage from '../src/Page/ServicesPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

import TeamDetails from './Team-DetailsPage/TeamDetails';


function App() {
  return (
    <div className="App">
     <TeamDetails />
      <ServicesPage />
    </div>
  );
}

export default App;
