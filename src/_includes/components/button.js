const theme = require('./../../_data/theme.json')
const { spreadProps } = require('./utils')

const buttonStyles = `<style>
  .btn {
      padding: 12px 30px;
      border-radius: 5px;
      border: 2px solid ${theme.primary};
      background: ${theme.primary};
      color: white;
      text-decoration: none;
      display: inline-block;
      font-weight: 700;
      letter-spacing: 2px;
      font-size: 1.25rem;
      cursor: pointer;
      text-align: center;
      vertical-align: top;
      user-select: none;
      line-height: 1.5;
      transition: color 0.15s ease-in-out,
        background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    }
    .btn:not(:disabled):hover {
      background: ${theme.primary};
      color: white;
    }
    .btn:focus {
      outline: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) inset,
        0 0 0 3px rgba(66, 153, 225, 0.5);
    }
  </style>`

function button({ as = 'button', label = '', ...props } = {}) {
  return `<${as} class="btn" ${spreadProps(
    props,
  )}>${label}</${as}>${buttonStyles}`
}

module.exports = button
