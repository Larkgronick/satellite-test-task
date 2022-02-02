import { useSelector } from 'react-redux';
import ResultCard from './ResultCard';

interface RootState {
    results: Array<object>;
}

const Result = () => {
    const response: Array<any> = useSelector((state: RootState) => state.results);

    if(response.length > 0 && typeof response !== "string") {
        const search = response[0].word;

        return (
            <>
                <p>Here what we found for '{search}'</p>
                {response.map((el: any, i:number) => {
                    const { word, phonetic, origin, phonetics, meanings } = el;
                    const { audio, text } =  phonetics[0];

                    return (
                        <ResultCard 
                            word={word}
                            phonetic={phonetic}
                            origin={origin}
                            meanings={meanings}
                            audio={audio}
                            text={text}
                            key={i}
                        />
                    )
                })}
            </>
        );
    } else if(typeof response === 'string'){
        return <div>{response}</div>
    }else {
        return <div>No data loaded. Please, search again</div>
    }
}

export default Result;
