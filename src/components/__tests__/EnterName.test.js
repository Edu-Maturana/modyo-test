import { describe, it, expect } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import EnterName from '@/components/EnterName.vue'

describe('EnterName component', () => {
  it('emits name-submitted event when name is submitted', async () => {
    const { getByLabelText, emitted, getAllByText } = render(EnterName)

    const input = getByLabelText('Ingresa tu nombre')
    const button = getAllByText('Comenzar a jugar')[0]

    await fireEvent.update(input, 'John Doe')
    await fireEvent.click(button)

    expect(emitted()).toHaveProperty('name-submitted')
    expect(emitted()['name-submitted'][0]).toEqual(['John Doe'])
  })

  it('enables button only when there is a non-empty name', async () => {
    const { getByLabelText, getAllByText } = render(EnterName)

    const input = getByLabelText('Ingresa tu nombre')
    const button = getAllByText('Comenzar a jugar')[0]

    expect(button.attributes.disabled).toBeUndefined()

    await fireEvent.update(input, 'John Doe')

    expect(button.attributes.disabled).toBeFalsy()
  })
})
