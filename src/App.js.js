"import React from 'react';\nimport { render, fireEvent, cleanup } from '@testing-library/react';\nimport App from '../App';\nimport filterEmoji from '../filterEmoji';\n\nafterEach(cleanup);\n\ndescribe('App', () => {\n  test('renders App component', () => {\n    const { getByTestId } = render(<App />);\n    expect(getByTestId('app')).toBeInTheDocument();\n  });\n\n  test('renders Header component', () => {\n    const { getByTestId } = render(<App />);\n    expect(getByTestId('header')).toBeInTheDocument();\n  });\n\n  test('renders SearchInput component', () => {\n    const { getByTestId } = render(<App />);\n    expect(getByTestId('search-input')).toBeInTheDocument();\n  });\n\n  test('renders EmojiResults component', () => {\n    const { getByTestId } = render(<App />);\n    expect(getByTestId('emoji-results')).toBeInTheDocument();\n  });\n\n  test('filters emoji list based on search input', () => {\n    const { getByTestId } = render(<App />);\n    const input = getByTestId('search-input');\n    \n    fireEvent.change(input, { target: { value: 'smile' } });\n    \n    const filteredEmoji = filterEmoji('smile', 20);\n    \n    expect(getByTestId('emoji-results').textContent).toContain(filteredEmoji[0].title);\n  });\n\n});\n"