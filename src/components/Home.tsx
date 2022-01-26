import React from "react";
import { Input, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import { loadResults } from '../redux/reducers/searchReducer'
import { useEffect } from "react";

const { Search } = Input;

const Home = () => {
    const results = useSelector((state) => state);
    const dispatch = useDispatch();

    const onSearch = (value: string) => dispatch(loadResults(value));

    return (
        <div>
            <Search placeholder="input word" onSearch={onSearch} style={{width: 200}}/>
            <Spin spinning/>
        </div>
    );

};

export default Home;
