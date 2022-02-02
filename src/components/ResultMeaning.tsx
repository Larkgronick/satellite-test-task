import { Card } from 'antd';
import styles from "../App.module.scss"

interface ResultMeaningState {
    partOfSpeech: string,
    definitions: Array<object>,
    key: number,
}

const ResultMeaning = ({partOfSpeech, definitions, key} : ResultMeaningState ) => {
    return (
        <Card.Grid className={styles["result-meaning"]} key={key}>
            <Card type="inner" title={partOfSpeech} style={{textAlign: 'center'}}>
                {definitions.map((el: any, i: number) => <Card key={i}>{el.definition}</Card>)}
            </Card>
        </Card.Grid>
    );
}

export default ResultMeaning;
