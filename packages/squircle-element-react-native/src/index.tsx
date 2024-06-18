import { View } from 'react-native';

import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';
import { useElementSize } from './use-element-size';

import { SquircleBackground } from './components/SquircleBackground';

interface SquircleProps<E extends ViewProps> {
  cornerSmoothing?: number;
  cornerRadius?: number;
  asChild?: boolean;
  children?: React.ReactNode;

  width?: number;
  height?: number;
  color?: string;

  defaultWidth?: number;
  defaultHeight?: number;
}

function Squircle<E extends React.ElementType = typeof View>({
  cornerRadius,
  cornerSmoothing = 0.6,
  asChild,
  style,
  width: w,
  height: h,
  color,
  defaultWidth,
  defaultHeight,
  ...props
}: SquircleProps<ViewProps> &
  Omit<React.ComponentPropsWithoutRef<E>, keyof SquircleProps<ViewProps>>) {
  const [{ width, height }, onLayout] = useElementSize({
    defaultWidth,
    defaultHeight,
  });

  const actualWidth = w ?? width;
  const actualHeight = h ?? height;

  return (
    <View
      {...props}
      onLayout={onLayout}
      style={[
        {
          ...style,
          width: w ?? defaultWidth,
          height: h ?? defaultHeight,
        },
      ]}
      data-squircle={cornerRadius}
    >
      <SquircleBackground
        {...props}
        cornerRadius={cornerRadius}
        cornerSmoothing={cornerSmoothing}
        width={actualWidth}
        height={actualHeight}
        backgroundColor={color}
      />
      {props.children}
    </View>
  );
}

export { Squircle, type SquircleProps };
