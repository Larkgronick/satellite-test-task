import React from "react";
import {Input} from "antd";
import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import { loadResults } from '../redux/reducers/searchReducer'

const { Search } = Input;

const Home = () => {
    const results = useSelector((state) => state);
    const dispatch = useDispatch();

    const onSearch = (value: string) => dispatch(loadResults(value));

    return <Search placeholder="input word" onSearch={onSearch} style={{width: 200}}/>;
};

export default Home;
