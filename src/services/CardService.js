import axios from 'axios'

const API_ENDPOINT =
  'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=4'

export const CardService = {
  async getAnimalImages() {
    try {
      const response = await axios.get(API_ENDPOINT)
      const animalImages = response.data.entries.map((entry) => entry.fields.image.url)
      return animalImages
    } catch (error) {
      console.error('Error getting animal images:', error)
      throw error
    }
  },

  shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[cards[i], cards[j]] = [cards[j], cards[i]]
    }
    return cards
  },

  createCardPairs(animalImages) {
    const cards = animalImages.flatMap((image, index) => [
      { id: 2 * index, image, isFlipped: false, isMatched: false },
      { id: 2 * index + 1, image, isFlipped: false, isMatched: false }
    ])

    return cards
  }
}
