const Todo = require('../lib/todo');
const TodoList = require('../lib/todolist');

describe('TodoList', () => {
  let todo1;
  let todo2;
  let todo3;
  let list;

  beforeEach(() => {
    todo1 = new Todo('Buy milk');
    todo2 = new Todo('Clean room');
    todo3 = new Todo('Go to the gym');

    list = new TodoList("Today's Todos");
    list.add(todo1);
    list.add(todo2);
    list.add(todo3);
  });

  test('todolist has a size of 3', () => {
    expect(list.size()).toBe(3);
  });

  test('toArray() returns the array in list form', () => {
    expect(list.toArray()).toEqual([todo1, todo2, todo3]);
  });

  test('todos() returns the first todo in the todos list', () => {
    expect(list.first()).toEqual(todo1);
  });

  test('last() returns the last todo in the todos list', () => {
    expect(list.last()).toEqual(todo3);
  })
  
  // shift
  // pop
  // isDone
  // isDone
  // add 
  test('add() adds a todo item to the list', () => {
    let randomtodo = {};
    expect(() => list.add(randomtodo)).toThrow(TypeError);
  });

  // itemAt
  test('itemAt returns the todo at the given index', () => {
    expect(list.itemAt(0)).toEqual(todo1);
    expect(()=> list.itemAt(4)).toThrow(ReferenceError);
  });
  // markDoneAt
  // markUndoneAt
  // markAllDone
  // removeAt
  // toString
  test('toString returns this when one todos is done', () => {
    list.markDoneAt(0);
    let string = `---- Today's Todos ----
[X] Buy milk
[ ] Clean room
[ ] Go to the gym`;
    expect(list.toString()).toBe(string);
  });
  // toString
  // forEach
  // filter
  test('filter returns new list based on callback,', () => {
    todo1.markDone();
    let newList = list.filter((todo) => todo.isDone());
    expect(newList.toArray()).toEqual([todo1]);
  });

  test('forEach takes callback and iterates over list', () => {
    list.forEach(todo => todo.markDone());
    expect(list.isDone()).toEqual(true);
  });

});