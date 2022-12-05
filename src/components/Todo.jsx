import { useState } from 'react'

const Todo = ({item, onUpdate, onDelete}) => {

    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e) {
            e.preventDefault();
    
        }

        function handleChange(e) {
            const value = e.target.value;
            setNewValue(value);
        }
        
        function handleClickUpdate() {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return (
            <form className='m-2 flex justify-between' onSubmit={handleSubmit}>
                <input type="text"
                    className='w-80 border border-green-300  rounded-md p-2 text-black'
                    value={newValue}
                    onChange={handleChange} 
                />
                <button className='text-black bg-yellow-400 p-2 rounded-lg hover:bg-yellow-500' onClick={handleClickUpdate}>Update</button>
            </form>
        )
    }

    function TodoListado() {
        return (
            <div className='mt-2 flex items-center justify-between'>
                <div className='ml-4 '>
                    {item.title}
                </div>
                
                <div>
                    <button className='text-red-500 border-2 border-red-500 p-2 rounded-lg mr-2' onClick={() => setIsEdit(true)}>Edit</button>
                    <button className='text-blue-500 border-2 border-blue-500 p-2 rounded-lg' onClick={(e) => onDelete(item.id)}>Delete</button>
                </div>
                
            </div>
        )
    }

  return (
    <div>
        {isEdit ? <FormEdit/> : <TodoListado/>}
    </div>
  )
}

export default Todo