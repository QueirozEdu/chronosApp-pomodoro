import { SaveIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { DefaultInput } from '../../components/DefaultInput';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../components/templates/MainTemplate';
import styles from '../Settings/styles.module.css';
import { DefaultButton } from '../../components/DefaultButton';

export function Settings() {
  return (
    <MainTemplate>
      <Container>
        <Heading>Settings</Heading>
      </Container>
      <Container>
        <p className={styles.settingsTipText}>
          Set the time for focus, short break and long break
        </p>
      </Container>

      <Container>
        <form action='' className='form'>
          <div className='formRow'>
            <DefaultInput id='workTime' labelText='Focus'></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='shortBreakTime'
              labelText='Short Break Time'
            ></DefaultInput>
          </div>
          <div className='formRow'>
            <DefaultInput
              id='longBreakTime'
              labelText='Long Break Time'
            ></DefaultInput>
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
