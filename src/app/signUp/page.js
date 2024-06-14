'use client'
import { Row, Col } from "react-bootstrap"
import { colors } from "../constent/colors"
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { useRouter } from 'next/navigation'



const Login = () => {
    const router=useRouter()
    return (
        <>


            <Row style={{ height: '100vh' }} className="align-items-end">
                <Col md={6} style={{ padding: '0px' }}>
                    <span className="LoginOnImg" style={{ backgroundColor: colors.green,cursor:'pointer' }}  onClick={()=>{router.push('login')}}> &nbsp;&nbsp;<img src="/images/leftarrow.png" />&nbsp;&nbsp;LOG IN </span>
                    <img className="rightImg" src="/images/image1.png" />
                </Col>
                <Col md={6} style={{ backgroundColor: colors.black }}>
                    <Row className="hrightRightSide">
                        <Col xs={1} md={1} lg={2} xl={2}></Col>
                        <Col xs={10} md={10} lg={8} xl={8} className="alignCenter" >
                            <div className="align">
                                <img style={{ height: '80px' }} src="/images/logo.png" />
                                <span className="grass">Grass App</span>
                            </div>

                            <div style={{ textAlign: 'center' }}>


                                <span className="welcome">Register to Explore Exciting Things</span>

                                <div style={{ marginTop: '30px' }} class="container">
                                    <input class="input-field" type="text" placeholder="Full Name" />
                                    <CiUser class="icon" />
                                </div>
                                <div style={{ marginTop: '30px' }} class="container">
                                    <input class="input-field" type="text" placeholder="Email Id" />
                                    <MdOutlineMail class="icon" />
                                </div>
                                <div class="container mt-3" style={{ marginBottom: '10px' }}>
                                    <input class="input-field" type="text" placeholder="Password" />
                                    <IoKeyOutline class="icon" />
                                    <FaEyeSlash class="iconRightside" />
                                </div>
                                <div class="container mt-3" style={{ marginBottom: '10px' }}>
                                    <input class="input-field" type="text" placeholder="Confirm Password" />
                                    <IoKeyOutline class="icon" />
                                    <FaEyeSlash class="iconRightside" />
                                </div>
                                
                                <button className="loginButton" style={{ backgroundColor: colors.green }}>SIGN UP</button>
                                <span className="haveAnAcc"> Already Have an Account? <span style={{ color: colors.green,cursor:'pointer' }}  onClick={()=>{router.push('login')}}>LOGIN</span></span><br />
                            </div>
                            <div></div>
                        </Col>
                        <Col xs={1} md={1} lg={2} xl={2}></Col>
                    </Row>
                    <img className="logo2" src="/images/logo2.png" />
                </Col>

            </Row>
        </>
    )
}

export default Login