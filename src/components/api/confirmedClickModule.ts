import { prop } from "./core";
import { lang as baseLang } from "@skylib/facades";
import { is } from "@skylib/functions";
import { useQuasar } from "quasar";
import type { ValidateEmit, ValidateProps } from "./core";
import type { stringU } from "@skylib/functions";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends ModuleWord {}
    }
  }
}

// eslint-disable-next-line no-warning-comments
// fixme: Create type from ConfirmedClickProps
export const confirmedClickEmits = {
  confirmedClick: (): boolean => true
} as const;

// eslint-disable-next-line no-warning-comments
// fixme: Create type from ConfirmedClickProps
export const confirmedClickProps = {
  confirmation: prop<string>()
} as const;

export const lang: baseLang.Lang<keyof ModuleWord, never> = baseLang;

export interface ConfirmedClickModule {
  /**
   * Click event handler.
   */
  readonly confirmedClick: () => void;
}

export interface ConfirmedClickProps {
  readonly confirmation?: stringU;
  /**
   * Emits confirmed click event.
   */
  readonly onConfirmedClick?: () => void;
}

export interface ModuleWord {
  readonly Cancel: true;
  readonly Confirm: true;
  readonly Ok: true;
}

/**
 * Confirmed click module.
 *
 * @param props - Props.
 * @param emit - Emit function.
 * @returns Confirmed click module.
 */
export function useConfirmedClick(
  props: ValidateProps<ConfirmedClickProps>,
  emit: ValidateEmit<ConfirmedClickProps>
): ConfirmedClickModule {
  const $q = useQuasar();

  return {
    confirmedClick(): void {
      if (is.not.empty(props.confirmation))
        $q.dialog({
          cancel: lang.Cancel,
          message: props.confirmation,
          ok: lang.Ok,
          persistent: true,
          title: lang.Confirm
        }).onOk(() => {
          emit("confirmedClick");
        });
    }
  };
}
