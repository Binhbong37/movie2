import styled from 'styled-components';

const Navigation = styled.div`
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    z-index: 2;
    transition-timing-function: ease-in;
    transition: all 1s;

    @media only screen and (max-width: 600px) {
        height: 100px;
    }
    .navContainer {
        background-color: transparent;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-start;
        height: 100%;

        @media only screen and (max-width: 600px) {
            flex-direction: column;
        }

        .logo {
            width: 120px;
            cursor: pointer;
            img {
                width: 100%;
            }
        }

        .navSearch {
            color: var(--color-white);
            display: flex;

            &:hover .iconSearch {
                color: var(--color-white);
            }

            .iconSearch {
                width: 30px;
                height: 30px;
                cursor: pointer;
                transform: translateX(33px) translateY(6px);
                color: #bbb;
            }

            input {
                font-size: 17px;
                border: 1px solid var(--color-white);
                outline: none;
                color: var(--color-white);
                width: 0;
                padding: 10px;
                cursor: pointer;
                opacity: 0;
                background: var(--color-background);
                transition: width 0.5s;

                &:focus {
                    padding-left: 35px;
                    width: 300px;
                    cursor: text;
                    opacity: 1;
                    border-radius: 4px;
                }
            }
        }
    }
`;

export default Navigation;
