# Part 2e Adding styles to React app

## Exercises 2.18.-2.20.

### 2.18\* Data for countries, step 1

At [https://studies.cs.helsinki.fi/restcountries/](https://studies.cs.helsinki.fi/restcountries/) you can find a service that offers a lot of information related to different countries in a so-called machine-readable format via the REST API. Make an application that allows you to view information from different countries.

The user interface is very simple. The country to be shown is found by typing a search query into the search field.

If there are too many (over 10) countries that match the query, then the user is prompted to make their query more specific:

![too many matches screenshot](https://fullstackopen.com/static/803f67f920205fa07c8a4fba1bee3f6c/5a190/19b1.png)

If there are ten or fewer countries, but more than one, then all countries matching the query are shown:

![matching countries in a list screenshot](https://fullstackopen.com/static/747155703f07b7380f832315bdf74203/5a190/19b2.png)

When there is only one country matching the query, then the basic data of the country (eg. capital and area), its flag and the languages spoken are shown:

![flag and additional attributes screenshot](https://fullstackopen.com/static/1a6a879d9fc09281966cd23fea476557/5a190/19c3.png)

**NB**: It is enough that your application works for most countries. Some countries, like _Sudan_, can be hard to support since the name of the country is part of the name of another country, _South Sudan_. You don't need to worry about these edge cases.

### 2.19\*: Data for countries, step 2

**There is still a lot to do in this part, so don't get stuck on this exercise!**

Improve on the application in the previous exercise, such that when the names of multiple countries are shown on the page there is a button next to the name of the country, which when pressed shows the view for that country:

![attach show buttons for each country feature](https://fullstackopen.com/static/16082d868d0fd6c92226f9bb6c18a40a/5a190/19b4.png)

In this exercise, it is also enough that your application works for most countries. Countries whose name appears in the name of another country, like _Sudan_, can be ignored.

### 2.20\*: Data for countries, step 3

Add to the view showing the data of a single country, the weather report for the capital of that country. There are dozens of providers for weather data. One suggested API is [https://openweathermap.org](https://openweathermap.org). Note that it might take some minutes until a generated API key is valid.

![weather report added feature](https://fullstackopen.com/static/dd60431bb19bb4e148ae621e3dedcceb/5a190/19x.png)

If you use Open weather map, [here](https://openweathermap.org/weather-conditions#Icon-list) is the description for how to get weather icons.

**NB:** In some browsers (such as Firefox) the chosen API might send an error response, which indicates that HTTPS encryption is not supported, although the request URL starts with _http://_. This issue can be fixed by completing the exercise using Chrome.

**NB:** You need an api-key to use almost every weather service. Do not save the api-key to source control! Nor hardcode the api-key to your source code. Instead use an [environment variable](https://vitejs.dev/guide/env-and-mode.html) to save the key in this exercise. In real-life applications, it's considered insecure sending these keys directly from the browser, as anyone who can open the dev console would be able to intercept your keys! We will focus on implementing a separate backend in the next part of the course.

Assuming the api-key is _54l41n3n4v41m34rv0_, when the application is started like so:

```bash
export VITE_SOME_KEY=54l41n3n4v41m34rv0 && npm run dev // For Linux/macOS Bash
($env:VITE_SOME_KEY="54l41n3n4v41m34rv0") -and (npm run dev) // For Windows PowerShell
set "VITE_SOME_KEY=54l41n3n4v41m34rv0" && npm run dev // For Windows cmd.exe
```

you can access the value of the key from the _import.meta.env_ object:

```js
const api_key = import.meta.env.VITE_SOME_KEY
// variable api_key now has the value set in startup
```

**NB:** To prevent accidentally leaking environment variables to the client, only variables prefixed with VITE\_ are exposed to Vite.

Also remember that if you make changes to environment variables, you need to restart the development server for the changes to take effect.

This was the last exercise of this part of the course. It's time to push your code to GitHub and mark all of your finished exercises to the [exercise submission system](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).
