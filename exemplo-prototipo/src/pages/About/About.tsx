import "./About.css"

export default function About(){
    return(
       <section className="about-container">

        <h1> Sobre o Projeto </h1>

        <p> O fluxo de tarefas é uma aplicação web desenvolvida utilizando
            React, TypeScript e Vite.
        </p>

        <p>
            No projeto usamos conceitos como componetização, gerenciamento de estados com hooks,
            consumo de API e persistência de dados com localStorage
        </p>


       </section>
    )
}