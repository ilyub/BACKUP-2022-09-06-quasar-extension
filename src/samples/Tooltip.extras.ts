import { lang as baseLang } from "@skylib/facades";

declare global {
  namespace facades {
    namespace lang {
      interface Word extends Tooltip.Word {}
    }
  }
}

export namespace Tooltip {
  export const lang: baseLang.Lang<keyof Word, never> = baseLang;

  export interface Word {
    readonly DownLeftTooltip: true;
    readonly DownRightTooltip: true;
    readonly DownTooltip: true;
    readonly LeftDownTooltip: true;
    readonly LeftTooltip: true;
    readonly LeftUpTooltip: true;
    readonly MenuItem: true;
    readonly Ms: true;
    readonly RightDownTooltip: true;
    readonly RightTooltip: true;
    readonly RightUpTooltip: true;
    readonly SampleTooltip: true;
    readonly ShowTooltips: true;
    readonly UpLeftTooltip: true;
    readonly UpRightTooltip: true;
    readonly UpTooltip: true;
    readonly WithDelayOf: true;
  }
}
