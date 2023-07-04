import styled from "styled-components";
import { Colors } from "../../styles/theme/color";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 98px;
    border-bottom: 1px solid ${Colors.Neutral2};
    background-color: ${Colors.Neutral0};
`

export const LeftBox = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const Img = styled.img`
    width: ${props => props.width || 60}px;
    height: ${props => props.height || 60}px;
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