import React, {
  ChangeEvent, useEffect, useState, useRef,
} from 'react';
import {
  Box, Button, Container, TextField,
} from '@mui/material';
import FieldsetSimplified from '../../components/form/FieldsetSimplified';
import { operationsType } from './types';
import generateEquation from './helpers/generateEquation';

type PracticeFormProps = {
  practiceDisabled: boolean,
  _timeout: number;
  numberCap: number;
  operations: operationsType,
  setStatusTuning: () => void;
}

const PracticeForm: React.FC<PracticeFormProps> = ({
  practiceDisabled,
  _timeout,
  numberCap,
  operations,
  setStatusTuning,
}) => {
  const [formDisabled, setFormDisabled] = useState<boolean>(true);
  const [cdInterval, setCDInterval] = useState(0);
  const [timerInterval, setTimerInterval] = useState(0);
  const [time, setTime] = useState<number>(_timeout * 1000);
  const [practiceStatus, setPracticeStatus] = useState<boolean>(false);
  const [countdownTime, setCountdownTime] = useState<number>(0);

  const inputRef = useRef();

  const [solvedTasksAmount, setSolvedTasksAmount] = useState<number>(0);
  const [equation, setEquation] = useState<
      {task: string, result: number}
      >({ task: '(x^3) / 3 + C =', result: -1 });
  const [answer, setAnswer] = useState<number | ''>('');

  useEffect(() => {
    setFormDisabled(practiceDisabled);
  }, [practiceDisabled]);

  useEffect(() => {
    if (!formDisabled) {
      setEquation(generateEquation(numberCap, operations));
      setSolvedTasksAmount(0);
      setTime(_timeout * 1000);
      setCountdownTime(3);

      // @ts-ignore
      setCDInterval(setInterval(() => {
        setCountdownTime(((prevState) => {
          if (!(prevState - 1)) {
            setCDInterval((prevI) => {
              clearInterval(prevI);
              return 0;
            });
            setPracticeStatus(true);
          }
          return prevState - 1;
        }));
      }, 1000));
    }
  }, [formDisabled]);

  useEffect(() => {
    if (practiceStatus) {
      // @ts-ignore
      setTimerInterval(setInterval(() => {
        setTime(((prevState) => {
          if (!(prevState - 10)) {
            setTimerInterval((prevI) => {
              clearInterval(prevI);
              return 0;
            });
            setPracticeStatus(false);
          }
          return prevState - 10;
        }));
      }, 10));
      // @ts-ignore
      inputRef.current.focus();
    }
  }, [practiceStatus]);

  const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.target.value !== equation.result) {
      setAnswer(+e.target.value);
    } else {
      setAnswer('');
      setSolvedTasksAmount((prevState) => prevState + 1);
      setEquation(generateEquation(numberCap, operations));
    }
  };

  const reset = () => {
    clearInterval(cdInterval);
    clearInterval(timerInterval);
    setCDInterval(0);
    setTimerInterval(0);
    setTime(_timeout * 1000);
    setPracticeStatus(false);
    setCountdownTime(0);
    setSolvedTasksAmount(0);
    setEquation({ task: '(x^3) / 3 + C =', result: -1 });
    // @ts-ignore
    inputRef.current.value = '';
  };

  const onReturn = () => {
    reset();
    setStatusTuning();
  };

  return (
    <FieldsetSimplified
      p="l"
      style={{
        justifyContent: 'space-between',
        position: 'relative',
      }}
      disabled={formDisabled}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <span>
            {(`0${Math.floor((time / 60000) % 60)}`).slice(-2)}
            :
          </span>
          <span>
            {(`0${Math.floor((time / 1000) % 60)}`).slice(-2)}
            :
          </span>
          <span>
            {(`0${(time / 10) % 100}`).slice(-2)}
          </span>
        </Box>

        <Button
          color="secondary"
          onClick={onReturn}
          variant="contained"
          disabled={formDisabled}
        >
          Return
        </Button>
      </Container>

      <Box>
        { `Solved: ${solvedTasksAmount}` }
      </Box>

      <FieldsetSimplified
        disabled={formDisabled || !practiceStatus}
        style={{
          width: '100%',
        }}
      >
        <Box
          sx={{
            mb: 3,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          { equation.task }
        </Box>
        <TextField
          fullWidth
          error={false}
          label="Answer"
          type="number"
          onChange={onChangeAnswer}
          value={answer}
          inputRef={inputRef}
        />
      </FieldsetSimplified>

      <Container
        sx={{
          mt: 3,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            reset();
            setFormDisabled(true);
            setTimeout(() => {
              setFormDisabled(false);
            });
          }}
          disabled={formDisabled || countdownTime > 0}
        >
          Restart
        </Button>
      </Container>

      {
        !!countdownTime
        && (
        <Box
          sx={{
            zIndex: 1000,
            p: 3,
            backgroundColor: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: 3,
          }}
        >
          { `Get ready! Starting in ${countdownTime}` }
        </Box>
        )
       }
    </FieldsetSimplified>
  );
};

export default PracticeForm;
