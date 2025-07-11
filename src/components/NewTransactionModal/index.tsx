import { zodResolver } from '@hookform/resolvers/zod';
import { Overlay, Content, CloseButton, TransactionType, TransactionTypeButton } from './styles'; 
import * as Dialog from '@radix-ui/react-dialog'; 
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'; 
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';


const newTransactionFormSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])

})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModal(){

    const { 
        control,
        register,
        handleSubmit,
        formState: { isSubmitting }


    } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: 'income'
        }
    })

    async function handleCreateNewTransaction(data: NewTransactionFormInputs){
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

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
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input 
                            type="text" 
                            placeholder="Descrição" 
                            required
                            {...register('description')} 
                        />
                        <input 
                            type="number" 
                            placeholder="Preço" 
                            required
                            {...register('price', { valueAsNumber: true })} 
                        />
                        <input 
                            type="text" 
                            placeholder="Categoria" 
                            required
                            {...register('category')} 
                        />

                        <Controller
                            control={control}
                            name="type"
                            render={({ field }) => {
                                return (
                                    <TransactionType onValueChange={field.onChange} value={field.value}>
                                        <TransactionTypeButton variant="income" value="income">
                                             <ArrowCircleUp size={24}/>
                                                Entrada
                                         </TransactionTypeButton>
                                        <TransactionTypeButton variant="outcome" value="outcome">
                                            <ArrowCircleDown size={24}/>
                                                Saída
                                        </TransactionTypeButton>
                                    </TransactionType>
                                )
                            }}

                        
                        />

                        

                        <button type="submit" disabled={isSubmitting}>
                            Cadastrar
                        </button>
                    </form>
            </Content>
        </Dialog.Portal>
    );
}