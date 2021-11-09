import { DialogText } from '../models/DialogText';

export function isWelcomeDialogText(dialogText: DialogText): boolean {
  return [
    DialogText.WELCOME_01,
    DialogText.WELCOME_02,
    DialogText.WELCOME_03,
    DialogText.WELCOME_04,
    DialogText.WELCOME_05,
  ].includes(dialogText);
}
