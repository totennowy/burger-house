/// <reference types="vite/client" />

declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean;
    hashSpy?: boolean;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: () => void;
    ignoreCancelEvents?: boolean;
    spyThrottle?: number;
    activeClass?: string;
    children?: React.ReactNode;
  }
  export class Link extends React.Component<LinkProps> {}
}
