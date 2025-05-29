declare module 'react-lazy-load-image-component' {
  export interface LazyLoadImageProps {
    src: string;
    alt?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    placeholderSrc?: string;
    effect?: string;
    threshold?: number;
    beforeLoad?: () => void;
    afterLoad?: () => void;
    onError?: () => void;
    [key: string]: unknown;
  }

  export const LazyLoadImage: React.FC<LazyLoadImageProps>;
} 