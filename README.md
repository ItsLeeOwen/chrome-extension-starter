```sh
git clone https://github.com/ItsLeeOwen/app-starter.git my-react-app

cd my-react-app

npm install

that's it.
```

##Code Splitting
Add additional packages to package.json's "webpack.entry" config.

```json
"webpack": {
    "entry": {
      "index.js": "./src/index.js",
      "login.js": "./src/login.js"
    }
  },
```
