"use client"
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import RevenueLineChart from "../component/chart";
const Dashboard = () => {
    const orders = [1, 2, 3]
    const notification = [1, 2, 3, 4]
    return (
        <>
            <div className="layoutContent p-5">
                <Row>
                    <Col md={5} sm={12}><h1 style={{ color: 'white' }}>Dashboard</h1></Col>
                    <Col md={7} sm={12}>
                        <Row>
                            <Col sm={12} md={8}>
                                <input placeholder="Search your order here..." className="searchBar " />
                            </Col>
                            <Col sm={12} md={4} style={{ display: 'flex' }} >
                                <button className="btn btn-success " style={{ backgroundColor: '#1FDF64', color: 'black', textWrap: 'nowrap' }}>Search Orders</button>
                                <div className="filterIconContainer ml-3">
                                    <MdFilterListAlt color={colors.green} size={30} />
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col className=" mt-5">
                        <div className="useInfoWithImg">
                            <img className="prodileImgdashboard" src={'./images/profile.png'} />
                            <div className="userInfo">
                                <span>Hello!</span><br />
                                <span className="userName">SAM RUNGTA</span><br />
                                <span>samrungta@gmail.com</span><br />
                            </div>
                        </div>

                        <div className="orderHistory mt-3">
                            <span style={{ color: 'white' }}>Order History</span>
                            {
                                orders.map((item) => {
                                    return (
                                        <div className="order mt-2">
                                            <Row style={{ width: '100%' }}>
                                                <Col sm={12} md={2}><img style={{ height: '100px' }} src={'./images/product.png'} /></Col>
                                                <Col sm={12} md={7}> <div>
                                                    <span>Lorem ipsum dolor sit amet consectetur.</span><br />
                                                    <span className="lightText">27% THC</span><br />
                                                    <span className="lightText">Humboldt Farms</span><br />
                                                    <span className="lightText">Price</span>&nbsp;&nbsp;<span>$63.20</span>
                                                </div></Col>
                                                <Col sm={12} md={3}><div >
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
                    </Col>
                    <Col>
                        <div className="chartContainer">
                            <div className="flexBetween">
                                <span className="revenueTxt">Revenue</span>
                                <span style={{ color: 'white' }}>Last 7 days VS prior week</span>
                            </div>
                            <RevenueLineChart />

                        </div>
                        <div>
                            <div className="orderHistory mt-3">
                                <span style={{ color: 'white' }}>Notifications</span>
                                {
                                    notification.map((item) => {
                                        return (
                                            <div className="notification mt-2">
                                                <Row style={{ width: '100%' }}>
                                                    <Col md={9}>
                                                        <span className="notificationTitle">Lorem ipsum dolor sit amet consectetur?</span>

                                                    </Col>
                                                    <Col md={3} className="notificationTime">  <span>12.06.23</span>
                                                        <span>|</span>
                                                        <span>10.30 AM</span></Col>
                                                </Row>
                                                <Row style={{ width: '100%' }}>
                                                    <span className="notoficationDescription">Lorem ipsum dolor sit amet consectetur. At nec dui leo et sit lorem commodo in sapien. Enim curabitur fermentum porttitor tincidunt turpis sed ante rhoncus.</span>
                                                </Row>
                                            </div>
                                        )
                                    })
                                }

                            </div>

                        </div>
                    </Col>
                </Row>

              

            </div>
        </>
    )
}

export default () => <AppLayout selected={'1'} val={Dashboard} />;