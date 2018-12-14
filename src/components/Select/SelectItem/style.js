import style, { css } from 'styled-components';
import {
  blue, grayDark, white,
} from '../../style/colors';
import { fontWeightMedium, fontSize } from '../../style/fonts';

export const selectItem = css`
    align-items: center;
    color: ${props => (props.selected ? white : grayDark)};
    cursor: pointer;
    display: flex;
    font-size: ${fontSize};
    overflow: hidden;
    padding: 6px 0px;
    text-overflow: ellipsis;
    user-select: none;
    white-space: nowrap;
    width: 100%;
    background-color:${props => (props.selected ? blue : 'transparent')};
    &:hover {
      background-color:${blue};
      color: #fff;
    }
`;


export const selectItemLabel = style.div`
    font-size: ${fontSize};
    font-weight: ${fontWeightMedium};
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    padding: 0px 15px;
`;