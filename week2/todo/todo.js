let input = prompt("what would u like to do?");
const todos = ["공부하기", "밥먹기", "씻기"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}:${todos[i]}`);
    }
    console.log("************");
  } else if (input === "new") {
    const newTodo = prompt("ok,what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("ok,enter an index to delete"));
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`ok,deleted ${deleted[0]}`);
    } else {
      console.log("unknown index");
    }
  }
  input = prompt("what would u like to do?");
}
console.log("quit done");
