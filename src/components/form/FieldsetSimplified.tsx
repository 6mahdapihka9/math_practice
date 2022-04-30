import styled from 'styled-components';
import { sizeType } from '../../design/theme';

type FieldsetSimplifiedProps = {
  m?: sizeType;
  mt?: sizeType;
  mr?: sizeType;
  ml?: sizeType;
  mb?: sizeType;
  mx?: sizeType;
  my?: sizeType;

  p?: sizeType;
  pt?: sizeType;
  pr?: sizeType;
  pl?: sizeType;
  pb?: sizeType;
  px?: sizeType;
  py?: sizeType;
}

const FieldsetSimplified = styled.fieldset<FieldsetSimplifiedProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  
  margin: ${(props) => (props.m ? props.theme.size[props.m] : 0)};
  ${(props) => (props.mt ? `margin-top: ${props.theme.size[props.mt]};` : null)}
  ${(props) => (props.mr ? `margin-right: ${props.theme.size[props.mr]};` : null)}
  ${(props) => (props.ml ? `margin-left: ${props.theme.size[props.ml]};` : null)}
  ${(props) => (props.mb ? `margin-bottom: ${props.theme.size[props.mb]};` : null)}
  ${(props) => (props.mx ? `margin: 0 ${props.theme.size[props.mx]};` : null)}
  ${(props) => (props.my ? `margin: ${props.theme.size[props.my]} 0;` : null)}
  
  padding: ${(props) => (props.p ? props.theme.size[props.p] : 0)};
  ${(props) => (props.pt ? `padding-top: ${props.theme.size[props.pt]};` : null)}
  ${(props) => (props.pr ? `padding-right: ${props.theme.size[props.pr]};` : null)}
  ${(props) => (props.pl ? `padding-left: ${props.theme.size[props.pl]};` : null)}
  ${(props) => (props.pb ? `padding-bottom: ${props.theme.size[props.pb]};` : null)}
  ${(props) => (props.px ? `padding: 0 ${props.theme.size[props.px]};` : null)}
  ${(props) => (props.py ? `padding: ${props.theme.size[props.py]} 0;` : null)}
  
  border: none;
`;

export default FieldsetSimplified;
