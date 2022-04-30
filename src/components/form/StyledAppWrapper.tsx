import styled from 'styled-components';
import { Box } from '@mui/material';

const StyledAppWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  min-width: 500px;
  max-width: 90%;
  margin: 100px auto;
  padding: 12px;

  //background-color: rgb(210, 250, 250);
  border: 1px solid gray;
  border-radius: 6px;
  & > * {
    width: 45%;
  }
`;

export default StyledAppWrapper;
