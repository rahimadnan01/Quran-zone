import { app } from "./app.js";
import { connectDB } from "./db/index.js";
const port = 3000;
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening at port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
