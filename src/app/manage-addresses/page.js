"use client"
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { CgTrack } from "react-icons/cg";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive';



const ManageAddress = () => {

    const [add, setAdd] = useState(false)
    const [edit, setEdit] = useState(false)

    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <AppLayout>
            <div className={`layoutContent ${isMobile ? 'p-1' : 'p-5'}`}>
                <Row>
                    <Col md={6} sm={12}><h1 style={{ color: 'white' }}>Manage Addresses</h1></Col>

                </Row>

                {
                    (add && !edit) && (
                        <div className={`orderHistory ${isMobile ? 'p-1 mt-3' : 'p-5 m,t-3'}`}>
                            ADD A NEW ADDRESS <br />

                            <div className="location mt-4 mb-2"> <CgTrack size={20} /> &nbsp;&nbsp; <span> Use My Current Location</span></div>
                            <Row>
                                <Col md={10}>
                                    <Row className="mt-3">

                                        <Col>
                                            <input className="inputField " placeholder="Name" />
                                        </Col>
                                        <Col> <input className="inputField" placeholder="Mobile Number" /></Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">

                                        <Col>
                                            <input className="inputField " placeholder="Pin Code" />
                                        </Col>
                                        <Col> <input className="inputField" placeholder="Locality" /></Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">

                                        <Col>
                                            <input className="inputField " placeholder="City/District/Town" />
                                        </Col>
                                        <Col> <input className="inputField" placeholder="Select State" /></Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <Row className="mt-3">

                                        <Col>
                                            <input className="inputField " placeholder="Landmark (Optional)" />
                                        </Col>
                                        <Col> <input className="inputField" placeholder="Alternate Phone Number (Optional)" /></Col>
                                        <Col>
                                        </Col>
                                    </Row>
                                    <div className="mt-4 mb-3">
                                        Address type: &nbsp;&nbsp;
                                        <input type="radio" name="type" value="Home" /> Home &nbsp;&nbsp;
                                        <input type="radio" name="type" value="Work" /> Work
                                    </div>
                                    <button className="btn btn-success buttonSave" onClick={() => { setAdd(false) }}>Save</button>
                                    <button className="btn btn-secondary cancelButton " style={{ backgroundcolor: 'transparent', borderRadius: '30px' }}>Cancle</button>
                                </Col>
                            </Row>

                        </div>
                    )
                }





                <div className={`orderHistory ${isMobile ? 'p-1 mt-3' : 'p-5 m,t-3'}`}>
                    {!add && (<><button className="addaddress" onClick={() => { setAdd(true) }}> + Add New Address</button><br /></>)}

                    {
                        edit ? (
                            <div className={`orderHistory ${isMobile ? 'p-1 mt-3' : 'p-5 m,t-3'}`}>
                                EDIT ADDRESS <br />

                                <div className="location mt-4 mb-2"> <CgTrack size={20} /> &nbsp;&nbsp; <span> Use My Current Location</span></div>
                                <Row>
                                    <Col md={10}>
                                        <Row className="mt-3">

                                            <Col>
                                                <input className="inputField " placeholder="Name" />
                                            </Col>
                                            <Col> <input className="inputField" placeholder="Mobile Number" /></Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">

                                            <Col>
                                                <input className="inputField " placeholder="Pin Code" />
                                            </Col>
                                            <Col> <input className="inputField" placeholder="Locality" /></Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">

                                            <Col>
                                                <input className="inputField " placeholder="City/District/Town" />
                                            </Col>
                                            <Col> <input className="inputField" placeholder="Select State" /></Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">

                                            <Col>
                                                <input className="inputField " placeholder="Landmark (Optional)" />
                                            </Col>
                                            <Col> <input className="inputField" placeholder="Alternate Phone Number (Optional)" /></Col>
                                            <Col>
                                            </Col>
                                        </Row>
                                        <div className="mt-4 mb-3">
                                            Address type: &nbsp;&nbsp;
                                            <input type="radio" name="type" value="Home" /> Home &nbsp;&nbsp;
                                            <input type="radio" name="type" value="Work" /> Work
                                        </div>
                                        <button className="btn btn-success buttonSave" onClick={() => { setEdit(false) }}>Save</button>
                                        <button className="btn btn-secondary cancelButton " style={{ backgroundcolor: 'transparent', borderRadius: '30px' }}>Cancle</button>
                                    </Col>
                                </Row>

                            </div>
                        ) : (
                            <Row>
                                <Col md={8}>

                                    <div className="mt-3 addressContainer">
                                        <span className="addressType">Home</span><br />
                                        <span style={{ fontSize: 'larger', fontWeight: '500', marginTop: '10px' }}>Shuvra Paul • 1234567890</span><br />
                                        <span>Shuvra.paul@excellisit.com</span><br />
                                        <span>Millenium IT Park, Block DN, Sector 5, Rs software, Bidhan Nagar, West Bengal - 700091</span>
                                    </div></Col>
                                <Col md={4} style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'flex' }} className='mt-3'>
                                        <div className="deleteContainer">
                                            <RiDeleteBin5Fill color={'red'} />
                                        </div> &nbsp;
                                        <div className="deleteContainer">
                                            <MdEdit color={colors.green} onClick={() => { setEdit(true) }} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        )
                    }





                </div>
            </div>
        </AppLayout>)
}

export default ManageAddress