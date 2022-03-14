import {
  mdiCalendar,
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight,
  mdiChevronLeft,
  mdiChevronRight,
  mdiClockOutline,
  mdiClose,
  mdiPlaylistMinus,
  mdiPlaylistPlus,
  mdiWeatherSunsetDown,
  mdiWeatherSunsetUp
} from "@mdi/js";

import type { Facade } from "@skylib/facades/es/icons";

export const icons: Facade = {
  am: mdiWeatherSunsetUp,
  chevronDoubleLeft: mdiChevronDoubleLeft,
  chevronDoubleRight: mdiChevronDoubleRight,
  chevronLeft: mdiChevronLeft,
  chevronRight: mdiChevronRight,
  close: mdiClose,
  deselectAll: mdiPlaylistMinus,
  pickDate: mdiCalendar,
  pickTime: mdiClockOutline,
  pm: mdiWeatherSunsetDown,
  selectAll: mdiPlaylistPlus
};
