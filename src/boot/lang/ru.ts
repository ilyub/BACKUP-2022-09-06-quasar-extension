import {
  Definitions,
  pluralReduce
} from "@skylib/framework/es/facade-implementations/lang/dictionary";

export const ru = new Definitions({
  pluralReduce: pluralReduce.ru,
  wordForms: {},
  words: {
    IconPicker: "Выбор иконки",
    Of: "Из",
    PickDate: "Выбор даты",
    SampleWord: "Пробное слово",
    Save: "Сохранить"
  }
});
