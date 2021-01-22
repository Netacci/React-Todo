import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
	const [items, setItems] = useState([]);

	return (
		<TodoContext.Provider value={[items, setItems]}>
			{props.children}
		</TodoContext.Provider>
	);
};
