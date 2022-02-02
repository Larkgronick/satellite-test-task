import React from "react";
import {Link} from "react-router-dom";
import { Breadcrumb } from 'antd';
import styles from "../App.module.scss"

const Navigation = () => {
    return (
            <Breadcrumb className={styles.navigation}>
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
