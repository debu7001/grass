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

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const AppLayout = React.memo(({ val: Child, selected }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [collapsed, setCollapsed] = useState(false);
  
    const menuItems = [
        { key: '1', icon: <MdOutlineSpaceDashboard size={25} />, label: 'Dashboard', route: '/dashboard' },
        { key: '2', icon: <IoBagCheckOutline size={25} />, label: 'My Orders', route: '/orders' },
        { key: '3', icon: <RiUserSettingsFill size={25} />, label: 'Account Settings', route: '/account-settings' },
        { key: '4', icon: <FaHandHoldingDollar size={25} />, label: 'Payments', route: '/payments',
        subMenu: [
            { key: '5-1', label: 'Wallet', route: '/wallet' },
            { key: '5-2', label: 'Saved Cards', route: '/saved-cards' },
        ] },
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
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Sider trigger={null} width={300} collapsible collapsed={collapsed} style={{ backgroundColor: colors.black }}>
                <div className="logo" onClick={toggle}>
                    <div className="alignLogoMenuBar">
                        <img style={{ height: '50px' }} src="/images/logo.png" />
                        {!collapsed && (<span className="grassMenuBar">Grass App</span>)}
                    </div>
                </div>
                <Menu theme="dark" mode="inline" style={{ marginTop: '20px', backgroundColor: colors.black, padding: '0 10px 0 10px' }}  >
                    {menuItems.map(item => (
                        item.subMenu ? (
                            <SubMenu key={item.key}  className={item.subMenu.some(subItem => pathname.startsWith(subItem.route)) ? 'menuItemStyle2' : 'menuItemStyle'} icon={item.icon} title={<span>{item.label}</span>}>
                                {item.subMenu.map(subItem => (
                                    <Menu.Item key={subItem.key} className={pathname === subItem.route ? 'menuItemStyle3' : 'menuItemStyle'}>
                                        <Link style={{ textDecorationLine: 'none'}} href={subItem.route}>
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
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0, backgroundColor: colors.black, }}></Header>
                <Content className="site-layout-background">
                    <Child />
                </Content>
            </Layout>
        </Layout>
    );
});

export default AppLayout;
