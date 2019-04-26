import React from 'react'
import { css, Global } from '@emotion/core'

const global = css`
  html,
  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
    background: #4d8fac;
    color: #fff;
    width: 100%;
  }
`

export default () => <Global styles={global} />
