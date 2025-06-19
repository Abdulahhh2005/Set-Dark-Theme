//У коді також окрім самого перемикача ми змінюємо і назву тему!

// Скороченна версія яка додає та видаляє класси за допомогою .toggle
'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');
const themeName = document.querySelector('.theme-name');

switcher.addEventListener('click', () => {
  page.classList.toggle('page--theme--dark');
  switcher.classList.toggle('theme-switcher--theme--dark');
  
  if (page.classList.contains('page--theme--dark')) {
    themeName.innerHTML = 'Theme: <em>dark</em>';
  } else {
    themeName.innerHTML = 'Theme: light';
  }
});

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

// За допомогою "document" ми взаємодіємо зі сторінкою, "querySelector" і посилання до html.
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