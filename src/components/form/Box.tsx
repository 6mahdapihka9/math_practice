import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

type BoxProps = {
  styl: 'small' | 'regular' | 'large';
  flexDirection?: 'column' | 'row';
  justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';
  alignItems?: 'center' | 'start' | 'end' | 'space-between' | 'space-around';

  width?: string;

  padding?: string;
  margin?: string;
}

const StyledBox = styled.div<BoxProps>`
  display: flex;
  flex-direction: ${(props) => (props.flexDirection === 'column' ? 'column' : 'row')};
  justify-items: ${(props) => (props.justifyContent ? props.justifyContent : 'normal')};
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'normal')};
  
  width: ${(props) => (props.width ? props.width : 'fit-content')};

  padding: ${(props) => (props.width ? props.width : 'fit-content')};
  margin: ${(props) => (props.width ? props.width : 'fit-content')};
`;

const Box: React.FC<PropsWithChildren<BoxProps>> = ({ children }, props) => {
  const {
    flexDirection = 'column',
    justifyContent = 'center',
    alignItems = 'center',
    width = '100%',
    ...otherProps
  } = props;
  return (
    <StyledBox
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      {...otherProps}
    >
      {children}
    </StyledBox>
  );
};

Box.defaultProps = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',

  padding: '0',
  margin: '0',
};

export default Box;
