import { FC, type ReactNode } from 'react';
import CourseGoal from './CourseGoal';
import { CourseGoalProps } from '../models/courseGoal';
import InfoBox, { Mode, Severity } from './InfoBox';

type CourseGoalListProps = {
  goals: CourseGoalProps[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode={Mode.Hint}>
        You have no goals yet. Start adding some!
      </InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode={Mode.Warning} severity={Severity.Medium}>
        You're are collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map(goal => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
