import React from "react";
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { Card } from 'antd';
import Player from "../components/Player"

import { useState } from "react";

interface RootState {
    results: Array<object>;
}

const Result = () => {
    const [audio, setAudio] = useState('');
    const response: Array<any> = useSelector((state: RootState) => state.results);

    // console.log(response)

    if(response.length > 0) {
        return (
            <>
                <p>Here what we found for '{response[0].word}'</p>
                {response.map((el: any, i:number) => {
                    const { word, phonetic, origin, phonetics, meanings } = el;
                    const { audio, text } =  phonetics[0];

                    return (
                        <Card title={word} key={i}>
                            <div>
                                <p>Phonetic: {phonetic}</p>
                            </div>
                            <div>
                                <p>Origin: {origin}</p>
                            </div>
                            {audio && <><Player url={'https:' + audio}/><p>{text}</p></>}
                            <div>
                                {meanings.map((el: any, i: number) => {
                                    const { partOfSpeech, definitions } = el;

                                    return (
                                        <Card.Grid>
                                            <Card type="inner" title={partOfSpeech} style={{textAlign: 'center'}}>
                                                {definitions.map((el: any, i: number) => {
                                                    const { definition } = el;
                                                    return <Card>{definition}</Card>
                                                })}
                                            </Card>
                                        </Card.Grid>
                                    );
                                })}
                            </div>
                        </Card>
                    );
                })}
            </>
        );
    } else {
        return <div>No data loaded</div>
    }
}

export default Result;
