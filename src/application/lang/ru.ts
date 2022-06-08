import { implementations } from "@skylib/framework";

export const ru = new implementations.lang.dictionary.Definitions({
  pluralReduce: implementations.lang.dictionary.pluralReduce.ru,
  wordForms: {
    "кем-чем": ["кем-чем-им", "кем-чем-ей", "кем-чем-им-ср"],
    "кого-чего": ["кого-чего-его", "кого-чего-ее", "кого-чего-его-ср"],
    "кого-что": ["кого-что-его", "кого-что-ее", "кого-что-его-ср"],
    "ком-чем": ["ком-чем-нем", "ком-чем-ней", "ком-чем-нем-ср"],
    "кому-чему": ["кому-чему-ему", "кому-чему-ей", "кому-чему-ему-ср"],
    "кто-что": ["кто-что-он", "кто-что-она", "кто-что-оно"]
  },
  words: {
    AnimateAsyncClick: "Анимировать асинхронный клик",
    AnimateSubmitting: "Анимировать отправку формы",
    AsyncClick: "Асинхронный клик",
    AsyncSubmit: "Отправить асинхронно",
    Button1: "Кнопка 1",
    Button2: "Кнопка 2",
    Cancel: "Отменить",
    Click: "Клик",
    Click1: "Клик 1",
    Click2: "Клик 2",
    CloseButton: "Кнопка выхода",
    CloseButtonOff: "Кнопка выхода выкл.",
    CloseButtonOn: "Кнопка выхода вкл.",
    Color: ["кто-что-он", { "кого-что-его": "Цвет", "кто-что-он": "Цвет" }],
    Compact: "Компактный",
    Confirm: "Подтверждение",
    ConfirmationMessage: "Текст подтверждения",
    ConfirmedClick: "Подтвержденный клик",
    Date: ["кто-что-она", { "кого-что-ее": "Дату", "кто-что-она": "Дата" }],
    DeselectAll: "Снять выделение",
    Disable: "Отключить",
    DisableDropping: "Запретить перенос",
    DisableSorting: "Запретить сортировку",
    Disabled: "Отключено",
    Down: "Вниз",
    Equal: [
      "кого-что-его",
      {
        "кого-что-его": "Равный",
        "кого-что-его-ср": "Равное",
        "кого-что-ее": "Равную"
      }
    ],
    Field: "Поле",
    FieldIsRequired: "Введите <field:кого-что>",
    FieldShouldBeGteMin: "Введите <field:кого-что> больше либо {equal} @min",
    FieldShouldBeLteMax: "Введите <field:кого-что> больше либо {equal} @max",
    IconPicker: "Выбор иконки",
    Label: "Метка",
    Left: "Влево",
    ManageColumns: "Управлять колонками",
    Mask: "Маска",
    MultiSelect: "Мульти-выбор",
    Name: "Имя",
    NoData: "Пустые данные",
    Number: [
      "кто-что-оно",
      { "кого-что-его-ср": "Число", "кто-что-оно": "Число" }
    ],
    Of: "Из",
    Ok: "Ок",
    Password: "Пароль",
    Placeholder: "Текст по умолчанию",
    Reset: "Сброс",
    ResizableColumns: "Регулируемый размер колонок",
    Right: "Вправо",
    SampleField: "Тестовое поле",
    SampleToggle: "Тестовый переключатель",
    Save: "Сохранить",
    Scrollbar: "Поле прокрутки",
    SearchForSettings: "Поиск настроек",
    SelectAll: "Выделить все",
    SelectByCheckbox: "Выбор чекбоксом",
    SelectByRowClick: "Выбор нажатием на строку",
    SelectColor: "Выбрать цвет",
    SelectField: "Выберите <field:кого-что>",
    ShortData: "Короткие данные",
    ShowTooltips: "Показывать подсказки",
    Sticky: "Прилипание",
    String: [
      "кто-что-она",
      { "кого-что-ее": "Строку", "кто-что-она": "Строка" }
    ],
    Submit: "Отправить",
    Time: [
      "кто-что-оно",
      { "кого-что-его-ср": "Время", "кто-что-оно": "Время" }
    ],
    Title: "Заголовок",
    Tooltips: "Подсказки",
    Up: "Вверх",
    ValidateOnChange: "Проверка при изменении",
    ValidateOnInput: "Проверка при вводе",
    ValidateOnSubmit: "Проверка при отправке"
  }
});
