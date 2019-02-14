import TraditionalRenting from "./views/TraditionalRenting";
import Example from "./views/Example";

var routes = [
  {
    path: "/simulador-rentabilidade-arrendamento-tradicional",
    name: "Arrendamento Tradicional",
    icon: "tim-icons icon-istanbul",
    component: TraditionalRenting
  },
  {
    path: "/exemplo",
    name: "Exemplo",
    icon: "tim-icons icon-istanbul",
    component: Example
  }
];
export default routes;
