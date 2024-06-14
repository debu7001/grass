"use client"
import { Row, Col } from "react-bootstrap"
import { colors } from "../constent/colors"
import { CiUser } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useRouter } from 'next/navigation'



const Login = () => {
    const router=useRouter()
    return (
        <>


            <Row style={{ height: '100vh' }}>
                <Col md={6} style={{ backgroundColor: colors.black }}>
                    <Row style={{ height: '100vh' }}>
                        <Col xs={1} md={1} lg={2} xl={2}></Col>
                        <Col xs={10} md={10} lg={8} xl={8} className="alignCenter" >
                            <div className="align">
                                <img style={{ height: '80px' }} src="/images/logo.png" />
                                <span className="grass">Grass App</span>
                            </div>

                            <div style={{ textAlign: 'center' }}>


                                <span className="welcome">Welcome again!</span>

                                <div style={{ marginTop: '30px' }} class="container">
                                    <input class="input-field" type="text" placeholder="Enter Username" />
                                    <CiUser class="icon" />
                                </div>
                                <div class="container mt-3" style={{ marginBottom: '10px' }}>
                                    <input class="input-field" type="text" placeholder="Enter Username" />
                                    <IoKeyOutline class="icon" />
                                    <FaEyeSlash class="iconRightside" />
                                </div>
                                <span style={{ color: colors.green, fontSize: '13px' }}>forgot Your Password?</span><br />
                                <button className="loginButton" style={{ backgroundColor: colors.green }}  onClick={()=>{router.push('dashboard')}}>LOGIN</button>
                                <span className="haveAnAcc"> Don’t Have an Account? <span style={{ color: colors.green,cursor:'pointer' }} onClick={()=>{router.push('signUp')}}> SIGNUP NOW</span></span><br />
                            </div>
                            <div></div>
                        </Col>
                        <Col xs={1} md={1} lg={2} xl={2}></Col>
                    </Row>
                    <img className="logo2" src="/images/logo2.png" />
                </Col>
                <Col md={6} style={{padding:'0px' }}>
                <span className="signUpOnImg" style={{backgroundColor:colors.green,cursor:'pointer'}} onClick={()=>{router.push('signUp')}}> &nbsp;&nbsp;SIGNUP &nbsp;&nbsp; <img  src="/images/arrow.png" /></span>
                <img className="rightImg" src="/images/image1.png" />
                </Col>
            </Row>
        </>
    )
}

export default Login