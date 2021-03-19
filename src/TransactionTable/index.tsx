import { useEffect } from 'react';
import { api } from '../services/api';
import { Container } from './styles';

export function TransactionTable() {
  useEffect(() => {
    api.get('transactions').then(response => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="income">R$12.000,00</td>
            <td>venda</td>
            <td>18/03/2021</td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>Supermercado</td>
            <td className="outcome">- R$680,00</td>
            <td>alimentação</td>
            <td>13/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
