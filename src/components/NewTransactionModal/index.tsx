import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'; 
import * as Dialog from '@radix-ui/react-dialog'; 
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'; 

export function NewTransactionModal(){

    return (
        <Dialog.Portal> {/* //renderizar um elemento filho dentro de um outro local da DOM
                    //modal tem o proprio container
                    //vai ficar fora de todas as divs */}
            <Overlay/>
            <Content>
                <CloseButton>
                    <X size={24}/>
                </CloseButton>
                <Dialog.Title>Nova Transação</Dialog.Title> 
                    <form action="">
                        <input type="text" placeholder="Descrição" required />
                        <input type="number" placeholder="Preço" required />
                        <input type="text" placeholder="Categoria" required />

                        <TransactionType>
                            <TransactionTypeButton variant="income" value="income">
                                <ArrowCircleUp size={24}/>
                                Entrada
                            </TransactionTypeButton>
                            <TransactionTypeButton variant="outcome" value="outcome">
                                <ArrowCircleDown size={24}/>
                                Saída
                            </TransactionTypeButton>
                        </TransactionType>
                        <button type="submit">
                            Cadastrar
                        </button>
                    </form>
            </Content>
        </Dialog.Portal>
    );
}