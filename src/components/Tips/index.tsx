import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Tips() {
  const { state } = useTaskContext();
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCyleType = getNextCycleType(nextCycle);

  //Tips
  const tipsForWhenActiveTask = {
    workTime: (
      <span>
        Focus for: <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Rest for: <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        <b>Long rest</b>
      </span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: (
      <span>
        Next cycle: <b>{state.config.workTime}min</b>
      </span>
    ),
    shortBreakTime: (
      <span>
        Next rest: <b>{state.config.shortBreakTime}min</b>
      </span>
    ),
    longBreakTime: (
      <span>
        Next rest: <b>long break</b>
      </span>
    ),
  };
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCyleType]}
    </>
  );
}
