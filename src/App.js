import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import Todo from './components/Todo';
import { TodoProvider } from './components/TodoContext';

function App() {
	return (
		<TodoProvider>
			<Container className='App'>
				<Header />
				<TodoInput />
				<Todo />
			</Container>
		</TodoProvider>
	);
}

export default App;
