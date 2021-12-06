import { DialogText } from '../models/DialogText';

export function isSecretDialogText(dialogText: DialogText): boolean {
  return [
    DialogText.SECRET_01,
    DialogText.SECRET_02,
    DialogText.SECRET_03,
  ].includes(dialogText);
}
