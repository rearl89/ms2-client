import React from "react";
import { Layout } from "./layout";

export default function Home() {
    return (
        <Layout>
            <h1 className="text-2xl font-bold">Welcome to my Milestone 2 Project!</h1>
            <div className="flex justify-center pt-4">
                <img className="h-2/4 w-2/4 rounded-tl-3xl rounded-tr-lg rounded-bl-lg rounded-br-3xl" src="https://cdn.discordapp.com/attachments/1008571235766116413/1089749359136084089/rogerearl_A_golden_brown_longhaired_dachshund_with_glasses_on_u_d73e5181-eea1-4937-9845-d3d492a17afe.png" alt="dachshund coding"/>
            </div>
        </Layout>
    )
}