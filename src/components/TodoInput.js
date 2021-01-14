import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



class TodoInput extends Component {

	

	render() {
		// const styles={
		// 	linethrough:{
		// 		textDecoration: 'line-through'
		// 	}
		// }
		// const {linethrough}= styles
		const { name, onChange, handleSubmit } = this.props;
		return (
			<Container>
				<form onSubmit={handleSubmit}>
					<TextField
						name='name'
						type='text'
						onChange={onChange}
						id='standard-basic'
						label='Enter Task'
						value={name}
					/>
					<Button
					type="submit"
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
	}
}

export default TodoInput;
