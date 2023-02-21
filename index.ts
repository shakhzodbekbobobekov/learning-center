import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";
axios.get(url).then((res) => {
  const id = res.data.id;
  const title = res.data.title;
  const completed = res.data.completed;
  console.log(`
    My id: ${id}
    My title: ${title}
    My completed: ${completed}
  `);
});
