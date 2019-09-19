import React, { useState } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as TodoActions from "./store/actions/todos";

function TodoList(props) {
    const [ newTodoText, setNewTodoText ] = useState('')

    handleSubmit = event => {
        event.preventDefault();
        props.addTodo(newTodoText)
        setNewTodoText('')
    }

    return (
        <div className='App'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    onChange={e => setNewTodoText(e.target.value)}
                    value={newTodoText}
                />
                <button type='submit'>Salvar</button>
            </form>
            <ul>
                { props.todos.map(todo => <li key={todo.id}>{todo.text}</li>) }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)