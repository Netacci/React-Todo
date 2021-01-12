import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

class Todo extends Component {
	render() {
		const { items } = this.props;
		function generateId() {
			return (
				Math.random().toString(36).substring(2) +
				new Date().getTime().toString(36)
			);
		}

		return (
			<div>
				<List>
					{items.map((item) => (
						<ListItem key={generateId()}>
							<ListItemIcon>
								<Checkbox edge='start' tabIndex={-1} disableRipple />
							</ListItemIcon>
							<ListItemText primary={item} />

							<IconButton aria-label='delete'>
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
	}
}

export default Todo;
