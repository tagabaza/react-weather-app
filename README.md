# React Weather Application

<h1 align="center"> React Weather Application </h1>

<p align="center">  
A web application that uses the MetaWeather API to gather and display weather related information for a location that is entered by a user. Displays current day max & min temp, humidity, predictability as well as the predicted weather the next 5 days in that same location. 
</p>

<div>
  <img src="./src/images/screenshot.png"/>
</div>

### Built with

- HTML5, CSS, JAVASCRIPT
- [React](https://reactjs.org/) - JS library
- MetaWeather API
- ASYNC/AWAIT
- AXIOS
- MOMENTJS

### What I learned

This was the first project I've built that consumes an external API so I got to grips with a lot of new concepts as a result. I used the library Axios to get support for requests/responses and the conversion of data into JSON format. Axios is also promise-based which allowed me to make good use of async and await for more readable asynchronous code.

```js
    const getWoeid = async (location) => {
            const {data} = await axios(`${REQUEST_URL}/search`, { params: { query: location }});
```

I also got to make good use of the special propTypes property to make sure the data that I am recieving is valid. I was able to check the type of particular responses and in some instances make the response type required before moving on.

```js
CurrentDay.propTypes = {
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
};
```

## Get started

From your command line, first clone this repo:

```bash
# Clone this repository
$ git clone https://github.com/tagabaza/reading-list-app

# Go into the repository
$ cd reading-list-app

# Remove current origin repository
$ git remote remove origin
```

Then you can install the dependencies using NPM:

Using NPM:

```bash
# Install dependencies
$ npm install
```
