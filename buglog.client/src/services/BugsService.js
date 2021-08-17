import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAllBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async getBugById(id) {
    const res = await api.get(`api/bugs/${id}`)
    AppState.activeBug = res.data
    // console.log(res.data)
  }

  async getNotesByBugId(id) {
    const res = await api.get(`api/bugs/${id}/notes`)
    logger.log(res.data)
    AppState.notes = res.data
    console.log(res.data)
  }

  async createBug(newBug) {
    try {
      // debugger
      const res = await api.post('api/bugs', newBug)
      logger.log(res.data)
      // console.log('creating bugs in the service')
      AppState.bugs = [res.data, ...AppState.bugs]
      return res.data
    } catch (error) {
      logger.log(error)
    }
  }

  async editBug(id, editedBug) {
    // debugger
    const res = await api.put('api/bugs/' + id, editedBug)
    // console.log(res.data)
    AppState.bugs = res.data
    return res.data
  }

  async destroyBug(id) {
    await api.delete('api/bugs/' + id)
    const allBugs = AppState.bugs
    AppState.bugs = allBugs.filter(b => b.id !== id)
  }
}

export const bugsService = new BugsService()
