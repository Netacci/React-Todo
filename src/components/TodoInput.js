import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Todo from './Todo';

class Input extends Component {
	state = {
		items: [],
		name: '',
	};
	generateId=()=> {
		return (
			Math.random().toString(36).substring(2) +
			new Date().getTime().toString(36)
		);
	}
	addItem = () => {
		this.setState((prevState) => ({
			items: prevState.items.concat(this.state.name),
		}));
		this.setState({
			name: '',
		});
	};
	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleDelete = (item) => {
		this.setState((prevState) => ({
			items: prevState.items.filter((l) => {
				// I need to find a way to set IDs so clicking on delete doesnt delete two same words
				
				// console.log(l.id)
				
				// console.log(item.id)
				return l !== item;
			}),
		}));
	};
	handleToggle = () => {
		this.state.items.map((item) => (item.checked ? console.log(true) : console.log(false)));
	};
	render() {
		const { items, name } = this.state;
		return (
			<Container>
				<form>
					<TextField
						name='name'
						type='text'
						onChange={this.onChange}
						id='standard-basic'
						label='Enter Task'
						value={name}
					/>
					<Button
						style={{
							marginTop: '16px',
							marginLeft: '1rem',
						}}
						onClick={this.addItem}
						variant='contained'
						color='primary'
					>
						Add Todo
					</Button>
				</form>

				<Todo
					items={items}
					handleDelete={this.handleDelete}
					handleToggle={this.handleToggle}
				/>
			</Container>
		);
	}
}

export default Input;
