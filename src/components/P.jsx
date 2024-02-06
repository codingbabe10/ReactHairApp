// import React, { useState } from 'react';

// import './Packages.css'; 


// export default function Packages() {
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   // const navigate = useNavigate();


//   const handlePackagesSelect= (price) => {
//     setSelectedPackage(price);

//   };

//   }

//   const handlePackages = (packageInfo) => {
//     setPackages(packageInfo);
//     // Redirect to payment page
//     history.push('/payment', { package: packageInfo });
  

  return (
  
  <>



  
 
      <div class="container">
       
        <h1>Step 1: Pick Your package</h1>
        <h5> If you would like hair styled during your visit, select the style package in addition to your chosen package.</h5>
      
         <div class="row">
             <div class="col-md-4">
                 <div class="card package-item">
                     <div class="card-body">
                         <h5 class="card-title">Style</h5>
                        <p class="card-text">$30 a month</p>
                         <div class="button-container"></div>
                         <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Go to the salon and get your hair styled in any way that you want on a monthly basis. You can get an up-do done, a Brazilian blow-out, or luscious curls, any style that you fancy. If you would like your hair styled every time you go to the salon along with any other package you select, you can get this package too so that you always leave the salon with your hair styled along with your hair service of choice.</p>
                         </div>
                 </div>
             </div>
                 <div class="col-md-4">
                     <div class="card package-item">
                         <div class="card-body">
                             <h5 class="card-title">Haircut</h5>
                             <p class="card-text">$40 a month</p>
                             <div class="button-container"></div>
                             <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                         </div>
                     </div>
                 </div>
                 <div class="col-md-4">
                     <div class="card package-item">
                         <div class="card-body">
                             <h5 class="card-title">Haircolor</h5>
                             <p class="card-text">$65 a month</p>
                             <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                         </div>
                     </div>
                 </div>
                     <div class="col-md-4">
                         <div class="card package-item">
                             <div class="card-body">
                                 <h5 class="card-title">Highlights</h5>
                                 <p class="card-text">$80 a month</p>
                                 <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                            </div>
                        </div>
                     </div>
                         <div class="col-md-4">
                             <div class="card package-item">
                                 <div class="card-body">
                                     <h5 class="card-title">Bayalage</h5>
                                     <p class="card-text">$100 a month</p>
                                     <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                                     <p class="card-text">testing </p>
                                 </div>
                             </div>
                         </div>
                             <div class="col-md-4">
                                 <div class="card package-item">
                                     <div class="card-body">
                                         <h5 class="card-title">Haircut and Haircolor</h5>
                                         <p class="card-text">$100 a month</p>
                                         <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                                     </div>
                                 </div>
                             </div>
                                 <div class="col-md-4">
                                     <div class="card package-item">
                                         <div class="card-body">
                                            <h5 class="card-title">Haircut and Highlights</h5>
                                             <p class="card-text">$115 a month</p>
                                             <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                                         </div>
                                     </div>
                                 </div>
                                     <div class="col-md-4">
                                         <div class="card package-item">
                                             <div class="card-body">
                                                 <h5 class="card-title">Haircut and Bayalage</h5>
                                                 <p class="card-text">$120 a month</p>
                                                 <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                                             </div>
                                         </div>
                                     </div>
                                         <div class="col-md-4">
                                             <div class="card package-item">
                                                 <div class="card-body">
                                                     <h5 class="card-title">Hair Extenstions</h5>
                                                     <p class="card-text">$200 a month</p>
                                                     <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                                                 </div>
                                             </div>
                                         </div>
                                             <div class="col-md-4">
                                                 <div class="card package-item">
                                                     <div class="card-body">
                                                         <h5 class="card-title">Haircut, Color, Extensions</h5>
                                                         <p class="card-text">$500 a month</p>
                                                         <button class="btn btn-pink description-btn">Description</button>
                         <button class="btn btn-pink select-btn">Select</button>
                         <p class="description" style="display: none;">Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="col-md-4">
            <div className="card package-item">
              <div className="card-body">
                <h5 className="card-title">First Class</h5>
                <p className="card-text">$3,000 a month</p>
                <button className="btn btn-pink description-btn">Description</button>
                <button className="btn btn-pink select-btn">Select</button>
                <p className="description" style={{ display: 'none' }}>Description: Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script>
        const descriptionBtns = document.querySelectorAll('.description-btn');

        descriptionBtns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            const description = btn.nextElementSibling;
            description.classList.toggle('show-description');
          })
        });
      </script>
    </>
  );
}



const packageOptions = [
    { title: 'Style', price: '$30 a month', description: 'Go to the salon and get your hair styled in any way that you want on a monthly basis. You can get an up-do done, a Brazilian blow-out, or luscious curls, any style that you fancy. If you would like your hair styled every time you go to the salon along with any other package you select, you can get this package too so that you always leave the salon with your hair styled along with your hair service of choice.' },
    { title: 'Haircut', price: '$40 a month', description: 'Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.' },
    { title: 'Haircolor', price: '$65 a month', description: 'Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.' },
    { title: 'Highlights', price: '$80 a month', description: 'Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.' },
    { title: 'Bayalage', price: '$100 a month', description: `Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences. Testing` },
  
  ]







  <div className="row">
  //         {packageOptions.map((option, index) => (
  //           <div className="col-md-4" key={index}>
  //             <div className="card package-item">
  //               <div className="card-body">
  //                 <h5 className="card-title">{option.title}</h5>
  //                 <p className="card-text">{option.price}</p>
  //                 <div className="button-container"></div>
  //                 <button className="btn btn-pink description-btn" onClick={() => handleDescriptionClick(index)}>
  //                   Description
  //                 </button>
  //                 <button className="btn btn-pink select-btn">Select</button>
  //                 <p className={`description`} id={`description-${index}`} style={{ display: 'none' }}>
  //                   Description: {option.description}
  //                 </p>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }
  
  

















// export default Packages;