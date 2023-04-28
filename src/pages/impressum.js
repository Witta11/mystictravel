// import React, { useEffect, useState } from "react";
// import "../scss/pages/impressum.scss";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import ContactServices from "../services/ContactServices";
// import { Helmet } from "react-helmet"
// // import favicon from '../images/favicon-256x256.png';

// export default function Impressum() {
//   const [dataprotection, setDataProtection] = useState(null);

//   useEffect(() => {
//     const fetchPrint = async () => {
//       return ContactServices.getDataProtection();
//     }
//     fetchPrint().then(value => {
//       setDataProtection(value.data.impressumCollection.items[0].datenschutz.url);
//     })
//   });

//   return (
//     <div>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title></title>
//         <description></description>
//         <link
//             rel='icon'
//             type='image/png'
//             // href={favicon}
//             sizes='32x32'
//           />
//       </Helmet>
//       <Header />
//       <div className="wrapper">
//         <div className="impressum">
//         <div className="impressum__title">Impressum</div>
//         <div className="impressum__address">
//         </div>
//         <div className="impressum__data-protection">Hier findest du die &nbsp;
//           <a href={dataprotection} target="_blank" rel="noreferrer" className="impressum__data-protection-link">Datenschutzerklärung</a>
//         </div>
//       </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
