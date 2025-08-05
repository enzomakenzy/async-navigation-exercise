import { Header } from "@components/Header";
import { AddTaskButton, Container, ListTitle, Main, TextAddTaskButton } from "./styles"

export function Home() {
  return (
    <Container>
      <Header name="Home"  />
      <Main>
        <ListTitle>
          Lista de Tarefas
        </ListTitle>

        <AddTaskButton>
          <TextAddTaskButton>
            Adicionar nova tarefa
          </TextAddTaskButton>
        </AddTaskButton>
      </Main>
    </Container>
  );
}