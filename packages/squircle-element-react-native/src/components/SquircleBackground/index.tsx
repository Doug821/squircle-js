import { getSvgPath } from 'figma-squircle';
import { useMemo } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface SquircleBackgroundProps extends ViewProps {
  cornerRadius?: number;
  cornerSmoothing?: number;
  width: number;
  height: number;
  backgroundColor?: string;
}

export function SquircleBackground({
  cornerRadius = 16,
  cornerSmoothing = 0.6,
  width,
  height,
  backgroundColor,
}: SquircleBackgroundProps) {
  const path = useMemo(() => {
    return getSvgPath({
      width,
      height,
      cornerRadius,
      cornerSmoothing,
    });
  }, [width, height, cornerRadius, cornerSmoothing]);

  console.log('SquirleBackground', backgroundColor);

  return (
    <View
      style={{
        ...StyleSheet.absoluteFillObject,
        overflow: 'hidden',
      }}
    >
      <Svg width='100%' height='100%' viewBox={`0 0 ${width} ${height}`}>
        <Path d={path} fill={backgroundColor ?? 'transparent'} />
      </Svg>
    </View>
  );
}
