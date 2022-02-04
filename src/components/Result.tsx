import { useSelector } from 'react-redux';
import ResultCard from './ResultCard';

interface RootState {
    results: Array<object>;
}

const Result:React.FC = () => {
    const response: Array<any> = useSelector((state: RootState) => state.results);
    const no_data_response = 'No data loaded. Please, search again';

    if(response.length > 0 && typeof response !== "string") {
        const search = response[0].word;

        return (
            <>
                <p>Here what we found for '{search}'</p>
                {response.map((el) => {
                    const { word, phonetic, origin, phonetics, meanings } = el;
                    
                    return (
                        <ResultCard 
                            word={word}
                            phonetic={phonetic}
                            origin={origin}
                            meanings={meanings}
                            phonetics={phonetics}
                        />
                    )
                })}
            </>
        );
    } else if(typeof response === 'string'){
        return <div>{response}</div>
    }else {
        return <div>{no_data_response}</div>
    }
}

export default Result;
