import React, { useState } from 'react';

import './PlanSelection.css'; 

const PlanSelection= () => {
  const history = useHistory();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handlePackageSelection = (packageInfo) => {
    setSelectedPackage(packageInfo);
    // Redirect to payment page
    history.push('/payment', { package: packageInfo });
  };

  return (
    <div className="plan-selection-container">
      <h1>Choose Your Plan</h1>
      <div className="plan-box" onClick={() => handlePackageSelection({ name: 'Package 1', price: '$50' })}>
        <h2>Package 1</h2>
        <p>$50 per month</p>
        <p>Features: Feature 1, Feature 2, Feature 3</p>
      </div>
      {/* Repeat for other package offers */}
    </div>
  );
};

export default PlanSelection;
