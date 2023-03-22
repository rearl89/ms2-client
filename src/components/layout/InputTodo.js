import React, { Fragment, useState } from "react";

export default function InputTodo() {
    const [description, setDescription] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch("http://localhost:5001/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            })
            window.location = "/todo";
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <Fragment>
            <h1 className="text-5xl">Todo List</h1>
            <form onSubmit={ onSubmit }>
                <input className="h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg border-4 border-indigo-500/100 focus:shadow-outline" type="text" value={ description } onChange={(e) => setDescription(e.target.value)} />
                <button className="h-10 px-5 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800">Add</button>
            </form>
        </Fragment>
    )
}