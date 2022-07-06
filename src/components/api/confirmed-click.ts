import { propFactory } from "./misc";
import { lang as baseLang } from "@skylib/facades";
import { defineFn, evaluate, is, typedef } from "@skylib/functions";
import { useQuasar } from "quasar";

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
  (props: confirmedClick.Props): confirmedClick.Plugin => {
    const $q = useQuasar();

    return plugin;

    function plugin(): void {
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
    }
  },
  {
    lang: typedef<baseLang.Lang<keyof confirmedClick.Word, never>>(baseLang),
    // eslint-disable-next-line @skylib/custom/no-anonymous-return -- Ok
    props: evaluate(() => {
      const prop = propFactory<confirmedClick.OwnProps>();

      return {
        confirmation: prop("confirmation"),
        confirmedClick: prop("confirmedClick")
      } as const;
    })
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
