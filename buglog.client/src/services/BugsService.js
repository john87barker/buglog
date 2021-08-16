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
  }

  async getNotesByBugId(id) {
    const res = await api.get(`api/bugs/${id}/notes`)
    logger.log(res.data)
    AppState.notes = res.data
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

  async editBug() {
    await api.put('api/bugs/:id')
    // add more obviously
  }

  async destoryBug() {
    await api.delete('api/bugs/:id')
    // don't delete just change it up...need help here
  }
}

export const bugsService = new BugsService()
