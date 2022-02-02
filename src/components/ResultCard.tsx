import { Card } from 'antd';
import Player from "./Player";
import ResultMeaning from "./ResultMeaning";
import Definition from "./Definition";

interface ResultCardState {
    word: string,
    phonetic: string,
    origin: string,
    meanings: Array<object>,
    phonetics: Array<any>,
    key: number
}

const ResultCard = ({word, phonetic, origin, meanings, phonetics, key} : ResultCardState ) => {
    
    const hasAudio = () =>  {
        if (phonetics[0]) {
            return phonetics[0].hasOwnProperty("audio");
        } else {
            return phonetics[0] !== undefined;
        }
    }
    
    return (
        <Card title={word} key={key}>
            <Definition name="Phonetic" definition={phonetic}/>
            <Definition name="Origin" definition={origin} />
            
            {hasAudio() && <><Player url={'https:' + phonetics[0].audio}/><p>{phonetics[0].text}</p></>}
            <div>
                {meanings.map((el: any, i: number) => {
                    const { partOfSpeech, definitions } = el;
                    return ( 
                        <ResultMeaning partOfSpeech={partOfSpeech} definitions={definitions} key={key}/>
                    )
                })}
            </div>
        </Card>
    );

}

export default ResultCard;
