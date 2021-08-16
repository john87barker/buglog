import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
    // .get('', this.getAll)

      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getNotesByBugId)
      .post('', this.create)
      .put('/:id', this.edit)
  }

  async getNotesByBugId(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const notes = await notesService.getNotesByBugId(req.params.id)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const note = await notesService.create(req.body)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      delete req.body.closed
      req.body.creatorId = req.userInfo.id
      req.body.id = req.params.id
      const note = await notesService.edit(req.body)
      res.send(note)
    } catch (error) {
      next(error)
    }
  }
}
