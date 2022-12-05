import { useState } from 'react';
import Todo from './Todo';

const TodoApp = () => {

    const [title, setTitle] = useState('');
    const [todos, setTodos] = useState([]);

    function handleChange(e) {
        const value = e.target.value;

        setTitle(value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if([title].includes('')) {
            return;
        }

        const newTodo = {
            id: crypto.randomUUID(),
            title,
            completed: false
        };

        setTodos([...todos, newTodo]);
        
        setTitle('');
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find(item => item.id === id);
        item.title = value;

        setTodos(temp);
    }   

    function handleDelete(id) {
        const temp = todos.filter(item => item.id !== id); 

        setTodos(temp);
    }

  return (
    <div className="bg-white p-3 max-w-md mx-auto rounded-md text-center">
        <form onSubmit={handleSubmit}>
            <h1 className='text-3xl font-bold'>Organiza tus tareas</h1>
            <div className='mt-4'>
                <input className="w-80 border-b-2 p-2 border-gray-500 text-black" 
                    type="text" 
                    placeholder='Ingresa una tarea'
                    value={title}
                    onChange={handleChange}
                />

                <input className="ml-2 border-2 border-green-500 p-2 text-green hover:text-white hover:bg-green-500 rounded-lg cursor-pointer "
                    type="submit" 
                    value="Agregar"
                    onClick={handleSubmit}
                />
            </div>
            
        </form>

        <div className='mt-2'>
            {todos.map(item => (
                <Todo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
            ))}
        </div>
    </div>
  )
}

export default TodoApp
