module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-190.railway.app'),
      port: env.int('PGPORT', 5919),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', 'uYImv3uIY0x7zsKtagfj'),
      ssl: env.bool(true),
    },
  },
});



