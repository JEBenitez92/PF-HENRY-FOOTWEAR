const app = require("./src/app.js");
require("dotenv").config();
const { sequelize } = require("./src/db.js");
const { PORT } = process.env;
const port = PORT

app.listen(port,()=>{
    sequelize.sync({ force: false });
    console.log(`Server levantado en puerto ${port}`)
})
