import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}

h1 {
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
pre {
  font-family: monospace, monospace;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

b,
strong {
  font-weight: bolder;
}


code,
kbd,
samp {
  font-family: monospace, monospace;
  font-size: 1em; * 2 *
}
small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}
img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}


legend {
  box-sizing: border-box; * 1 *
  color: inherit; * 2 *
  display: table; * 1 *
  max-width: 100%; * 1 *
  padding: 0; * 3 *
  white-space: normal; * 1 *
}

progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}

[type='checkbox'],
[type='radio'] {
  box-sizing: border-box; * 1 *
  padding: 0; * 2 *
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
  height: auto;
}

[type='search'] {
  -webkit-appearance: textfield; * 1 *
  outline-offset: -2px; * 2 *
}

[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; * 1 *
  font: inherit; * 2 *
}

details {
  display: block;
}

summary {
  display: list-item;
}


template {
  display: none;
}
[hidden] {
  display: none;
}
html {
  font-size: 16px;
  height: 100%;
  background: ${props => props.theme.brand}
}

@media all and (max-width: 959px) and (min-width: 600px) {
  html {
    font-size: 15px;
  }
}

@media all and (max-width: 599px) and (min-width: 319px) {
  html {
    font-size: 14px;
  }
}
@media all and (max-width: 320px) {
  html {
    font-size: 12px;
  }
}

body {
  font-family: 'Nunito', sans-serif;
  line-height: 1.6;
  background: white;
  color: rgba(0, 0, 0, 0.84);
  font-weight: 400;
  padding-bottom: 1px;
}

body {
  margin: 0;
  box-sizing: border-box;
  min-height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6,
b,
strong {
  font-weight: 600;
}
h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.6em;
}

h3 {
  font-size: 1.3em;
  line-height: 1.618em;
}

p {
  font-size: 1em;
  line-height: 1.618em;
  margin-top: 0;
  margin-bottom: 16px;
  margin-top: 0;
  margin-bottom: 16px;
}

address {
  line-height: 1.618em;
}

code {
  margin: 0;
  font-size: 85%;
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  color: inherit;
}

:not(pre) > code {
  padding: 0.2em 0.4em;
}

body :not(pre) > code[class*='language-'] {
  padding: 0.2em 0.4em;
}
code + code {
  margin-left: 5px;
}

hr {
  margin: 20px 0;
  border: 1px solid #eaecef;
}

pre {
  padding: 16px;
  overflow: auto;
  font-size: 85%;
  line-height: 1.45;
  background-color: #f6f8fa;
  border-radius: 3px;
}

article {
  padding: 20px 5%;
}

a {
  color: ${props => props.theme.brand}
  text-decoration: none;
  transition: color linear 0.25s, backg linear 0.25s;
}
a:hover {
  text-decoration: underline;
  color: ${props => props.theme.brand}
}

hr {
  border: none;
  border-bottom: 1px solid #eaecef;
}

nav:after {
  content: '';
  display: table;
  clear: both;
}

nav ul {
  display: inline-block;
  list-style: none;
  margin: 0;
  padding: 0;
}
nav h1,
nav h2 {
  margin: 0;
  font-size: 1em;
}
nav > a,
nav ul > li,
nav ul > li > a,
nav h1,
nav h2 {
  display: inline-block;
}

nav > a,
nav h1,
nav h2,
nav ul > li > a {
  padding: 8px 12px;
}

nav h1 + ul,
nav h2 + ul {
  float: right;
}

nav a:hover {
  text-decoration: none;
  background: whitesmoke;
}

li > h1:first-child,
li > h2:first-child,
li > h3:first-child {
  margin-top: 0;
  margin-bottom: 0.2em;
}
dt {
  font-weight: bold;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 0.9rem;
}

.d--flex {
  display: flex;
}
.justify-content--between {
  justify-content: space-between;
}
.align-items--center {
  align-items: center;
}
.text--uppercase {
  text-transform: uppercase;
}
.vertical-align--middle {
  vertical-align: middle;
}
`
