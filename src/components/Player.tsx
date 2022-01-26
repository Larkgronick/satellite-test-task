import React, { useState, useEffect } from "react";

interface ButtonProps {
    toggle: () => void;
}

const useAudio = (url: string) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);
    useEffect(() => {
            playing ? audio.play() : audio.pause();
        },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

const Player = ({ url } : {url: string}) => {
    const [playing, toggle] = useAudio(url);

    return (
        <div>
            <button onClick={toggle as () => void}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};

export default Player;
