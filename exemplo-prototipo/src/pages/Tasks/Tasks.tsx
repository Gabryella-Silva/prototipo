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

  // executar apenas uma vez ao montar o componente
  // verificar se existem tarefas salvas no localStorage

  useEffect(() =>{
    const savedTasks = localStorage.getItem("tasks");

    if(savedTasks){
        //se existir carrega no localStorage
        setTasks(JSON.parse(savedTasks));
        setLoading(false);
    }else{
        // Caso nao exista buscar na API
        loadTasksFromApi();
    }
  }, []);

  async function loadTasksFromApi() {
    try {
        const data = await getTasks();
        setTasks(data)
    }catch{
        setError("Erro ao carregar tarefas");
    }finally{
        setLoading(false)
    }
 }

 // sempre que o estado do (tasks) mudar, vai salvar no local
        useEffect(() => {
            if(tasks.length > 0){
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }, [tasks]);

        // alterar o status da tarefa (concluida/nao concluida)
        function handleToggleTasks(id:number){
            const updateTasks = tasks.map((task) => 
                task.id === id
            ? {...task, completed: !task.completed}
            :task
            );
                setTasks(updateTasks);
        }

        // remover uma tarefa da lista
        function handleRemoveTasks(id:number){
            const updateTasks = tasks.filter(
                (task) => task.id !== id
            );
            setTasks(updateTasks);
        }

}