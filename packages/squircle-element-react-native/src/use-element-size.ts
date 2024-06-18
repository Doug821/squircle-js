import { useCallback, useState } from "react";
import { LayoutChangeEvent } from "react-native";

interface Size {
  width: number;
  height: number;
}

export function useElementSize(defaultSize: {
  defaultWidth?: number;
  defaultHeight?: number;
}): [Size, (event: LayoutChangeEvent) => void] {
  const [size, setSize] = useState<Size>({
    width: defaultSize.defaultWidth ?? 0,
    height: defaultSize.defaultHeight ?? 0,
  });

  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setSize({ width, height });
  }, []);

  return [size, onLayout];
}
