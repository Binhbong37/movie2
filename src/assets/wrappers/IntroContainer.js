import styled from 'styled-components';

const IntroContainer = styled.div`
    background-color: var(--color-background);
    position: relative;
    color: var(--color-white);
    padding-top: 57%;

    .videoIntro {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    .introInfo {
        position: absolute;
        top: 35%;
        left: 10%;

        .headingIntro {
            font-size: 60px;
            transition: all 0.3s ease;

            @media screen and (max-width: 700px) {
                font-size: 30px;
            }
        }
    }

    .btnVolume {
        position: absolute;
        width: 40px;
        height: 40px;
        right: 10%;
        top: 40%;
        cursor: pointer;
        transition: all 0.3s ease;
        transform: scale(1);
        &:hover {
            transform: scale(1.2);
        }

        @media screen and (max-width: 600px) {
            width: 25px;
            height: 25px;
        }
    }
    .fadeBottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(
            180deg,
            transparent,
            rgba(15, 15, 15, 0.6) 40%,
            rgb(17, 17, 17),
            rgb(17, 17, 17)
        );
    }
`;

export default IntroContainer;
