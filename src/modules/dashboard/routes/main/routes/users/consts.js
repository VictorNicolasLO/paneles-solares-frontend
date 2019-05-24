import React from 'react';
import TableMenu from '../../../../components/table-menu';
export const title = 'Gestion de usuarios';
export const description =
  'Añade elimite y edite los usuarios que puedan acceder a esta plataforma';


export const demoData = [{
  img : "",
  name : "Victor Nicolas",
  email: "asd@hotmail.com",
  authlevel: "Administrador",

},{
  img : "",
  name : "Victor skd",
  email: "asd@hotmail.com",
  authlevel: "Administrador"
}
]

export const headers = {
  img: "",
  name: "Nombre",
  email: "Correo electronico",
  authlevel: "privilegios",
  menu:""
}

export const options = [
  'Editar',
  'Eliminar'
];