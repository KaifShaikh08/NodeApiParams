import { task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;

  await task.create({ title, description, user: req.user });

  res.status(200).json({
    success: true,
    message: "Task added successfully",
  });
};

export const getMyTasks = async (req, res) => {
  const userid = req.user._id;

  const tasks = await task.find({ user: userid });

  res.status(200).json({
    success: true,
    tasks,
  });
};

export const updateTask = async (req, res) => {
  const Task = task.findById(req.params.id);
  if (!Task)
    return res.status(404).json({ success: false, message: "Task not found" });
  // Step 2: Update the boolean value
  Task.isCompleted = !Task.isCompleted;
  console.log(Task.isCompleted);
  await Task.updateOne();

  res.status(200).json({
    success: true,
    message: "Task updated",
  });
};
export const deleteTask = async (req, res) => {
  const Task = task.findById(req.params.id);
  await Task.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task Deleted",
  });
};
