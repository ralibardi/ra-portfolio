import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IToggleSwitcherProps {
  checked: boolean;
  onChange: () => void;
  invertedIconLogic: boolean;
  iconEnabled: IconDefinition;
  iconDisabled: IconDefinition;
}
