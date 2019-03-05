import TraditionalRenting from "./views/TraditionalRenting/index";
import LocalRenting from "./views/LocalRenting/index";

var routes = [
  {
    path: "/simulador-rentabilidade-arrendamento-tradicional",
    name: "Arrendamento Tradicional",
    icon: "tim-icons icon-istanbul",
    component: TraditionalRenting
  },
  {
    path: "/simulador-rentabilidade-arrendamento-local",
    name: "Arrendamento Local",
    icon: "tim-icons icon-world",
    component: LocalRenting
  }
];
export default routes;
