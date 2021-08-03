import React from 'react';
// import { TodoProvider } from '../TodoContext';
// import { TodoCounter } from '../TodoCounter';
// import { AppUI } from './AppUI';

function App() {
  const [state, setState] = React.useState('estado compartido');
  
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter />
        <TodoSearch />
      </TodoHeader>

      <TodoList>
        <TodoItem state={state} />
      </TodoList>
    </React.Fragment>
  );
}
function TodoHeader({ children }) {
  return (
    <header>
      {children}
    </header>
  );
}
function TodoList({ children }) {
  return (
    <section className="TodoList-container">
      {children}
    </section>
  );
}
function TodoCounter() {
  return <p>TodoCounter</p>;
}
function TodoSearch() {
  return <p>TodoSearch</p>;
}
function TodoItem({ state }) {
  return <p>TodoItem: {state}</p>;
}

// function App() {
//   return (
//     <TodoProvider>
//       <AppUI />
//     </TodoProvider>
//   );
// }

export default App;
