import mongoose, { mongo, Mongoose } from "mongoose";

const quizzesSchema = new mongoose.Schema(
  {
    quiz_id: { type: Number, unique: true, required: true },
    user_id: { type: String, unique: true, required: true },
    note_id: { type: string, unique: true, required: true },
    quiz_title: { type: string, required: true },
  },
  { timestaps: true }
);

const quizQuestionsSchema = new mongoose.Schema(
  {
    question_id: { type: string, unique: true, required: true },
    quiz_id: { type: string, unique: true, required: true },
    question_text: { type: string, unique: true, required: true },
    /*         arroy of options ---->       */
    answer_options: { type: string, unique: false, required: true },
    correct_answer: { type: string, unique: true, required: true },
  },
  { timestamps: true }
)


const QuizQuestion = mongoose.model('QuizQuestion', quizQuestionsSchema)

const Quiz = mongoose.model('Quiz', quizzesSchema)

export { QuizQuestion, Quiz }