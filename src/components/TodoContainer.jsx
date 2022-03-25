import { useState } from "react"

export default function TodoContainer(){
    return(
        <section>
            <ul className="todo-list"></ul>
            <ul className="todo-status"></ul>
        </section>
    )
}