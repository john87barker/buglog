import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const Note = new Schema(
  {

    body: { type: String, required: true },
    bugId: { type: Schema.Types.ObjectId, ref: 'Bug', required: true },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
Note.virtual('creator', {
  foreignField: '_id',
  localField: 'creatorID',
  ref: 'Account',
  justOne: true
})
Note.virtual('bug', {
  foreignField: '_id',
  localField: 'bugId',
  ref: 'Bug',
  justOne: true
})
