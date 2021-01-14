import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput'
import Todo from './components/Todo'

class App extends Component {
  state = {
		items: [],
		name: "",
		checked: false,
		id: 0
	
  };
  // generateId=()=> {
	// 	return (
	// 		Math.random().toString(36).substring(2) +
	// 		new Date().getTime().toString(36)
	// 	);
  // }
  onChange = (e) => {
		this.setState({
			name: e.target.value,
			// [e.target.id] : this.state.name.id
		});
  };
  handleSubmit =(e)=>{
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      name: this.state.name
    }
    const updatedItems = [...this.state.items, newItem];
    console.log(updatedItems)
    console.log(this.state.items)
    this.setState({
      items:updatedItems,
      name:""
    })
    console.log(this.state.items)
  }
	// addItem = e => {
	// 	e.preventDefault()
	// 	const newItem={
	// 		id: this.state.id,
	// 		name: this.state.name
	// 	}
  //   const updatedItems = [...this.state.items, newItem]
  //   console.log(updatedItems)
	// 	// this.setState({
	// 	// 	items: updatedItems,
	// 	// 	// name: '',
	// 	// 	// id: this.generateId
  //   // })
  //   this.setState((prevState)=>({
  //     items: prevState.items.concat([updatedItems])
  //   }))
	// 	// this.setState({
	// 	// 	name: '',
			
	// 	// });
	// 	console.log(this.state.items)
	// };

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
		this.setState((prevState) => ({
			checked: !prevState.checked,
		}));
	};
  render() { 
    return (<Container className='App'>
    <Header/>
    <TodoInput  name={this.state.name} onChange={this.onChange} handleSubmit={this.handleSubmit}/>
    <Todo
					items={this.state.items}
					handleDelete={this.handleDelete}

				/>
    
  </Container> );
  }
}
 
export default App;

