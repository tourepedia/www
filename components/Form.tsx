import React, { useState, useMemo, useContext, useRef, useEffect } from 'react'
import { Omit } from 'utility-types'

interface IFormContext {
  values: any
  onChange: (e: any) => any
  isSubmitting: boolean
  errors: null | { message: string; errors?: { [name: string]: Array<string> } }
}

export const FormContext = React.createContext<IFormContext>(null)

interface FormProps<T>
  extends Omit<React.HTMLProps<HTMLFormElement>, 'onSubmit'> {
  initialValues: T
  onSubmit: (values: T) => Promise<any>
}
export function Form<T = any>({
  initialValues,
  onSubmit,
  children,
  ...props
}: FormProps<T>) {
  const [values, changeValue] = useState<T>(initialValues)
  const [isSubmitting, changeIsSubmitting] = useState<boolean>(false)
  const [errors, updateErrors] = useState<any>(null)
  const formContext = useMemo<IFormContext>(() => {
    return {
      values,
      onChange: (e: any) =>
        changeValue({
          ...values,
          [e.currentTarget.name]: e.currentTarget.value,
        }),
      isSubmitting,
      errors,
    }
  }, [values, errors, isSubmitting])
  return (
    <FormContext.Provider value={formContext}>
      <form
        onSubmit={e => {
          e.preventDefault()
          changeIsSubmitting(true)
          onSubmit(values)
            .then(resp => {
              changeIsSubmitting(false)
              updateErrors(null)
              return resp
            })
            .catch(error => {
              changeIsSubmitting(false)
              updateErrors(error)
              return Promise.reject(error)
            })
        }}
        {...props}
      >
        <Errors />
        {children}
      </form>
    </FormContext.Provider>
  )
}

export function Errors() {
  const { errors: error } = useContext(FormContext)
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    containerRef.current && containerRef.current.focus()
  }, [error])
  if (!error) {
    return null
  }
  const { message, errors } = error
  return (
    <div
      style={{
        color: 'red',
        outline: 'none',
      }}
      role="alert"
      aria-live="assertive"
      aria-label={message}
      tabIndex={-1}
      ref={containerRef}
    >
      <h6 style={{ fontSize: '1rem', marginBottom: '10px' }}>{message}</h6>
      {errors ? (
        <ul
          style={{ listStyle: 'circle', paddingLeft: '40px', margin: '1em 0' }}
        >
          {Object.keys(errors)
            .reduce((allE, e) => allE.concat(errors[e]), [])
            .map(e => (
              <li key={e}>{e}</li>
            ))}
        </ul>
      ) : null}
    </div>
  )
}

export function FormGroup({
  label,
  children,
  id,
}: {
  label?: React.ReactNode
  children: React.ReactNode
  id?: string
}) {
  return (
    <div className="form-group">
      <style jsx>{`
        .form-group {
          margin-bottom: 30px;
        }
        label {
          font-weight: 600;
          margin-bottom: 5px;
          display: inline-block;
          white-space: pre;
        }
      `}</style>
      <style global jsx>{`
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
      `}</style>
      {label ? <label htmlFor={id}>{label}</label> : null}
      {children}
    </div>
  )
}

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, 'label'> {
  label?: React.ReactNode
}

export function Input({ label, id, name, ...props }: InputProps) {
  id = id || name
  const { values, onChange } = useContext(FormContext)
  return (
    <FormGroup label={label} id={id}>
      <input
        type="text"
        name={name}
        id={id}
        className="input"
        {...props}
        value={values[name]}
        onChange={onChange}
      />
    </FormGroup>
  )
}

interface TextareProps
  extends Omit<React.HTMLProps<HTMLTextAreaElement>, 'label'> {
  label?: React.ReactNode
}

export function Textarea({ label, id, name, ...props }: TextareProps) {
  id = id || name
  const { values, onChange } = useContext(FormContext)
  return (
    <FormGroup label={label} id={id}>
      <style jsx>{`
        textarea {
          width: 100%;
          resize: vertical;
        }
      `}</style>
      <textarea
        name={name}
        className="input"
        id={id}
        {...props}
        value={values[name]}
        onChange={onChange}
      />
    </FormGroup>
  )
}

export function FormState(
  props: React.ComponentProps<typeof FormContext.Consumer>,
) {
  return <FormContext.Consumer {...props} />
}
