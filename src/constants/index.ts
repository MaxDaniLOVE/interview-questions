export type Question = {
  q: string;
  cat: string;
  a: string;
}
export const HTML_QUESTIONS = [
  {
      "q": "Что такое HTML и для чего он используется?",
      "cat": "base",
      "a": "HTML — HyperText Markup Language, язык разметки гипертекста. Используется для описания структуры веб-страниц: определяет, какие элементы есть на странице (заголовки, параграфы, ссылки, изображения, формы). Браузер парсит HTML и строит DOM-дерево, на основе которого рендерит страницу."
  },
  {
      "q": "Что такое HTML-элемент? Какова его структура?",
      "cat": "base",
      "a": "Элемент — это единица разметки. Структура: открывающий тег + контент + закрывающий тег. Например: <code>&lt;p&gt;Текст&lt;/p&gt;</code>. Бывают пустые элементы без закрывающего тега: <code>&lt;img&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;input&gt;</code>."
  },
  {
      "q": "Что такое атрибуты в HTML? Как они используются?",
      "cat": "base",
      "a": "Атрибуты задают дополнительные характеристики элемента. Пишутся в открывающем теге: <code>&lt;a href='...' target='_blank'&gt;</code>. Бывают булевы (просто присутствие — уже true: <code>disabled</code>, <code>checked</code>) и со значением."
  },
  {
      "q": "Какие глобальные атрибуты есть в HTML?",
      "cat": "base",
      "a": "Применимы к любому элементу: <code>id</code>, <code>class</code>, <code>style</code>, <code>title</code>, <code>lang</code>, <code>hidden</code>, <code>tabindex</code>, <code>contenteditable</code>, <code>draggable</code>, <code>data-*</code>, ARIA-атрибуты (<code>role</code>, <code>aria-label</code> и др.)."
  },
  {
      "q": "Что такое категории контента в HTML5?",
      "cat": "semantic",
      "a": "Классификация элементов по типу содержимого и допустимому контексту. Определяет, где какой элемент можно использовать. Это не CSS-модель, а семантическая."
  },
  {
      "q": "Какие категории считаются основными?",
      "cat": "semantic",
      "a": "Основные: Flow content (большинство элементов тела), Phrasing content (инлайновые: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>), Heading content (<code>&lt;h1&gt;–&lt;h6&gt;</code>), Sectioning content (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>), Embedded content (<code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>), Interactive content (<code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>), Metadata content (в <code>&lt;head&gt;</code>)."
  },
  {
      "q": "Что такое doctype и для чего он нужен?",
      "cat": "base",
      "a": "Декларация в начале HTML-документа, сообщающая браузеру, по каким правилам парсить страницу. В HTML5 это просто <code>&lt;!DOCTYPE html&gt;</code>. Без него браузер переходит в «quirks mode» — режим совместимости со старым поведением, что ломает современную верстку."
  },
  {
      "q": "Опишите базовую структуру HTML-страницы",
      "cat": "base",
      "a": "<code>&lt;!DOCTYPE html&gt;</code> → <code>&lt;html lang='ru'&gt;</code> → <code>&lt;head&gt;</code> (мета, заголовок, стили) → <code>&lt;body&gt;</code> (контент) → закрывающие теги. Атрибут <code>lang</code> важен для доступности и SEO."
  },
  {
      "q": "Что такое валидация HTML? Какие типы проверок вы знаете?",
      "cat": "base",
      "a": "Проверка соответствия кода стандарту HTML. Типы: синтаксическая (правильность написания тегов), структурная (вложенность, обязательные элементы), семантическая (правильное использование элементов по назначению). Инструмент: W3C Validator."
  },
  {
      "q": "Если представить HTML5 как открытую веб-платформу, из каких блоков он состоит?",
      "cat": "base",
      "a": "Семантика, офлайн и хранилище (localStorage, IndexedDB, Cache API), устройства (Geolocation, Camera, Gyroscope), связь (WebSockets, Server-Sent Events), мультимедиа (<code>&lt;audio&gt;</code>, <code>&lt;video&gt;</code>), 3D и графика (WebGL, Canvas, SVG), производительность (Web Workers, requestAnimationFrame)."
  },
  {
      "q": "Какой тег использовать для кнопки?",
      "cat": "semantic",
      "a": "Семантически верно — <code>&lt;button&gt;</code>. Он доступен с клавиатуры, имеет роль <code>button</code> по умолчанию, поддерживает атрибуты <code>type</code>, <code>disabled</code>. Использовать <code>&lt;div&gt;</code> или <code>&lt;a&gt;</code> как кнопку — антипаттерн, требующий дополнительных усилий для доступности."
  },
  {
      "q": "Что такое инлайновый стиль? Можно ли его переопределить?",
      "cat": "base",
      "a": "Стиль, заданный через атрибут <code>style='...'</code> прямо в теге. Имеет высокую специфичность — выше чем классы и id-селекторы. Переопределить можно через <code>!important</code> в таблице стилей, или через JS (<code>element.style</code>). На практике инлайн-стили лучше избегать — усложняют поддержку."
  },
  {
      "q": "Есть ли у HTML элементов свои дефолтные стили?",
      "cat": "base",
      "a": "Да. Браузер применяет user-agent stylesheet: <code>&lt;h1&gt;</code> большой и жирный, <code>&lt;a&gt;</code> синий и подчёркнутый, <code>&lt;ul&gt;</code> с отступами и буллетами. Разные браузеры могут чуть отличаться — для нормализации используют reset.css или normalize.css."
  },
  {
      "q": "Что такое семантика? Какие семантичные теги вы знаете?",
      "cat": "semantic",
      "a": "Семантика — использование тега по смысловому назначению. Семантические теги HTML5: <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;figure&gt;</code>, <code>&lt;figcaption&gt;</code>, <code>&lt;time&gt;</code>, <code>&lt;mark&gt;</code>, <code>&lt;details&gt;</code>, <code>&lt;summary&gt;</code>."
  },
  {
      "q": "Как семантически правильно сверстать картинку с подписью?",
      "cat": "semantic",
      "a": "Через <code>&lt;figure&gt;</code> и <code>&lt;figcaption&gt;</code>: <code>&lt;figure&gt;&lt;img src='...' alt='...'&gt;&lt;figcaption&gt;Подпись&lt;/figcaption&gt;&lt;/figure&gt;</code>. Это семантически связывает изображение с подписью."
  },
  {
      "q": "Типы списков в HTML?",
      "cat": "base",
      "a": "<code>&lt;ul&gt;</code> — неупорядоченный (маркированный), <code>&lt;ol&gt;</code> — упорядоченный (нумерованный, атрибуты <code>type</code>, <code>start</code>, <code>reversed</code>), <code>&lt;dl&gt;</code> — список определений (<code>&lt;dt&gt;</code> — термин, <code>&lt;dd&gt;</code> — описание)."
  },
  {
      "q": "Для какого тега используется атрибут alt и зачем он нужен?",
      "cat": "semantic",
      "a": "Атрибут <code>alt</code> у <code>&lt;img&gt;</code>. Нужен для: 1) screen reader'ов — зачитывает описание изображения; 2) если картинка не загрузилась — показывается текст; 3) SEO — поисковики индексируют. Пустой <code>alt=''</code> — для декоративных картинок (скринридер их пропустит)."
  },
  {
      "q": "Разница между <strong><em> и <b><i>?",
      "cat": "semantic",
      "a": "<code>&lt;strong&gt;</code> — семантически важное содержимое (скринридер сделает акцент), <code>&lt;em&gt;</code> — смысловое выделение/ударение. <code>&lt;b&gt;</code> и <code>&lt;i&gt;</code> — визуальное оформление без смысловой нагрузки. В современной верстке предпочтительнее <code>&lt;strong&gt;</code> и <code>&lt;em&gt;</code>."
  },
  {
      "q": "Типы input элементов в HTML?",
      "cat": "form",
      "a": "text, password, email, number, tel, url, search, date, time, datetime-local, month, week, range, color, checkbox, radio, file, hidden, submit, reset, button, image. В HTML5 добавили много новых типов с встроенной валидацией."
  },
  {
      "q": "Для чего используют data-атрибуты?",
      "cat": "base",
      "a": "Для хранения произвольных данных прямо в разметке: <code>data-user-id='42'</code>. Доступны через JS: <code>element.dataset.userId</code>. Удобно для передачи данных из backend в frontend без скрытых полей или глобальных переменных. Не влияют на отображение."
  },
  {
      "q": "Для чего используется элемент <datalist>?",
      "cat": "form",
      "a": "Предоставляет список подсказок для <code>&lt;input&gt;</code>: <code>&lt;input list='fruits'&gt;&lt;datalist id='fruits'&gt;&lt;option value='Apple'&gt;...&lt;/datalist&gt;</code>. Пользователь может выбрать из списка или ввести своё значение — в отличие от <code>&lt;select&gt;</code>."
  },
  {
      "q": "Что такое мета-теги?",
      "cat": "base",
      "a": "Теги <code>&lt;meta&gt;</code> в <code>&lt;head&gt;</code> — передают метаданные о документе браузеру и поисковикам. Примеры: charset, viewport, description, og:title (OpenGraph). Не видны пользователю, но важны для SEO и корректного отображения."
  },
  {
      "q": "Что описывается в теге <head>?",
      "cat": "base",
      "a": "Метаданные документа: <code>&lt;title&gt;</code>, <code>&lt;meta charset&gt;</code>, <code>&lt;meta viewport&gt;</code>, SEO-теги, <code>&lt;link&gt;</code> (CSS, иконки, шрифты), <code>&lt;script&gt;</code> (в том числе defer/async), <code>&lt;base&gt;</code>. Всё что нужно браузеру, но не показывается в теле страницы."
  },
  {
      "q": "Для чего используются теги <tr>, <th>, <td>?",
      "cat": "base",
      "a": "Элементы таблицы: <code>&lt;tr&gt;</code> — строка (table row), <code>&lt;th&gt;</code> — заголовочная ячейка (table header, по умолчанию жирная и выровнена по центру, имеет <code>scope</code> для доступности), <code>&lt;td&gt;</code> — обычная ячейка данных (table data)."
  },
  {
      "q": "Расскажите о meta-теге с name='viewport'",
      "cat": "base",
      "a": "Управляет отображением на мобильных устройствах. Стандартный вариант: <code>&lt;meta name='viewport' content='width=device-width, initial-scale=1'&gt;</code>. Без него мобильный браузер масштабирует страницу как десктоп — всё мелкое и нечитаемое."
  },
  {
      "q": "Что такое элемент <canvas>? И для чего он используется?",
      "cat": "media",
      "a": "Элемент для растровой графики через JavaScript API. Используется для: игр, анимации, обработки изображений, визуализации данных, видеоэффектов. Всё рисуется через JS: <code>ctx.fillRect()</code>, <code>ctx.drawImage()</code> и т.д. Контент недоступен для скринридеров — нужна альтернатива."
  },
  {
      "q": "Разница между <canvas> и <svg>?",
      "cat": "media",
      "a": "Canvas — растровый, рисуется пиксель за пикселем через JS. SVG — векторный, описывается в XML, элементы попадают в DOM. Canvas быстрее для тысяч динамических объектов. SVG масштабируется без потери качества, доступен для CSS и JS событий, лучше для статичных/интерактивных иллюстраций."
  },
  {
      "q": "В каких случаях лучше использовать <canvas>, а в каких <svg>?",
      "cat": "media",
      "a": "Canvas: игры, real-time анимации с тысячами объектов, обработка видео и изображений. SVG: иконки, логотипы, инфографика, схемы — всё, что должно масштабироваться и быть доступным. Простое правило: много мелких объектов — canvas, мало крупных — SVG."
  },
  {
      "q": "Для чего нужен атрибут autocomplete?",
      "cat": "form",
      "a": "Управляет автозаполнением браузером. <code>autocomplete='off'</code> — отключить, <code>'email'</code>, <code>'current-password'</code>, <code>'name'</code> — подсказки браузеру, что подставить. Важен для UX и безопасности (пароли не должны кэшироваться в публичных местах)."
  },
  {
      "q": "Что такое элемент <output> в HTML5?",
      "cat": "form",
      "a": "Элемент для отображения результата вычислений формы. Семантически связан с формой через атрибут <code>for</code>: <code>&lt;output for='a b' name='result'&gt;</code>. Обновляется через JS. Аналог read-only поля результата."
  },
  {
      "q": "Что такое свойство valueAsNumber?",
      "cat": "form",
      "a": "Свойство DOM для <code>&lt;input type='number'&gt;</code>, <code>range</code>, <code>date</code> и др. Возвращает значение как число (не строку), что удобнее чем парсить <code>input.value</code>. Если значение некорректно — возвращает <code>NaN</code>."
  },
  {
      "q": "Что такое атрибут target? Какие значения он принимает?",
      "cat": "base",
      "a": "У тегов <code>&lt;a&gt;</code> и <code>&lt;form&gt;</code>: указывает, где открыть результат. Значения: <code>_self</code> (текущая вкладка, по умолчанию), <code>_blank</code> (новая вкладка), <code>_parent</code> (родительский фрейм), <code>_top</code> (весь экран), или имя фрейма. При <code>_blank</code> рекомендуется добавить <code>rel='noopener noreferrer'</code>."
  },
  {
      "q": "Что такое ApplicationCache в HTML5?",
      "cat": "perf",
      "a": "Устаревший (deprecated) механизм кеширования ресурсов для офлайн-работы через файл манифеста. Был убран из стандарта. Сейчас его заменяет Service Worker + Cache API — гораздо более гибкое и мощное решение."
  },
  {
      "q": "Для чего используется элемент <picture>?",
      "cat": "media",
      "a": "Позволяет задать несколько источников изображения для разных условий: размер экрана, плотность пикселей, формат файла (WebP vs JPEG). Браузер выбирает подходящий. Например, подаём WebP для поддерживающих, JPEG для остальных: <code>&lt;source type='image/webp' srcset='...'&gt;</code>."
  },
  {
      "q": "Что такое srcset? Как он работает?",
      "cat": "media",
      "a": "Атрибут тегов <code>&lt;img&gt;</code> и <code>&lt;source&gt;</code>. Задаёт набор изображений с дескрипторами ширины (<code>300w</code>) или плотности (<code>2x</code>). Браузер сам выбирает оптимальное с учётом экрана, плотности пикселей и ширины. Вместе с <code>sizes</code> даёт точный контроль над выбором."
  },
  {
      "q": "Как семантически верно сверстать навигационное меню?",
      "cat": "semantic",
      "a": "<code>&lt;nav&gt;</code> + <code>&lt;ul&gt;</code>/<code>&lt;li&gt;</code>/<code>&lt;a&gt;</code>: элемент <code>&lt;nav&gt;</code> семантически отмечает блок навигации, список — структуру, ссылки — пункты. При нескольких <code>&lt;nav&gt;</code> на странице — добавить <code>aria-label</code> для различения."
  },
  {
      "q": "Что такое <iframe>?",
      "cat": "misc",
      "a": "Встраивает другой HTML-документ внутрь текущей страницы. Имеет изолированный контекст. Используется для: виджетов (карты, видео YouTube), рекламы, встроенных приложений. Атрибуты <code>sandbox</code> и <code>allow</code> контролируют разрешения."
  },
  {
      "q": "Для чего используются теги <sub> и <sup>?",
      "cat": "semantic",
      "a": "<code>&lt;sub&gt;</code> — подстрочный текст (H₂O, индексы в формулах), <code>&lt;sup&gt;</code> — надстрочный (x², сноски). Семантические теги — лучше чем CSS-позиционирование, так как сохраняют смысл при копировании и для скринридеров."
  },
  {
      "q": "Как можно скрыть элемент без CSS и JS?",
      "cat": "misc",
      "a": "Атрибут <code>hidden</code>: <code>&lt;div hidden&gt;</code> — браузер скрывает элемент (эквивалент <code>display:none</code>). Также: <code>&lt;details&gt;</code> без <code>open</code> скрывает содержимое, тег <code>&lt;template&gt;</code> — контент не рендерится вообще."
  },
  {
      "q": "Разница между <meter> и <progress>?",
      "cat": "semantic",
      "a": "<code>&lt;progress&gt;</code> — прогресс выполнения задачи (0–100%, может быть indeterminate). <code>&lt;meter&gt;</code> — измерение в заданном диапазоне с семантикой (high, low, optimum): уровень батареи, использование диска. Разные семантические смыслы."
  },
  {
      "q": "Как можно сгруппировать опции внутри <select>?",
      "cat": "form",
      "a": "Тег <code>&lt;optgroup label='Название'&gt;</code> — оборачивает группу <code>&lt;option&gt;</code>. Браузер визуально отделяет группы. Сами <code>&lt;optgroup&gt;</code> не выбираются."
  },
  {
      "q": "Как изменить форму картинки или HTML-элемента?",
      "cat": "misc",
      "a": "CSS: <code>border-radius</code> для скругления/кружка, <code>clip-path</code> для произвольной формы (polygon, ellipse, path). Для <code>&lt;img&gt;</code> также работает <code>clip-path</code> и <code>shape-outside</code> (для обтекания текстом). В SVG — clip-path и mask."
  },
  {
      "q": "Чем отличается <article> от <section>?",
      "cat": "semantic",
      "a": "<code>&lt;article&gt;</code> — самодостаточный контент, который можно вырвать из контекста страницы (пост, новость, комментарий). <code>&lt;section&gt;</code> — тематическая группировка внутри документа, которая сама по себе не имеет смысла без контекста. Article может содержать несколько section."
  },
  {
      "q": "Расскажите об особенностях стилизации <svg>?",
      "cat": "media",
      "a": "SVG стилизуется CSS-свойствами, но они отличаются: вместо <code>color</code> — <code>fill</code>, вместо <code>border</code> — <code>stroke</code>. Можно применять внешние стили, <code>&lt;style&gt;</code> внутри SVG, инлайн-атрибуты. Inline SVG стилизуется из общего CSS документа. External SVG через <code>&lt;img&gt;</code> — стилизовать нельзя."
  },
  {
      "q": "Разница между кнопкой и ссылкой в HTML?",
      "cat": "semantic",
      "a": "<code>&lt;a&gt;</code> — навигация, переход по URL или якорю. <code>&lt;button&gt;</code> — действие (submit, сброс, JS-обработчик). Если нажатие меняет URL — ссылка, если выполняет действие — кнопка. Путать их — плохо для семантики, SEO и доступности."
  },
  {
      "q": "Для чего используется атрибут decoding?",
      "cat": "media",
      "a": "У <code>&lt;img&gt;</code>: подсказывает браузеру, как декодировать изображение. <code>sync</code> — блокирует рендер до декодирования, <code>async</code> — не блокирует (лучше для производительности), <code>auto</code> — браузер решает сам."
  },
  {
      "q": "Для чего используется атрибут enterkeyhint?",
      "cat": "form",
      "a": "Подсказывает мобильной клавиатуре, какую надпись показать на кнопке Enter/Return. Значения: <code>done</code>, <code>go</code>, <code>next</code>, <code>previous</code>, <code>search</code>, <code>send</code>. Улучшает UX на мобильных устройствах."
  },
  {
      "q": "Для чего используют атрибут novalidate?",
      "cat": "form",
      "a": "Атрибут <code>&lt;form novalidate&gt;</code> — отключает встроенную HTML5-валидацию при сабмите. Используется, когда нужна кастомная валидация через JavaScript с собственными сообщениями об ошибках."
  },
  {
      "q": "Для чего используют атрибут inputmode?",
      "cat": "form",
      "a": "Подсказывает браузеру/устройству, какую виртуальную клавиатуру показать. Значения: <code>numeric</code> (цифры), <code>decimal</code> (с точкой), <code>email</code>, <code>url</code>, <code>tel</code>, <code>search</code>. Работает независимо от типа input."
  },
  {
      "q": "Для чего используется атрибут pattern?",
      "cat": "form",
      "a": "Задаёт регулярное выражение для валидации значения <code>&lt;input&gt;</code>. Браузер проверяет при сабмите. Пример: <code>pattern='[0-9]{4}'</code> — ровно 4 цифры. Стоит добавить <code>title</code> с описанием — он покажется в сообщении об ошибке."
  },
  {
      "q": "Что такое атрибут rel='nofollow'?",
      "cat": "misc",
      "a": "Атрибут тега <code>&lt;a&gt;</code>, указывающий поисковикам не передавать «вес» сайта по этой ссылке. Используется для пользовательского контента, рекламных ссылок, ненадёжных источников. Также есть <code>noopener</code> — для безопасности при <code>target='_blank'</code>."
  },
  {
      "q": "Почему стоит использовать семантические теги?",
      "cat": "semantic",
      "a": "1) Доступность — скринридеры понимают структуру; 2) SEO — поисковики лучше индексируют; 3) Читаемость кода — разработчику сразу понятна структура без комментариев; 4) Стили по умолчанию; 5) ARIA-роли по умолчанию. <code>&lt;div&gt;</code> вместо семантики — технически работает, но теряются все эти преимущества."
  },
  {
      "q": "Для чего используется тег <label>?",
      "cat": "form",
      "a": "Подписывает элемент формы. Связывается через <code>for='id'</code> или оборачиванием. При клике на <code>&lt;label&gt;</code> — фокус переходит на связанный контрол. Критически важен для доступности — скринридер зачитывает подпись. Без label поля формы недоступны."
  },
  {
      "q": "Способы улучшения производительности при использовании HTML?",
      "cat": "perf",
      "a": "Lazy loading изображений (<code>loading='lazy'</code>), правильный порядок загрузки ресурсов (<code>defer</code>/<code>async</code> для скриптов), <code>&lt;link rel='preload'&gt;</code> для критических ресурсов, правильный <code>srcset</code> для изображений, минификация HTML, уменьшение количества DOM-элементов."
  },
  {
      "q": "Основные атрибуты HTML-форм?",
      "cat": "form",
      "a": "<code>action</code> — URL отправки, <code>method</code> (GET/POST), <code>enctype</code> (тип кодирования, <code>multipart/form-data</code> для файлов), <code>novalidate</code>, <code>autocomplete</code>, <code>target</code>. GET — параметры в URL, POST — в теле запроса."
  },
  {
      "q": "Какие элементы используются для таблиц?",
      "cat": "base",
      "a": "<code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;th&gt;</code> (scope), <code>&lt;td&gt;</code> (colspan, rowspan), <code>&lt;caption&gt;</code>, <code>&lt;colgroup&gt;</code>/<code>&lt;col&gt;</code> для стилизации колонок."
  },
  {
      "q": "Расскажите о теге <samp>?",
      "cat": "semantic",
      "a": "Семантический тег для вывода программ/скриптов — sample output. Визуально отображается моноширинным шрифтом. Используется вместе с <code>&lt;kbd&gt;</code> (ввод с клавиатуры) и <code>&lt;code&gt;</code> (код) для документации и туториалов."
  },
  {
      "q": "Для чего используется атрибут capture?",
      "cat": "form",
      "a": "У <code>&lt;input type='file'&gt;</code> на мобильных устройствах. Открывает камеру или микрофон напрямую. Значения: <code>user</code> (фронтальная камера), <code>environment</code> (основная камера). <code>&lt;input type='file' accept='image/*' capture='environment'&gt;</code>."
  },
  {
      "q": "Опишите процесс валидации форм в HTML5?",
      "cat": "form",
      "a": "Браузер проверяет при сабмите: required (заполнено ли), type (email, url, number — формат), pattern (regex), min/max/minlength/maxlength. При ошибке показывает нативный попап. Кастомные сообщения — через <code>setCustomValidity()</code> JS API или атрибут <code>novalidate</code> + своя логика."
  },
  {
      "q": "Плюсы и минусы использования <iframe>?",
      "cat": "misc",
      "a": "Плюсы: изоляция, встраивание внешнего контента, независимая загрузка. Минусы: проблемы с SEO, производительность (отдельный документ), сложности с доступностью, проблемы с адаптивностью, XSS-уязвимости при небрежной настройке."
  },
  {
      "q": "Какие проблемы при использовании <div> вместо семантики?",
      "cat": "semantic",
      "a": "Теряется доступность (скринридеры не понимают роль), SEO ухудшается, код сложнее читать, нужны дополнительные ARIA-атрибуты для доступности, нет стилей по умолчанию (для кнопок, заголовков и т.д.). Технически работает, но это — \"div soup\"."
  },
  {
      "q": "Для чего используется атрибут autofocus?",
      "cat": "form",
      "a": "Автоматически ставит фокус на элемент при загрузке страницы или открытии диалога. Применяется к <code>&lt;input&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>. Важен для UX форм и модальных окон. Нельзя злоупотреблять — дезориентирует пользователя."
  },
  {
      "q": "Для чего используются <noscript> и <script>?",
      "cat": "misc",
      "a": "<code>&lt;script&gt;</code> — подключает/встраивает JS. Атрибуты <code>defer</code> (выполнить после парсинга) и <code>async</code> (параллельно). <code>&lt;noscript&gt;</code> — контент для пользователей с отключённым JS. Хорошая практика — предоставить базовую функциональность без JS."
  },
  {
      "q": "Для чего используется тег <dialog>?",
      "cat": "misc",
      "a": "Нативный HTML-элемент для модальных окон. Методы: <code>show()</code>, <code>showModal()</code> (с backdrop), <code>close()</code>. Из коробки: управление фокусом, Escape для закрытия, backdrop. Заменяет необходимость делать модалки на <code>&lt;div&gt;</code> с CSS."
  },
  {
      "q": "Чем отличается <iframe> от <embed>?",
      "cat": "misc",
      "a": "<code>&lt;iframe&gt;</code> — встраивает полноценный HTML-документ с DOM, JS, стилями. <code>&lt;embed&gt;</code> — встраивает внешний ресурс (PDF, Flash legacy, плагин). <code>&lt;embed&gt;</code> не имеет fallback-контента, менее гибкий. Для PDF-просмотра иногда используют <code>&lt;object&gt;</code> или <code>&lt;embed&gt;</code>."
  },
  {
      "q": "Для чего используется тег <template>?",
      "cat": "misc",
      "a": "Контент внутри <code>&lt;template&gt;</code> парсится браузером, но не рендерится и не выполняется (скрипты, запросы). Используется для хранения переиспользуемой разметки, которую клонируют через JS: <code>template.content.cloneNode(true)</code>. Основа Web Components."
  },
  {
      "q": "Разница между блочными и строчными элементами?",
      "cat": "base",
      "a": "Блочные (<code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>): занимают всю ширину, начинаются с новой строки, можно задавать width/height/margin. Инлайновые (<code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>): занимают только нужную ширину, идут в потоке текста, вертикальные margin/padding игнорируются. В CSS3 это управляется через <code>display</code>."
  }
]
export const CSS_QUESTIONS = [];
export const JAVASCRIPT_QUESTIONS = [];
export const REACT_QUESTIONS = [];
export const NEXT_QUESTIONS = [];
export const NODE_QUESTIONS = [];
export const DATABASE_QUESTIONS = [];
export const SECURITY_QUESTIONS = [];
export const OPTIMIZATION_QUESTIONS = [];
export const TESTING_QUESTIONS = [];
export const DEVOPS_QUESTIONS = [];
export const OTHER_QUESTIONS = [];

export const CATEGORIES = [
  {
    name: 'HTML',
    questions: HTML_QUESTIONS,
  },
  {
    name: 'CSS',
    questions: CSS_QUESTIONS,
  },
  {
    name: 'JAVASCRIPT',
    questions: JAVASCRIPT_QUESTIONS,
  },
  {
    name: 'REACT',
    questions: REACT_QUESTIONS,
  },
  {
    name: 'NEXT',
    questions: NEXT_QUESTIONS,
  },
  {
    name: 'NODE',
    questions: NODE_QUESTIONS,
  },
  {
    name: 'DATABASE',
    questions: DATABASE_QUESTIONS,
  },
  {
    name: 'SECURITY',
    questions: SECURITY_QUESTIONS,
  },
  {
    name: 'OPTIMIZATION',
    questions: OPTIMIZATION_QUESTIONS,
  },
  {
    name: 'TESTING',
    questions: TESTING_QUESTIONS,
  },
  {
    name: 'DEVOPS',
    questions: DEVOPS_QUESTIONS,
  },
  {
    name: 'OTHER',
    questions: OTHER_QUESTIONS,
  },
]