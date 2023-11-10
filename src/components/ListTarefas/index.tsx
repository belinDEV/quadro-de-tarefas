import { useContext } from 'react'
import { Container } from "./styles";
import { TarefaContext } from '../../contexts/tarefaContext';

interface PropsListTarefas {
    abrirModal: () => void;
}

export function ListTarefas(props: PropsListTarefas) {
    const { tarefas } = useContext(TarefaContext);
    const contenxt = useContext(TarefaContext);
    const quadro1Tarefas = tarefas.filter(
        (tarefa) => tarefa.quadro === "Quadro 1"
    );
    const quadro2Tarefas = tarefas.filter(
        (tarefa) => tarefa.quadro === "Quadro 2"
    );
    const quadro3Tarefas = tarefas.filter(
        (tarefa) => tarefa.quadro === "Quadro 3"
    );
    return (
        <>
            <Container>
                <ul>
                    <h3>
                        Quadro 1
                    </h3>

                    {
                        tarefas.map((tarefa, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <div>
                                        <h4>
                                            {tarefa.titulo}
                                        </h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <div>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                funEditarTarefa({editar: true, tarefa: tarefa})
                                                props.abrirModal();
                                            }}
                                        >
                                            Editar
                                            onClick={() =>
                                        contenxt.deleteTarefa(tarefa.id)
                                    }
                                >
                                    Deletar
                                        </button>

                                    </div>

                                </li>
                            )
                        })
                    }

                </ul>
                <>
            <Container>
                <ul>
                    <h3>
                        Quadro 2
                    </h3>

                    {
                        tarefas.map((tarefa, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <div>
                                        <h4>
                                            {tarefa.titulo}
                                        </h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <div>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                funEditarTarefa({editar: true, tarefa: tarefa})
                                                props.abrirModal();
                                            }}
                                        >
                                            Editar
                                            onClick={() =>
                                        contenxt.deleteTarefa(tarefa.id)
                                    }
                                >
                                    Deletar
                                        </button>
                                    </div>

                                </li>
                            )
                        })
                    }

                </ul>
                <>
            <Container>
                <ul>
                    <h3>
                        Quadro 3
                    </h3>

                    {
                        tarefas.map((tarefa, index) => {
                            return (
                                <li
                                    key={index}
                                >
                                    <div>
                                        <h4>
                                            {tarefa.titulo}
                                        </h4>
                                        <p>{tarefa.descricao}</p>
                                    </div>
                                    <div>
                                        <button
                                            type='button'
                                            onClick={() => {
                                                funEditarTarefa({editar: true, tarefa: tarefa})
                                                props.abrirModal();
                                            }}
                                        >
                                            Editar
                                            onClick={() =>
                                        contenxt.deleteTarefa(tarefa.id)
                                    }
                                >
                                    Deletar
                                        </button>
                                    </div>

                                </li>
                            )
                        })
                    }

                </ul>
            </Container>
        </>
    )
}
