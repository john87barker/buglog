import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class BugsService {
  async destroy(id, userId) {
    const bug = await dbContext.Bugs.findOneAndUpdate({ _id: id, creatorId: userId }, { Closed: true })
    if (!bug) {
      throw new BadRequest('invalid id')
    }
    return bug
  }

  async edit(body) {
    const bug = await dbContext.Bugs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return bug
  }

  async getBugById(id) {
    const bug = await dbContext.Bugs.findById(id).populate('creator', 'name picture')
    if (!bug) {
      throw new BadRequest('invalid id')
    }

    return bug
  }

  async getAllBugs() {
    const bugs = await dbContext.Bugs.find().populate('creator', 'name picture')
    return bugs
  }

  async create(body) {
    const bug = await dbContext.Bugs.create(body)
    return await dbContext.Bugs.findById(bug._id).populate('creator', 'name picture')
  }
}

export const bugsService = new BugsService()
