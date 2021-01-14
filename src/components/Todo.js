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
	// My issue is trying to get one item toggled. They all keep toggling even tho they are mapped.
	// handleToggle = () => {
	// 	this.setState((prevState) => ({
	// 		checked: !prevState.checked,
	// 	}));
	// };
	// onChange = (event) => {
	// 	const value = event.target.checked;
	// 	const name = event.target.name;

	// 	this.setState({
	// 		[name]: value,
	// 	});
	// this.setState({
	// 	[e.target.name]: e.target.checked,
	// });
	// };
	render() {
		const { items, handleDelete } = this.props;

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
									onChange={this.onChange}
									// checked={checked}
									onClick={this.handleToggle}
								/>
							</ListItemIcon>

							<ListItemText
								id={generateId()}
								style={{ wordWrap: 'break-word' }}
								primary={item}
							/>

							<IconButton
								aria-label='delete'
								onClick={() => handleDelete(item)}
							>
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
