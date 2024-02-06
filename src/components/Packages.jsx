


export default function Packages() {
  return (
    <div className="App">
      
      
       
        <h1>Step 1: Pick Your package</h1>
        <h5> If you would like hair styled during your visit, select the style package in addition to your chosen package.</h5>
      
         
    </div>
  );
}






// import React from 'react';

// export default function PackageOptions() {
//   const handleDescriptionClick = (index) => {
//     const description = document.getElementById(`description-${index}`);
//     description.classList.toggle('show-description');
//   };

//   return (
//     <div className="container">
//       <h1>Step 1: Pick Your package</h1>
//       <h5>If you would like hair styled during your visit, select the style package in addition to your chosen package.</h5>
//       <div className="row">
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

const packageOptions = [
  { title: 'Style', price: '$30 a month', description: 'Go to the salon and get your hair styled in any way that you want on a monthly basis. You can get an up-do done, a Brazilian blow-out, or luscious curls, any style that you fancy. If you would like your hair styled every time you go to the salon along with any other package you select, you can get this package too so that you always leave the salon with your hair styled along with your hair service of choice.' },
  { title: 'Haircut', price: '$40 a month', description: 'Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.' },
  { title: 'Haircolor', price: '$65 a month', description: 'Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.' },
  { title: 'Highlights', price: '$80 a month', description: 'Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences.' },
  { title: 'Bayalage', price: '$100 a month', description: `Our professional haircut service includes a consultation, shampoo, haircut, and styling to suit your preferences. Testing` },

]