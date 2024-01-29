import { useRef, type FormEvent, FC } from 'react';

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const isNullOrWhiteSpace = (str: string) => {
    return str === null || str.trim() === '';
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputGoal = goal.current!.value;
    if (isNullOrWhiteSpace(inputGoal)) {
      return;
    }
    const inputSummary = summary.current!.value;
    event.currentTarget.reset();
    onAddGoal(inputGoal, inputSummary);
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
