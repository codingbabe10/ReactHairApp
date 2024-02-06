import React from 'react';

function Payment({ selectedPackagePrice }) {
  return (
    <div>
      <h2>Payment Details</h2>
      <form>
        <label>
          Package Price:
          <input type="text" value={selectedPackagePrice} readOnly />
        </label>
        {/* Other payment form fields */}
      </form>
    </div>
  );
}

export default Payment;
