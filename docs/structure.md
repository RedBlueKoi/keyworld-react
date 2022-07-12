# Project structure

Here you can find a quick rundown of the project structure.

## Important Config files

- .eslintrc.cjs
  - ESLint configuration file
  - this file specifies how your code should be linted
  - it helps you to make sure that your code is valid
  - please note here that linter does not check for logical errors, only syntax
- tailwind.config.js
  - all the tailwind configuration
  - here you can add your presets for colors and override things
- postcss.config.js
  - postcss config
  - here you can add postcss plugins
- .prettierrc.json
  - prettier formatter configuration
  - opinionated, good enough and you should not change it
- tsconfig.json
  - TypeScript configuration file
  - most likely you will not need to change here anything
- .gitignore
  - here you can specify what files should not be added to the repo

---

## Components folder

This is a main components folder all separate small components and big complex feature components should go here.

- Tip: for complex feature modules, I would advice to have this structure.
- example-cart
  - index.ts
  - ExampleCart.css
  - ExampleCart.tsx
  - ExampleCartPart1Name.tsx
  - ExampleCartPart2Name.tsx
  - ...
  - ExampleCartPartXName.tsx
- The idea is that `ExampleCart.tsx` is gonna be the entry point and `index.ts` will reexport it so that in the rest of the application you simply can do `import ExampleCart from "@/components/example-cart"`

---

## Views folder

This folder is meant for pages and subpages.

---

## Store folder

In this folder you can keep all the store slices. Just don't forget to add them to the main store.

---

## Future folder you might want to create

At some point you probably might want to create additional folders to structure your code. I can see how folders like `custom-hooks`, `assets` and `api` might get usefull.
