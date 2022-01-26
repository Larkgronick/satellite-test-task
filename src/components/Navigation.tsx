import React from "react";
import {Link} from "react-router-dom";
import { Breadcrumb } from 'antd';

const Navigation = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/result">Result</Link>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};

export default Navigation;
