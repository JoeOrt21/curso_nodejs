const usuariosQueries = {
    insertUsuario: `
    INSERT INTO
      usuarios(
          nombre,
          email,
          password,
          status
      )
    VALUES
      (?, ?, ?, ?)
    `,
    selecUsuarios: `
    SELECT
      *
    FROM
      usuarios
    WHERE
      status = 1
    `   
}