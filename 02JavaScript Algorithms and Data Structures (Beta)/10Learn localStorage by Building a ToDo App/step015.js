taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
  const taskObj = {
    id: titleInput.value.toLowerCase().split(" "),
  };
  console.log(taskObj);
});
