import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BaseButtonProps } from './base-button-props';

export type ButtonWithIconProps = BaseButtonProps & {
  icon: IconDefinition;
};
