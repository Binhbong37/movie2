import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';

import IntroContainer from '../../assets/wrappers/IntroContainer';

const Intro = () => {
    const [isMuted, setIsMuted] = useState(true);

    const handleChangMuted = () => {
        setIsMuted(!isMuted);
    };
    return (
        <IntroContainer>
            <ReactPlayer
                url="https://vimeo.com/273686020"
                loop={true}
                playing={true}
                volume={1}
                width="100%"
                height="100%"
                muted={isMuted}
                className="videoIntro"
            />
            <div className="introInfo">
                <h2 className="headingIntro">Netflix moive</h2>
                <p className="overviewIntro">
                    This is intro on upcoming season, this is intro on upcoming
                    season this is intro on upcoming season
                </p>
            </div>
            {isMuted ? (
                <VscMute className="btnVolume" onClick={handleChangMuted} />
            ) : (
                <VscUnmute className="btnVolume" onClick={handleChangMuted} />
            )}
            <div className="fadeBottom"></div>
        </IntroContainer>
    );
};

export default Intro;
