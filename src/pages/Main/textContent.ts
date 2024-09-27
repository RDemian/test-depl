export const textContent = `
    **Задача**

    1. Сверстайте "тапбар" (панель с кнопками внизу) для мобильной версии страницы согласно приложенному макету в Figma.
        Наполните страницу текстом для создания нескольких экранов прокрутки.
    
    2. Поведение тапбара должно соответствовать следующим требованиям:
        - При загрузке страницы тапбар должен быть виден и прикреплен к нижней части страницы поверх основного контента.
        - При прокрутке вниз более чем на 200px за раз тапбар плавно скрывается вниз.
        - После остановки прокрутки через 1 секунду, тапбар плавно возвращается назад, если был скрыт.
        - При прокрутке вверх тапбар остается на месте или плавно появляется, если был скрыт.
        - При прокрутке вниз менее чем на 200px за раз тапбар не должен скрываться.
    
        3. Кнопки тапбара должны обладать следующим функционалом:
        - Первая кнопка: "Поделиться". При нажатии открывается диалоговое окно для шаринга текущей страницы.
            Если браузер не поддерживает данную функцию, то ссылка копируется в буфер обмена.
        - Вторая кнопка: "Прокрутка наверх". При нажатии происходит прокрутка страницы к началу.
        - Третья кнопка: "Комментарии". При нажатии увеличивается счетчик комментариев.
        - Четвертая кнопка: "Избранное". При нажатии увеличивается счетчик избранных.

    **Требования**

    - Тапбар должен быть реализован в виде компонента на React.
    - Допускается использование JavaScript или TypeScript.
    - Верстка должна быть выполнена без использования фреймворков, но разрешается использование сброса стилей (reset) и препроцессоров.
    - Демонстрационный пример разместите на GitHub Pages или сервисах, таких как CodePen.io
`;