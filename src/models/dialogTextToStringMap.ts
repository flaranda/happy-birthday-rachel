import { DialogText } from './DialogText';

export const dialogTextToStringMap: { [TKey in DialogText]: string } = {
  [DialogText.INITIAL]:
    'Push several times on each button to get clues for each present.',
  [DialogText.INITIAL_SECRET]:
    'Push several times on the button to get clues for the last present.',
  [DialogText.PRESENT_1_01]:
    "I can't reach the place where the present is hidden.",
  [DialogText.PRESENT_1_02]:
    "I hope one of those boxes doesn't hit me someday.",
  [DialogText.PRESENT_1_03]: 'Definitely, you have more shoes than Fran.',
  [DialogText.PRESENT_2_01]: 'Looks like the present is not at home.',
  [DialogText.PRESENT_2_02]: "I hope the neighbors didn't steal it from you.",
  [DialogText.PRESENT_2_03]: 'Have you checked your mail today?',
  [DialogText.PRESENT_3_01]: "So you didn't sell it on Wallapop yet...",
  [DialogText.PRESENT_3_02]: 'How long have you not used it, mon amour?',
  [DialogText.PRESENT_3_03]: 'Comment pourrais-je traduire cette phrase?',
  [DialogText.PRESENT_4_01]:
    "This present is not at home nor the building. It's out there in the city!",
  [DialogText.PRESENT_4_02]:
    'Have you had a busy day? Do you feel like a gin-tonic, maybe?',
  [DialogText.PRESENT_4_03]:
    'Where did you have your first drink with Fran last Christmas Eve?',
  [DialogText.SECRET_01]:
    'Hooray! You found all the presents! Did you have fun?',
  [DialogText.SECRET_02]:
    "Listen... I'm afraid you haven't got all the presents yet.",
  [DialogText.SECRET_03]:
    "There's still one more present! But it is easier to find, trust me!",
  [DialogText.WELCOME_01]: 'Hi Rachel!\nHappy birthday to you!',
  [DialogText.WELCOME_02]:
    "Before you ask... Yes! I'm a virtual version of Salem.",
  [DialogText.WELCOME_03]:
    "And I'm here to help you find your birthday presents...",
  [DialogText.WELCOME_04]:
    'Exactly! Fran has hidden them all and created this gymkhana!',
  [DialogText.WELCOME_05]:
    'I think there are a total of three hidden presents. Are you ready?',
  [DialogText.WELCOME_06]:
    'I will give you clues of the location of each present. It will be fun!',
};
