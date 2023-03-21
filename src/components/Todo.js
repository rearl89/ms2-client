import React from "react";
import { Layout } from "./layout";
import InputTodo from "./layout/InputTodo";
import ReadTodos from "./layout/ReadTodo";

export default function Projects() {
    return (
        <Layout>
            <InputTodo />
            <ReadTodos />
        </Layout>
    )
}