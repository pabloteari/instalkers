import React from "react";

import { InstagramOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const InputInst = () => {
    return (

        <Input.Group compact>
            <Search
                prefix={<InstagramOutlined />}
                placeholder="ID to be searched"
                enterButton="Spy"
                size="large"
                color="red"
                loading={false} />
        </Input.Group>
    )
};

export default InputInst
