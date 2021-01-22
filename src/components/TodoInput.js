import React, { useContext, useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { TodoContext } from './TodoContext';

const TodoInput = () => {
	const [items, setItems] = useContext(TodoContext);
	const [name, setName] = useState('');
	const updateName = (e) => {
		
		setName(e.target.value);
		
		
	};
	const generateId = () => {
		return (
			Math.random().toString(36).substring(2) +
			new Date().getTime().toString(36)
		);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setItems(prevState=>[...prevState,{ name: name, id: generateId()} ])
		// clears input field after adding
		e.target.value=''
		setName(e.target.value);
	};
	return (
		<Container>
			<form onSubmit={handleSubmit}>
				<TextField
					name='name'
					type='text'
					onChange={updateName}
					id='standard-basic'
					label='Enter Task'
					value={name}
				/>
				<Button
					type='submit'
					style={{
						marginTop: '16px',
						marginLeft: '1rem',
					}}
					variant='contained'
					color='primary'
				>
					Add Todo
				</Button>
			</form>
		</Container>
	);
};

export default TodoInput;
