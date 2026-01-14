import TasksForm from "../../components/TasksForm/TasksForm";
import TasksItem from "../../components/TasksItem/TakItem";
import { useEffect, useState } from "react";

//tipo da minha tarefa
type Task ={
    id:number;
    title:string;
    completed:boolean;

}

export default function Tasks(){

    //armazena minhas tarefas
    const[tasks, setTasks] = useState<Task[]>([]);

    // simular o carregamento incial (vai ser substituido por uma api)
    useEffect(()=>{
        const initialTasks: Task[] = [
            {id:1, title: "Estudar", completed: true},
            {id:1, title: "Entregar Projeto Integrador", completed: false},

        ];

        setTasks(initialTasks);

    },[]);

    //função para adicionar uma nova tarefa
    function addTask(title:string){
        const newTask: Task ={
            id: Date.now(),
            title,
            completed:false,
        };;
        setTasks((prevTasks) => [...prevTasks, newTask]);
     }

     return(
        <div>
            <h2> Tarefas </h2>

            {/* chamando e criando meu formulario */}
            <TasksForm onAddTasks={addTask} />

            {/* lista de tarefas */}
            <ul>
                {tasks.map((task) => (
                    <TasksItem 
                    key={task.id}
                    title={task.title}
                    completed={task.completed}
                    />
               ))}
            </ul>
        </div>
     )
}