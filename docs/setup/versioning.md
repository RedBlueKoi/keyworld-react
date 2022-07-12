# Versioning

After this section you will have project files on your local machine.

First things first, you need to create an account on [GitHub](http://github.com). That should be pretty straight forward. GitHub is a nice place for you to show your code to others and manage your code without fear of losing it. You can store all your repos on GitHub and access them from any other computer.

If you are not familiar with Versioning at this point I would highly advise you to take a look at [git documentation](https://git-scm.com/doc).

In short, instead of saving different versions of your project you create a repo and git will track changes of that repo.

You can save current state by firstly marking files which changes you want to save with `git add path-to-file` and then saving the state point with `git commit -m "message describing what you are saving"`. Note here, that this `commit` exist only on your local machine. To push it to the GitHub server you simple do `git push`.

Also, it is really important to mention the concept of branching.

Imagine versions of your project like a tree. Your main version is a trunk. When you want to add something new to your project, you simply create a branch from the trunk with `git checkout -b branch-name` command.

- Note here that `git checkout` command moves you between branches. And flag `-b` will create a new branch and move you there. So if you want to get back to the `main` branch you simply do `git checkout main`. Also, keep in mind that uncommited changes might prevent you from moving to another branch.
