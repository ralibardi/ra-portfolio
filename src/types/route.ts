import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface IRoute {
    path: string;
    component: React.FC;
    label: string;
    icon: IconDefinition;
    children?: IRoute[];
  }
  
  export default IRoute;