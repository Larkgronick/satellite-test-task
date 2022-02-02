import { Card } from 'antd';
import Player from "./Player";
import ResultMeaning from "./ResultMeaning";
import Definition from "./Definition";

interface ResultCardState {
    word: string,
    phonetic: string,
    origin: string,
    meanings: Array<object>,
    audio: string,
    text: string,
    key: number
}

const ResultCard = ({word, phonetic, origin, meanings, audio, text, key} : ResultCardState ) => {
    return (
        <Card title={word} key={key}>
            <Definition name="Phonetic" definition={phonetic}/>
            <Definition name="Origin" definition={origin} />
            {audio && <><Player url={'https:' + audio}/><p>{text}</p></>}
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
