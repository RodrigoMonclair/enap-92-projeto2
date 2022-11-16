import { Table, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalCreateUser from "../components/ModalCreateUser";

function HomePage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("https://ironrest.herokuapp.com/enap92");
      setUsers(response.data);
    }

    fetchUsers();
  }, []);

  console.log(users);
  return (
    <div>
      <h1>Homepage</h1>
      <p>Aqui existirá uma tabela com as informações dos funcionários</p>

      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Task</th>
              <th>%</th>
              <th>Status</th>
              <th>Departamento</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user.nome}</td>
                  <td>{user.task}</td>
                  <td>{user.progresso}</td>
                  <td>{user.status}</td>
                  <td>{user.departamento}</td>
                  <td>
                    <Button variant="outline-secondary">Detalhes</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>

        <ModalCreateUser />
      </Container>
    </div>
  );
}

export default HomePage;