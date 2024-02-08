import React from 'react'
import { Col, Row } from 'antd'
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style'
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;
const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1677ff',
        }}
    />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const HeaderComponent = () => {
    return (
        <div>
            <WrapperHeader gutter={16}>
                <Col span={6}><WrapperTextHeader>Lap Trinh Don Gian</WrapperTextHeader></Col>
                <Col span={12}>
                    <Search
                        placeholder="input search text"
                        allowClear
                        enterButton="Search"
                        size="large"
                    />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '20px'}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{ fontSize: '40px' }} />
                        <div>
                            <WrapperTextHeaderSmall>Đăng Nhập/ Đăng Kí</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{ fontSize: '40px', color: '#fff' }}/>
                        <WrapperTextHeaderSmall>Giỏ Hàng</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent