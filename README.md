# Aplicativo de Login e Dashboard

Desafio desenvolvido com Expo, React Native, TypeScript e Expo Router.

## Funcionalidades

- Tela de Login com TextInput para login e senha.
- Senha oculta com secureTextEntry.
- Botão Acessar com validação de campos vazios.
- Navegação para o Dashboard usando router.push().
- Mensagem de boas-vindas com o login informado.
- Botão para voltar ao Login.
- Layout responsivo e ajuste para teclado.

O login é demonstrativo. Qualquer login e senha preenchidos permitem entrar. Não há servidor, cadastro, armazenamento de senha ou autenticação real. A senha não é enviada ao Dashboard.

## Executar

Pré-requisitos: Node.js LTS e npm.

```sh
npm install
npm start
```

Abra com uma versão do Expo Go compatível com o SDK deste projeto, emulador Android ou simulador iOS (macOS). Para testar no navegador:

```sh
npm run web
```

Para verificar TypeScript:

```sh
npm run typecheck
```

## Organização

```text
src/
  app/
    _layout.tsx       # Configuração do Stack
    index.tsx         # Login
    dashboard.tsx     # Dashboard
  styles.ts           # Estilos compartilhados
assets/               # Ícones e imagens do Expo
```

O projeto foi criado com o template oficial padrão:

```sh
npx create-expo-app@latest login-dashboard --template default --yes
npm run reset-project
```

O reset oficial foi executado escolhendo remover os exemplos. Depois, as telas próprias foram implementadas em src/app, conforme a organização do template atual.

## Roteiro de teste

1. Clique em Acessar sem preencher os campos: deve aparecer uma mensagem e permanecer no Login.
2. Preencha apenas o login: o acesso continua bloqueado.
3. Digite uma senha: os caracteres devem estar ocultos.
4. Preencha os dois campos e clique em Acessar: o Dashboard deve exibir Bem-vindo! e o login informado.
5. Clique em Voltar ao Login: deve retornar ao formulário com a senha vazia.
6. Repita em uma tela estreita e com o teclado aberto: os campos e o botão devem permanecer acessíveis por rolagem.

## Publicação no GitHub

Crie um repositório público e execute na pasta do projeto:

```sh
git init
git add .
git commit -m "feat: cria aplicativo de login e dashboard"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/login-dashboard.git
git push -u origin main
```

Substitua SEU-USUARIO pelo usuário do GitHub. Se o commit inicial já existir, pule os três primeiros comandos. Nunca inclua node_modules, .expo ou senhas no repositório.

## Entrega

Nome do aluno: preencher com o nome completo.

Link do GitHub: preencher com a URL real do repositório público após a publicação.

## Referências

- [Criação de projetos Expo](https://docs.expo.dev/more/create-expo/)
- [Expo Router](https://docs.expo.dev/router/introduction/)

## Verificação realizada

- TypeScript: aprovado.
- Exportação web com Expo: aprovada, com as rotas Login e Dashboard.
- Navegador: campos vazios exibem mensagem, senha usa input do tipo password, Acessar abre o Dashboard com o login informado e Voltar ao Login retorna ao formulário.
- Não foi realizado teste em aparelho físico ou emulador neste ambiente.
- A instalação reportou 29 alertas de dependências herdadas do template (11 moderados e 18 altos). As versões do SDK foram preservadas; não foi aplicada atualização forçada que poderia quebrar a compatibilidade.
- A publicação no GitHub depende da conexão da conta e ainda não foi realizada.
- ESLint: aprovado.
