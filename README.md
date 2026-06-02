# 🎨 Frontend Challenge - Dot Digital Group

## 🎯 Objetivo

Desenvolver uma **interface web responsiva** utilizando **React 19 + TypeScript + Vite**, que consuma a API criada no desafio de Backend e permita visualizar e interagir com cursos, turmas e matrículas de usuários.

### Requisitos

1. **Listagem de Cursos e Turmas**
   - Listar cursos com suas turmas disponíveis (status = "disponível").
   - Filtros:
     - Por título (campo de busca).
     - Por temas (checkbox: inovação, tecnologia, marketing, empreendedorismo, agro).

2. **Cadastro de Usuário**
   - Formulário com:
     - Nome
     - E-mail
     - Botão "Cadastrar"
   - Exibir mensagem de sucesso ou erro.

3. **Matrícula**
   - Exibir botão "Matricular" nas turmas disponíveis.
   - Ao clicar, solicitar o e-mail ou permitir seleção de um usuário existente.

4. **Validação de Regras de Negócio**
   - Não permitir matrícula em turma encerrada.
   - Não permitir matrícula duplicada (mesmo usuário em duas turmas do mesmo curso).
   - Não permitir matrícula fora da data de início e fim.

5. **Visualizar Matrículas**
   - Campo para selecionar ou digitar um usuário.
   - Listar cursos e turmas em que ele está matriculado.

### Diferenciais

- Utilizar **React** como biblioteca para SPA.
- Não utilizar bibliotecas/frameworks de CSS (Bootstrap, Material UI, Tailwind).
- Interface responsiva e com boa usabilidade.

### Entrega

- Disponibilizar o código em um **arquivo ZIP**.
- Incluir um **README.md** com:
  - Instruções de como rodar o projeto.
  - Prints ou vídeo curto demonstrando o funcionamento.
  - Documentações e observações relevantes.

## Como rodar?
- Instale os pacotes utilizando o comando `npm install`
- Inicie a aplicação utilizando o comando `npm start`

## 🎨 Tecnologias Utilizadas

- **React** → biblioteca para construção da interface de usuário.
- **React Router** → gerenciamento de rotas e navegação entre páginas.
- **Sass (SCSS)** → pré-processador CSS para estilos modulares e reutilizáveis.
- **Vite** → ferramenta de build e desenvolvimento rápido (utilizada para inicializar o projeto).