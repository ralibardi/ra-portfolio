import { FunctionComponent } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IRoute {
  path: string;
  index: boolean;
  component: FunctionComponent;
  labelKey: string;
  icon: IconDefinition;
  enabled?: boolean;
  hidden?: boolean;
  children?: IRoute[];
}

export default IRoute;
