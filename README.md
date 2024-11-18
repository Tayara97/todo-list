# To-Do List Application

A simple and interactive to-do list application built with React. This application allows users to add, edit, mark as completed, and delete tasks, while persisting the data in local storage.

## Features

- **Add Tasks**: Easily add tasks to your to-do list.
- **Edit Tasks**: Update the title of tasks directly from the list.
- **Mark as Completed**: Toggle tasks as completed or not completed.
- **Delete Tasks**: Remove tasks from the list.
- **Persistent Storage**: Data is saved to local storage, so tasks are preserved even after refreshing the page.

## Installation and Setup

### Clone this repository to your local machine:

git clone <repository-url>

### Navigate to the project directory:

cd todo-list-app

### Install dependencies:

npm install

### Start the development server:

npm run dev

### Open your browser and navigate to:

http://localhost:5173

## How It Works

### Adding Tasks

-Type a task into the input field.
-Press the + button to add it to the list.

### Editing Tasks

-Click the edit icon (✏️) next to the task.
-Modify the task in the input field and press enter or click away to save changes.
-Marking Tasks as Completed

### Deleting Tasks

Click the trash icon (🗑️) next to the task to remove it from the list.

### Persistent Storage

The application uses localStorage to save tasks, ensuring they remain available even after refreshing or closing the browser.

## Project Structure

```plaintext
src/
├── components/
│   ├── Form.jsx         # Component for adding tasks
│   ├── Item.jsx         # Component representing individual tasks
│   ├── ToDoList.jsx     # Component for rendering the list of tasks
├── App.jsx              # Main application file
├── assets/


```
