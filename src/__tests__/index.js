import React from 'react'
import {render} from '@testing-library/react'

import Main from '../components/Main';

test('renders main component', () => {
  const utils = render(<Main />)
  const screen = utils

  // eslint-disable-next-line testing-library/no-node-access
  const mainElement = screen.container.querySelector('#main')
  expect(mainElement).toBeInTheDocument()
})

test('renders three article elements on page', () => {
  const utils = render(<Main />)
  const screen = utils

  // eslint-disable-next-line testing-library/no-node-access
  const articleElement = screen.container.querySelectorAll('article').length
  expect(articleElement).toEqual(3);
})
