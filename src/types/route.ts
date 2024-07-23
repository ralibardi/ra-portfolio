import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface IRoute {
  path: string;
  index: boolean;
  component: React.FC;
  label: string;
  icon: IconDefinition;
  enabled?: boolean;
  children?: IRoute[];
}

export default IRoute;
