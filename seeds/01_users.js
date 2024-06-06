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
      username: 'user1',
      strava_id: 1234567890
    },
    {
      id: 2,
      email: 'user2@example.com',
      password: 'password2',
      name: 'User 2',
      username: 'user2',
      strava_id: 9876543210
    },
    {
      id: 3,
      email: 'user3@example.com',
      password: 'password3',
      name: 'User 3',
      username: 'user3',
      strava_id: 2468135790
    },
    {
      id: 4,
      email: 'user4@example.com',
      password: 'password4',
      name: 'User 4',
      username: 'user4',
      strava_id: 1357924680
    },
    {
      id: 5,
      email: 'user5@example.com',
      password: 'password5',
      name: 'User 5',
      username: 'user5',
      strava_id: 8642097531
    },
    {
      id: 6,
      email: 'user6@example.com',
      password: 'password6',
      name: 'User 6',
      username: 'user6',
      strava_id: 9753186420
    },
    {
      id: 7,
      email: 'user7@example.com',
      password: 'password7',
      name: 'User 7',
      username: 'user7',
      strava_id: 1230987654
    },
    {
      id: 8,
      email: 'user8@example.com',
      password: 'password8',
      name: 'User 8',
      username: 'user8',
      strava_id: 5678901234
    },
    {
      id: 9,
      email: 'user9@example.com',
      password: 'password9',
      name: 'User 9',
      username: 'user9',
      strava_id: 4321098765
    },
    {
      id: 10,
      email: 'user10@example.com',
      password: 'password10',
      name: 'User 10',
      username: 'user10',
      strava_id: 9876543211
    }
  ]);
};
