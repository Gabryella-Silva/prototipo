
// propriedade definir o tipo do componnente
type TasksItemProps ={
    title: string;
    completed: boolean;
};


export default function TasksItem({title, completed}: TasksItemProps){

    return(
        <li>
            <span
            
            style={{textDecoration:completed ? "line-through": "none", 

            }}> 

            {title}

            </span>
        </li>
    )
}