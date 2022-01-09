import { render, userEvent } from '../testing'
import { describe, it, expect } from 'vitest'
import { Input } from './Input'

describe('Input', async () => {
  it('should render the input', () => {
    const component = render(
      <Input
        name='email'
        type='email'
        error={undefined}
        placeholder='Email'
        label='Email Address'
        aria-label='Email Address'
      />,
    )

    expect(component.getByText('Email Address')).not.toBeNull()
    expect(
      component.getByRole('textbox', {
        name: /email address/i,
      }),
    ).not.toBeNull()
  })

  it('should change input value', () => {
    const component = render(
      <Input
        name='email'
        type='email'
        error={undefined}
        placeholder='Email'
        label='Email Address'
        aria-label='Email Address'
      />,
    )

    const input = component.getByRole('textbox', {
      name: /email address/i,
    })
    expect(input).not.toBeNull()
    userEvent.type(input, '1337')
    expect((input as HTMLInputElement).value).toBe('1337')
  })

  it('should render the input with error', () => {
    const component = render(
      <Input
        name='email'
        type='email'
        error={'Please enter your email'}
        placeholder='Email'
        label='Email Address'
        aria-label='Email Address'
      />,
    )

    expect(
      component.getByRole('textbox', {
        name: /email address/i,
      }),
    ).not.toBeNull()
    expect(component.getByRole('alert').textContent).toBe(
      'Please enter your email',
    )
  })
})
