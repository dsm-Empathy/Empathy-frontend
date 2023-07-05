import styled from 'styled-components'
import { Colors } from '../../styles/theme/color'

export const Container = styled.div`
    width: 400px;
    padding: 20px;
    position: absolute;
    border: 1px solid ${Colors.Gray};
    background-color: ${Colors.Neutral0};
    cursor: move;
    z-index: 99;
    display: ${(props) => props.bool ? 'none' : 'flex'};
    flex-direction: column;
`

export const Img = styled.img`
    width: 360px;
    height: auto;
    object-fit: cover;
    user-select: none;
    cursor: pointer;
`

export const BetweenBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CloseAllBtn = styled.div`
    width: 70px;
    height: 20px;
    background-color: ${Colors.Red};
    cursor: pointer;
    color: #FFF;
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export const CloseBtn = styled.div`
    width: 11px;
    height: 11px;
    background-color: ${Colors.Neutral0};
    border: 1px solid ${Colors.Gray};
    cursor: pointer;
`

export const Text = styled.span`
    color: ${Colors.Gray};
    font-size: 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const TextBtn = styled(Text)`
    cursor: pointer;
`