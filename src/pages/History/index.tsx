import { TrashIcon } from 'lucide-react';
import { Container } from '../../components/Container';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { DefaultButton } from '../../components/DefaultButton';
import styles from './styles.module.css';
import { Heading } from '../../components/Heading';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { formartDate } from '../../utils/formatDate';

export function History() {
  const { state } = useTaskContext();

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>History</span>
          <span className={styles.buttonContainer}>
            <DefaultButton
              icon={<TrashIcon />}
              color='red'
              aria-label='Clear all history'
              title='Clear all history'
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles.responsiveTable}>
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Duration</th>
                <th>Date</th>
                <th>Status</th>
                <th>Type</th>
              </tr>
            </thead>

            <tbody>
              {state.tasks.map(task => {
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration} min</td>
                    <td>{formartDate(task.startDate)}</td>
                    <td>{task.interruptDate}</td>
                    <td>{task.type}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
