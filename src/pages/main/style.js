import styled from "styled-components";
import { Colors } from "../../styles/theme/color";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 65px;
    height: calc(100vh - 72px);
`

export const ContentBox = styled.div`
    margin-top: 23.4vh;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 46px;
`

export const Triangle = styled.div`
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 18px solid ${Colors.Gray};
    transform: rotate(${props => props.rotate ?? 0}deg);
    transition: 0.3s;
    cursor: pointer;
    
    &:hover {
        border-bottom: 18px solid ${Colors.Neutral10};
    }
`

export const CenterBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CarouselOutBox = styled.div`
    width: 1216px;
    height: 420px;
    overflow: hidden;
`

export const Carousel = styled.div`
    display: flex;
    width: auto;
    height: 420px;
    transition: 0.3s;
    & div {
        flex-shrink: 0;
    }
`

export const CarouselInBox = styled.div`
    width: 1216px;
    height: 420px;
    display: flex;
    justify-content: space-between;
`

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
`

export const subTitle = styled.span`
    margin-bottom: 8px;
    color: ${Colors.Neutral10};
    font-size: 21px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.15px;
`

export const Title = styled.div`
    color: ${Colors.Neutral10};
    font-size: 60px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 76px;
    letter-spacing: 0.5px;
`

export const Explain = styled.div`
    margin: 16px 0 24px 0;
    color: ${Colors.Neutral7};
    font-size: 20px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.5px;
`

export const Img = styled.img`
    width: 564px;
    height: 420px;
    object-fit: cover;
`

export const CircleBox = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 45px;
`

export const Circle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${props => props.bool ? Colors.Gray : Colors.LightGray};
    cursor: pointer;
`

export const Footer = styled.div`
    height: 87px;
    padding: 7px 98px 8px 98px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${Colors.Neutral2};
    background-color: ${Colors.Neutral0};
`

export const FooterText = styled.span`
    color: ${Colors.Neutral10};
    font-size: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
`