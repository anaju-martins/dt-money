import { createContext, useEffect, useState } from "react";

interface Transaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    category: string;
    price: number;
    createdAt: string; 
}

interface TransactionContextType {
    transactions: Transaction[];
}

interface TransactionsProviderProps {
    children: React.ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {


    const [transactions, setTransactions] = useState<Transaction[]>([]);
    
    async function loadTransactions(){
        const response = await fetch('http://localhost:3000/transactions');
        const data = await response.json();
        setTransactions(data);
    }
    
    useEffect(() => { /* useEffect nao pode ser assincrono */
            loadTransactions(); 
    }, []) /* quando passa array vazio a função é executada apenas uma vez */
    
    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}