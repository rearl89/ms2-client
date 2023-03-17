import React from "react";
import { Layout } from "./layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-2xl font-bold">Welcome to my Milestone 2 Project!</h1>
            <div className="flex justify-center pt-4">
                <img className="h-2/4 w-2/4 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2372&q=80" alt="coding"/>
            </div>
        </Layout>
    )
}