import { SaveIcon, TimerReset } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/templates/MainTemplate';
import styles from '../Settings/styles.module.css';
import { DefaultButton } from '../../components/DefaultButton';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      showMessage.dismiss();
      showMessage.error('Please enter numbers only.');
      return;
    }

    if (workTime < 1 || workTime > 99) {
      showMessage.error('Please enter a value between 1 and 99 for focus');
      return;
    }
    if (shortBreakTime < 1 || shortBreakTime > 30) {
      showMessage.error(
        'Please enter a value between 1 and 30 for short break time'
      );
      return;
    }
    if (longBreakTime < 1 || longBreakTime > 60) {
      showMessage.error(
        'Please enter a value between 1 and 60 for short long time'
      );
      return;
    }
    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success('Settings saved');
  }

  function handleResetSettings() {
    const defaultWorkTime = 25;
    const deafultShortBreakTime = 5;
    const defaultLongBreakTime = 10;

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime: defaultWorkTime,
        shortBreakTime: deafultShortBreakTime,
        longBreakTime: defaultLongBreakTime,
      },
    });

    if (workTimeInput.current)
      workTimeInput.current.value = String(defaultWorkTime);
    if (shortBreakTimeInput.current)
      shortBreakTimeInput.current.value = String(deafultShortBreakTime);
    if (longBreakTimeInput.current)
      longBreakTimeInput.current.value = String(defaultLongBreakTime);
    showMessage.dismiss();
    showMessage.success('Settings Reseted');
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>
          Settings
          <span className={styles.resetSettingsButton}>
            <DefaultButton
              icon={<TimerReset />}
              color='green'
              aria-label='Reset Settings'
              title='Reset Settings'
              onClick={handleResetSettings}
            />
          </span>
        </Heading>
      </Container>
      <Container>
        <p className={styles.settingsTipText}>
          Set the time for focus, short break and long break
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} action='' className='form'>
          <div className='formRow'>
            <DefaultInput
              id='workTime'
              labelText='Focus'
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Short Break Time'
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Long Break Time'
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              type='number'
            />
          </div>
          <div className='formRow'>
            <DefaultButton
              icon={<SaveIcon />}
              aria-label='Save Settings'
              title='Save Settings'
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
