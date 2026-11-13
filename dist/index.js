import express from "express";
const app = express();
const PORT = Number(process.env.PORT ?? 3000);
app.get("/", (req, res) => {
    res.send("My first server run, It is Mind blowing 😂");
});
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
});
//# sourceMappingURL=index.js.map