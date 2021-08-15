import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getAllBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async createBug(newBug) {
    try {
      // debugger
      const res = await api.post('api/bugs', newBug)
      logger.log(res.data)
      // console.log('creating bugs in the service')
      AppState.bugs = [...AppState.bugs, res.data]
      return res.data
    } catch (error) {
      logger.log(error)
    }
  }
}

export const bugsService = new BugsService()
