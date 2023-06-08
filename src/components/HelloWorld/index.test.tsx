/**
 * Testing file for the HelloWorld component.
 */
import { render, screen } from '@testing-library/react'
import HelloWorld from './HelloWorld'

test('Render HelloWorld Component', () => {
  render(<HelloWorld />)
  const element = screen.getByText(/hello-world/i)
  expect(element).toBeInTheDocument()
})