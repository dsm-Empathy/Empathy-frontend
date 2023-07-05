import styled from 'styled-components'
import { Colors } from '../../styles/theme/color'

export const Container = styled.div`
    height: calc(100vh - 192px);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContnetBox = styled.div`
    display: grid;
    width: 820px;
    height: 504px;
    gap: 10px 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
`

export const Content = styled.div`
    width: 405px;
    height: 111px;
    border: 1px solid ${Colors.Gray};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 10px;
`

export const BetweenBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const RightBox = styled.div`
    display: flex;
    gap: 10px;
`

export const Img = styled.img`
    width: 15px;
    height: 15px;
    object-fit: cover;
`

export const Title = styled.span`
    color: ${Colors.Blue};
    font-size: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    margin-top: 2px;
`

export const Address = styled.span`
    color: ${Colors.Gray};
    font-size: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
`

export const LinkText = styled.span`
    color: ${Colors.LightBlue};
    font-size: 16px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    cursor: pointer;
`

export const Circle = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: ${Colors.Green};
`

export const Triangle = styled.div`
    width: 0px;
    height: 0px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 10px solid ${Colors.Red};
`