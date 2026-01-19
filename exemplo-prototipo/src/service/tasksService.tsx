import type { typeTasks } from "../type/typeTasks";

export async function getTasks():Promise<typeTasks[]>{
const response = await fetch(
   "https://jsonplaceholder.typicode.com/todos?_limit=5"
);

//verificação se a resposta da api funcionou
if(!response.ok){
    throw new Error("Erro ao carregar API");
}

// converte a resposta para JSON
const data: typeTasks[]= await response.json();

return data;
}