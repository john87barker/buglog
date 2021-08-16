import { dbContext } from '../db/DbContext'
import { BadRequest, Forbidden } from '../utils/Errors'
class BugsService {
  async destroy(id, body, userId) {
    // find stuff
    const bug = await dbContext.Bugs.findById(id)
    // if it is closed already, if it is closed 'you can't do that' what property to change update the one that we found
    if (bug.creatorId.toString() !== userId) {
      throw new BadRequest('Not allowed to change!')
    } else if (bug.closed === true) {
      throw new BadRequest('Already closed, can\'t reopen')
    } else {
      bug.closed = true
      const after = await dbContext.Bugs.findOneAndUpdate({ _id: bug.id, creatorId: userId }, bug, { new: true, runValidators: true })
      return after
    }
  }

  async edit(id, body) {
    const bug = await dbContext.Bugs.findById(id)
    if (bug.closed === true) {
      return await dbContext.Bugs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    } else {
      throw new BadRequest('do it stupid')
    }
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
