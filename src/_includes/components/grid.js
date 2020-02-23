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

function rowStyles() {
  return `<style>
  .row {
    display: flex;
    margin: 0 -15px;
    flex-wrap: wrap;
  }
  .col {
    padding: 0 15px;
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    width: 100%;
    position: relative;
  }
  </style>`
}

function row(content) {
  return `<div class="row">${content}</div>`
}

function col(content) {
  return `<div class="col">${content}</div>`
}

module.exports = {
  container,
  row,
  col,
  rowStyles,
}
