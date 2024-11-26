const updateTaskContainer = () => {
  taskData.forEach(({ id, title, date, description }) => {
    tasksContainer.innerHTML += `
              <div class="task" id="${id}">
                <p><strong>Title:</strong> ${title}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Description:</strong> ${description}</p>
                <button type="button" class="btn">Edit</button>
                <button type="button" class="btn">Delete</button>
              </div>
            `;
  });
};
