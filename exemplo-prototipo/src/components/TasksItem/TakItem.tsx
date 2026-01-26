import type { typeTasks } from "../../type/typeTasks";
import "./TasksItem.css";

// props que o componente vai receber
interface TasksItemProps{
    tasks: typeTasks;
    onToggle: (id:number) => void; // para marcar/desmarcar
    onRemove: (id:number) => void; // para remover

}

export default function TasksItem ({tasks, onToggle, onRemove }: TasksItemProps){
    return(
        
            <li className={ `tasks-item ${tasks.completed ? "completed": "" } ` }  > 

                {/*  quando for clicado a função ela vai chamar o onToggle passando o id da tarefa
                alternando entre concluido e não concluido */}
                <span onClick={() => onToggle(tasks.id)}> </span>

                    {/* quando clicar no butao chama o onRemove passando pelo id */}
                <button onClick={() => onRemove(tasks.id)}> Remover </button>
            </li>
        
    )
}