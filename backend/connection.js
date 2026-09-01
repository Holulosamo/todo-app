import express from 'express';
import pg from 'pg';

const { Client } = pg;

const connString = "postgresql://postgres:admin@localhost:5432/todo-db"

const client = new Client(connString);

console.log(client)

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));
