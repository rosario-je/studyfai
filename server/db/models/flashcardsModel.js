import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema(
  {
    flashcard_id: { type: String, unique: true, required: true },
    quiz_id: { type: String, unique: true, required: true },
    question_text: { type: String, required: true },
    answer_text: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('flashCard', flashcardSchema);
