import axios from 'axios'

const API_ENDPOINT =
  'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20'

export const CardService = {
  async fetchAnimalImages() {
    try {
      const response = await axios.get(API_ENDPOINT)
      const animalImages = response.data.map((entry) => entry.fields.image.url)
      return animalImages
    } catch (error) {
      console.error('Error fetching animal images:', error)
      throw error
    }
  }
}
