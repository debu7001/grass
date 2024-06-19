"use client"
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import { useMediaQuery } from 'react-responsive';

const AllNotification = () => {
    const notification = [1, 2, 3, 4, 5, 6, 7, 8]
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <AppLayout>
            <div className={`layoutContent ${isMobile ? 'p-3' : 'p-5'}`}>
                <Row>
                    <Col md={6} sm={12}><h1 style={{ color: 'white' }}>All Notifications</h1></Col>

                </Row>
                <div className="orderHistory mt-3 ">

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




        </AppLayout>
    )
}



export default AllNotification