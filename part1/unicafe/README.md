# Part 1c Component state, event handlers

no exercises

# Part 1d A more complex state, debugging React apps

## Exercises 1.6.-1.14.

Submit your solutions to the exercises by first pushing your code to GitHub and then marking the completed exercises into the "my submissions" tab of the [submission application](https://studies.cs.helsinki.fi/stats/courses/fullstackopen).

Remember, submit **all** the exercises of one part **in a single submission**. Once you have submitted your solutions for one part, **you cannot submit more exercises to that part anymore**.

_Some of the exercises work on the same application. In these cases, it is sufficient to submit just the final version of the application. If you wish, you can make a commit after every finished exercise, but it is not mandatory._

In some situations you may also have to run the command below from the root of the project:

```bash
rm -rf node_modules/ && npm i
```

If and _when_ you encounter an error message

> _Objects are not valid as a React child_

keep in mind the things told [here](https://fullstackopen.com/en/part1/introduction_to_react#do-not-render-objects).

### 1.6: unicafe step 1

Like most companies, the student restaurant of the University of Helsinki [Unicafe](https://www.unicafe.fi) collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: _good_, _neutral_, and _bad_.

The application must display the total number of collected feedback for each category. Your final application could look like this:

![screenshot of feedback options](https://fullstackopen.com/static/d4fe767d6d8eb46f1dd21334f5f9e46e/5a190/13e.png)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in the material and previous exercise. File _main.jsx_ is as follows:

```js
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

You can use the code below as a starting point for the _App.jsx_ file:

```js
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```

### 1.7: unicafe step 2

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (the feedback values are: good 1, neutral 0, bad -1) and the percentage of positive feedback.

![average and percentage positive screenshot feedback](https://fullstackopen.com/static/0a5d15ae9f055a15cb469b9c9223df41/5a190/14e.png)

### 1.8: unicafe step 3

Refactor your application so that displaying the statistics is extracted into its own _Statistics_ component. The state of the application should remain in the _App_ root component.

Remember that components should not be defined inside other components:

```js
// a proper place to define a component
const Statistics = (props) => {
  // ...
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // do not define a component within another component
  const Statistics = (props) => {
    // ...
  }

  return (
    // ...
  )
}
```

### 1.9: unicafe step 4

Change your application to display statistics only once feedback has been gathered.

![no feedback given text screenshot](https://fullstackopen.com/static/b453d7533ae85dcaf3eccf342a353c58/5a190/15e.png)

### 1.10: unicafe step 5

Let's continue refactoring the application. Extract the following two components:

*   _Button_ handles the functionality of each feedback submission button.
*   _StatisticLine_ for displaying a single statistic, e.g. the average score.

To be clear: the _StatisticLine_ component always displays a single statistic, meaning that the application uses multiple components for rendering all of the statistics:

```js
const Statistics = (props) => {
  /// ...
  return(
    <div>
      <StatisticLine text="good" value ={...} />
      <StatisticLine text="neutral" value ={...} />
      <StatisticLine text="bad" value ={...} />
      // ...
    </div>
  )
}
```

The application's state should still be kept in the root _App_ component.

### 1.11\*: unicafe step 6

Display the statistics in an HTML [table](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Basics), so that your application looks roughly like this:

![screenshot of statistics table](https://fullstackopen.com/static/a74acccc17aafb02b3801ffa1fcc0fdc/5a190/16e.png)

Remember to keep your console open at all times. If you see this warning in your console:

![console warning](https://fullstackopen.com/static/d6f948307449c2673f28f1077ef4d789/5a190/17a.png)

Then perform the necessary actions to make the warning disappear. Try pasting the error message into a search engine if you get stuck.

_Typical source of an error _Unchecked runtime.lastError: Could not establish connection. Receiving end does not exist._ is from a Chrome extension. Try going to _chrome://extensions/_ and try disabling them one by one and refreshing React app page; the error should eventually disappear._

**Make sure that from now on you don't see any warnings in your console!**