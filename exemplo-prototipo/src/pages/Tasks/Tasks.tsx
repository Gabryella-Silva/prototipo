import { useEffect, useState } from "react";
import { getTasks } from "../../service/tasksService";
import type { typeTasks } from "../../type/typeTasks";

export default function Tasks(){
    //estado das tarefas vindas da API
    const [tasks, setTasks] = useState<typeTasks[]>([]);

    // estado de carregamento
    const[ loading, setLoading] = useState(true);

    //estado de erro
    const [error, setError] = useState<string | null>(null);

    //busca os dados da API
    useEffect(()=>{
        async function loadTasks(){
            try{
                const data = await getTasks();
                setTasks(data);
            }catch (err){
                setError("Erro ao carregar as tarefas");
            }finally{
                setLoading(false);
            }
        }
        loadTasks();
    }, []);

    //feedback para o usuario (carregamento da API)
    if(loading){
        return <p> Carregando Tarefas....</p>
    }
        //feedback visual de erro
    if(error){
        return <p>{error}</p>
    }

    return(
        <section>
            <h1> Tarefas </h1>

            <ul>
                {tasks.map((task) =>(
                    <li key={task.id} style={{textDecoration: task.completed ? "line-through" : "none",
                      }}>
                        {task.id}
                        {task.title}
                          </li>
                ))}
            </ul>
        </section>
    )

}