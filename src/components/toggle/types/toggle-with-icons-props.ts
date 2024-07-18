import { IToggleProps } from './toggle-props';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export type IToggleWithIconsProps = IToggleProps & {
  iconLeft?: IconDefinition;
  iconRight?: IconDefinition;
};
