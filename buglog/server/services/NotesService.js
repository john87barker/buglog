import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async destroy(id, userId) {
    const deleted = await dbContext.Notes.findOneAndDelete({ _id: id, creatorId: userId })
    if (!deleted) {
      throw new BadRequest('note not deleted')
    }
    return deleted
  }

  async getNotesByBugId(id) {
    const note = await dbContext.Notes.find({ bugId: id }).populate('creator', 'name picture')
    if (!note) {
      throw new BadRequest('invalid id')
    }

    return note
  }

  async edit(body) {
    const note = await dbContext.Notes.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return note
  }

  async create(body) {
    const note = await dbContext.Notes.create(body)
    return await dbContext.Notes.findById(note._id).populate('creator', 'name picture')
  }
}

export const notesService = new NotesService()
