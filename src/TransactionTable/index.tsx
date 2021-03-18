import { Container } from './styles';

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Preço</th>
          <th>Categoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <td>Desenvolvimento de site</td>
          <td className="income">R$12.000,00</td>
          <td>venda</td>
          <td>18/03/2021</td>
        </tbody>
        <tbody>
          <td>Supermercado</td>
          <td className="outcome">- R$680,00</td>
          <td>alimentação</td>
          <td>13/03/2021</td>
        </tbody>
      </table>
    </Container>
  );
}
