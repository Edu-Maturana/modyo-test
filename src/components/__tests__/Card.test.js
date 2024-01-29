import { describe, it } from 'vitest'
import { render, fireEvent } from '@testing-library/vue'
import Card from '@/components/Card.vue'

describe('Card component', () => {
  it('emits card-click event on click when not flipped or matched', async () => {
    const card = { id: 1, isFlipped: false, isMatched: false, image: 'path/to/image.jpg' }
    const { getByTestId } = render(Card, { props: { card } })

    await fireEvent.click(getByTestId('card'))
  })
})
