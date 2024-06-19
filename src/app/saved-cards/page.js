"use client"
import { useState } from "react";
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useMediaQuery } from 'react-responsive';
const SavedCards = () => {
    const [add, setAdd] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <AppLayout>
            <div  className={`layoutContent ${isMobile ? 'p-3' : 'p-5'}`}>
                <h1 style={{ color: 'white' }}>Saved Cards</h1>
                {
                    add && (

                        <div className={`orderHistory ${isMobile ? 'p-3 mt-3' : 'p-5 m,t-3'}`}>
                            ADD NEW BANK ACCOUNT <br />
                            <Row>
                                <Col md={10}>
                                    <Row className="mt-3">

                                        <Col className="mt-2" sm={12} md={6}>
                                            <input className="inputField " placeholder="First Name" />
                                        </Col>
                                        <Col className="mt-2" sm={12} md={6}> <input className="inputField" placeholder="Last Name" /></Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">

                                        <Col className="mt-2" sm={12} md={6}>
                                            <input className="inputField " placeholder="Email" />
                                        </Col>
                                        <Col className="mt-2"  sm={12} md={6}> <input className="inputField" placeholder="Registered Mobile Number" /></Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">

                                        <Col className="mt-2" sm={12} md={6}>
                                            <input className="inputField " placeholder="Account Number" />
                                        </Col>
                                        <Col className="mt-2" sm={12} md={6}> <input className="inputField" placeholder="Re-Enter Account Number" /></Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3 mb-4">

                                        <Col className="mt-2" sm={12} md={6}>
                                            <input className="inputField " placeholder="Ifsc Code" />
                                        </Col>
                                        <Col> </Col>
                                        <Col>
                                        </Col>
                                    </Row>

                                   
                                    <button className=" cancle" onClick={() => { setAdd(false) }}>Save</button>
                                    <button className=" cancle ml-2">Cancle</button>
                                </Col>
                            </Row>

                        </div>
                    )
                }

                <div className={`orderHistory ${isMobile ? 'p-3 mt-3' : 'p-5 m,t-3'}`}>
                    {
                        !add && (<> <button style={{ padding: '10px', borderRadius: '30px', backgroundColor: '#1dd15e5c', color: '#1DD15E', marginTop: '20px', marginBottom: '20px' }} onClick={() => { setAdd(true) }}>+ Add New Bank account</button><br /></>)
                    }
                    <span style={{ color: 'white', marginBottom: '10px' }}>Saved Cards</span><br />
                    <div className="oneCheckBox">
                        <img src={'./images/icici.png'} style={{ height:isMobile?'100px' :'200px', marginTop: '10px' }} />
                        <div className="deleteContainer" style={{ marginLeft: '20px' }}>
                            <RiDeleteBin5Fill color={'red'} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}



export default SavedCards