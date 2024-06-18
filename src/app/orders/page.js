"use client"
import { useState } from "react";
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useMediaQuery } from 'react-responsive';
const MyOrders = () => {
    const orders = [1, 2, 3, 4, 5]
    const [filter, setFilter] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 767 }); 

    const toggleFilter = () => {
        setFilter(!filter)
    }
    return (
        <AppLayout>
            <div className={`layoutContent ${isMobile ? 'p-1' : 'p-5'}`}>
                <Row>
                    <Col xl={5} md={4} sm={12}><h1 style={{ color: 'white' }}>My Orders</h1></Col>
                    <Col xl={7} md={8} sm={12}>
                        <Row>
                            <Col sm={12} md={7} xl={8} className="mt-2">
                                <input placeholder="Search your order here..." className="searchBar " />
                            </Col>
                            <Col sm={12} md={5} xl={4} style={{ display: 'flex' }} className="mt-2">
                                <button className="btn btn-success " style={{ backgroundColor: '#1FDF64', color: 'black', textWrap: 'nowrap' }}>Search Orders</button>
                                <div className="filterIconContainer ml-3" onClick={() => { toggleFilter() }}>
                                    <MdFilterListAlt color={colors.green} size={30} />
                                </div>
                                {
                                    filter && (
                                        <div className="filterContent">
                                            <div className="spaceBetween">
                                                <MdFilterListAlt color={colors.green} size={30} />
                                                <span style={{fontSize:'large'}}>Filter</span>
                                                <RxCross2 color={'whte'} size={30} onClick={() => { toggleFilter() }}/>
                                            </div>
                                            <div className="filterSeparateLine"></div>
                                            <span className="filterType">ORDER STATUS</span><br />
                                            <div className="oneCheckBox" style={{ marginTop: '10px' }}>
                                                <input type="checkbox" /> &nbsp;&nbsp;On the way
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;Delivered
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;Returned
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;Cancelled
                                            </div>

                                            <div className="filterSeparateLine"></div>
                                            <span className="filterType">ORDER TIME</span><br />

                                            <div className="oneCheckBox" style={{ marginTop: '10px' }}>
                                                <input type="checkbox" /> &nbsp;&nbsp;Last 30 days
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;2023
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;2022
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;2021
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;2020
                                            </div>
                                            <div className="oneCheckBox">
                                                <input type="checkbox" /> &nbsp;&nbsp;Older
                                            </div>

                                            <button className="btn btn-success filterapply" onClick={() => { toggleFilter() }}>Apply</button>

                                        </div>
                                    )
                                }
                            </Col>

                        </Row>
                    </Col>
                </Row>

                <div className="orderHistory mt-3">

                    {
                        orders.map((item, index) => {
                            return (
                                <div key={index} className="order mt-2">
                                    <Row style={{ width: '100%' }}>
                                        <Col sm={12} md={2} lg={2} xl={2}><img style={{ height: '100px', width: '100px' }} src={'./images/product.png'} /></Col>
                                        <Col sm={12} md={4} lg={3} xl={4}> <div>
                                            <span>Lorem ipsum dolor sit amet consectetur.</span><br />
                                            <span className="lightText">27% THC</span><br />
                                            <span className="lightText">Humboldt Farms</span><br />

                                        </div></Col>
                                        <Col sm={12} md={4} lg={4} xl={4}>
                                            <span className="lightText">Price</span><br />
                                            <span>$63.20</span>
                                        </Col>
                                        <Col sm={12} md={2} lg={3} xl={2}><div >
                                            <span className="lightText">Status</span><br />
                                            <div style={{ display: 'inline-flex', alignItems: 'center' }}><div className="blueDot"></div> &nbsp;&nbsp;<span>Will deliver soon</span></div><br />
                                            <span className="trackYour">Track your order</span>
                                        </div></Col>
                                    </Row>

                                </div>
                            )
                        })
                    }

                </div>
            </div>


        </AppLayout>
    )
}

export default MyOrders