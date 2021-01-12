import Container from '@material-ui/core/Container';
import './App.css';
import Header from './components/Header';
import TodoInput from './components/TodoInput'


function App() {
	return <Container className='App'>
    <Header/>
    <TodoInput/>
    
  </Container>;



}

export default App;
