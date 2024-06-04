export type ModelButtonRed = {
  text: string;
  type: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  height?: string;
};
