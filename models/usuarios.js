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
  selectUsuarios: `
    SELECT
      *
    FROM
      usuarios
    WHERE
      status = 1
  `,
  updateUsuario: `
    UPDATE
      usuarios
    SET
      nombre=?,
      status=?
    WHERE
      email=?
  `,
  deleteUsuarios: `
    UPDATE
      usuarios
    SET
      status=0
    WHERE
    email=?
  `,
};
