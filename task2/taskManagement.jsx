import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: "", description: "", dueDate: "", completed: false });
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");
  
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const addTask = () => {
    if (task.title && task.dueDate) {
      setTasks([...tasks, { ...task, id: Date.now() }]);
      setTask({ title: "", description: "", dueDate: "", completed: false });
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === "date") return new Date(a.dueDate) - new Date(b.dueDate);
    return 0;
  });

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Task Manager</h2>
      <Input name="title" placeholder="Title" value={task.title} onChange={handleChange} className="mb-2" />
      <Textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} className="mb-2" />
      <Input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} className="mb-2" />
      <Button onClick={addTask} className="w-full mb-4">Add Task</Button>
      
      <div className="flex gap-2 mb-4">
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </Select>
        <Select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="none">No Sorting</option>
          <option value="date">Sort by Due Date</option>
        </Select>
      </div>
      
      {sortedTasks.map((task) => (
        <Card key={task.id} className="mb-2 p-4 flex justify-between items-center">
          <CardContent>
            <h3 className={`font-semibold ${task.completed ? "line-through" : ""}`}>{task.title}</h3>
            <p className="text-sm text-gray-500">{task.description}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          </CardContent>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => toggleCompletion(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </Button>
            <Button variant="destructive" onClick={() => deleteTask(task.id)}>Delete</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
