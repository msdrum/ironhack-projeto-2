# Wallet



## O projeto

A Wallet é o resultado do Projeto 2 do curso da Ironhack em Fullstack Web Development Bootcamp, no qual buscou-se aplicar as ferramentas e os conhecimentos adquiridos no segundo módulo do curso, em especial a utilização da biblioteca React para JavaScript e a implantação das operações CRUD para manipulação de dados.



## Ferramentas utilizadas

Foram utilizadas as bibliotecas React, React-Router-Dom, React-Bootstrap e Axios.
As requisições CRUD foram testadas por meio da a aplicação Insomnia.
Para o deploy do projeto foi utilizada a plataforma do Netlify.



## Objetivos

A aplicação desenvolvida consiste em um gerenciador para carteiras de investimentos que permite inserir, editar e excluir registros de compra e venda de ações, exibindo ao usuário o preço médio, a quantidade total e o valor aportado para cada ação em sua carteira, bem como o histórico de operações realizadas, a fim de auxiliar na organização financeira e na declaração anual do imposto de renda.



## Funcionalidades

Na HomePage é possível acessar a carteira de um usuário existente, selecionando-o em uma lista de opções exibidas ao clicar no botão "Selecione seu usuário". É possível, ainda, criar um novo usuário por meio do preenchimento de um formulário disponibilizado ao selecionar a opção "Criar novo usuário". Em ambas as hipóteses, o usuário é direcionado para a DashPage.

Na DashPage são exibidas todas as ações já registradas pelo usuário, listadas em ordem alfabética na lateral esquerda da página. Para acrescentar novas ações à carteira, o usuário deve acessar o botão "Adicione uma nova posição" e registrar ao menos uma operação de compra ou venda, por meio do preenchimento do formulário exibido. As informações solicitadas são: o ticker da ação desejada, a data da operação, o tipo da operação (se compra ou venda), a quantidade de ações e o preço unitário da ação. 

Conforme novas operações são incluídas, a aplicação recalcula o preço médio de compra, a quantidade total e o valor total aportado para cada ação, exibindo essas informações abaixo do nome de cada ação listada. Para visualizar o histórico de operações de uma ação, basta selecionar o nome da ação dentre as listadas na lateral esquerda da página.

A DetailsPage consiste na exibição do histórico de operações da ação selecionada, exibidas em ordem cronológica de registro. Para registrar novas operações, basta clicar no botão "Incluir nova operação" e preencher o formulário com as informações necessárias. É possível, ainda, excluir todas as operações de uma determinada ação ao clicar no botão "Excluir posição". Nessa hipótese, a ação deixará de constar na lista de posições do usuário.

A qualquer momento o usuário pode retornar à página inicial clicando na logo da Ironhack ou da Wallet, na barra de navegação superior.

Ao final da página constam os links com os nomes dos colaboradores, que direcionam às suas respectivas páginas no GitHub, onde podem ser encontrados outros projetos realizados ou em andamento. 



## Acesso

Para acessar a aplicação, visite https://minha-carteira-92.netlify.app.
Para reportar falhas ou sugerir melhorias, entre em contato com um de nossos colaboradores.



## Colaboradores:

Marcio Silva
https://github.com/msdrum

Vitor Martins
https://github.com/cmsvtr

Karen Ortiz
https://github.com/kaluize



---



#Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
