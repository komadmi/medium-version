# App version from package.json with React and Webpack
## Before we start
Hi guys! It's my first article ever. Moreover, I'm not a native English speaker. So, do not judge me very strictly. Just give me a chance and enjoy. 
## What is the problem
Some time ago, UX designer at my current company provided me new mockups of our application with new header. It had one new feature - label with app version. The place we store it is `package.json` file and we need somehow extract it. So, let's solve this small challenge together!
## What we have
* React application
* TypeScript
* Webpack
* Version of application is in package.json
## Solution
### Init project
First of all, lets create simple React application with TypeScript and Webpack:

    npm init -y

Add following dependencies into `package.json`:

    here should be code from package.json file

and install them:

    npm i

Create Webpack configuration - `webpack.config.js`:

    here should be code form webpack.config.js file without code for version extraction

Let's create some simple code in order to show `Hello world` in `App.tsx`:

    import React from "react";

    function App() {
        return (
            <div>Hello World!</div>
        );
    }

    export default App;

Now you can already run our application and open it in `http://localhost:8080`:

    npm run start

### Extract version

In order to extract version of our application from `package.json`, we need to add following plugin into our `webpack.config.js`:

    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version),
    }),

As you can see, this plugin takes `package.json` file as a string, converts it into JSON object and define new global variable `VERSION` as value of `version` property.

Now, we can call it in our `App.tsx` like this:

    Here should be code from App.tsx

We've done it!

## Conclusion
As a conclusion just let me provide a link to my [GitHub repository](https://github.com/komadmi/medium-version). I think, it more useful than many words. Thanks for your attention.