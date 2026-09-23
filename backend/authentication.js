require('dotenv').config();
const express = require('express');
const pg = require('pg');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const pool = require('./db.js');

// const { Client } = pg;

// const connString = "postgresql://postgres:admin@localhost:5432/todo-db"
// const app = express();

// const client = new Client(connString);

// console.log(client)

// client.connect()
//   .then(() => console.log('Connected to PostgreSQL database'))
//   .catch(err => console.error('Connection error', err.stack));

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3001, () => {
  console.log('El servidor es http://localhost:3001');
});

console.log(app)

app.get('/', function(req, res){
  res.send('Maricon');
});

app.post("/api/auth/register", async (req, res) => {
  console.log(req.body)
  const {registerUsername, registerEmail, registerPassword} = req.body;
  try{
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(registerPassword, salt);
    const newUser = await pool.query(
      "INSERT INTO public.\"user\"(username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [registerUsername, registerEmail, hashedPassword]
    );
    res.json(newUser.rows[0]);
  }
  catch(err){
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/auth/login", async (req, res) => {
    const { "login-email": email, "login-password": password } = req.body;
    console.log(email, password);
    const loginRequest = await pool.query("SELECT email, password FROM public.\"user\" WHERE email = $1 AND password = $2",
        [email, password]
    );

    res.json(loginRequest.rows[0]);
});

