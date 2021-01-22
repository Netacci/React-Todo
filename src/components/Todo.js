import React, { useContext, useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { TodoContext } from './TodoContext';

const Todo = () => {
	const [items, setItems] = useContext(TodoContext);
	const [checked, setChecked] = useState(false);
	const handleToggle = (item) => {
		setItems(
			items.map((l) => {
				if (l.id === item.id) {
					return {
						...l,
						completed: !l.completed,
					};
				}
				return l;
			})
		);
	};
	const generateId = () => {
		return (
			Math.random().toString(36).substring(2) +
			new Date().getTime().toString(36)
		);
	};
	const handleDelete = (item) => {
		setItems((prevState) =>
			prevState.filter((l) => {
				return l.id !== item.id;
			})
		);
	};
	return (
		<div>
			<List>
				{items.map((item) => (
					<ListItem
						key={generateId()}
						style={{
							paddingLeft: '5rem',
							paddingReft: '5rem',
							marginTop: '1rem',
						}}
					>
						<ListItemIcon>
							<Checkbox
								name='name'
								type='checkbox'
								edge='start'
								tabIndex={-1}
								disableRipple
								// thhis toggles the checkbox
								checked={!item.completed ? checked : !checked}
								onChange={() => handleToggle(item)}
							/>
						</ListItemIcon>

						<ListItemText
							id={generateId()}
							style={{
								wordWrap: 'break-word',
								textDecoration: item.completed ? 'line-through' : 'none',
							}}
							primary={item.name}
						/>

						<IconButton aria-label='delete' onClick={() => handleDelete(item)}>
							<DeleteIcon />
						</IconButton>
						{/* <Button variant='contained' color='red' startIcon={<DeleteIcon />}>
							Delete
						</Button> */}
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default Todo;
