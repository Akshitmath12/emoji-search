"import React from 'react';\nimport { render, fireEvent } from '@testing-library/react';\nimport SearchInput from './SearchInput';\n\ndescribe('SearchInput', () => {\n  let props;\n  let component;\n\n  beforeEach(() => {\n    props = {\n      textChange: jest.fn(),\n    };\n\n    const { getByTestId } = render(<SearchInput {...props} />);\n    component = getByTestId('component-search-input');\n  });\n\n  test('renders without crashing', () => {\n    expect(component).toBeTruthy();\n  });\n\n  test('calls textChange prop on input change', () => {\n    const input = component.querySelector('input');\n    const testValue = 'test';\n\n    fireEvent.change(input, { target: { value: testValue } });\n\n    expect(props.textChange).toHaveBeenCalled();\n    expect(props.textChange).toHaveBeenCalledWith(testValue);\n  });\n});\n"