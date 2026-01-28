import type { typeTasks } from "../../type/typeTasks";
import TasksItem from "../TasksItem/TasksItem";
import "./TasksList.css";

// props que o componente vai receber

interface TasksItemProps{
    tasks:typeTasks[]; // tarefa individual
    onToggle: (id:number) => void; // função para marcar/desmarca
    onRemove: (id:number) => void; //para remover
}

export default function TasksList({tasks, onToggle, onRemove}: TasksItemProps){

    // Se não tiver tarefa, vai exibir mensagem de feedback
    if (tasks.length === 0){
        return <p className="empty"> Nenhuma tarefa cadastrada </p>
    }


    return(
        <div>
            <ul className="tasks-list">
                {tasks.map((task) => (
                    <TasksItem 
                    key={task.id} // chave unica exigida pelo react
                    tasks={task}  // passa a tarefa
                    onToggle = {onToggle} // passa a função marcar/desmarcar
                    onRemove = {onRemove} // passar a função de
                    />
                ))}
                 </ul>
        </div>
    )
}