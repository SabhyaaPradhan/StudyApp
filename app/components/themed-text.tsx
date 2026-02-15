import { Text } from 'react-native';

export function ThemedText({ type, children }) {
  return <Text style={{ fontSize: type === 'title' ? 32 : 16 }}>{children}</Text>;
}
