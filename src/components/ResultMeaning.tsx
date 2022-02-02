import { Card } from 'antd';
import styles from "../App.module.scss"

interface ResultMeaningState {
    partOfSpeech: string,
    definitions: Array<object>,
    key: string,
}

const ResultMeaning = ({partOfSpeech, definitions, key} : ResultMeaningState ) => {
    return (
        <div key={key}>
            <Card.Grid className={styles["result-meaning"]}>
                <Card type="inner" title={partOfSpeech} style={{textAlign: 'center'}}>
                    {definitions.map((el: any, i: number) => <Card key={i}>{el.definition}</Card>)}
                </Card>
            </Card.Grid>
        </div>

    );
}

export default ResultMeaning;
