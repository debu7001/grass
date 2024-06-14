"use client"
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
const MywishList = () => {
    const orders = [1, 2, 3,4,5]
    return (
        <>
            <div className="layoutContent p-5">
                <Row>
                    <Col md={6} sm={12}><h1 style={{ color: 'white' }}>My Wishlist</h1></Col>
                   
                </Row>

                <div className="orderHistory mt-3">
                   
                    {
                        orders.map((item) => {
                            return (
                                <div className="order mt-2">
                                    <Row style={{ width: '100%' }}>
                                        <Col sm={12} md={1}><img style={{ height: '100px' }} src={'./images/product.png'} /></Col>
                                        <Col sm={12} md={4}> <div>
                                            <span>Lorem ipsum dolor sit amet consectetur.</span><br />
                                            <span className="lightText">27% THC</span><br />
                                            <span className="lightText">Humboldt Farms</span><br />
                                            <span className="lightText">Price</span>&nbsp;&nbsp;<span>$63.20</span>
                                        </div></Col>
                                        <Col sm={12} md={5}>
                                        <span className="lightText">Price</span><br/>
                                        <span>$63.20</span>
                                        </Col>
                                        <Col sm={12} md={2} className="deleteContainerCol">
                                        <div className="deleteContainer">
                                            <RiDeleteBin5Fill color={'red'}/>
                                        </div>
                                        </Col>
                                    </Row>

                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default () => <AppLayout selected={'2'} val={MywishList} />;