function container(content) {
  return `<div class="container">${content}</div>
  <style>
  .container {
    max-width: 970px;
    padding: 0 20px;
    margin: 0 auto;
  }
  </style>`
}

function row(content) {
  return `<div class="row">${content}</div>
  <style>
  .row {
    display: flex;
    margin: 0 -15px;
    flex-wrap: wrap;
  }
  </style>`
}

function col(content) {
  return `<div class="col">${content}</div>
  <style>
  .col {
    padding: 0 15px;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
    position: relative;
  }
  </style>`
}

module.exports = {
  container,
  row,
  col,
}
