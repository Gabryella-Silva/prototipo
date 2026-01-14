import { use, useState } from "react";

//tipo de propriedades do formulario
type TasksFormProps = {
    onAddTasks: (tasksTitle: string) => void;
}

export default function TasksForm ({onAddTasks}: TasksFormProps) {

    //estado para controlar o input
    const [taskTitle, setTaskTitle] = useState ("");

    
    //função que envia o formulario
    function handleSubmit (event: React.FormEvent){
        event.preventDefault();
    
        //evita envio de algo vazio
        if(taskTitle.trim() === "") return;

        onAddTasks(taskTitle);
        setTaskTitle("")
    }

    return(
        <form onSubmit={handleSubmit}> 
          <input
          type="text"
          placeholder="Digite uma tarefa"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
            />

            <button type="submit">Adicionar </button>    
        
        </form>
        
        
        
        
        
    )
}

