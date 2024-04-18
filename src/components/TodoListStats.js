import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../todoAtoms';

const TodoListStats = () => {
  const { totalNum, totalCompletedNum, totalUncompleted, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items Completed: {totalCompletedNum}</li>
      <li>Items not Completed: {totalUncompleted}</li>
      <li>percent Completed: {formattedPercentCompleted}</li>
    </ul>
  );
};

export default TodoListStats;
