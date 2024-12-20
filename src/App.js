import React from 'react';
import ServicesPage from '../src/Page/ServicesPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { services, servicesPage } from './Utils/servicesPageData';

function App() {
  return (
    <div className="App">
      <ServicesPage data={services} pageData={servicesPage} />
    </div>
  );
}

export default App;
