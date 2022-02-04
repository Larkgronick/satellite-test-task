import { useState, useEffect } from "react";
import { Button } from "antd";
import { PauseOutlined, CaretRightOutlined } from "@ant-design/icons";

const useAudio = (url: string) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing, audio]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, [audio]);

    return [playing, toggle];
};

    const Player = ({ url } : {url: string}) => {
        const [playing, toggle] = useAudio(url);

        return <Button shape="circle" onClick={toggle as () => void}>{playing ? <PauseOutlined /> : <CaretRightOutlined />}</Button>
    };

export default Player;
