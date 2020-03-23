import styled from 'styled-components';

export const HomeWrapper = styled.div`
    position: relative;
    color: white;
    min-height: 120vh;

    .title {
        padding: 6rem 2rem 4rem;

        .spot-light {
            position: relative;
            font-size: 50px;
            font-weight: 600;
            line-height: 1.25;
            color: #444;
            text-transform: uppercase;
            letter-spacing: 0.5rem;
            &::after {
                content: attr(data-spotlight);
                position: absolute;
                left: 0;
                top: 0;
                color: transparent;
                -webkit-background-clip: text;
                background-clip: text;
                background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
                clip-path: ellipse(50px 50px at -20% 50%);
                animation: spotlight 3s infinite ease-in-out;
            }
        }

        & > h1,
        h2 {
        }

        & > h2 {
            font-weight: 600;
            line-height: 1.25;
            font-size: 30px;
        }

        & > p {
            padding-top: 0.5rem;
            font-size: 15px;
            line-height: 15px;
            margin-top: 10px;
        }
    }
    .main-view {
        padding: 0 2rem;
        min-height: calc(100vh - 400px);
    }
    .header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        height: 4rem;
        line-height: 4rem;
        padding: 0 2rem;
        text-transform: uppercase;
        box-sizing: border-box;
        color: rgb(102, 102, 102);

        .header-left {
            letter-spacing: 0.2rem;

            &:hover {
                color: white;
            }
        }

        .header-right {
            display: flex;
            flex-flow: row;
            position: relative;
            justify-content: center;
        }
    }
`;