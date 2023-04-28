// import React, { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ProductBoxSmall from "../components/ProductBoxSmall";
// import PrintServices from '../services/PrintServices';
// import "../scss/pages/listing.scss";
// import { Helmet } from "react-helmet"
// // import favicon from '../images/favicon-256x256.png';

// function Listing() {
//   const [prints, setPrints] = useState(null);

//   useEffect(() => {
//     const fetchPrint = async () => {
//       return PrintServices.getPrints();
//     }
//     fetchPrint().then(value => {
//       setPrints(value.data.listingPrintArtCollection.items[0].printCollection.items);
//     })
//   });

//   return (
//       <>
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title></title>
//           <description></description>
//           <link
//             rel='icon'
//             type='image/png'
//             // href={favicon}
//             sizes='32x32'
//           />
//         </Helmet>
//         <Header />
//         <div className="wrapper is--body">
//           <div className={'listing'}>
//             {prints && prints.map((print, key) => (
//               <div className={'listing-element'}>
//                 {/* <ProductBoxSmall key={key} print={print}/> */}
//               </div>
//             ))}
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
// }

// export default Listing;
