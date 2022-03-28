import React from 'react';
import { Space } from 'antd';
import { AccountBookFilled, AccountBookOutlined, } from '@sensoro-design/icons';

export default () => {
  return (
    <Space>
      <AccountBookFilled />
      <AccountBookOutlined spin />
    </Space>
  )
}
