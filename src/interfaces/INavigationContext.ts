import {Dispatch, SetStateAction} from "react";

export interface INavigationContext {
  exitSequence: boolean;
  setExitSequence: Dispatch<SetStateAction<boolean>>;
  navigate: (path: string, exitSequenceDuration?: number) => void;
}
