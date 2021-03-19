import Modal from 'react-modal';
import incomeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';
import closeImg from '../assets/close.svg';
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Nova Transação</h2>

        <input placeholder="Título" />

        <input placeholder="Valor" type="number" />

        <TransactionTypeContainer>
          <button>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button>
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
