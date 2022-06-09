import { prop } from "./misc";
import { lang as baseLang } from "@skylib/facades";
import { defineFn, is, typedef } from "@skylib/functions";
import { useQuasar } from "quasar";
import type { SetupProps } from "./core";
import type { stringU } from "@skylib/functions";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends useConfirmedClick.Word {}
    }
  }
}

export const useConfirmedClick = defineFn(
  /**
   * Use confirmed click plugin.
   *
   * @param props - Props.
   * @returns Confirmed click plugin.
   */
  (props: SetupProps<useConfirmedClick.Props>): useConfirmedClick.Plugin => {
    const $q = useQuasar();

    return confirmedClick;

    function confirmedClick(): void {
      if (is.not.empty(props.confirmation))
        $q.dialog({
          cancel: useConfirmedClick.lang.Cancel,
          message: props.confirmation,
          ok: useConfirmedClick.lang.Ok,
          persistent: true,
          title: useConfirmedClick.lang.Confirm
        }).onOk(() => {
          props.confirmedClick?.();
        });
    }
  },
  {
    lang: typedef<baseLang.Lang<keyof useConfirmedClick.Word, never>>(baseLang),
    props: {
      confirmation: prop<useConfirmedClick.Props["confirmation"]>(),
      confirmedClick: prop<useConfirmedClick.Props["confirmedClick"]>()
    } as const
  }
);

export namespace useConfirmedClick {
  export interface ConfirmedClick {
    /**
     * Handles confirmed click.
     */
    (): void;
  }

  export interface OwnProps {
    readonly confirmation?: stringU;
    /**
     * Handles confirmed click.
     */
    readonly confirmedClick?: ConfirmedClick | undefined;
  }

  export interface Plugin {
    /**
     * Handles click.
     */
    (): void;
  }

  export interface Props extends OwnProps {}

  export interface Word {
    readonly Cancel: true;
    readonly Confirm: true;
    readonly Ok: true;
  }
}
