import { useEffect, useState } from "react";
import { getTasks } from "../../service/tasksService";
import type { typeTasks } from "../../type/typeTasks";
import TasksList from "../../components/TasksList/TasksList";

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
            try{ // busca as tarefas
                const data = await getTasks();
                setTasks(data);
            }catch (err){ // se ocorrer erro
                setError("Erro ao carregar as tarefas");
            }finally{ // finaliza o loanding
                setLoading(false);
            }
        }
        loadTasks();
    }, []);

        //alternar o status da tarefa (concluida/nao concluida)

        function handleToggleTasks(id:number){
            const updatedTasks = tasks.map((task) => 
                task.id === id
            ? {...task, completed: !task.completed}
            : task
            );

            setTasks(updatedTasks)
        }
        // remover tarefa pelo id
        function handleRemoveTasks(id:number){
            const updatedTasks = tasks.filter(
                (task) => task.id !== id
            );
            setTasks(updatedTasks)
        }




    //feedback para o usuario (carregamento da API)
    if(loading){
        return <p className="feedback"> Carregando Tarefas....</p>
    }
        //feedback visual de erro
    if(error){
        return <p className="feedback">{error}</p>
    }

    return(
        <section className="tasks-container">
            <h1> Minhas tarefas </h1>
            < TasksList
            tasks={tasks}
            onToggle={handleToggleTasks}
            onRemove={handleRemoveTasks}
            />
     
        </section>
    )

}