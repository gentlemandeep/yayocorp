---
layout: article
category: article
subtitle:
topic:
date: 2022-05-08
tags: 
---

# Exocore Installation Instructions

You can set up a personal website as a [[public exocortex]] with no code or installations with this 5 minute guide, using entirely free services to host your site on the web. 

All pages are converted from simple, non-code [[Markdown]] syntax, so you can focus purely on writing. The end result will look identical to this page.

## Background

Github will be used as a cloud content management system - it's convenient to upload updates to, accessible and editable from anywhere, and keeps full version history of changes as well as provides easy options for back-up.

Netlify will be used to deploy the files stored on Github as a web-server - it's fast and automatically updates whenever an update is made on your Github repository. Github does offer its own static webhost, but Netlify is necessary due to certain plugin support limitations. 

Netlify will also provide your site a custom subdomain, e.g. `[site-name].netlify.app`. You can also use your own purchased domain.

All services are entirely free besides the custom domain.

## 1. Deploy your own Exocore to the Web

### Create Github Account

First, create an account on [github.com](https://github.com/join) if you do not already have one. Remember to [make your email private](https://saraford.net/2017/02/19/how-to-hide-your-email-address-in-your-git-commits-but-still-get-contributions-to-show-up-on-your-github-profile-050/) in settings.

Continue below when you have an account ready.

### Install the Exocore template to GitHub and Netlify

Open our [One-click installation](https://app.netlify.com/start/deploy?repository=https://github.com/remiliacorp/exocore).

Steps:
1. Select `Connect to Github`
2. Login to Github and select `Authorize Application`
3. Name your repository - this is your own reference
4. Select `Deploy site`

Netlify will now take about 5 minutes for the initial build of the site. If you want, you can watch the status of the build by clicking ``Production: master@HEAD`` under **Production Deploys**.

Once it's complete, the Production status will change to **Published**, and you will be able to click the `[site-name].netlify.app` link to see your site.

The site's master files will also appear in your Github account, under the repository name you selected, e.g. `github.com/account-name/repository-name`. Changes here will go live on the site automatically.

Your site is now officially live, available for anyone to view at `[site-name].netlify.app.`, but there are some settings we should adjust before moving forward.

### Change your site name

Change the default generated site name to whatever you'd like by navigating to `Site settings > Site details > Change site name`. It will be available at `[sitename].netlify.app`

## Optional: Custom Domain

Custom domains can be added for a better look and more memorable url, but you will need to purchase one. If you already have a domain, follow the steps in [Configuring a Domain Purchased Elsewhere](#configuring-a-domain-purchased-elsewhere) 

### Purchase Domain on Netlify

If you do not already have a domain, you can purchase it directly within Netlify by adding in a new Custom domain. Prices aren't the best on the market (e.g. `.com` is $15/yr, market rate is $12/yr), but it will automate all setup.

1. Navigate to Settings > Domain Management > Add custom domain.
2. Enter the domain you would like
3. If it is unavailable, you will see `[domain] already has an owner. Is it you?`. Select `No, try another`.
4. If you find one that is available, you will be provided prices and option to register. You can use a [Domain search tool](https://domains.google.com/registrar/search) to help find available domains.

Once you have a domain purchased, Netlify will automate handling DNS configuration and SSL encryption, so your site will be fully ready to go on your domain.

### Purchasing a Custom Domain
 
Domains can be purchased from a variety of suppliers for affordable rates - a `.com` domain goes for about $12/year, though uncommon domains like `.xyz` can be found for as low as $2/year.

I can recommend [Google Domains](https://google.com/domains), I use it because it includes privacy protection and custom email aliases for free, and has an easy to navigate dashboard, as well as Google's very fast DNS. 

For uncommon domains and more competitive prices, [Namecheap](https://namecheap.com) is reliable - it also has a solid "Beast mode" search for finding rare domains.

#### Configuring a Domain Purchased Elsewhere

If you purchase your domain elsewhere, you will need to configure your domain provider to point the domain to your Netlify site. Follow this guide: [Configure external DNS for a custom domain](https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/). 

The steps on your domain provider's end will be different depending on your provider, look for something along the lines of "Create A or CNAME Record", "Point DNS to Domain" or "Manage DNS Records".

Then add the custom domain in Netlify:
1. Navigate to Settings > Domain Management > Add custom domain.
2. Enter the domain you would like `[domain] already has an owner. Is it you?`. Select `No, try another`.
3. If you find one that is available, you will see 
3. Select Yes, add domain

SSL (https) will be configured automatically.

## 2. Setting up Exocore on your Machine
The exocore exists as both a Visual Studio Code template package and a workflow between Github and Netlify. 

1. Download [Visual Studio Code](https://code.visualstudio.com/Download)
2. Download the forked repo to your computer by navigating to your github account's exocore repo, then selectiong `Code > Download Zip`
4. Open your newly forked repository in VS Code with File > Open, and navigating to the downloaded folder
5. Accept the prompts to trust the folder, and install the recommended extensions. Your Exocore is now ready to be edited locally on VS Code.

## 3. Saving Changes to the Cloud with Github
While you're working in VS Code, your work will be automatically saved. However, to publish the data to Github so that it propagates onto the web, you'll need to setup a git commit workflow.

If you're already familiar with git, it's the standard commit process that can be done on your terminal. If you're new to git and Github, the easiest process is [using GitHub Desktop](https://joshuadull.github.io/GitHub-Desktop/02-getting-started/index.html).

## 4. Configuring your Exocore

1. Navigate to ```/_config.yml``` to change the Title and URL of your exocore.
2. Navigate to ```/_data/user.yml``` to change your username and profile picture.
3. Navigate to ```/styles.scss``` to select between different themes.

You can also [customize Visual Studio Code heavily to your preference](), including easily changing color themes.

## 5. Using your Exocore

Continue on to [[using-exocore|Using your Exocore]] to familiarize yourself with the editor interface and begin writing new notes.
