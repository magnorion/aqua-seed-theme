# Aqua Seed Theme

Sobre
---

Template para projetos em WordPress


Dependências
---

### Front End:
- Webpack ( Compila todos os arquivos do Sass, minifica/concaterna arquivos )
- Sass
- Bootstrap
- Browser Sync
- Yarn/Npm Scripts

### Back End:
- Composer (Gerenciador de Pacotes de Back / Autoload)

### Plugin
- Contact Form 7

Ambiente de Desenvolvimento
---

Você precisa do node.js instalado no seu computador e o composer!
OBS: é interessante ter o Yarn instalado também!

No console, mude o seu diretório para a pasta do tema e use este comando para instalar as dependências que são controladas pelo node (Webpack e )

```
npm install 
```

Ou

```
yarn install
```

Se desejar, você pode usar este comando para "assistir" os seus arquivos enquanto estiver trabalhando:

```
yarn dev
```

Para usar o browser sync, precisa alterar o servidor que o browser sync irá apontar por proxy (Esta alteração é feita no packages.json) e depois só usar este comando:

```
yarn bs
```

Ambiente de Produção
---

Use este comando para compilar os arquivos de css e js:

```
yarn prod
```
