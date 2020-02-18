const { spreadProps } = require('./utils')

function formStyles() {
  return `<style>
      .form-group {
        margin-bottom: 30px;
      }
      label {
        font-weight: 600;
        margin-bottom: 5px;
        display: inline-block;
        white-space: pre;
      }
      .input {
        display: block;
        padding: 7px 15px;
        border-radius: 5px;
        background: #fffcfb;
        border: 1px solid #e3e3e3;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) inset;
        font-size: 1.25rem;
      }
      .input:focus {
        outline: none;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05) inset,
          0 0 0 3px rgba(66, 153, 225, 0.5);
      }
      textarea.input {
        width: 100%;
        resize: vertical;
      }
    </style>`
}

function formGroup(content, props = {}) {
  return `
    <div class="form-group">
      ${
        props.label ? `<label htmlFor="${props.id}">${props.label}</label>` : ''
      }
      ${content}
    </div>
  `
}
function input({ label, id, name, type = 'text', as = 'input', ...props }) {
  id = id || name
  return formGroup(
    `<${as} class="input" type="${type}" name="${name}" ${spreadProps(
      props,
    )}></${as}>`,
    {
      label,
      id,
    },
  )
}

function textarea(props) {
  return input({ ...props, as: 'textarea' })
}

module.exports = {
  formStyles,
  formGroup,
  input,
  textarea,
}
