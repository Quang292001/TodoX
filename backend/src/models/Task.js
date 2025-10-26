import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true, //tự động xóa khoảng trắng đầu và cuối
  },
  status: {
    type: String,
    enum:["active","complete"], //đồng ý các giá trị trong mảng
    default: "active"
    },
    completeAt:{
        type: Date,
        default: null //ban đầu để trống
    }
}, { 
    timestamps: true, //createdAt, updatedAt tự động thêm vào

}
);

const Task = mongoose.model('Task', taskSchema);

export default Task;
