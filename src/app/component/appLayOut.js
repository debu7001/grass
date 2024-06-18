'use client'
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useRouter } from 'next/navigation'; // Import useRouter from next/router
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link'; // Import Link from next/link
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import { RiUserSettingsFill } from "react-icons/ri";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { AiOutlineFolderOpen } from "react-icons/ai";
import { MdOutlinePolicy } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { colors } from '../constent/colors';
import Login from '../login/page';
import { useNavigation } from 'next/navigation';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useMediaQuery } from 'react-responsive';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const AppLayout = React.memo(({ children }) => {
    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMediaQuery({ maxWidth: 767 }); 
    const [collapsed, setCollapsed] = useState(isMobile?true:false);

    useEffect(()=>{
        if(isMobile){
            setCollapsed(true)
        }else{
            setCollapsed(false)
        }
    },[isMobile])
    

    const menuItems = [
        { key: '1', icon: <MdOutlineSpaceDashboard size={25} />, label: 'Dashboard', route: '/dashboard' },
        { key: '2', icon: <IoBagCheckOutline size={25} />, label: 'My Orders', route: '/orders' },
        {
            key: '3', icon: <RiUserSettingsFill size={25} />, label: 'Account Settings', route: '/account-settings', subMenu: [
                { key: '5-1', label: 'Profile information', route: '/profile-information' },
                { key: '5-2', label: 'Manage Addresses', route: '/manage-addresses' },
                { key: '5-3', label: 'My Documents', route: '/my-documents' },
            ]
        },
        {
            key: '4', icon: <FaHandHoldingDollar size={25} />, label: 'Payments', route: '/payments',
            subMenu: [
                { key: '5-1', label: 'Wallet', route: '/wallet' },
                { key: '5-2', label: 'Saved Cards', route: '/saved-cards' },
            ]
        },
        {
            key: '5', icon: <AiOutlineFolderOpen size={25} />, label: 'My Stuff', subMenu: [
                { key: '5-1', label: 'All Notifications', route: '/all-notification' },
                { key: '5-2', label: 'My Wishlist', route: '/my-wishlist' },
            ]
        },
        { key: '6', icon: <MdOutlinePolicy size={25} />, label: 'Terms & Policy', route: '/terms-policy' },
        { key: '7', icon: <IoLogOutOutline size={25} />, label: 'Logout', route: '/logout' },
    ];

    const toggle = () => {
      !isMobile &&  setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }} hasSider>
           
            <Sider trigger={null} width={300} collapsible breakpoint="md" collapsed={collapsed} style={{ backgroundColor: colors.black }}>
                <div className="logo" onClick={toggle}>
                    <div className="alignLogoMenuBar">
                        <img style={{ height: '50px' }} src="/images/logo.png" />
                        {!collapsed && (<span className="grassMenuBar">Grass App</span>)}
                    </div>
                </div>
                <div>
                    <Menu theme="dark" mode="inline" style={{ marginTop: '20px', backgroundColor: colors.black, padding: '0 10px 0 10px',minHeight:'70vh' }}  >
                        {menuItems.map(item => (
                            item.subMenu ? (
                                <SubMenu key={item.key} className={item.subMenu.some(subItem => pathname.startsWith(subItem.route)) ? 'menuItemStyle2' : 'menuItemStyle'} icon={item.icon} title={<span>{item.label}</span>}>
                                    {item.subMenu.map(subItem => (
                                        <Menu.Item key={subItem.key} className={pathname === subItem.route ? 'menuItemStyle3' : 'menuItemStyle'}>
                                            <Link style={{ textDecorationLine: 'none' }} href={subItem.route}>
                                                <span style={{ color: pathname === subItem.route ? '#1FDF64' : 'white', textDecoration: 'none' }}>{subItem.label}</span>
                                            </Link>
                                        </Menu.Item>
                                    ))}
                                </SubMenu>
                            ) : (
                                <Menu.Item key={item.key} icon={item.icon} className={pathname === item.route ? 'menuItemStyle2' : 'menuItemStyle'}>
                                    <Link style={{ textDecorationLine: 'none' }} href={item.route}>
                                        <span style={{ color: pathname === item.route ? 'black' : 'white', textDecoration: 'none' }}>{item.label}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        ))}
                    </Menu>
                    {
                        !collapsed && (
                            <div className='copyRight'>
                            <div className='socialContainer mb-2'>
                                <div className='socialIcon'><FaFacebook /></div>
                                <div className='socialIcon'> <RiInstagramFill /></div>
                                <div className='socialIcon'> <FaTwitter /></div>
                                <div className='socialIcon'> <FaLinkedinIn /></div>
                            </div>
                            Copyright © 2024.<br /> All rights reserved.<br /> designed & developed by excellis IT.
                        </div>
                        )
                    }
                  
                </div>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, backgroundColor: colors.black, }}>
                    <RiArrowDropDownLine className='dropDownArrow' size={30}/>
                <img className='profileOnHeader' src="/images/profile.png" />
                     <CiBellOn className='bell' size={30}/>
                </Header>
                <Content className="site-layout-background" >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
});
AppLayout.displayName = 'AppLayout';

export default AppLayout;
