import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";

export function useSummary(){
    const { transactions } = useContext(TransactionsContext);
    
        const summary = transactions.reduce(
            (acc, transaction) => { 
                if (transaction.type === 'income') {
                    acc.income += transaction.price;
                    acc.total += transaction.price;
                } else {
                    acc.outcome += transaction.price;
                    acc.total -= transaction.price;
                }
                
                return acc; 
            }, 
            { 
                income: 0, outcome: 0, total: 0 
            }
        )
        /* reduce permite percorrer um array e reduzir o array a uma nova estrutura de dados, neste caso vai converter um array em um objeto*/
        return summary;
}