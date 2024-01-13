import View from './View';

// Slots are dummy wrappers controlled by the view, e.g
// where to place their children.
import { Header, KeyboardAccessoryView } from './slots';
import { Provider } from './context';

export default {
  View,
  Header,
  KeyboardAccessoryView,
  Provider,
};
