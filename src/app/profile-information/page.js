"use client"
import { useState } from "react";
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';

const ProfileInformation = () => {
    const [firstname, setfrstName] = useState("Suvra")
    const [lastName, setlastName] = useState('Paul')
    const [email, setEmail] = useState('Shuvra.paul@excellisit.com')
    const [mobile, setMobile] = useState(1234567890)
    const [edit, setEdit] = useState(false)
    
    const isMobile = useMediaQuery({ maxWidth: 767 }); 

    const data=[1,2,3]
    return (
        <AppLayout>
            <div className={`layoutContent ${isMobile ? 'p-1' : 'p-5'}`}>
                <Row>
                    <Col md={5} sm={12}><h1 style={{ color: 'white' }}>Profile Information</h1></Col>
                    <Col md={7} sm={12}>
                    </Col>
                </Row>

                <div  className={`orderHistory ${isMobile ? 'p-1 mt-3' : 'p-5 m,t-3'}`}>
                    <Row>
                        <Col md={9}>
                            <Row>
                                <strong className="mb-2 mt-3">Personal Information</strong><br />
                                <Col sm={12} md={6} xxl={4}>

                                    <input className="inputField mt-2 " value={firstname} />
                                </Col>
                                <Col sm={12} md={6} xxl={4}> <input className="inputField mt-2" value={lastName} /></Col>
                               
                            </Row>
                            <Row>
                                <strong className="mb-2 mt-3">Your Gender</strong><br />
                                <Col>

                                    <input type="radio" name="gender" value="male" /> Male &nbsp;&nbsp;
                                    <input type="radio" name="gender" value="female" /> Female
                                </Col>
                                <Col></Col>
                                
                            </Row>
                            <Row>
                                <strong className="mb-2 mt-3">Email Address</strong><br />
                                <Col>

                                    <input className="inputField " value={email} />
                                </Col>
                                <Col> </Col>
                                <Col></Col>
                            </Row>
                            <Row>
                                <strong className="mb-2 mt-3">Mobile Number</strong><br />
                                <Col>

                                    <input className="inputField " value={mobile} />
                                </Col>
                                <Col> </Col>
                                <Col></Col>
                            </Row>
                           {
                            edit && (
                                <Row className="mt-3">
                               
                                <Col sm={12} >

                                <button className=" cancle" onClick={() => { setEdit(false) }}>Save</button>
                                    <button className=" cancle ml-2">Cancle</button>

                             
                                </Col>
                               
                            </Row>
                            )
                           }
                        </Col>
                        <Col md={3}>
                            {
                                !edit && (<div className="editInfo mt-2 mb-2" onClick={() => { setEdit(true) }}>
                                <MdEdit color={colors.green} />&nbsp;<span>Edit Information</span>
                            </div>)
                            }
                        </Col>
                    </Row>
                </div>
                <h2 className="mt-3" style={{color:'white'}}>FAQs</h2>
                 {
                    data.map((item)=>{
                        return <>
                              <br/><span className="faqHead mb-2">Lorem ipsum dolor sit amet consectetur?</span><br/>
                              <span className="faq">Lorem ipsum dolor sit amet consectetur. At nec dui leo et sit lorem commodo in sapien. Enim curabitur fermentum porttitor tincidunt turpis sed ante rhoncus. Elit morbi eget tortor ultricies scelerisque sed pulvinar. Hendrerit gravida nec tristique quis nam aliquam velit.</span>
                        </>
                    })
                 }
            </div>

        </AppLayout>
    )
}



export default ProfileInformation