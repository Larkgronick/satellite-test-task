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
    const respond: Array<any> = useSelector((state: RootState) => state.results);
    // console.log(respond)

    if(respond.length > 0) {
        return (
            <>
                <p>Here what we found for '{respond[0].word}'</p>
                {respond.map((el: any, i:number) => {
                    const { word, phonetic, origin, phonetics,  } = el;
                    return (
                        <Card title={word} style={{width: 300}} key={i}>
                            <div>
                                <p>Phonetic: {phonetic}</p>
                            </div>
                            <div>
                                <p>Origin: {origin}</p>
                            </div>
                            <Player url={'https:' + phonetics[0].audio}/>
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
