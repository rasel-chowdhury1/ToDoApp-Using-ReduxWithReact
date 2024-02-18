import React from 'react';
import { FaCheck, FaTimes, FaToggleOff, FaToggleOn, FaTrash } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { markCompleted, markIncomplete, removeTodo, toggleTodo } from '../redux/action';

const TodoItem = ({data, idx}) => {
    const dispatch = useDispatch()
    return (
        <li className='flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4'>
            <div className='flex items-center'>
              <span className='mr-4 text-gray-500'>{idx+1}</span>
              <span className={`mr-4 ${data.completed ? "line-through text-red-500" : ""}`}>{data.text}</span>
            </div>
            <div className='space-x-3 ml-8'>
                <button onClick={() => dispatch(toggleTodo(idx))} className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded'>{data.completed ? <FaToggleOff /> : <FaToggleOn />}</button>

                <button onClick={() => dispatch(removeTodo(idx))} className='mr-2 text-sm bg-red-500 text-white sm:px-2 py-1 rounded'><FaTrash/></button>
                
                {
                    !data.completed && (
                        <button onClick={() => dispatch(markCompleted(idx))} className='mr-2 text-sm bg-blue-500 text-white sm:px-2 py-1 rounded'><FaCheck/></button>
                    )
                }
                {
                    data.completed && (
                        <button onClick={() => dispatch(markIncomplete(idx))} className='mr-2 text-sm bg-yellow-500 text-white sm:px-2 py-1 rounded'><FaTimes/></button>
                    )
                }
            </div>
        </li>
    );
};

export default TodoItem;