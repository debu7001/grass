"use client"
import AppLayout from "../component/appLayOut"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { useMediaQuery } from 'react-responsive';

const Mydocuments = () => {
   const isMobile = useMediaQuery({ maxWidth: 767 });
   return (
      <AppLayout>
         <div className={`layoutContent ${isMobile ? 'p-1' : 'p-5'}`}>
            <h2 style={{ color: 'white' }}>My documents</h2>

            <div className={`orderHistory ${isMobile ? 'p-1 mt-3' : 'p-5 m,t-3'}`}>
               <button className="addaddress mb-4" > + Attach New Document*</button><br />
               <span style={{ color: 'white' }}>Attached Document</span>
               <div style={{ marginTop: '10px' }}>
                  <div style={{ position: 'relative', width: 'fit-content' }}>
                     <img src={'./images/doc.png'} />
                     <span style={{ color: 'white', position: 'absolute', top: '10px', right: '10px' }}><RiDeleteBin6Fill color={'white'} /></span>
                  </div>
                  <span style={{ color: 'white' }}>Document ABCD</span><br />
                  <span style={{ color: 'white' }}>21.05.2024 20:30 PM</span>
               </div>
            </div>
         </div>

      </AppLayout>
   )
}



export default Mydocuments