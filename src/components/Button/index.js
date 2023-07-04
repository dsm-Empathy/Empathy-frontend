import styled from "styled-components";
import { Colors } from "../../styles/theme/color";

export const Button = styled.button`
    padding: 12px 20px;
    border-radius: 50px;
    border: 1px solid ${Colors.Neutral10};
    background: ${props => props.color ? 'transparent' : Colors.Neutral10};
    color: ${props => props.color ? Colors.Neutral10 : Colors.Neutral0};
    cursor: pointer;
`