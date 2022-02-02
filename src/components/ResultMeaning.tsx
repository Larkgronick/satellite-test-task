import { Card } from 'antd';

interface ResultMeaningState {
    partOfSpeech: string,
    definitions: Array<object>,
    key: number,
}

const ResultMeaning = ({partOfSpeech, definitions, key} : ResultMeaningState ) => {
    return (
        <Card.Grid key={key}>
            <Card type="inner" title={partOfSpeech} style={{textAlign: 'center'}}>
                {definitions.map((el: any, i: number) => <Card key={i}>{el.definition}</Card>)}
            </Card>
        </Card.Grid>
    );
}

export default ResultMeaning;
