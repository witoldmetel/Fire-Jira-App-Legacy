# Fire Jira (Deprecated)

App won't be maintained and improve anymore. I prepared a new version of this app. Let's check it: https://github.com/witoldmetel/Fire-Jira-App

## App Info

Fire Jira is an app that has essentially the core Jira's functionality. A project created to increase programming skills, implement new features, problem solving and manage the project.

## Demo Page

https://fire-jira.firebaseapp.com/

Login: joedoe@firejira.com  
Pass: firejira

## Prerequisites

#### Env file

To build or run the project locally add .env file to root directory:

```
FIREBASE_API_KEY: <YOUR_API_KEY>,
FIREBASE_AUTH_DOMAIN: <YOUR_AUTH_DOMAIN>,
FIREBASE_DATABASE_URL: <YOUR_DATABASE_URL>,
FIREBASE_PROJECT_ID: <YOUR_PROJECT_ID>,
FIREBASE_STORE_BUCKET: <YOUR_STORE_BUCKET>,
FIREBASE_MESSAGING_SANDER_ID: <YOUR_MESSAGING_SANDER_ID>,
FIREBASE_APP_ID: <YOUR_APP_ID>,
FIREBASE_MEASUREMENT_ID: <YOUR_MEASUREMENT_ID>
```

Where values in the brackets should be replaced by described data.

You can take this configuration from `https://firebase.google.com/`

### Why I use firebase?

Firebase is back-end as service which mean that it allows us to do serveless computing. We don't have to set up our own server to build apps or websites.

- Cloud Functions for Firebase (It allows us to write and run server-side on firebase and that code can interact with other firebase services like database or authentication etc. Code wrote by us is packaged into function and deployed to firebase. Each function can do something different. In my app, I use it to set notifications. Firebase cloud functions are run on node.js environment (Node 8.0 - free version but depracated))

## Deployment

For deployment application, I used `firebase hosting` along with `github actions`. I prepared simple workflow YAML script for Node.js. For trigger that script, user have to push some changes to master branch.

**IMPORTANT NOTE**

Script worked only for WSL/ Ubuntu system

Reference: https://stackoverflow.com/questions/58362374/github-actions-how-to-run-services-on-windows-or-macos

## Storybook

I've started to write interactive documentation in `Storybook`. It isn't hosted yet so if you want to check it, you have to type the command:

```
yarn storybook
```
