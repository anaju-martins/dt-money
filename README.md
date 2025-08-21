# DT Money 💰

## 📖 Sobre o Projeto

**DT Money** é uma aplicação completa de controle financeiro desenvolvida como parte do Módulo 3 da trilha de ReactJS do curso **Ignite da Rocketseat**.

O objetivo principal do projeto foi construir uma interface front-end moderna e funcional, conectando-se a uma API para gerenciar transações financeiras. A aplicação permite cadastrar, listar e filtrar transações de entrada e saída, além de exibir um resumo consolidado no dashboard.

Este projeto foi uma oportunidade para aprofundar em conceitos fundamentais e avançados do React, com um foco especial em **performance**, entendendo o fluxo de renderização de componentes e os algoritmos internos da biblioteca para otimizar a experiência do usuário.

---

## ✨ Funcionalidades

-   **Cadastro de Transações:** Adicionar novas transações de entrada (depósito) ou saída (retirada).
-   **Listagem Dinâmica:** Visualizar todas as transações em uma tabela com formatação de data e valor.
-   **Dashboard com Resumo:** Cards que exibem o total de entradas, saídas e o saldo consolidado, atualizados em tempo real.
-   **Busca de Transações:** Filtrar transações por nome ou categoria.
-   **Responsividade:** Interface adaptável para diferentes tamanhos de tela.

---

## 🛠️ Tecnologias e Conceitos Aplicados

Este projeto foi construído com as seguintes tecnologias e conceitos-chave:

-   **React** (Biblioteca principal para a construção da UI)
-   **TypeScript** (Para tipagem estática e segurança no código)
-   **Styled Components** (Para estilização de componentes de forma isolada e dinâmica)
-   **Axios** (Para realizar as chamadas à API)
-   **React Hook Form** (Para gerenciamento de formulários de forma performática)
-   **Zod** (Para validação dos dados do formulário)
-   **JSON Server** (Para simular uma API REST local)

### Conceitos de React aplicados:

-   **Componentização:** Divisão da UI em componentes reutilizáveis e de responsabilidade única.
-   **Gerenciamento de Estado:** Uso extensivo de Hooks como `useState` e `useContext` para gerenciar o estado global e local da aplicação.
-   **Hooks Avançados e Performance:**
    -   `useMemo`: Para memorizar cálculos pesados e evitar que sejam refeitos a cada renderização.
    -   `useCallback`: Para memorizar funções e evitar a recriação desnecessária em componentes filhos, otimizando a renderização.
-   **Controlled Components:** Gerenciamento de formulários controlando o estado dos inputs pelo React.
-   **Consumo de API:** Integração com um back-end (simulado com JSON Server) para buscar e registrar dados de forma assíncrona.
-   **Renderização e Reconciliação:** Aplicação de conhecimentos sobre o fluxo de renderização do React para criar uma aplicação mais performática.

---
