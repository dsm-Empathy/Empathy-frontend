import styled from "styled-components";
import { Colors } from "../../styles/theme/color";

export const Container = styled.div`
    margin: 120px 0;
    display: flex;
    justify-content: center;
`

export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    color: ${Colors.Neutral10};
    font-size: 60px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 76px;
    letter-spacing: 0.5px;
    border-bottom: 1px solid ${Colors.Black};
`

export const subTitle = styled.span`
    color: ${Colors.Neutral10};
    font-size: 21px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.15px;
    margin: 14px 0 14px 10px;
`

export const Line = styled.div`
    width: 1000px;
    height: 1px;
    background-color: ${Colors.Gray};
`

export const Content = styled.div`
    margin: 14px 0;
    display: flex;
    flex-direction: column;
    gap: 28px;
`

export const MoveText = styled.span`
    color: ${Colors.Neutral10};
    font-size: 21px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.15px;
    margin: 14px 0 14px 10px;
    cursor: pointer;
`