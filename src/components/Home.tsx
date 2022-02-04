import { Input, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import 'antd/dist/antd.css';
import { loadResults } from '../redux/reducers/searchReducer';
import { setLoading, setStatus } from  '../redux/actions/actions';
import styles from '../App.module.scss';

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
            dispatch(setStatus('Input is empty. Please add something to search'))
        } else {
            dispatch(setStatus('Processing...')) 
            dispatch(setLoading(true))
            dispatch(loadResults(value));
        }
    };

    return (
        <div className={styles.home}>
            <Search className={styles.search} placeholder="input word" onSearch={onSearch} style={{width: 400}}/>
            <div>
                <p className={styles.status}>{status}</p>
                <Spin spinning={spinning} size="large"/>
            </div>
        </div>
    );
};

export default Home;
