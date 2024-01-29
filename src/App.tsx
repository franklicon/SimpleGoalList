import { useState } from 'react';
import Header from './components/Header';
import goalsImg from './assets/goals.jpg';
import CourseGoalList from './components/CourseGoalList';
import { CourseGoalProps } from './models/courseGoal';
import NewGoal from './components/NewGoal';

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal: CourseGoalProps = {
      id: Math.random(),
      title: goal,
      description: summary
    };
    setGoals(prevGoals => {
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'Goals' }}>
        <h1>Your goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
