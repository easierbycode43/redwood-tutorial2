import { render } from '@redwoodjs/testing/web'

import Comment from './Comment'

describe('Comment', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Comment />)
    }).not.toThrow()
  })
})
