require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const { PORT } = process.env
const userRoutes = require("./routes/user")
const authRoutes = require("./routes/auth")
const photoRoutes = require("./routes/photo")
require("./models/index")


app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
  })
)

app.use("/auth", authRoutes)
app.use("/user", userRoutes)
app.use("/photo", photoRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
