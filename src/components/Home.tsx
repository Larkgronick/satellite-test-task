import { Input, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import { loadResults } from '../redux/reducers/searchReducer';
import { setLoading, setStatus } from  '../redux/actions/actions'

const { Search } = Input;

interface RootState {
    loading: boolean;
    status: boolean;
}

const Home = () => {
    const dispatch = useDispatch();
    const spinning = useSelector((state: RootState) => state.loading);
    const status = useSelector((state: RootState) => state.status);

    const onSearch = (value: string) => {
        if (value.length === 0) {
            dispatch(setStatus('Input are empty. Please add something to search'))
        } else {
            dispatch(setStatus('Processing...')) 
            dispatch(setLoading(true))
            dispatch(loadResults(value));
        }
    };

    return (
        <div>
            <Search placeholder="input word" onSearch={onSearch} style={{width: 200}}/>
            <Spin spinning={spinning}/>
            {status}
        </div>
    );

};

export default Home;
