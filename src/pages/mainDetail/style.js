import styled from "styled-components";
import { Colors } from "../../styles/theme/color";

export const Container = styled.div`
    height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 47px;
    margin: 120px 0;
`

export const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    margin: 17px;
    width: 618px;
`

export const subTitle = styled.span`
    color: ${Colors.Neutral10};
    font-size: 21px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0.15px;
`

export const Title = styled.div`
    margin: 8px 0 16px 0;
    color: ${Colors.Neutral10};
    font-size: 60px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 700;
    line-height: 76px;
    letter-spacing: 0.5px;
`

export const Explain = styled.ul`
    color: ${Colors.Neutral7};
    margin-left: 50px;
    font-size: 20px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.5px;

    & li {
        list-style-type: disc;
        list-style-position: inside;
        text-indent: -30px;
    }
`

export const Img = styled.img`
    width: 504px;
    height: 504px;
    object-fit: cover;
`