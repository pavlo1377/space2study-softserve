const { Schema, model } = require('mongoose')
const { FIELD_CANNOT_BE_EMPTY } = require('~/consts/errors');

const {
  enums: { MAIN_ROLE_ENUM, SPOKEN_LANG_ENUM, PROFICIENCY_LEVEL_ENUM, OFFER_STATUS_ENUM }
} = require('~/consts/validation')
const { USER, OFFER, CATEGORY, SUBJECT } = require('~/consts/models')
const { ENUM_CAN_BE_ONE_OF } = require('~/consts/errors')

const offerSchema = new Schema(
  {
    price: {
      type: Number,
      required: [true, FIELD_CANNOT_BE_EMPTY('price')],
      min: [1, 'Price must be at least 1']
    },
    proficiencyLevel: {
      type: String,
      required: [true, FIELD_CANNOT_BE_EMPTY('proficiencyLevel') ],
      enum: {
        values: PROFICIENCY_LEVEL_ENUM,
        message: ENUM_CAN_BE_ONE_OF('proficiency level', PROFICIENCY_LEVEL_ENUM)
      }
    },
    title: {
      type: String,
      required: [true, FIELD_CANNOT_BE_EMPTY('title')],
      trim: true,
      minlength: [1, 'Title must be at least 1 character'],
      maxlength: [100, 'Title must be at most 100 characters']
    },
    description: {
      type: String,
      required: [true, FIELD_CANNOT_BE_EMPTY('description')],
      trim: true,
      minlength: [1, 'Description must be at least 1 character'],
      maxlength: [1000, 'Description must be at most 1000 characters']
    },
    languages: {
      type: [String],
      required: [true, FIELD_CANNOT_BE_EMPTY('languages')],
      enum: {
        values: SPOKEN_LANG_ENUM,
        message: ENUM_CAN_BE_ONE_OF('language', SPOKEN_LANG_ENUM)
      }
    },
    authorRole: {
      type: String,
      required: [true, FIELD_CANNOT_BE_EMPTY('authorRole')],
      enum: {
        values: MAIN_ROLE_ENUM,
        message: ENUM_CAN_BE_ONE_OF('author role', MAIN_ROLE_ENUM)
      }
    },
    author: {
      type: Schema.Types.ObjectId,
      required: [true, FIELD_CANNOT_BE_EMPTY('author')],
      ref: USER
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: CATEGORY,
      required: [true, FIELD_CANNOT_BE_EMPTY('category')]
    },
    subject: {
      type: Schema.Types.ObjectId,
      ref: SUBJECT,
      required: [true, FIELD_CANNOT_BE_EMPTY('subject')]
    },
    status: {
      type: String,
      enum: {
        values: OFFER_STATUS_ENUM,
        message: ENUM_CAN_BE_ONE_OF('offer status', OFFER_STATUS_ENUM)
      },
      default: OFFER_STATUS_ENUM[0]
    },
    FAQ: {
      type: [
        {
          question: {
            type: String,
            required: [true, FIELD_CANNOT_BE_EMPTY('FAQ-question')],
            trim: true
          },
          answer: {
            type: String,
            required: [true, FIELD_CANNOT_BE_EMPTY('FAQ-answer')],
            trim: true
          }
        }
      ]
    }
  },
  {
    timestamps: true,
    versionKey: false,
    id: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = model(OFFER, offerSchema)
