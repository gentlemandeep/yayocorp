---
layout: article
category: article
subtitle:
topic:
date: 2022-05-08
tags: 
---

# Exocore Installation Instructions

## 1. Setting up Exocore on your Machine
The exocore exists as both a Visual Studio Code template package and a workflow between Github and Netlify. Follow these steps to get setup:
1. [Create a Github account](https://github.com/join)
2. Select use this template on the [the Exocore repo](https://github.com/hot-domme/exocore) to fork it your account
3. Download forked repo to your computer by navigating to Code > Download Zip
4. Download [Visual Studio Code](https://code.visualstudio.com/Download)
5. Open your newly forked repository in VS Code with File > Open, and navigating to the downloaded folder
6. Accept the prompts to trust the folder, and install the recommended extensions. Your Exocore is now ready to be edited locally on VS Code.

## 2. Publishing Your Exocore to the Web with Netlify
Netlify is a platform that provides free hosting and subdomain services directly from Github repos, so it can be used to automatically publish your exocore as a website for no-cost.

1. Login to [Netlify.app](https://app.netlify.com/) with your Github account
2. Select ```Add new site > Import an existing project```
3. Connect again with your GitHub account, then select the GitHub repo from the list
4. The site will take about 10 minutes to build for the first time. After that, new changes will go live within one minute.
5. To change your subdomain, visit Domain settings and then Options > Edit Site Name. You can also add your own custom domain if you own one.

## 3. Saving Changes to the Cloud with Github
While you're working in VS Code, your work will be automatically saved. However, to publish the data to Github so that it propagates onto the web, you'll need to setup a git commit workflow.

If you're already familiar with git, it's the standard commit process that can be done on your terminal. If you're new to git and Github, the easiest process is [using GitHub Desktop](https://joshuadull.github.io/GitHub-Desktop/02-getting-started/index.html).

## 4. Configuring your Exocore

1. Navigate to ```/_config.yml``` to change the Title and URL of your exocore.
2. Navigate to ```/_data/user.yml``` to change your username and profile picture.
3. Navigate to ```/styles.scss``` to select between different themes.

You can also [customize Visual Studio Code heavily to your preference](), including easily changing color themes.

---

## Optional: Using Jekyll to serve your website locally
1. Install rbenv
2. Install Ruby — Need command line tools?
3. Install Bundler?
4. Jekyll serve 

---

## Using your exocore

Continue on to [[using-exocore|Using your Exocore]] to familiarize yourself with the editor interface and begin writing new notes.
