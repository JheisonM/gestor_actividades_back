import mysql from 'mysql'

let conexion = mysql.createConnection({
    host: "database-app-test.cf4swwgeaq99.us-east-1.rds.amazonaws.com",
    database: "appGestionActifividades",
    user: "admin",
    password: "Marbol26"
})

conexion.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err);
      return;
    }
    console.log('Conexión establecida correctamente con la base de datos');
  });
  
  export default conexion;