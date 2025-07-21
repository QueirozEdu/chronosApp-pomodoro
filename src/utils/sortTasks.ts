// Generic function to sort tasks arrays
//
import { TaskModel } from '../models/TaskModel';

// Parameters expected by the function
export type SortTasksOptions = {
  tasks: TaskModel[]; // Tasks list to be sorted
  direction?: 'asc' | 'desc'; // Order (optional)
  field?: keyof TaskModel; // What tasks field should be used to sort
};

export function sortTasks({
  field = 'startDate', // If the field is unknown use 'startDate' as default
  direction = 'desc', // If the direction is unknown use 'desc'
  tasks = [], // If no list is passed, use an empty list
}: SortTasksOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    //Get the value of the chosen property (ex: startDate) in each task
    const aValue = a[field];
    const bValue = b[field];

    // --- NULL VALUES ---

    // If both null, keep the current order
    if (aValue === null && bValue === null) return 0;

    // If only the first one is null it goes to the end
    if (aValue === null) return 1;

    // If only the second one is null it goes to the end
    if (bValue === null) return -1;

    // --- NUMERIC COMPARISON ---

    // If both are numbers we subtract
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc'
        ? aValue - bValue // Ex: 1, 2, 3...
        : bValue - aValue; // Ex: 3, 2, 1...
    }

    // --- STRINGS COMPARISON ---

    // If both are texts we use localeCompare to compare in alphabetical order
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue) // A -> Z
        : bValue.localeCompare(aValue); // Z -> A
    }

    // --- UNTREATED CASES ---

    // If is not a number, string or null, keep the same order
    return 0;
  });
}
