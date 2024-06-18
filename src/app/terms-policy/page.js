"use client"
import AppLayout from "../component/appLayOut"
import { useMediaQuery } from 'react-responsive';

const TermsPolicy=()=>{
    const isMobile = useMediaQuery({ maxWidth: 767 }); 
    const data=[1,2,3,4,5,6,7]
   return(
    <AppLayout>
     <div className={`layoutContent ${isMobile ? 'p-1' : 'p-5'}`}>
     <h2  style={{color:'white'}}>Terms & Policy</h2>
                 {
                    data.map((item)=>{
                        return <>
                              <br/><span className="faqHead mb-2">Lorem ipsum dolor sit amet consectetur.</span><br/>
                              <span className="faq">Lorem ipsum dolor sit amet consectetur. At nec dui leo et sit lorem commodo in sapien. Enim curabitur fermentum porttitor tincidunt turpis sed ante rhoncus. Elit morbi eget tortor ultricies scelerisque sed pulvinar. Hendrerit gravida nec tristique quis nam aliquam velit.</span>
                        </>
                    })
                 }
     </div>
   
    </AppLayout>
   )
}



export default TermsPolicy