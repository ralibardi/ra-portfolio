import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type RouteType = {
    path: string;
    component: React.FC;
    label: string;
    icon: IconDefinition;
    children?: RouteType[];
  }
  
  export default RouteType;