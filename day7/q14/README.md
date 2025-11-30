# Enhanced Todo List Application

## 📌 Features
- Add tasks to a list.
- Mark tasks as completed (click on task text).
- Remove tasks from the list.
- Search tasks in real time using the search bar.
- Tasks are stored in `localStorage` as a JSON array with:
  - Unique ID
  - Task text
  - Completion status

## 🛠️ How It Works
1. **Add Task**  
   - Type a task in the input box and click **Add Task**.
   - The task will appear in the list.

2. **Mark Completed**  
   - Click on the task text to toggle completion.
   - Completed tasks are shown with a strikethrough.

3. **Remove Task**  
   - Click the **Remove** button next to a task to delete it.

4. **Search Tasks**  
   - Type in the search bar to filter tasks in real time.

5. **Persistence**  
   - All tasks are saved in `localStorage`.
   - Tasks remain even after refreshing or reopening the page.

## 🚀 Setup
1. Clone the repository:
   ```bash
   git clone <your-repo-link>
