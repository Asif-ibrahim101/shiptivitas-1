import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeTab from './Components/HomeTab';
import Navigation from './Components/Navigation';
import Board from './Components/Board';
import './styles/App.css';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('home');

  const renderShippingRequests = () => {
    return <Board />;
  };

  const renderNavigation = () => {
    return (
      <Navigation
        onClick={setSelectedTab}
        selectedTab={selectedTab}
      />
    );
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'home':
      default:
        return <HomeTab />;
      case 'shipping-requests':
        return renderShippingRequests();
    }
  };

  return (
    <div className="App">
      {renderNavigation()}
      <div className="App-body">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default App;
