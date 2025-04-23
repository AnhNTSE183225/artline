import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Avatar, ConfigProvider, Layout, Space, theme, Typography } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import { Outlet } from 'react-router'
import s from './frameSidebar.module.css'
import notificationIcon from '../assets/Notification.svg'
import returnIcon from '../assets/Return.svg'
import settingIcon from '../assets/Setting.svg'

export const FrameSidebar: React.FC = () => {

    const { token } = theme.useToken();

    return (
        <ConfigProvider>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider width={300}>
                    <Space align='center' className={s.profile}>
                        <Avatar size={48} src='https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/374540549_335399528861988_7069025914275658525_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=S76aVc35pZQQ7kNvwHSz7sr&_nc_oc=AdlrVL5_PyGHnMv1z1FP-n5X9UDLM1KKoR6ldNrTrXlO_poSSGivuyHVMF-rXR7zMKZbinSpu0yggn90Na918JDA&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=aBDw-JnXnKLv0jjDZe8Dnw&oh=00_AfE2eQT_tU78jDtVM-YgNbaFGPZ54jehgQt9Lvw3g8WuhA&oe=680F349F' />
                        <Space direction='vertical' className={s.profileText}>
                            <Typography.Text style={{ fontSize: token.fontSizeSM }} className={s.professionText}>ART DIRECTOR</Typography.Text>
                            <Typography.Text className={s.nameText}>Dayena</Typography.Text>
                        </Space>
                    </Space>
                    <Sidebar />
                </Sider>
                <Layout>
                    <Header className={s.header}>
                        <img src={notificationIcon} alt="notification" />
                        <img src={settingIcon} alt="setting" />
                        <img src={returnIcon} alt="return" />
                    </Header>
                    <Content>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}
