# TransferRoom Testing.
A repository for TransferRoom design playground, a formum to test new ideas. Features and functionality that can't be achieved with standard prototyping applications in 2024.

This is the working application for the Kindex website. It's built using Node, Express, MongoDB, Gulp. There is currently no TDD on this project. 

The purpose of this application is to allow our internal users to test new ideas and features.

The architecture and dependancies for this app are as follows:

* Node
* Express
* MongoDB
* Gulp
* Sass

If you're not familiar with any of the above, you'll need to do some googling. 

The applications and 3rd party services used are:

* Heroku
* Github

Again, familiarise yourself with the above before continuing. If you run into trouble with the install you'll need to have an understanding as to what each tool does.

## Install Dependancies & Software

[Node.js](https://nodejs.org/en/download/)

This set's up Node on your machine, and also gives you the Node Package Manager or 'npm' command line. Download the installer and run it. As a mac user you may need extra bits like Xcode - it should run through it with you.

[MongoDB](https://docs.mongodb.com/manual/installation/)

Get yourself familiar with MongoDB and it's command lines. This project will automatically install a DB for you, but you'll need to ensure that it's running locally by typing: 

```
$ mongod
```

in your terminal. It will also install the cli 'mongo'. You can use this to traverse your locally installed databases. I've recently install mongoDB Compass. This is proving to be a nice GUI for doing just that.

[Gulp.js](https://gulpjs.org/)

```
$ npm install --global gulp-cli
```

[Sass](https://sass-lang.com/install)

You'll need to install Sass globally. When you run gulp, sass conversion is done automagically. You may want to be able to run the Sass cli and convert files manually.  

## Running the project.

> This project relies on environment variables to hide senstive information needed to connect to various tooling. You'll need to create a '.env' file on the root of the folder, and email jay.hughes@kindredgroup.com for further information. You won't be able to run the project without it. 

OK, hopefully the above should have you ready to roll. You need to open your terminal and cd into the cloned directory. You then need to run:

```
$ npm i
```

This will install all of the dependencies.

```
$ gulp
```

This will start gulp and run a local server instance.
