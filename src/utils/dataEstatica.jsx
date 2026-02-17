import { v } from "../styles/variables1";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";


// USER DROPDOWN DATA

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icon: <v.iconoUser />,
    tipo: "miperfil",
  },
  {
    text: "Configuracion",
    icon: <v.iconoSettings />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icon: <v.iconoCerrarSesion />,
    tipo: "cerrarsesion",
  },
];


// SIDEBAR PRINCIPAL

export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Kardex",
    icon: <v.iconocategorias />,
    to: "/kardex",
  },
  {
    label: "Reportes",
    icon: <v.iconoreportes />,
    to: "/reportes",
  },
];


// SIDEBAR SECUNDARIO

export const SecondaryLinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },
];


// TEMAS

export const TemasData = [
  {
    icon: "🌞",
    description: "light",
  },
  {
    icon: "🌙",
    description: "dark",
  },
];


//  MÓDULOS DE CONFIGURACIÓN

export const DataModulosConfiguracion = [
  {
    title: "Productos",
    subtitle: "Registra tus productos",
    icon: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link: "/configurar/productos",
  },
  {
    title: "Personal",
    subtitle: "Ten el control de tu personal",
    icon: "https://i.ibb.co/5vgZ0FX/hombre.png",
    link: "/configurar/usuarios",
  },
  {
    title: "Tu empresa",
    subtitle: "Configura tus opciones básicas",
    icon: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link: "/configurar/empresa",
  },
  {
    title: "Categoria de productos",
    subtitle: "Asigna categorías a tus productos",
    icon: "https://i.ibb.co/VYbMRLZ/categoria.png",
    link: "/configurar/categorias",
  },
  {
    title: "Marca de productos",
    subtitle: "Gestiona tus marcas",
    icon: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link: "/configurar/marca",
  },
];


//  TIPOS DE USUARIO

export const TipouserData = [
  {
    description: "empleado",
    icon: "👨‍💼",
  },
  {
    description: "administrador",
    icon: "👑",
  },
];


// TIPOS DE DOCUMENTO
export const TipoDocData = [
  {
    description: "DNI",
    icon: "🪪",
  },
  {
    description: "Libreta electoral",
    icon: "📘",
  },
  {
    description: "Otros",
    icon: "📄",
  },
];
