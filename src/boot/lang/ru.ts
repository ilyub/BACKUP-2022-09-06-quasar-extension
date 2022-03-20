import {
  Definitions,
  pluralReduce
} from "@skylib/framework/es/facade-implementations/lang/dictionary";

export const ru = new Definitions({
  pluralReduce: pluralReduce.ru,
  wordForms: {},
  words: {
    Cancel: "Отменить",
    Confirm: "Подтверждение",
    DeselectAll: "Снять выделение",
    IconPicker: "Выбор иконки",
    ManageColumns: "Управлять колонками",
    Of: "Из",
    Ok: "Ок",
    PickDate: "Выбор даты",
    SampleWord: "Пробное слово",
    Save: "Сохранить",
    SelectAll: "Выделить все"
  }
});
