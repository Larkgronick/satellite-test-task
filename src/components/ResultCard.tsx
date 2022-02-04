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
}

const ResultCard = ({word, phonetic, origin, meanings, phonetics} : ResultCardState ) => {

    const hasAudio = () =>  phonetics[0] ? phonetics[0].hasOwnProperty("audio") : phonetics[0] !== undefined;
    
    return (
        <Card title={word}>
          <Definition name="Phonetic" definition={phonetic} />
          <Definition name="Origin" definition={origin} />
          {hasAudio() && (
            <>
              <Player url={"https:" + phonetics[0].audio} />
              <p>{phonetics[0].text}</p>
            </>
          )}
          <>
            {meanings.map((el: any, i: number) => {
              const { partOfSpeech, definitions } = el;
              return (
                <ResultMeaning
                  partOfSpeech={partOfSpeech}
                  definitions={definitions}
                />
              );
            })}
          </>
        </Card>
    );
}

export default ResultCard;
