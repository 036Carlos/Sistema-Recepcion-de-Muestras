import { CiPalette } from "react-icons/ci";
import { BsEmojiLaughing, BsGoogle, BsQuestionCircle, BsBarChartLine, BsCalendarCheck } from "react-icons/bs";
import { RiEditLine, RiDeleteBin2Line, RiVipCrownFill, RiSettings3Line, RiCloseLine, RiLockPasswordLine, RiStockLine } from "react-icons/ri";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiUserCircle, BiSave, BiBellMinus } from "react-icons/bi";
import { MdExitToApp, MdOutlineBorderAll, MdAlternateEmail, MdDriveFileRenameOutline, MdOutlineCategory } from "react-icons/md";
import { FcPicture } from "react-icons/fc";
import { CgMathPlus } from "react-icons/cg";
import { TbBrandSupabase, TbBrandBitbucket, TbReportAnalytics } from "react-icons/tb";
import { FaReact, FaBalanceScale, FaRegMoneyBillAlt, FaBuilding } from "react-icons/fa";
import { BsArrowDown, BsArrowUpShort } from "react-icons/bs";
import { HiOutlineChartPie } from "react-icons/hi";
import { SiGraph } from "react-icons/si";
import { AiOutlineCalculator, AiOutlineBarcode } from "react-icons/ai";
import { GrFormPrevious, GrCaretNext } from "react-icons/gr";
import { DiCodepen } from "react-icons/di";
import { CiMoneyBill } from "react-icons/ci";

import logo from "../assets/logo_senasa.jpg";
import fondo from "../assets/fondo1.svg";

export const v = {
  iconoreportes: TbReportAnalytics,
  iconoempresa: FaBuilding, //icono empresa se cambio por icono laboratorio//
  iconocategorias: MdOutlineCategory, //       
  iconomarca: TbBrandBitbucket,
  iconoprecioventa: FaRegMoneyBillAlt,
  iconopreciocompra: CiMoneyBill, 
  iconocodigomuestra: DiCodepen,
  iconocodigobarras: AiOutlineBarcode,
  iconostockminimo: BiBellMinus,
  iconostock: RiStockLine,
  icononombre: MdDriveFileRenameOutline,
  iconoemail: MdAlternateEmail,
  iconopass: RiLockPasswordLine,

  sidebarWidth: "300px",
  sidebarWidthInitial: "10vw",
  smSpacing: "8px",
  mdSpacing: "16px",
  lgSpacing: "24px",
  xlSpacing: "32px",
  xxlSpacing: "48px",
  borderRadius: "6px",

  paletacolores: CiPalette,
  emoji: BsEmojiLaughing,
  iconoeditarTabla: RiEditLine,
  iconoeliminarTabla: RiDeleteBin2Line,

  colorIngresos: "#53B257",
  colorBgIngresos: "#e6ffe7",
  colorGastos: "#fe6156",
  colorBgGastos: "#fbc6c9",
  colorError: "#F54E41",
  colorExito: "#9046FF",

  bpmaggie: "15em",
  bplisa: "30em",
  bpbart: "48em",
  bpmarge: "62em",
  bphomer: "75em",

  colorPrincipal: "#00F34A",
  boxshadowGray: "0px 10px 15px -3px rgba(0,0,0,0.1)",

  iconoFlechabajo: IoIosArrowDown,
  iconocorona: RiVipCrownFill,
  iconoUser: BiUserCircle,
  iconoSettings: RiSettings3Line,
  iconoCerrarSesion: MdExitToApp,
  iconofotovacia: FcPicture,

  verde: "#53B257",
  rojo: "#F54E41",
  agregar: CgMathPlus,

  iconosupabase: TbBrandSupabase,
  iconoreact: FaReact,
  flechaabajolarga: BsArrowDown,
  flechaarribalarga: BsArrowUpShort,
  balance: FaBalanceScale,

  logo: logo,
  iconogoogle: BsGoogle,
  iconocerrar: RiCloseLine,
  iconoguardar: BiSave,
  iconoayuda: BsQuestionCircle,
  iconopie: HiOutlineChartPie,
  iconolineal: SiGraph,
  iconobars: BsBarChartLine,
  iconocalculadora: AiOutlineCalculator,
  iconocheck: BsCalendarCheck,

  imagenfondo: fondo,
  colorSecundario: "#DAC1FF",
  iconoflechaderecha: IoIosArrowForward,
  colorselector: "#BF94FF",
  rgbafondos: "rgba(210, 110, 249, 0.1)",

  iconoprev: GrFormPrevious,
  icononext: GrCaretNext,
  iconotodos: MdOutlineBorderAll,
};
