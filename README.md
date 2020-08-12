## Babel Sandbox

### Quick start:

- Install dependencies `yarn install` or `npm install`
- Start front-end `yarn start` or `npm start`
    - Output: Web page using `localhost:3000` should open

To start the server, visit [babel-sandbox-server](https://github.com/MLH-Fellowship/babel-sandbox-server) and follow the steps in [Quick Start](https://github.com/MLH-Fellowship/babel-sandbox-server#quick-start).

### Directory structure:
<big><pre>
📂 [public](./public) # Supplemental assets or resources, or static files
📂 [scripts](./scripts) # Small runnables (typically shell scripts) that perform routine tasks
📂 [src](./src) # Source files
├── 📂 [components](./src/components) 
├── 📂 [semantic-ui](./src/semantic-ui) 
│   ├── 📂 [site](./src/semantic-ui/site) 
│   │   ├── 📂 [collections](./src/semantic-ui/site/collections) 
│   │   ├── 📂 [elements](./src/semantic-ui/site/elements) 
│   │   ├── 📂 [globals](./src/semantic-ui/site/globals) 
│   │   ├── 📂 [modules](./src/semantic-ui/site/modules) 
│   │   ├── 📂 [views](./src/semantic-ui/site/views) 
├── 📂 [state](./src/state) 
├── 📂 [utils](./src/utils) 
</pre></big>

### Contributing:
- Run `yarn lint DIRECTORY` before submitting a PR

Alternatively, run the following command (prefered):
```
find src -name "*.js" | xargs yarn prettier --write 
find src -name "*.js" | xargs yarn lint
```
