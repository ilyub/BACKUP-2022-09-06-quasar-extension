import { injectableSettings } from "./api";
import type { IconButton } from "./IconButton.extras";
import type { GlobalComponent } from "./api";
import type { LocaleName } from "@skylib/functions";

export namespace LanguagePicker {
  export const { injectSettings, provideSettings, testProvideSettings } =
    injectableSettings<Settings>();

  export interface Global extends GlobalComponent<Props, Slots> {
    readonly main: IconButton.Global;
  }

  export interface Option {
    readonly caption: string;
    readonly flag: string;
    readonly lang: LocaleName;
  }

  export type Options = readonly Option[];

  export interface OwnProps {
    readonly language: LocaleName;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-interface -- Ok
  export interface OwnSlots {}

  export interface ParentProps extends Omit<IconButton.Props, keyof OwnProps> {}

  export interface ParentSlots extends Omit<IconButton.Slots, keyof OwnSlots> {}

  export interface Props extends ParentProps, OwnProps {}

  export interface Settings {
    /**
     * Change language action.
     *
     * @param language - Language.
     */
    readonly changeLanguageAction: (language: LocaleName) => void;
    readonly options: Options;
  }

  export interface Slots extends ParentSlots, OwnSlots {}
}
