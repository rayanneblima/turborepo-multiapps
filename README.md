## Aplicativo para Barbearia (landing page + mobile + backend)
### **NestJS + ReactJS + React Native + Typescript + Turborepo**
<br>

### Comandos iniciais:

<br>

- Criar o projeto → `npx create-turbo@latest {{ nome_projeto }}`
- Entrar na pasta apps → `cd {{ nome_projeto }}/apps`
- Criar o front-end → `npx create-next-app@latest front`
- Criar o back-end → `npm i -g @nestjs/cli && nest new back`
- Criar o mobile → `npx create-expo-app@latest mobile`
- Criar o comando **dev** nos 3 *package.json*
- Rodar os 3 projetos à partir do turborepo → `yarn run dev`
- Criar a pasta core e iniciar o projeto node → `cd packages && mkdir core && cd core && npm init -y`
- Incluir nas dependencias do *package.json* dos 3 projetos → `"@repo/core": "*"`
- Rodar o comando de instalação das dependencias → `yarn`