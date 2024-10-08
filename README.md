# freecodecamp-solutions

## This will contain some useful information and tips

These are the solutions to all the learning paths and all the modules of freecodecamp

FreeCodeCamp is an amazing resource for aspiring web Developers it offers an amazing project based learning to all the important concepts and tools every web developer should have in their toolkit

First to start solving all the challenges freeCodeCamp does have in inbuilt IDE to help you to solve the challenges by typing in code, but I would recommend everyone starting out or just solving these challenges for learning or for any other reason to use a code editor. For this I would highly recommend Visual Studio Code

Below is a list of software and tools I would recommend to install to start your journey into Web-Dev

1. Visual Studio Code
2. Git scm(source control manager)
3. A Browser you are familiar with - any browser will work for this task so use a browser that you are compfortable with
4. Github Desktop client

and that is all that you need to start

## Instructions for installing software to get started

### 1. Visual Studio Code

> the following will contain all the steps to help new comers to install vscode

### Vscode installation for Mac OS

### Vscode installation for Windows OS

```javascript
function html(strings, ...values) {
  return String.raw({ raw: strings }, ...values);
} // use this to get the template literals html code to format as per formatting processors like prettier
```

```javascript
// another example of using html function to format template literals as raw HTML Strings is as follows
function sanitize(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function html(strings, ...values) {
  // Sanitize each interpolated value
  const sanitizedValues = values.map((value) => sanitize(String(value)));

  return strings.reduce(
    (result, str, i) => result + str + (sanitizedValues[i] || ""),
    ""
  );
}

const name = "John <script>";
const age = 25;

const result = html`<div>
  <p>Name: ${name}</p>
  <p>Age: ${age}</p>
</div>`;

console.log(result);
```

> the output for that will as look like this

```html
  <p>Name: John &lt;script&gt;</p>
  <p>Age: 25</p>
  </div>
```

just an exmaple of how prettier can be configured

```javascript
// prettier-ignore
const unformattedHtml = `<div>   Messy   HTML   </div>`;

const formattedCode = {
  key: "This will be formatted by Prettier",
};

// prettier-ignore
const messyCode = `const    x  =     5;`; // This will also be ignored

const neatCode = "This will also be formatted"; // Prettier automatically resumes formatting here
```

```js
/* prettier-ignore-start */
// Prettier will ignore the entire file
```

```js
/* prettier-ignore-end */
// this will start the prettier config to start applying for code below that comment
```

```html
<!-- prettier-ignore -->
<div>     Unformatted       HTML     </div>

<p>This will be formatted by Prettier</p>

<!-- prettier-ignore -->
<div>
   <h1> Messy Header </h1>
   <p>    Messy text </p>
</div>

<!-- prettier-ignore -->
<span>  More unformatted content </span>
```
