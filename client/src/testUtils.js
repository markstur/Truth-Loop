// testUtils.js
import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {IntlProvider} from 'react-intl'

function render(ui, {locale = 'en', ...renderOptions} = {}) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({children}) {
    return <IntlProvider locale={locale}>{children}</IntlProvider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {render}