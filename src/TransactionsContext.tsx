import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface TransactionContextData {
  transactions: Transactions[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
);

interface Transactions {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>;

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  function createTransaction(transaction: TransactionInput) {
    api.post('/transactions', transaction);
  }

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
