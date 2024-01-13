import { Alert } from "react-native";

export default {
  SKIP_ACCOUNT_CREATION: (continueAction: () => void) => Alert.alert(
    'Skip account creation?',
    'Binto features offline mode with limited capabilities, regardless of account status. You may sign up at any time.',
    [
      {
        text: 'Continue without an account',
        style: 'default',
        onPress: continueAction,
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]
  ),
  PROMPT_YOUTUBE_LINK: () => new Promise<string>((resolve) => {
    Alert.prompt('Enter YouTube-video link', 'Paste the link below', (answer) => {
      return resolve(answer);
    })
  })
}