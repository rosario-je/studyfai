import mongoose from 'mongoose';

const documentsSchema = new mongoose.Schema(
  {
    document_id: { type: String, unique: true, required: true },
    user_id: { type: String, unique: true, required: true },
    document_name: { type: String, required: true },
    document_content: { type: String, required: false},
    ai_feedback: { type: String},
  },
  { timestamps: true }
);

export default mongoose.model('document', documentsSchema);
