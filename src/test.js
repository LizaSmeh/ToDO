import { ref, set } from "firebase/database";
import { db } from "./firebase";

const testRef = ref(db, "todos/testTask");

set(testRef, {
  text: "Проверка записи",
  completed: false,
  createdAt: Date.now()
})
.then(() => console.log("Запись успешна!"))
.catch(err => console.error("Ошибка записи:", err));