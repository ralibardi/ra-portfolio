import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { BaseButtonProps } from './baseButtonProps';

export type ButtonWithIconProps = BaseButtonProps & {
  icon: IconDefinition;
};
