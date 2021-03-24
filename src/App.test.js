import { render } from '@testing-library/react'
import App from './App'

test('testing app component', () => {
  const { getByText } = render(<App />)
  const element = getByText(/Hello World/)
  expect(element).toBeInTheDocument();
})


test('testing app component', () => {
  const { getByText } = render(<App />)
  const element = getByText(/Hello Sir/)
  expect(element).toBeInTheDocument();
})