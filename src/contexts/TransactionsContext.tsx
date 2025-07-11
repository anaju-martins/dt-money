import { useEffect, useState, useCallback } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
    createdAt: string; 
}

interface CreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}


interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
    children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {


    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    const fetchTransactions = useCallback(async (query?: string) =>{
        const response = await api.get('/transactions',{
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        });
        setTransactions(response.data);
    }, [])

    const createTransaction =  useCallback(async (data: CreateTransactionInput ) => {
        const { description, price, category, type } = data;
        
        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date(),
        })

        setTransactions(state => [ response.data, ...state]) /* adiciona a nova transação no array de transações */
    }, [])
    
    useEffect(() => { /* useEffect nao pode ser assincrono */
            fetchTransactions(); 
    }, [fetchTransactions]) /* quando passa array vazio a função é executada apenas uma vez */
    
    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}