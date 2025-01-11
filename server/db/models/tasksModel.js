import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    task_id: { type: String, unique: true, required: true },
    plan_id: { type: String, unique: true, required: true },
    task_title: { type: String, required: true },
    task_description: { type: String, required: true },
    is_completed: { type: Boolean, default: false},
    due_date: {type: String, required: false}
  },
  { timestamps: true }
);

export default mongoose.model('task', taskSchema);
