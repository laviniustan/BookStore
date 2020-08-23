const express = require('express') 
const cors = require('cors') 
const app = express()

app.use(cors())
const PORT=3000

app.get('/test', (rez, res)=>{
    res.send("hello")
});
app.listen(PORT, () =>
  console.log(`App running on port ${PORT}!`),
);
