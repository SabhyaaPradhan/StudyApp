import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView>
      <ThemedText type="title">Welcome to your Study App!</ThemedText>
    </ThemedView>
  );
}
