import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader
} from "react-icons/rx";

export const serviceData = [
  {
    id: "service1",
    icon: <RxDesktop key="rxDesktop" />,
    title: "Desenvolvedor",
    description: "Transformando designs em realidade interativa.",
  },
  {
    id: "service2",
    icon: <RxCrop key="rxCrop" />,
    title: "Thumbmaker",
    description: "Domínio de design gráfico e estratégias de destaque visual",
  },
  {
    id: "service3",
    icon: <RxPencil2 key="rxPencil2" />,
    title: "Editor VFX",
    description: "Habilidades em efeitos visuais para contar histórias de forma cinematográfica",
  },
  {
    id: "service4",
    icon: <RxReader key="rxReader" />,
    title: "Criador de conteúdo",
    description: "Profundo entendimento de como engajar a audiência, promover o crescimento orgânico e estabelecer parcerias eficazes",
  }
];
