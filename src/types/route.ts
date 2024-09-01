import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IRoute {
  path: string;
  index: boolean;
  component: React.FC;
  labelKey: string;
  icon: IconDefinition;
  enabled?: boolean;
  hidden?: boolean;
  children?: IRoute[];
}

export default IRoute;
