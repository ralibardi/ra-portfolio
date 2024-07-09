export interface IToggleProps {
  label: string;
  checked?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
