import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles';
import { NewTransactionModal } from '../NewTransactionModal';
import * as Dialog from '@radix-ui/react-dialog';

import logoImg from '../../assets/logo.svg';

export function Header(){

    return (
        <HeaderContainer>
            <HeaderContent>
                
                <img src={logoImg} alt="" />

                <Dialog.Root>
                    {/* //Para que o trigger não crie um novo botão, mas sim aproveite o que já existe */}
                    <Dialog.Trigger asChild> 
                        <NewTransactionButton>Nova Transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal/>
                </Dialog.Root>
            </HeaderContent>    
        </HeaderContainer>
    )
}