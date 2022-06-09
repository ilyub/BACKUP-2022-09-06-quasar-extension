import { prop } from "./misc";
import { lang as baseLang } from "@skylib/facades";
import { defineFn, is, typedef } from "@skylib/functions";
import { useQuasar } from "quasar";
import type { SetupProps } from "./core";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends confirmedClick.Word {}
    }
  }
}

export const confirmedClick = defineFn(
  /**
   * Use confirmed click plugin.
   *
   * @param props - Props.
   * @returns Confirmed click plugin.
   */
  (props: SetupProps<confirmedClick.Props>): confirmedClick.Plugin => {
    const $q = useQuasar();

    // eslint-disable-next-line no-warning-comments -- Postponed
    // fixme -- Without defineFn triggers eslint-plugin-jsdoc warnings
    return defineFn((): void => {
      if (is.not.empty(props.confirmation))
        $q.dialog({
          cancel: confirmedClick.lang.Cancel,
          message: baseLang.get(props.confirmation),
          ok: confirmedClick.lang.Ok,
          persistent: true,
          title: confirmedClick.lang.Confirm
        }).onOk(() => {
          props.confirmedClick?.();
        });
    }, {});
  },
  {
    lang: typedef<baseLang.Lang<keyof confirmedClick.Word, never>>(baseLang),
    props: {
      confirmation: prop<confirmedClick.Props["confirmation"]>(),
      confirmedClick: prop<confirmedClick.Props["confirmedClick"]>()
    } as const
  }
);

export namespace confirmedClick {
  export interface ConfirmedClick {
    /**
     * Handles confirmed click.
     */
    (): void;
  }

  export interface OwnProps {
    readonly confirmation?: baseLang.Key | undefined;
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
