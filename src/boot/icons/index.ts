import {
  mdiArrowDownThin,
  mdiArrowUpThin,
  mdiCalendar,
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight,
  mdiChevronLeft,
  mdiChevronRight,
  mdiClockOutline,
  mdiClose,
  mdiCog,
  mdiPlaylistMinus,
  mdiPlaylistPlus,
  mdiWeatherSunsetDown,
  mdiWeatherSunsetUp
} from "@mdi/js";
import type { icons as iconsFacade } from "@skylib/facades";

export const icons: iconsFacade.Facade = {
  am: mdiWeatherSunsetUp,
  ascending: mdiArrowUpThin,
  chevronDoubleLeft: mdiChevronDoubleLeft,
  chevronDoubleRight: mdiChevronDoubleRight,
  chevronLeft: mdiChevronLeft,
  chevronRight: mdiChevronRight,
  close: mdiClose,
  descending: mdiArrowDownThin,
  deselectAll: mdiPlaylistMinus,
  manageColumns: mdiCog,
  pickDate: mdiCalendar,
  pickTime: mdiClockOutline,
  pm: mdiWeatherSunsetDown,
  selectAll: mdiPlaylistPlus
};
