"use client"
import { useState } from "react";
import AppLayout from "../component/appLayOut"
import { colors } from "../constent/colors"
import { Row, Col } from 'react-bootstrap'
import { MdFilterListAlt } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";
const savedCards = () => {
    return (
        <>
            <div className="layoutContent p-5">
            <h1 style={{ color: 'white' }}>Saved Cards</h1>
           
                <div className="orderHistory mt-3 p-5">
                <button style={{ padding: '10px', borderRadius: '30px', backgroundColor: '#1dd15e5c', color: '#1DD15E' ,marginTop:'20px',marginBottom:'20px'}}>+ Add New Bank account</button><br/>
                <span style={{ color: 'white',marginBottom:'10px' }}>Saved Cards</span><br/>
                <div className="oneCheckBox">
                       <img src={'./images/icici.png'} style={{height:'200px',marginTop:'10px'}}/>
                    <div className="deleteContainer" style={{marginLeft:'20px'}}>
                        <RiDeleteBin5Fill color={'red'}  />
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}



export default () => <AppLayout selected={'1'} val={savedCards} />;