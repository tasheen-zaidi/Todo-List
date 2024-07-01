class Task {
  constructor(title) {
    this.title = title;
    this.complete = false;
  }

  markComplete() {
    this.complete = true;
  }

  logState() {
    console.log(`${this.title} has${this.complete ? "" : " not"} been completed`);
  }
}

class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const newTask = new Task(title);
    this.tasks.push(newTask);
  }

  completeTask(taskIndex) {
    this.tasks[taskIndex].markComplete();
  }

  logTaskState(taskIndex) {
    this.tasks[taskIndex].logState();
  }
}

// DRIVER CODE BELOW

const myTodoList = new TodoList();

myTodoList.addTask("Clean Cat Litter");
myTodoList.addTask("Do Laundry");

myTodoList.logTaskState(0); // Clean Cat Litter has not been completed
myTodoList.logTaskState(1); // Do Laundry has not been completed

myTodoList.completeTask(0);
