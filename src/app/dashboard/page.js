"use client"
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import RevenueLineChart from "../component/chart";
import { useMediaQuery } from 'react-responsive';
const Dashboard = () => {
    const orders = [1, 2, 3]
    const notification = [1, 2, 3, 4]
    const isMobile = useMediaQuery({ maxWidth: 767 }); 
    return (
        <AppLayout>
            <div className={`layoutContent ${isMobile ? 'p-3' : 'p-5'}`}>
                <Row>
                    <Col xl={4} lg={3} md={5} sm={12}><h1 style={{ color: 'white' }}>Dashboard</h1></Col>
                    <Col xl={8} lg={9} md={7} sm={12}>
                        <Row>
                            <Col sm={12} md={8}  className="mt-2">
                                <input placeholder="Search your order here..." className="searchBar " />
                            </Col>
                            <Col sm={12} md={4} style={{ display: 'flex' }} className="mt-2">
                                <button className="btn btn-success " style={{ backgroundColor: '#1FDF64', color: 'black', textWrap: 'nowrap' }}>Search Orders</button>
                                <div className="filterIconContainer ml-3">
                                    <MdFilterListAlt color={colors.green} size={30} />
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={7} lg={6} className=" mt-5">
                        <div className="useInfoWithImg">
                            <Row style={{width:'100%'}}>
                                <Col xl={5} md={6} lg={12} sm={12} style={{display:'flex',justifyContent:'center'}}> <img className="prodileImgdashboard" src={'./images/profile.png'} /></Col>
                                <Col xl={7} md={6} lg={12} sm={12}>  <div className="userInfo">
                                <span>Hello!</span><br />
                                <span className="userName">SAM RUNGTA</span><br />
                                <span>samrungta@gmail.com</span><br />
                            </div></Col>
                            </Row>
                           
                          
                        </div>

                        <div className="orderHistory mt-3">
                            <span style={{ color: 'white' }}>Order History</span>
                            {
                                orders.map((item,index) => {
                                    return (
                                        <div key={index} className="order mt-2">
                                            <Row style={{ width: '100%' }}>
                                                <Col sm={12} md={3} lg={6} xl={4}><img style={{ height: '100px' }} src={'./images/product.png'} /></Col>
                                                <Col sm={12} md={4} lg={6} xl={4}> <div>
                                                    <span>Lorem ipsum dolor sit amet consectetur.</span><br />
                                                    <span className="lightText">27% THC</span><br />
                                                    <span className="lightText">Humboldt Farms</span><br />
                                                    <span className="lightText">Price</span>&nbsp;&nbsp;<span>$63.20</span>
                                                </div></Col>
                                                <Col sm={12} md={3} lg={12} xl={4}><div >
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
                    <Col md={5} lg={6}>
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
                                    notification.map((item,index) => {
                                        return (
                                            <div key={index} className="notification mt-2">
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
        </AppLayout>
    )
}



export default Dashboard