/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1,
      email: 'user1@example.com',
      password: 'password1',
      name: 'User 1',
      username: 'user1'
    },
    {
      id: 2,
      email: 'user2@example.com',
      password: 'password2',
      name: 'User 2',
      username: 'user2'
    },
    {
      id: 3,
      email: 'user3@example.com',
      password: 'password3',
      name: 'User 3',
      username: 'user3'
    },
    {
      id: 4,
      email: 'user4@example.com',
      password: 'password4',
      name: 'User 4',
      username: 'user4'
    },
    {
      id: 5,
      email: 'user5@example.com',
      password: 'password5',
      name: 'User 5',
      username: 'user5'
    },
    {
      id: 6,
      email: 'user6@example.com',
      password: 'password6',
      name: 'User 6',
      username: 'user6'
    },
    {
      id: 7,
      email: 'user7@example.com',
      password: 'password7',
      name: 'User 7',
      username: 'user7'
    },
    {
      id: 8,
      email: 'user8@example.com',
      password: 'password8',
      name: 'User 8',
      username: 'user8'
    },
    {
      id: 9,
      email: 'user9@example.com',
      password: 'password9',
      name: 'User 9',
      username: 'user9'
    },
    {
      id: 10,
      email: 'user10@example.com',
      password: 'password10',
      name: 'User 10',
      username: 'user10'
    }
  ]);
};
