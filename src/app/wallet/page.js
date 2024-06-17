"use client"
import AppLayout from "../component/appLayOut"
import { Row, Col } from 'react-bootstrap'
import { colors } from "../constent/colors"
import { FaRegCalendarMinus } from "react-icons/fa";
import { useMediaQuery } from 'react-responsive';


const Wallet = () => {

  const isMobile = useMediaQuery({ maxWidth: 767 }); 

    const data = [
        {
          title: "Promotional Grass App Credits",
          date: "18 May '22",
          expire: "Expiry 20 Sep '22 at 11:59pm",
          amount: 13.50
        },
        {
          title: "Summer Sale Discount",
          date: "25 Jun '22",
          expire: "Expiry 30 Jun '22 at 11:59pm",
          amount: -5.00
        },
        {
          title: "Birthday Coupon",
          date: "10 Aug '22",
          expire: "Expiry 10 Aug '23 at 11:59pm",
          amount: 10.00
        },
        {
          title: "Refer-a-Friend Bonus",
          date: "02 Sep '22",
          expire: "Expiry 02 Dec '22 at 11:59pm",
          amount: 7.25
        },
        {
          title: "Holiday Season Voucher",
          date: "20 Nov '22",
          expire: "Expiry 31 Dec '22 at 11:59pm",
          amount: 20.00
        },
        {
          title: "Early Bird Discount",
          date: "05 Jan '23",
          expire: "Expiry 15 Jan '23 at 11:59pm",
          amount: -8.50
        },
        {
          title: "Spring Renewal Offer",
          date: "15 Mar '23",
          expire: "Expiry 30 Apr '23 at 11:59pm",
          amount: 15.75
        }
      ];

      function formatAmountForTemplate(amount) {
        if (typeof amount === 'string') {
          if (amount.includes('-')) {
            return amount.replace('-', '-$');
          }
        } else if (typeof amount === 'number') {
          if (amount < 0) {
            return `-$${Math.abs(amount).toFixed(2)}`; // Display negative amount properly
          } else {
            return `$${amount.toFixed(2)}`; // Display positive amount properly
          }
        }
        return amount; // Return unchanged if not a string or number
      }
      
    return (
        <AppLayout>
            <div className={`layoutContent ${isMobile ? 'p-1' : 'p-5'}`}>
                <Row>
                    <Col md={9} sm={12}><h1 style={{ color: 'white' }}>Wallet</h1></Col>
                    <Col md={3} sm={12}><span className="credits">Grass App Credits: <span style={{color:colors.green}}>$25.80</span></span></Col>

                </Row>
                <div  className={`orderHistory mt-3 ${isMobile ? 'p-1' : 'p-5'}`}>
               

                    
                    {
                        data.map((item,index)=>{
                            return (
                                <Row key={index} className="walletRecord  ">
                        <Col md={5} sm={12}><span style={{fontSize:'18px'}}>{item?.title}</span><br/><span style={{fontSize:'14px'}}>{item?.date}</span></Col>
                        <Col md={5} sm={12}> <div style={{display:'flex'}}><FaRegCalendarMinus color={'red'}/> &nbsp;&nbsp;<span style={{fontSize:'12px'}}>{item?.expire}</span></div></Col>
                        <Col md={2} sm={12}><span style={{fontSize:'20px',color:item?.amount<0?'red':colors.green}}>{formatAmountForTemplate(item?.amount)}</span></Col>
                    </Row>
                            )
                        })
                    }
                   
                    
                </div>
            </div>

        </AppLayout>
    )
}



export default Wallet