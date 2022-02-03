import {
  mdiCalendar,
  mdiChevronLeft,
  mdiChevronLeftCircle,
  mdiChevronRight,
  mdiChevronRightCircle,
  mdiClock,
  mdiClose,
  mdiWeatherSunsetDown,
  mdiWeatherSunsetUp
} from "@mdi/js";

import type { Facade } from "@skylib/facades/es/icons";

export const icons: Facade = {
  am: mdiWeatherSunsetUp,
  chevronLeft: mdiChevronLeft,
  chevronLeftCircle: mdiChevronLeftCircle,
  chevronRight: mdiChevronRight,
  chevronRightCircle: mdiChevronRightCircle,
  close: mdiClose,
  pickDate: mdiCalendar,
  pickTime: mdiClock,
  pm: mdiWeatherSunsetDown
};
