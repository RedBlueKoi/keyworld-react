# Setup

This project is trying to be as beginner friendly as possible. Following instruction should cover all the steps till the point of you having the project running locally.

To get information about how you should proceed with the development please check out the [Workflow](./workflow.md) section.

---

## Code Editor

So, you either already have your preference or you have completely no clue about your option. If you fall into latter group, I would simply advice you to start of by installing [VSCode](https://code.visualstudio.com/docs/setup/windows). It is easy to use, relatively light-weight code editor, which is commonly used throughout the industry and not specific to working with JS or specific framework.

After installing the editor, I would highly recommend to install [these recommended extensions](./setup/recommended-extensions.md)

---

## Versioning

After this section you will have project files on your local machine.

First things first, you need to create an account on [GitHub](http://github.com). That should be pretty straight forward. GitHub is a nice place for you to show your code to others and manage your code without fear of losing it. You can store all your projects on GitHub and access them from any other computer. You can find more information about versioning [here](./setup/versioning.md).

If you are interested in contributing to some other public repos, for example to open source projects please check out [this page](./setup/public-repo.md)

After you've created an account all you have to do is clone the repo. To do so you need to install git. You can find information on how to install it for your specific system [here](https://git-scm.com/).

- Please note, that process described above is the very basic and most flexible approach on working with git. There are visual tools to help you providing interfaces instead of writing commands. One such tool you can find in VSCode for example.

After you've installed git on your machine you can open a terminal and write `git --version` to see if it is working. You should see a message telling you what version you have.

- If you have any troubles, feel free to ping the main channel on discord server or, better yet, try to google the issue yourself first. But, don't go too deep. Timebox it, 30-60 mins is a good amount of time to try fix issues yourself. If after this time you are still stuck, it is advised to ask for help.

If everything is ok, then navigate to the folder where you want to keep your project and do `git clone http-link-to-the-repo`. You can find the link on your repo page. Just click on the green `Code` button.

After command is finished you should have folder with all the files from the project. At this point you can go through and check out the structure.

---

## Booting up

After you have the repo locally on your machine it is time to run it. To do so, first of all, you will need to install the js environment called [Node](https://nodejs.org/en/about/) on your computer. Again, how to do so for your operating system you can find [here](https://nodejs.org/en/download/). Node install should come with [NPM](https://docs.npmjs.com/about-npm)(Node Package Manager) as well.

- Please see provided links for more documentation.
- If you want to have a quick rundown about `NPM` you can check out [Package management](./setup/package-management.md) section.

After you've installed everything, you can in the same way varify the installation in the terminal by running `node -v` and `npm -v`. Both commands should tell you versions of installed tools.

- Please note that there are other js environments exist out there. If you are interested in the topic you can start by googling Deno or Bun.

Not getting too deep in explanation, I advice you for this project(and for all your future projects) to use modified version of `NPM` called `PNPM`. More information you can find [here](https://pnpm.io/motivation). To install it simply run `npm i -g pnpm` in the terminal. `PNPM` is using exactly the same command pattern so if you know `PNPM` commands you also know `NPM` commands and vice-versa.

- Please note, that `i` here stands for `install` and flag `-g` here stands for `global` which means that you are telling `npm` to `install` a package called `pnpm` `globally`. You can discover more packages [here](https://www.npmjs.com/). For example here is a link to the [React framework package](https://www.npmjs.com/package/react). The very framework you are using on this project.

After you have installed `Node` and `PNPM`, simply navigate to the project root folder(folder where file `package.json` is located) in your terminal and install all project dependencies by running `pnpm i`. After the command is finished you can boot up the project by running `pnpm dev`.

- Please note here that project related commands you need to run from the project rootfolder, cause description for these commands are stored in the `package.json` file. Feel free to check it out.
- Please note here that you can add flag `--open` to the command, so `pnpm dev --open` to automatically open a new tab with a project in the default browser.
- Please note here that you also can add flag `--host` to the command, so `pnpm dev --host` to make project public for your local network. This way you can open your project on your phone for example to test responsability of your UI.

---

## Conclusion

At this point you should be able to have open your project in VSCode(or your preferred editor), run and open it in the browser.

Basically, you just got your first experience with following things:

- Git and basics of versioning
- GitHub interface
- NPM
