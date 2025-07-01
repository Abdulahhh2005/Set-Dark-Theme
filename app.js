// ----------------------------------------------------------------------------------------------------------------

// 1 -- VARIANT --

//У коді також окрім самого перемикача ми змінюємо і назву тему!

// Скороченна версія яка додає та видаляє класси за допомогою .toggle
// 'use strict';

// const page = document.querySelector('.page');
// const switcher = document.querySelector('.theme-switcher');
// const themeName = document.querySelector('.theme-name');

// switcher.addEventListener('click', () => {
//   page.classList.toggle('page--theme--dark');
//   switcher.classList.toggle('theme-switcher--theme--dark');
  
//   if (page.classList.contains('page--theme--dark')) {
//     themeName.innerHTML = 'Theme: <em>dark</em>';
//   } else {
//     themeName.innerHTML = 'Theme: light';
//   }
// });

// Звичайна версія
// 'use strict';

// const page = document.querySelector('.page');
// const switcher = document.querySelector('.theme-switcher');
// const themeName = document.querySelector('.theme-name');

// switcher.addEventListener('click', () => {
//   if (page.classList.contains('page--theme--dark')) {
//     page.classList.remove('page--theme--dark');
//     switcher.classList.remove('theme-switcher--theme--dark');
//     themeName.textContent = 'Theme: Light';
//   } else {
//     page.classList.add('page--theme--dark');
//     switcher.classList.add('theme-switcher--theme--dark');
//     themeName.innerHTML = 'Theme: <strong>Dark</strong>';
//   }
// });


// ПОЯСНЕННЯ КОДУ

// 'use strict'; Включає строгий режим JavaScript для більш суворої перевірки коду.

// За допомогою "document" ми взаємодіємо зі сторінкою, 

// "querySelector"(звертаємось до першого елемента, а "querySelectorAll" до всіх однаковий елементів цього типу, 
// але тоді треба буде робити цикл для знаходження всіх) і посилання до html.
// Тому що querySelectorAll може повернути багато елементів, і якщо ти хочеш щось зробити з кожним елементом (наприклад, змінити текст, додати клас, навісити обробник подій), 
// тобі треба пройтись по кожному з них. А для цього і потрібен цикл.

// Тобто ми находимо елемент сторінки (контейнер з класом ".page/.theme-switcher/.theme-name").

// Після цього ми додаємо обробник подій. Беремо об'єкт на який будемо клікати дл зміни "switcher"
// Викликаємо метод "addEventListener" який приймає два параметра. 
// (1-й назва події "click", а 2-й функція (зазвичай стрілочка)
// Пишемо код у функції

// Ми хочемо для всієї сторінки додати сss клас. "page"
// Після цього щоб працювати з класами певного елемента використовуємо властивість "classList" і в неї є методи
// (add - додати, remove - видалити, contains - містить, toggle-)

// textContent - вставляє текст без форматування (теги показує як текст).
// innerHTML - вставляє HTML і теги працюють.

// ----------------------------------------------------------------------------------------------------------------

// 2 -- VARIANT --

// Standard
// 'use strict';

// const switcher = document.querySelector('.theme-switcher');
// let isExtraTheme = false;

// switcher.addEventListener('click', () => {
//   if (isExtraTheme) {
//     // Default theme
//     document.documentElement.style.setProperty('--color-page', '#F9512E');
//     document.documentElement.style.setProperty('--bg-color-page', '#FFEEFC');
//     document.documentElement.style.setProperty('--switch-transform', '0');
//   } else {
//     // Extra theme
//     document.documentElement.style.setProperty('--color-page', '#1C1A26');
//     document.documentElement.style.setProperty('--bg-color-page', '#EEF7FF');
//     document.documentElement.style.setProperty('--switch-transform', '100%');
//   }
//   isExtraTheme = !isExtraTheme;
// });

// В цьому випадку ми оголошуємо кольори та анімацію для перемикача глобально (через :root)
// І при кліканні на перемикач ми змінюємо властивості.
// Звертаєємось теж глобально (адже звернутись до конкретного елемента напряму не можна)
// style.setProperty відповідає за змінення у змінної значення 
// Для темной теми можно использоваться сменну 'isDark' вместо 'isExtraTheme'

// Simplified
'use strict';

const switcher = document.querySelector('.theme-switcher');
let isExtraTheme = false;

switcher.addEventListener('click', () => {
  isExtraTheme = !isExtraTheme;

  document.documentElement.style.setProperty('--color-page', isExtraTheme ? '#1C1A26' : '#F9512E');
  document.documentElement.style.setProperty('--bg-color-page', isExtraTheme ? '#EEF7FF' : '#FFEEFC');
  document.documentElement.style.setProperty('--switch-transform', isExtraTheme ? '100%' : '0');
});


// (Для SCSS непрацює)
// SCSS-переменные ($color-page) — это константы, которые существуют только на этапе компиляции (build time).
// После компиляции SCSS в CSS — они превращаются в конкретные значения и исчезают.
// А
// CSS-переменные (--color-page) — остаются в итоговом CSS, доступны в браузере и могут менять свои 
// значения динамически во время работы страницы через JS.

// ----------------------------------------------------------------------------------------------------------------