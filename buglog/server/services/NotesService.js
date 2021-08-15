import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotesByBugId(id) {
    const note = await dbContext.Notes.findById(id).populate('creator', 'name picture')
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
