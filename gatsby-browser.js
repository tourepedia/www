/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
//
if (process.env.NODE_ENV === 'production') {
  ;(function(root) {
    'use strict'
    let h = root ? root.location.hostname : '',
      p = root ? root.location.protocol : ''
    if ('http:' === p && !/^(localhost|127.0.0.1)/.test(h)) {
      root.location.protocol = 'https:'
    }
  })('undefined' !== typeof window ? window : this)
}
