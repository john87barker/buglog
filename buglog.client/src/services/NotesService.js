import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async getNotesByBugId(id) {
    const res = await api.get(`api/bugs/${id}`)
    logger.log(res.data)
    AppState.notes = res.data
  }

  async createNote(newNote) {
    try {
      const res = await api.post('api/notes', newNote)
      logger.log(res.data)
      AppState.notes = [res.data, ...AppState.notes]
      return res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const notesService = new NotesService()
