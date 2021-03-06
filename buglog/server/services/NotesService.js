import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getNotesByBugId(id) {
    const note = await dbContext.Notes.find({ bugId: id }).populate('creator', 'name picture')
    if (!note) {
      throw new BadRequest('invalid id')
    }

    return note
  }

  async edit(body) {
    // Was going to add the user only edit stuff but we don't edit these on this.
    const note = await dbContext.Notes.findByIdAndUpdate(body.id, body, { new: true, runValidators: true }).populate('creator', 'name picture')
    return note
  }

  async create(body) {
    const note = await dbContext.Notes.create(body)
    return await dbContext.Notes.findById(note._id).populate('creator', 'name picture')
  }

  async destroy(id, userId) {
    const note = await dbContext.Notes.findById(id)
    if (note.creatorId !== userId) {
      throw new BadRequest('not your note')
    }
    const deleted = await dbContext.Notes.findByIdAndDelete(id)
    return deleted
  }
}

export const notesService = new NotesService()
