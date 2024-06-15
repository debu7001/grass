"use client"
import { useState } from "react";
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
const MyOrders = () => {
    const orders = [1, 2, 3, 4, 5]
    const [filter,setFilter]=useState(false)

    const toggleFilter=()=>{
        setFilter(!filter)
    }
    return (
        <AppLayout>
            <div className="layoutContent p-5">
                <Row>
                    <Col md={5} sm={12}><h1 style={{ color: 'white' }}>My Orders</h1></Col>
                    <Col md={7} sm={12}>
                        <Row>
                            <Col sm={12} md={8}>
                                <input placeholder="Search your order here..." className="searchBar " />
                            </Col>
                            <Col sm={12} md={4} style={{ display: 'flex' }} >
                                <button className="btn btn-success " style={{ backgroundColor: '#1FDF64', color: 'black', textWrap: 'nowrap' }}>Search Orders</button>
                                <div className="filterIconContainer ml-3" onClick={()=>{toggleFilter()}}>
                                    <MdFilterListAlt color={colors.green} size={30} />
                                </div>
                               {
                                filter && (
                                    <div className="filterContent">
                                        <div className="filterSeparateLine"></div>
                                  <span className="filterType">Order Status</span><br/>
                                  <div className="oneCheckBox" style={{marginTop:'10px'}}>
                                  <input type="checkbox"/> &nbsp;&nbsp;On the way
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;Delivered
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;Returned
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;Cancelled
                                  </div>
                                
                                  <div className="filterSeparateLine"></div>
                                  <span className="filterType">Order Time</span><br/>
                        
                                  <div className="oneCheckBox" style={{marginTop:'10px'}}>
                                  <input type="checkbox"/> &nbsp;&nbsp;Last 30 days
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;2023
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;2022
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;2021
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;2020
                                  </div>
                                  <div className="oneCheckBox">
                                  <input type="checkbox"/> &nbsp;&nbsp;Older
                                  </div>

                                  <button className="btn btn-success filterapply">Apply</button>
                               
                                </div>
                                )
                               }
                            </Col>

                        </Row>
                    </Col>
                </Row>

                <div className="orderHistory mt-3">

                    {
                        orders.map((item,index) => {
                            return (
                                <div key={index} className="order mt-2">
                                    <Row style={{ width: '100%' }}>
                                        <Col sm={12} md={2} lg={2} xl={2}><img style={{ height: '100px', width: '100px' }} src={'./images/product.png'} /></Col>
                                        <Col sm={12} md={4} lg={3} xl={4}> <div>
                                            <span>Lorem ipsum dolor sit amet consectetur.</span><br />
                                            <span className="lightText">27% THC</span><br />
                                            <span className="lightText">Humboldt Farms</span><br />
                                            <span className="lightText">Price</span>&nbsp;&nbsp;<span>$63.20</span>
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

export default  MyOrders