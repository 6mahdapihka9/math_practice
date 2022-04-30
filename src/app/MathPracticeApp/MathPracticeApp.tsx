import React, { useState } from 'react';
import { purple } from '@mui/material/colors';
import SettingsForm from './SettingsForm';
import PracticeForm from './PracticeForm';
import StyledAppWrapper from '../../components/form/StyledAppWrapper';
import { operationsType } from './types';

const MathPracticeApp = () => {
  const [appStatus, setAppStatus] = useState<boolean>(false);
  const [_timeout, _setTimeout] = useState<number>(60);
  const [numberCap, setNumberCap] = useState<number>(100);
  const [operations, setOperations] = useState<operationsType>([]);

  return (
    <StyledAppWrapper
      bgcolor={purple[50]}
    >
      <SettingsForm
        formDisabled={appStatus}
        _timeout={_timeout}
        _setTimeout={_setTimeout}
        numberCap={numberCap}
        setNumberCap={setNumberCap}
        operations={operations}
        setOperations={setOperations}
        setStatusInProgress={() => setAppStatus(true)}
      />

      <PracticeForm
        practiceDisabled={!appStatus}
        _timeout={_timeout}
        numberCap={numberCap}
        operations={operations}
        setStatusTuning={() => setAppStatus(false)}
      />
    </StyledAppWrapper>
  );
};

export default MathPracticeApp;
