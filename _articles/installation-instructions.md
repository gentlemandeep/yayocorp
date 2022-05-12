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
6. Accept the prompts to trust the folder, and install the recommended extensions. Your Exocore is now ready to be edited locally.

## 2. Publishing Your Exocore to the Web with Netlify
Netlify is a platform that provides free hosting and subdomain services directly from Github repos, so it can be used to automatically publish your exocore as a website for no-cost.

1. Login to [Netlify.app](https://app.netlify.com/) with your Github account
2. Connect it to your Newly forked repo
3. The site will take about 10 minutes to build for the first time. After that, new changes will go live within one minute.
3. To change your subdomain, visit Domain settings and then Options > Edit Site Name. You can also add your own custom domain if you own one.

## 3. Saving Changes to the Cloud with Github
While you're working in VS Code, your work will be automatically saved. However, to publish the data to Github so that it propogates onto the web, you'll need to setup a git commit workflow.

---

## Optional: Using Jekyll to serve your website locally
1. Install rbenv
2. Install Ruby — Need command line tools?
3. Install Bundler?
4. Jekyll serve 