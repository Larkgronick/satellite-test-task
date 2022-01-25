import React from "react";
import {Input} from "antd";
import 'antd/dist/antd.css';

const {Search} = Input;

const Home = () => {
    const onSearch = (value: string) => console.log(value);

    return (
        <Search placeholder="input word" onSearch={onSearch} style={{width: 200}}/>
    );
};

export default Home;
