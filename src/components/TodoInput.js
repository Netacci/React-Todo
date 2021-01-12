import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Todo from './Todo';

class Input extends Component {
	state = {
		items: [],
		name: ''
	};
	addItem = () => {
		
		this.setState((prevState)=>({
			items: prevState.items.concat(this.state.name)
		}))
		this.setState({
			name:''
		})
	};
	onChange=(e)=>{
		this.setState({
			[e.target.name]: e.target.value,
			
		})
		
	}
	render() {
		const { items, name } = this.state;
		return (
			<Container>
				<form >
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

				<Todo items={items} />
			</Container>
		);
	}
}

export default Input;
