import styled, { keyframes } from "styled-components";
import { Colors } from "../../styles/theme/color";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 98px 5px 98px;
    border-bottom: 1px solid ${Colors.Neutral2};
    background-color: ${Colors.Neutral0};
`

export const LeftBox = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const Img = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
`

export const Title = styled.div`
    color: ${Colors.Neutral8};
    font-size: 20px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.15px;
`

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    gap: 48px;
`

export const Text = styled.span`
    color: ${Colors.Neutral10};
    font-size: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    cursor: pointer;
`

export const SearchBox = styled.div`
    width: 242px;
    height: 30px;
    border-radius: 19px;
    border: 1px solid ${Colors.Gray};
    background-color: ${Colors.Neutral0};
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: absolute;
    margin-left: -186px;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-name: ${props => props.bool ? focus : blur};
    transform-origin: center right;
`

export const Input = styled.input`
    color: ${Colors.Neutral10};
    font-size: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    border: none;
    outline: none;
    width: 220px;
`

const focus = () => keyframes`
    0% {
        opacity: 0;
        transform: scaleX(0);
        pointer-events:none;
    }
    100% {
        opacity: 1;
        transform: scaleX(1);
        pointer-events: auto;
    }
`;

const blur = () => keyframes`
    0% {
        opacity: 1;
        transform: scaleX(1);
        pointer-events:auto;
    }
    100% {
        opacity: 0;
        transform: scaleX(0);
        pointer-events: none;
    }
`;

export const UserCircle = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background-color: ${Colors.Neutral0};
    border: 1px solid ${Colors.Gray};
`