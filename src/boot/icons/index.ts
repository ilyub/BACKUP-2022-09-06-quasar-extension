import {
  mdiCalendar,
  mdiChevronLeft,
  mdiChevronRight,
  mdiClock,
  mdiClose,
  mdiWeatherSunsetDown,
  mdiWeatherSunsetUp
} from "@mdi/js";

import type { Facade } from "@skylib/facades/es/icons";

export const icons: Facade = {
  am: mdiWeatherSunsetUp,
  chevronLeft: mdiChevronLeft,
  chevronRight: mdiChevronRight,
  close: mdiClose,
  pickDate: mdiCalendar,
  pickTime: mdiClock,
  pm: mdiWeatherSunsetDown
};
