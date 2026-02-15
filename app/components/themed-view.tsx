import { View } from 'react-native';

export function ThemedView({ children }) {
  return <View style={{ flex: 1, padding: 16 }}>{children}</View>;
}
