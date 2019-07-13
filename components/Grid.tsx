import React from 'react'
import classNames from 'classnames'

export function Container({
  children,
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      style={{
        maxWidth: '970px',
        padding: '0 20px',
        margin: '0 auto',
      }}
      className={classNames('container', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function Grid({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={classNames('row', className)} {...props}>
      <style jsx>{`
        .row {
          display: flex;
          margin: 0 -15px;
          flex-wrap: wrap;
        }
      `}</style>
      {children}
    </div>
  )
}

export function Col({
  className,
  children,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={classNames('col', className)} {...props}>
      <style key="col" jsx>{`
        .col {
          padding: 0 15px;
          flex-basis: 0;
          -ms-flex-positive: 1;
          flex-grow: 1;
          max-width: 100%;
          width: 100%;
          position: relative;
        }
      `}</style>
      {children}
    </div>
  )
}
