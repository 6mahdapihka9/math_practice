import React, { ChangeEvent, useCallback } from 'react';
import {
  Button, Checkbox, TextField,
  FormControl, FormControlLabel, FormHelperText, Box,
} from '@mui/material';
import {
  MAXIMAL_NUMBER_CAP, MAXIMAL_TIMEOUT,
  MINIMAL_NUMBER_CAP, MINIMAL_TIMEOUT,
} from './constants/variables';
import FieldsetSimplified from '../../components/form/FieldsetSimplified';
import { Operations, operationsType } from './types';

type SettingsFormProps = {
  formDisabled: boolean,

  _timeout: number,
  _setTimeout: Function,
  numberCap: number,
  setNumberCap: Function,
  operations: operationsType,
  setOperations: Function,

  setStatusInProgress: () => void,
}

const SettingsForm: React.FC<SettingsFormProps> = ({
  formDisabled,

  _timeout,
  _setTimeout,
  numberCap,
  setNumberCap,
  operations,
  setOperations,

  setStatusInProgress,
}) => {
  const onChangeTimeout = (e: ChangeEvent<HTMLInputElement>) => {
    _setTimeout(+e.target.value);
  };
  const onChangeNumberCap = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberCap(+e.target.value);
  };
  const onChangeOperations = (e: ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    // eslint-disable-next-line max-len
    setOperations((prevOperations) => (prevOperations.includes(e.target.value)
      ? prevOperations.filter((op: Operations) => op !== e.target.value)
      : [...prevOperations, e.target.value]));
  };

  const timeoutValidation = useCallback(
    (t: number) => t < MINIMAL_TIMEOUT || t > MAXIMAL_TIMEOUT,
    [_timeout],
  );
  const numberCapValidation = useCallback(
    (c: number) => c < MINIMAL_NUMBER_CAP || c > MAXIMAL_NUMBER_CAP,
    [numberCap],
  );

  return (
    <FieldsetSimplified
      p="l"
      disabled={formDisabled}
    >
      <Box
        sx={{
          mb: 3,
          width: 1,
        }}
      >
        <TextField
          fullWidth
          error={timeoutValidation(_timeout)}
          label="Time"
          type="number"
          onChange={onChangeTimeout}
          value={_timeout}
          helperText="Must be more than 10 and less than 600s."
          sx={{
            mb: 3,
          }}
        />
        <TextField
          fullWidth
          error={numberCapValidation(numberCap)}
          label="Number cap"
          type="number"
          onChange={onChangeNumberCap}
          value={numberCap}
          helperText="Must be more than 20 and less than 10000."
          sx={{
            mb: 3,
          }}
        />

        <FormControl error={!operations.length}>
          <FormControlLabel
            control={(
              <Checkbox
                color="secondary"
                onChange={onChangeOperations}
                value={Operations.Add}
                checked={operations.includes(Operations.Add)}
              />
              )}
            label={Operations.Add}
          />

          <FormControlLabel
            control={(
              <Checkbox
                color="secondary"
                onChange={onChangeOperations}
                value={Operations.Subtract}
                checked={operations.includes(Operations.Subtract)}
              />
              )}
            label={Operations.Subtract}
          />

          <FormControlLabel
            control={(
              <Checkbox
                color="secondary"
                onChange={onChangeOperations}
                value={Operations.Multiply}
                checked={operations.includes(Operations.Multiply)}
              />
              )}
            label={Operations.Multiply}
          />

          <FormControlLabel
            control={(
              <Checkbox
                color="secondary"
                onChange={onChangeOperations}
                value={Operations.Divide}
                checked={operations.includes(Operations.Divide)}
              />
              )}
            label={Operations.Divide}
          />

          <FormHelperText
            sx={{
              mt: '3px',
              mx: '14px',
            }}
          >
            You have to pick one or more
          </FormHelperText>
        </FormControl>
      </Box>

      <Button
        color="secondary"
        disabled={
          timeoutValidation(_timeout)
          || numberCapValidation(numberCap)
          || !operations.length
          || formDisabled
        }
        onClick={() => setStatusInProgress()}
        variant="contained"
        sx={{
          width: 'fit-content',
        }}
      >
        Start
      </Button>
    </FieldsetSimplified>
  );
};

export default SettingsForm;
