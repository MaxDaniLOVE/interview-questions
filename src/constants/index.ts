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
export const CSS_QUESTIONS = [
  {
    "q": "Что такое CSS? И для чего он используется?",
    "cat": "css-base",
    "a": "CSS — Cascading Style Sheets, каскадные таблицы стилей. Используются для описания внешнего вида HTML-документа: цветов, размеров, отступов, позиционирования, анимаций и адаптивности интерфейса."
  },
  {
    "q": "Что такое CSS-правило?",
    "cat": "css-base",
    "a": "CSS-правило состоит из селектора и блока деклараций. Например: <code>p { color: red; }</code>. Селектор определяет элементы, а декларации задают стили."
  },
  {
    "q": "Варианты добавление CSS стилей на страницу?",
    "cat": "css-base",
    "a": "Inline-стили через <code>style</code>, внутренние стили через <code>&lt;style&gt;</code> и внешние файлы через <code>&lt;link&gt;</code>. В production чаще используют внешние CSS-файлы."
  },
  {
    "q": "Типы позиционирования в CSS?",
    "cat": "css-layout",
    "a": "Основные значения: <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, <code>sticky</code>."
  },
  {
    "q": "Блочная модель CSS?",
    "cat": "css-layout",
    "a": "Box model состоит из <code>content</code>, <code>padding</code>, <code>border</code> и <code>margin</code>. При <code>box-sizing: border-box</code> border и padding входят в итоговый размер элемента."
  },
  {
    "q": "Что такое селектор? И какие селекторы существуют?",
    "cat": "css-selectors",
    "a": "Селектор определяет, к каким элементам применять стили. Есть селекторы по тегу, классу, id, атрибуту, псевдоклассы, псевдоэлементы и комбинированные селекторы."
  },
  {
    "q": "Что такое специфичность селектора? Как считать вес селектора?",
    "cat": "css-selectors",
    "a": "Специфичность определяет приоритет CSS-правил. Inline-стили сильнее id, id сильнее классов, классы сильнее тегов. Например <code>#id .item div</code> имеет вес 1-1-1."
  },
  {
    "q": "Разница между Reset.css и Normalize.css?",
    "cat": "css-base",
    "a": "<code>Reset.css</code> полностью сбрасывает браузерные стили. <code>Normalize.css</code> сохраняет полезные дефолты, но выравнивает различия между браузерами."
  },
  {
    "q": "Разница между margin и padding?",
    "cat": "css-layout",
    "a": "<code>margin</code> — внешний отступ. <code>padding</code> — внутренний отступ между контентом и border."
  },
  {
    "q": "Разница между display: none и visibility: hidden?",
    "cat": "css-base",
    "a": "<code>display: none</code> удаляет элемент из потока документа. <code>visibility: hidden</code> скрывает элемент, но место остается."
  },
  {
    "q": "Разница между блочным и строчным (инлайновым) элементами?",
    "cat": "css-layout",
    "a": "Блочные элементы занимают всю ширину строки. Inline-элементы располагаются в строке и занимают ширину по контенту."
  },
  {
    "q": "Разница между классом и идентификатором в CSS?",
    "cat": "css-selectors",
    "a": "Класс можно переиспользовать, id должен быть уникальным. У id выше специфичность."
  },
  {
    "q": "Что такое CSS спрайт? И для чего он используется?",
    "cat": "css-performance",
    "a": "CSS-спрайт — это объединение нескольких изображений в одно для уменьшения количества HTTP-запросов."
  },
  {
    "q": "Что такое вендорные префиксы? И для чего они используются?",
    "cat": "css-browser",
    "a": "Префиксы вроде <code>-webkit-</code> или <code>-moz-</code> использовались для экспериментальных CSS-свойств до стандартизации."
  },
  {
    "q": "Что такое псевдоэлементы? И для чего они используются?",
    "cat": "css-selectors",
    "a": "Псевдоэлементы позволяют стилизовать виртуальные части элемента. Например <code>::before</code>, <code>::after</code>, <code>::placeholder</code>."
  },
  {
    "q": "Что такое схлопывание границ (margin collapsing)?",
    "cat": "css-layout",
    "a": "При vertical margin collapsing соседние вертикальные margin объединяются в один."
  },
  {
    "q": "Что такое CSS препроцессор?",
    "cat": "css-tools",
    "a": "Препроцессоры вроде Sass или Less добавляют переменные, вложенность, функции и компилируются в обычный CSS."
  },
  {
    "q": "Что такое z-index? Как формируется контекст наложения?",
    "cat": "css-layout",
    "a": "<code>z-index</code> управляет порядком наложения элементов. Контекст наложения создают, например, <code>position + z-index</code>, <code>transform</code>, <code>opacity</code>."
  },
  {
    "q": "Порядок наложения элементов в CSS (Stacking Order)?",
    "cat": "css-layout",
    "a": "Сначала рендерятся background и border, потом обычный поток, затем positioned элементы и элементы с положительным <code>z-index</code>."
  },
  {
    "q": "Как с помощью CSS определить, поддерживается ли свойство в браузере?",
    "cat": "css-browser",
    "a": "Через правило <code>@supports</code>. Например: <code>@supports (display: grid)</code>."
  },
  {
    "q": "Как поддерживать страницы в браузерах с ограниченными функциями?",
    "cat": "css-browser",
    "a": "Используют progressive enhancement, fallback-стили, полифилы и feature detection."
  },
  {
    "q": "Как исправлять специфичные проблемы со стилями для разных браузеров?",
    "cat": "css-browser",
    "a": "Используют normalize/reset, Autoprefixer, feature detection и тестирование в разных браузерах."
  },
  {
    "q": "Глобальные ключевые слова в CSS?",
    "cat": "css-base",
    "a": "<code>inherit</code>, <code>initial</code>, <code>unset</code>, <code>revert</code>, <code>revert-layer</code>."
  },
  {
    "q": "Что такое CSS-атрибут (attr)?",
    "cat": "css-base",
    "a": "<code>attr()</code> получает значение HTML-атрибута. Например: <code>content: attr(data-title)</code>."
  },
  {
    "q": "Что такое перечисление селекторов?",
    "cat": "css-selectors",
    "a": "Объединение нескольких селекторов через запятую. Например: <code>h1, h2, h3 {}</code>."
  },
  {
    "q": "Для чего используется ключевое слово currentColor в CSS?",
    "cat": "css-base",
    "a": "<code>currentColor</code> берет текущее значение свойства <code>color</code>."
  },
  {
    "q": "Какие псевдоклассы были добавлены в CSS3?",
    "cat": "css-selectors",
    "a": "<code>:nth-child</code>, <code>:not</code>, <code>:checked</code>, <code>:disabled</code>, <code>:target</code> и другие."
  },
  {
    "q": "Какие фильтры есть в CSS?",
    "cat": "css-effects",
    "a": "<code>blur()</code>, <code>brightness()</code>, <code>contrast()</code>, <code>grayscale()</code>, <code>drop-shadow()</code> и другие."
  },
  {
    "q": "Для чего используется псевдокласс :invalid?",
    "cat": "css-forms",
    "a": "<code>:invalid</code> применяется к полям формы, не прошедшим HTML-валидацию."
  },
  {
    "q": "Расскажите про свойство display в CSS?",
    "cat": "css-layout",
    "a": "<code>display</code> определяет тип отображения элемента: <code>block</code>, <code>inline</code>, <code>flex</code>, <code>grid</code>, <code>none</code>."
  },
  {
    "q": "В каком случае лучше использовать translate() вместо абсолютного позиционирования?",
    "cat": "css-performance",
    "a": "<code>transform: translate()</code> лучше для анимаций, потому что не вызывает reflow и часто ускоряется через GPU."
  },
  {
    "q": "Что такое плавающие элементы (floats)? Как они работают?",
    "cat": "css-layout",
    "a": "<code>float</code> вырывает элемент из потока и прижимает к краю контейнера. Изначально использовался для обтекания текстом."
  },
  {
    "q": "Расскажите о свойстве text-rendering?",
    "cat": "css-text",
    "a": "<code>text-rendering</code> управляет качеством рендеринга текста, например кернингом и лигатурами."
  },
  {
    "q": "Расскажите о свойстве text-decoration-skip-ink?",
    "cat": "css-text",
    "a": "Свойство управляет тем, как underline пересекает символы, улучшая читаемость текста."
  },
  {
    "q": "Расскажите о свойстве pointer-events?",
    "cat": "css-base",
    "a": "<code>pointer-events: none</code> делает элемент прозрачным для кликов и других pointer-событий."
  },
  {
    "q": "Расскажите о свойстве outline?",
    "cat": "css-base",
    "a": "<code>outline</code> рисует внешнюю линию вокруг элемента и не влияет на размеры блока."
  },
  {
    "q": "Расскажите о свойстве scrollbar-gutter?",
    "cat": "css-layout",
    "a": "<code>scrollbar-gutter</code> резервирует место под scrollbar и помогает избежать layout shift."
  },
  {
    "q": "Почему не стоит использовать краткую запись свойств CSS?",
    "cat": "css-best-practice",
    "a": "Shorthand-свойства могут случайно перезаписывать другие CSS-свойства."
  },
  {
    "q": "Назовите псевдоэлементы для подсветки текста?",
    "cat": "css-selectors",
    "a": "Основной псевдоэлемент — <code>::selection</code>."
  },
  {
    "q": "Способы задания цвета в CSS?",
    "cat": "css-base",
    "a": "HEX, RGB/RGBA, HSL/HSLA, named colors, <code>currentColor</code>, <code>lab()</code>, <code>lch()</code>."
  },
  {
    "q": "Какие CSS-свойства используются для создания анимаций и плавных переходов?",
    "cat": "css-animation",
    "a": "<code>transition</code>, <code>animation</code> и <code>@keyframes</code>."
  },
  {
    "q": "Принципы и подходы для обеспечения масштабируемости и поддерживаемости CSS-кода?",
    "cat": "css-architecture",
    "a": "Компонентный подход, БЭМ, CSS Modules, design tokens, низкая специфичность и единая дизайн-система."
  },
  {
    "q": "Плюсы и минусы методологии БЭМ?",
    "cat": "css-architecture",
    "a": "Плюсы — предсказуемость и поддерживаемость. Минусы — длинные имена классов."
  },
  {
    "q": "Какие CSS-препроцессоры вы знаете? Преимущества их использования?",
    "cat": "css-tools",
    "a": "Sass, SCSS, Less, Stylus. Они упрощают поддержку CSS через переменные, вложенность и миксины."
  },
  {
    "q": "Какое CSS-свойство используется для изменения порядка отображения элементов на веб-странице без изменения их физического расположения в HTML-коде?",
    "cat": "css-layout",
    "a": "Свойство <code>order</code> во Flexbox и Grid."
  },
  {
    "q": "Разница между псевдоклассами и псевдоэлементами?",
    "cat": "css-selectors",
    "a": "Псевдоклассы описывают состояние элемента, псевдоэлементы — виртуальные части элемента."
  },
  {
    "q": "Как создавать и поддерживать единый стиль CSS на больших проектах?",
    "cat": "css-architecture",
    "a": "Через дизайн-систему, UI-kit, style guide, design tokens и компонентный подход."
  },
  {
    "q": "Что такое контейнерные запросы (container queries)? Как они отличаются от медиазапросов (media queries)?",
    "cat": "css-responsive",
    "a": "Container queries зависят от размера контейнера, media queries — от viewport."
  },
  {
    "q": "Расскажите о псевдоклассе :has()?",
    "cat": "css-selectors",
    "a": "<code>:has()</code> позволяет выбирать родительский элемент по наличию определенного потомка."
  },
  {
    "q": "Расскажите о медиафункции prefers-reduced-motion?",
    "cat": "css-accessibility",
    "a": "<code>prefers-reduced-motion</code> позволяет уменьшать анимации для пользователей с соответствующими системными настройками."
  },
  {
    "q": "Что такое и как работает CSS Flexbox?",
    "cat": "css-flexbox",
    "a": "Flexbox — одномерная система layout для распределения элементов по строке или колонке."
  },
  {
    "q": "Расскажите о свойстве flex в контексте Flexbox?",
    "cat": "css-flexbox",
    "a": "<code>flex</code> — shorthand для <code>flex-grow</code>, <code>flex-shrink</code> и <code>flex-basis</code>."
  },
  {
    "q": "Что такое BEM и как это помогает в CSS?",
    "cat": "css-architecture",
    "a": "BEM — методология именования классов, помогающая писать масштабируемый CSS с низкой специфичностью."
  },
  {
    "q": "Особенности, или плюсы Flexbox?",
    "cat": "css-flexbox",
    "a": "Flexbox упрощает выравнивание, распределение пространства и адаптивную верстку."
  },
  {
    "q": "Проблемы использования CSS-in-JS? Как их решить?",
    "cat": "css-architecture",
    "a": "Проблемы: runtime overhead и большой bundle size. Решения: zero-runtime подходы и extraction at build time."
  },
  {
    "q": "Расскажите о свойстве will-change?",
    "cat": "css-performance",
    "a": "<code>will-change</code> подсказывает браузеру, какие свойства скоро будут анимироваться."
  },
  {
    "q": "Как работают каскадность и наследование в CSS?",
    "cat": "css-base",
    "a": "Каскадность учитывает origin, importance, specificity и порядок объявления. Наследование передает некоторые свойства дочерним элементам."
  },
  {
    "q": "Как работают transition и animation, и в чем их отличия?",
    "cat": "css-animation",
    "a": "<code>transition</code> анимирует переход между состояниями, а <code>animation</code> позволяет создавать сложные keyframe-анимации."
  },
  {
    "q": "Разница между Flexbox и CSS Grid?",
    "cat": "css-layout",
    "a": "Flexbox — одномерный layout, Grid — двумерный."
  },
  {
    "q": "Как можно реализовать адаптивный дизайн без медиа-запросов?",
    "cat": "css-responsive",
    "a": "Через flexbox, grid, относительные единицы, <code>clamp()</code>, <code>minmax()</code> и container queries."
  },
  {
    "q": "Разница между mobile-first и desktop-first подходами?",
    "cat": "css-responsive",
    "a": "Mobile-first строится от мобильных устройств через <code>min-width</code>, desktop-first — от десктопа через <code>max-width</code>."
  },
  {
    "q": "Что такое CSS containment? Как использовать свойство contain?",
    "cat": "css-performance",
    "a": "<code>contain</code> ограничивает влияние элемента на layout, paint и style для оптимизации производительности."
  },
  {
    "q": "Объясните концепцию CSS cascade layers (@layer)?",
    "cat": "css-base",
    "a": "<code>@layer</code> позволяет явно управлять приоритетом слоев CSS и уменьшать проблемы со специфичностью."
  },
  {
    "q": "Что такое CSS container queries? Как они работают?",
    "cat": "css-responsive",
    "a": "Container queries позволяют применять стили в зависимости от размеров контейнера через <code>@container</code>."
  }
];
export const JAVASCRIPT_QUESTIONS = [
  {
    "q": "Типы данных в JavaScript?",
    "cat": "js-base",
    "a": "В JavaScript есть примитивные типы: <code>string</code>, <code>number</code>, <code>bigint</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>. И ссылочный тип — <code>object</code>."
  },
  {
    "q": "Разница между == и === (нестрогое/строгое равенство)?",
    "cat": "js-base",
    "a": "<code>==</code> сравнивает значения с приведением типов, а <code>===</code> сравнивает значения и типы без приведения."
  },
  {
    "q": "Что такое Strict mode в JavaScript?",
    "cat": "js-base",
    "a": "Strict mode включается через <code>'use strict'</code> и делает JavaScript более строгим: запрещает неявные глобальные переменные, дубли параметров и некоторые небезопасные конструкции."
  },
  {
    "q": "Разница между function declaration и function expression?",
    "cat": "js-functions",
    "a": "<code>Function declaration</code> поднимается полностью через hoisting. <code>Function expression</code> создается во время выполнения."
  },
  {
    "q": "Разница между null и undefined?",
    "cat": "js-base",
    "a": "<code>undefined</code> означает отсутствие присвоенного значения, а <code>null</code> — намеренное отсутствие значения."
  },
  {
    "q": "Типы таймеров в JavaScript?",
    "cat": "js-browser",
    "a": "Основные таймеры: <code>setTimeout</code>, <code>setInterval</code>, <code>requestAnimationFrame</code>."
  },
  {
    "q": "Что такое поднятие (Hoisting)?",
    "cat": "js-base",
    "a": "Hoisting — механизм, при котором объявления переменных и функций поднимаются вверх своей области видимости до выполнения кода."
  },
  {
    "q": "Что такое область видимости (Scope)?",
    "cat": "js-base",
    "a": "Scope определяет доступность переменных. Есть глобальная, функциональная и блочная область видимости."
  },
  {
    "q": "Разница между var, let и const?",
    "cat": "js-base",
    "a": "<code>var</code> имеет функциональную область видимости и hoisting. <code>let</code> и <code>const</code> имеют блочную область видимости. <code>const</code> нельзя переназначить."
  },
  {
    "q": "Что такое замыкание (Closure)?",
    "cat": "js-functions",
    "a": "Замыкание — это функция, которая запоминает внешнее лексическое окружение даже после завершения внешней функции."
  },
  {
    "q": "Что обозначает this в JavaScript?",
    "cat": "js-base",
    "a": "<code>this</code> — ссылка на контекст выполнения. Значение зависит от способа вызова функции."
  },
  {
    "q": "Что такое функции высшего порядка (Higher Order Functions)?",
    "cat": "js-functions",
    "a": "Это функции, которые принимают другие функции как аргументы или возвращают функции."
  },
  {
    "q": "Как превратить любой тип данных в булевый? Перечислите ложные значения в JS?",
    "cat": "js-base",
    "a": "Через <code>Boolean(value)</code> или <code>!!value</code>. Ложные значения: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>''</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>."
  },
  {
    "q": "Методы строк в JavaScript?",
    "cat": "js-strings",
    "a": "<code>slice()</code>, <code>substring()</code>, <code>includes()</code>, <code>replace()</code>, <code>split()</code>, <code>trim()</code>, <code>toUpperCase()</code>, <code>toLowerCase()</code>."
  },
  {
    "q": "Методы массивов в JavaScript?",
    "cat": "js-arrays",
    "a": "<code>map()</code>, <code>filter()</code>, <code>reduce()</code>, <code>find()</code>, <code>some()</code>, <code>every()</code>, <code>push()</code>, <code>pop()</code>, <code>slice()</code>, <code>splice()</code>."
  },
  {
    "q": "Что такое чистая функция?",
    "cat": "js-functions",
    "a": "Чистая функция всегда возвращает одинаковый результат при одинаковых аргументах и не имеет side effects."
  },
  {
    "q": "Разница между .forEach() и .map()?",
    "cat": "js-arrays",
    "a": "<code>.map()</code> возвращает новый массив, а <code>.forEach()</code> используется для побочных эффектов."
  },
  {
    "q": "Разница между .call(), .apply() и bind()?",
    "cat": "js-functions",
    "a": "<code>call()</code> вызывает функцию сразу и принимает аргументы списком. <code>apply()</code> принимает массив аргументов. <code>bind()</code> возвращает новую функцию с привязанным контекстом."
  },
  {
    "q": "Почему в JS функции называют объектами первого класса?",
    "cat": "js-functions",
    "a": "Потому что функции можно хранить в переменных, передавать как аргументы и возвращать из других функций."
  },
  {
    "q": "Как определить наличие свойства в объекте?",
    "cat": "js-objects",
    "a": "Через оператор <code>in</code>, метод <code>hasOwnProperty()</code> или проверку на <code>undefined</code>."
  },
  {
    "q": "Что такое IIFE (Immediately Invoked Function Expression)?",
    "cat": "js-functions",
    "a": "Это функция, которая вызывается сразу после создания. Например: <code>(function(){})()</code>."
  },
  {
    "q": "Что такое псевдомассив arguments?",
    "cat": "js-functions",
    "a": "<code>arguments</code> — псевдомассив аргументов функции. Сейчас чаще используют rest-параметры <code>(...args)</code>."
  },
  {
    "q": "Разница между host-объектами и нативными объектами?",
    "cat": "js-base",
    "a": "Нативные объекты предоставляет JavaScript, а host-объекты предоставляет среда выполнения, например браузер."
  },
  {
    "q": "Почему результат сравнения 2х объектов это false?",
    "cat": "js-objects",
    "a": "Потому что объекты сравниваются по ссылке, а не по содержимому."
  },
  {
    "q": "Что такое прототипное наследование? Как создать объект без прототипа?",
    "cat": "js-prototype",
    "a": "Объекты наследуют свойства через prototype chain. Объект без прототипа создается через <code>Object.create(null)</code>."
  },
  {
    "q": "Почему расширение нативных JavaScript-объектов это плохая практика?",
    "cat": "js-best-practice",
    "a": "Это может вызывать конфликты с будущими стандартами и сторонними библиотеками."
  },
  {
    "q": "Что такое NaN? Как определить, что значение равно NaN?",
    "cat": "js-base",
    "a": "<code>NaN</code> означает Not-a-Number. Проверять лучше через <code>Number.isNaN()</code>."
  },
  {
    "q": "Что такое объектная обертка (Wrapper Objects)?",
    "cat": "js-base",
    "a": "Это объекты-обертки для примитивов: <code>String</code>, <code>Number</code>, <code>Boolean</code>."
  },
  {
    "q": "Как в JavaScript создать объект?",
    "cat": "js-objects",
    "a": "Через литерал <code>{}</code>, <code>new Object()</code>, функцию-конструктор, класс или <code>Object.create()</code>."
  },
  {
    "q": "Для чего используется ключевое слово new?",
    "cat": "js-objects",
    "a": "<code>new</code> создает новый объект, связывает его с prototype и вызывает функцию-конструктор."
  },
  {
    "q": "Операторы «И» и «ИЛИ» (&& и ||)?",
    "cat": "js-operators",
    "a": "<code>&&</code> возвращает первое ложное значение или последнее истинное. <code>||</code> возвращает первое истинное значение."
  },
  {
    "q": "Для чего используется оператор двойного отрицания (!!)?",
    "cat": "js-operators",
    "a": "<code>!!</code> используется для преобразования значения в boolean."
  },
  {
    "q": "Для чего используется оператор остатка (%)?",
    "cat": "js-operators",
    "a": "Оператор <code>%</code> возвращает остаток от деления."
  },
  {
    "q": "Как проверить, является ли значение массивом?",
    "cat": "js-arrays",
    "a": "Через <code>Array.isArray()</code>."
  },
  {
    "q": "Как работает boxing/unboxing в JavaScript?",
    "cat": "js-base",
    "a": "При обращении к методам примитив временно оборачивается в объект-обертку."
  },
  {
    "q": "Что такое мемоизация? Реализуйте базовую логику функции для мемоизации?",
    "cat": "js-performance",
    "a": "Мемоизация — кеширование результатов функции. Обычно используют объект или <code>Map</code> для хранения результатов."
  },
  {
    "q": "Разница между оператором in и методом .hasOwnProperty()?",
    "cat": "js-objects",
    "a": "<code>in</code> ищет свойство во всей prototype chain, а <code>hasOwnProperty()</code> — только в самом объекте."
  },
  {
    "q": "Разница между глубокой (deep) и поверхностной (shallow) копиями объекта? Как сделать каждую из них?",
    "cat": "js-objects",
    "a": "Shallow copy копирует только первый уровень. Deep copy копирует вложенные объекты. Для deep copy используют <code>structuredClone()</code>."
  },
  {
    "q": "Что такое цепочка вызовов функций (chaining)? Как реализовать такой подход?",
    "cat": "js-functions",
    "a": "Chaining — возможность вызывать методы подряд. Реализуется через возврат <code>this</code>."
  },
  {
    "q": "Что такое необъявленная переменная?",
    "cat": "js-base",
    "a": "Это переменная, созданная без <code>var</code>, <code>let</code> или <code>const</code>. В non-strict mode становится глобальной."
  },
  {
    "q": "Как передаются параметры в функцию: по ссылке или по значению?",
    "cat": "js-base",
    "a": "Примитивы передаются по значению, объекты — по ссылке."
  },
  {
    "q": "Что такое прототип объекта в JavaScript?",
    "cat": "js-prototype",
    "a": "Прототип — объект, от которого наследуются свойства и методы."
  },
  {
    "q": "Как работает метод Object.create()?",
    "cat": "js-objects",
    "a": "<code>Object.create(proto)</code> создает новый объект с указанным прототипом."
  },
  {
    "q": "Разниц между Object.freeze() и Object.seal()?",
    "cat": "js-objects",
    "a": "<code>freeze()</code> полностью замораживает объект. <code>seal()</code> запрещает удаление и добавление свойств, но позволяет менять существующие."
  },
  {
    "q": "Разница между методами .slice() и .splice()?",
    "cat": "js-arrays",
    "a": "<code>slice()</code> не изменяет исходный массив и возвращает его часть. <code>splice()</code> изменяет массив."
  },
  {
    "q": "Как работают методы .find(), .findIndex() и .indexOf()?",
    "cat": "js-arrays",
    "a": "<code>find()</code> возвращает найденный элемент, <code>findIndex()</code> — индекс элемента, а <code>indexOf()</code> ищет по строгому равенству."
  },
  {
    "q": "Плюсы и минусы использования use strict?",
    "cat": "js-base",
    "a": "Плюсы: безопасность и раннее обнаружение ошибок. Минусы: старый код может перестать работать."
  },
  {
    "q": "Разница между методами .push(), .pop(), .shift() и .unshift()?",
    "cat": "js-arrays",
    "a": "<code>push()</code> добавляет в конец, <code>pop()</code> удаляет с конца, <code>shift()</code> удаляет с начала, <code>unshift()</code> добавляет в начало."
  },
  {
    "q": "Плюсы и минусы иммутабельности? Как достичь иммутабельности в JS?",
    "cat": "js-best-practice",
    "a": "Иммутабельность делает состояние предсказуемым. Минусы — расход памяти. Достигается через spread-оператор, <code>Object.assign()</code> и immutable libraries."
  },
  {
    "q": "Типы всплывающих окон в JavaScript?",
    "cat": "js-browser",
    "a": "<code>alert()</code>, <code>confirm()</code>, <code>prompt()</code>."
  },
  {
    "q": "Типы объектов JavaScript?",
    "cat": "js-objects",
    "a": "Встроенные объекты: <code>Object</code>, <code>Array</code>, <code>Date</code>, <code>Map</code>, <code>Set</code>, <code>Promise</code>."
  },
  {
    "q": "Парадигмы программирования в JavaScript?",
    "cat": "js-base",
    "a": "JavaScript поддерживает процедурное, объектно-ориентированное, функциональное и событийно-ориентированное программирование."
  },
  {
    "q": "Типы ошибок в JavaScript?",
    "cat": "js-errors",
    "a": "<code>SyntaxError</code>, <code>ReferenceError</code>, <code>TypeError</code>, <code>RangeError</code> и другие."
  },
  {
    "q": "Разница между typeof и instanceof?",
    "cat": "js-base",
    "a": "<code>typeof</code> определяет тип значения, а <code>instanceof</code> проверяет prototype chain."
  },
  {
    "q": "JavaScript статически, или динамически типизированный язык?",
    "cat": "js-base",
    "a": "JavaScript — динамически типизированный язык."
  },
  {
    "q": "Что такое регулярное выражение (Regular Expression)?",
    "cat": "js-regexp",
    "a": "Регулярное выражение — шаблон для поиска и обработки строк."
  },
  {
    "q": "Что такое рекурсия?",
    "cat": "js-functions",
    "a": "Рекурсия — функция, вызывающая саму себя до выполнения базового условия."
  },
  {
    "q": "Что такое прототип (Prototype) объекта?",
    "cat": "js-prototype",
    "a": "Prototype — объект, через который реализуется наследование."
  },
  {
    "q": "Какие методы используются в регулярных выражениях?",
    "cat": "js-regexp",
    "a": "<code>test()</code>, <code>exec()</code>, <code>match()</code>, <code>replace()</code>, <code>search()</code>, <code>split()</code>."
  },
  {
    "q": "Что такое полифил (polyfill)?",
    "cat": "js-browser",
    "a": "Полифил — код, добавляющий поддержку новых возможностей JavaScript в старых браузерах."
  },
  {
    "q": "Что такое switch/case? Правила использования switch/case?",
    "cat": "js-base",
    "a": "<code>switch</code> используется для множественного выбора. Обычно используют <code>break</code>, чтобы избежать fallthrough."
  },
  {
    "q": "Типы функций по способности принимать другие функции?",
    "cat": "js-functions",
    "a": "Higher-order functions принимают функции как аргументы или возвращают функции."
  },
  {
    "q": "Что такое выражения (expression) и инструкции (statement) в JavaScript?",
    "cat": "js-base",
    "a": "Expression возвращает значение, statement выполняет действие."
  },
  {
    "q": "Разница между .some() и .every()?",
    "cat": "js-arrays",
    "a": "<code>some()</code> проверяет хотя бы один элемент, <code>every()</code> — все элементы."
  },
  {
    "q": "Как сгенерировать случайное число в JavaScript?",
    "cat": "js-base",
    "a": "Через <code>Math.random()</code>."
  },
  {
    "q": "Типы операторов в JavaScript?",
    "cat": "js-operators",
    "a": "Арифметические, логические, сравнительные, побитовые, тернарные, операторы присваивания."
  },
  {
    "q": "Разница между параметром и аргументом функции?",
    "cat": "js-functions",
    "a": "Параметр — переменная в объявлении функции, аргумент — значение при вызове."
  },
  {
    "q": "Правила задания имён для переменных и функций в JavaScript?",
    "cat": "js-base",
    "a": "Имя может содержать буквы, цифры, <code>$</code> и <code>_</code>, но не может начинаться с цифры."
  },
  {
    "q": "Разница между явным и неявным преобразованием (Implicit and Explicit Coercion)?",
    "cat": "js-base",
    "a": "Явное преобразование выполняет разработчик, неявное делает JavaScript автоматически."
  },
  {
    "q": "Для чего применяется метод Array.from()?",
    "cat": "js-arrays",
    "a": "<code>Array.from()</code> создает массив из iterable или array-like объекта."
  },
  {
    "q": "Назовите способы преобразования массива в объект?",
    "cat": "js-objects",
    "a": "Через <code>Object.assign()</code>, spread-оператор или <code>Object.fromEntries()</code>."
  },
  {
    "q": "Разница между Object и Map?",
    "cat": "js-objects",
    "a": "<code>Map</code> поддерживает ключи любого типа и удобнее для частых операций добавления и удаления."
  },
  {
    "q": "Что такое каррирование (currying)?",
    "cat": "js-functions",
    "a": "Currying — преобразование функции с несколькими аргументами в цепочку функций с одним аргументом."
  },
  {
    "q": "Для чего используются метод Object.seal()?",
    "cat": "js-objects",
    "a": "<code>Object.seal()</code> запрещает добавление и удаление свойств объекта."
  },
  {
    "q": "Для чего используется свойство .dataset?",
    "cat": "js-browser",
    "a": "<code>dataset</code> предоставляет доступ к <code>data-*</code> атрибутам HTML."
  },
  {
    "q": "Каким образом можно обмениваться кодом между файлами?",
    "cat": "js-modules",
    "a": "Через модули: <code>export/import</code> или CommonJS <code>require/module.exports</code>."
  },
  {
    "q": "Как работает «сборщик мусора» в JavaScript?",
    "cat": "js-memory",
    "a": "Garbage collector автоматически удаляет объекты, на которые больше нет ссылок."
  },
  {
    "q": "Что такое утечки памяти?",
    "cat": "js-memory",
    "a": "Это ситуация, когда память удерживается ненужными объектами и не освобождается."
  },
  {
    "q": "Назовите основные типы утечек памяти в JavaScript?",
    "cat": "js-memory",
    "a": "Глобальные переменные, забытые таймеры, замыкания, detached DOM nodes и listeners."
  },
  {
    "q": "Как работает контекст выполнения (execution context) в JavaScript?",
    "cat": "js-base",
    "a": "Execution context хранит информацию о текущем выполнении кода: переменные, <code>this</code> и scope chain."
  },
  {
    "q": "Разница между примитивом и объектом?",
    "cat": "js-base",
    "a": "Примитивы immutable и передаются по значению. Объекты mutable и передаются по ссылке."
  },
  {
    "q": "Что значит текст max call stack size exceeded в консоли?",
    "cat": "js-errors",
    "a": "Это переполнение стека вызовов, обычно из-за бесконечной рекурсии."
  },
  {
    "q": "Как реализовать отложенную загрузку изображений?",
    "cat": "js-browser",
    "a": "Через <code>loading='lazy'</code> или <code>IntersectionObserver</code>."
  },
  {
    "q": "Чем отличаются события input и change?",
    "cat": "js-browser",
    "a": "<code>input</code> срабатывает при каждом изменении, а <code>change</code> — после завершения ввода."
  },
  {
    "q": "Почему typeof null возвращает object?",
    "cat": "js-base",
    "a": "Это историческая ошибка JavaScript, сохраненная ради обратной совместимости."
  },
  {
    "q": "Зачем нужен конструктор Proxy?",
    "cat": "js-advanced",
    "a": "<code>Proxy</code> позволяет перехватывать операции над объектом: чтение, запись, удаление свойств."
  },
  {
    "q": "Что такое хвостовая рекурсия? Оптимизация рекурсии?",
    "cat": "js-functions",
    "a": "Хвостовая рекурсия — рекурсивный вызов как последняя операция функции."
  },
  {
    "q": "Что такое и как работает debounce() и throttle() в JavaScript?",
    "cat": "js-performance",
    "a": "<code>debounce()</code> откладывает вызов функции до паузы. <code>throttle()</code> ограничивает частоту вызовов."
  },
  {
    "q": "Как в JavaScript работают декораторы? Как они могут быть использованы для модификации поведения классов и методов?",
    "cat": "js-advanced",
    "a": "Декораторы позволяют модифицировать классы и методы через обертки."
  },
  {
    "q": "Как можно создать объекты с приватными свойствами и методами в JavaScript?",
    "cat": "js-advanced",
    "a": "Через замыкания, WeakMap или приватные поля классов <code>#field</code>."
  },
  {
    "q": "Методы перехвата и обработки ошибок в веб-приложениях?",
    "cat": "js-errors",
    "a": "Через <code>try/catch</code>, <code>window.onerror</code>, <code>unhandledrejection</code>."
  },
  {
    "q": "Почему в JavaScript 0.1 + 0.2 !== 0.3?",
    "cat": "js-base",
    "a": "Из-за особенностей хранения floating point чисел в формате IEEE 754."
  },
  {
    "q": "Почему глобальные переменные в JavaScript считаются \"антипаттерном\"?",
    "cat": "js-best-practice",
    "a": "Глобальные переменные загрязняют namespace и могут вызывать конфликты."
  }
];
export const ASYNC_JAVASCRIPT_QUESTIONS = [
  {
    "q": "Разница между синхронными и асинхронными функциями?",
    "cat": "js-async",
    "a": "Синхронный код выполняется последовательно и блокирует поток выполнения. Асинхронный код не блокирует основной поток и выполняется позже."
  },
  {
    "q": "Что такое AJAX?",
    "cat": "js-async",
    "a": "AJAX — Asynchronous JavaScript and XML. Подход для асинхронного обмена данными с сервером без перезагрузки страницы."
  },
  {
    "q": "Что такое same-origin policy в контексте JavaScript?",
    "cat": "js-security",
    "a": "Same-Origin Policy — политика безопасности браузера, ограничивающая доступ скриптов к ресурсам другого origin."
  },
  {
    "q": "Что такое цикл событий (event loop) и как он работает?",
    "cat": "js-event-loop",
    "a": "Event Loop — механизм JavaScript runtime, который обрабатывает стек вызовов и очереди задач, позволяя выполнять асинхронный код."
  },
  {
    "q": "Разница между микро и макрозадачами в event loop?",
    "cat": "js-event-loop",
    "a": "Микрозадачи выполняются раньше макрозадач после завершения текущего call stack. Примеры microtasks: <code>Promise.then()</code>, <code>queueMicrotask()</code>. Макрозадачи: <code>setTimeout()</code>, <code>setInterval()</code>."
  },
  {
    "q": "Расскажите о queueMicrotask?",
    "cat": "js-event-loop",
    "a": "<code>queueMicrotask()</code> добавляет задачу в очередь microtasks."
  },
  {
    "q": "Как работает setTimeout с нулевым таймером (0 ms)?",
    "cat": "js-event-loop",
    "a": "<code>setTimeout(fn, 0)</code> не выполняет функцию мгновенно, а ставит ее в очередь macrotasks."
  },
  {
    "q": "Что такое промисы (Promises)?",
    "cat": "js-promises",
    "a": "Promise — объект для работы с асинхронными операциями. Имеет состояния: pending, fulfilled и rejected."
  },
  {
    "q": "Плюсы и минусы использовании Ajax?",
    "cat": "js-async",
    "a": "Плюсы: обновление данных без reload страницы. Минусы: усложнение логики и обработка ошибок."
  },
  {
    "q": "Подходы при работе с асинхронным кодом?",
    "cat": "js-async",
    "a": "Callbacks, Promises, async/await, RxJS и event-driven подход."
  },
  {
    "q": "Преимущества использовании промисов вместо колбэков?",
    "cat": "js-promises",
    "a": "Promises улучшают читаемость кода, позволяют удобно обрабатывать ошибки и избегать callback hell."
  },
  {
    "q": "Что такое callback-функция? Что такое Callback Hell?",
    "cat": "js-callbacks",
    "a": "Callback — функция, переданная как аргумент другой функции. Callback Hell — глубокая вложенность callback-функций."
  },
  {
    "q": "Проблемы при использовании callback-функций?",
    "cat": "js-callbacks",
    "a": "Сложность чтения, вложенность, трудности обработки ошибок и поддержки кода."
  },
  {
    "q": "Что такое async/await?",
    "cat": "js-async",
    "a": "<code>async/await</code> — синтаксис поверх Promises для более удобной работы с асинхронным кодом."
  },
  {
    "q": "Разница между Promise.all(), Promise.any() и Promise.race()?",
    "cat": "js-promises",
    "a": "<code>Promise.all()</code> ожидает успешного выполнения всех промисов. <code>Promise.any()</code> возвращает первый успешно выполненный промис. <code>Promise.race()</code> возвращает результат первого завершенного промиса."
  },
  {
    "q": "Расскажите про статический метод .allSettled()?",
    "cat": "js-promises",
    "a": "<code>Promise.allSettled()</code> ожидает завершения всех промисов независимо от результата."
  },
  {
    "q": "Плюсы и минусы асинхронного программирования в JavaScript?",
    "cat": "js-async",
    "a": "Плюсы: неблокирующий UI и эффективная работа с I/O. Минусы: сложность отладки и race conditions."
  },
  {
    "q": "Как выполнить несколько асинхронных операций последовательно?",
    "cat": "js-async",
    "a": "Через цепочки Promises или <code>async/await</code>."
  },
  {
    "q": "Какие проблемы может вызвать неправильное использование асинхронности в JavaScript?",
    "cat": "js-async",
    "a": "Race conditions, memory leaks, callback hell, блокировка UI и необработанные ошибки."
  },
  {
    "q": "Что такое fetch()? Как работает функция fetch()?",
    "cat": "js-api",
    "a": "<code>fetch()</code> — API для HTTP-запросов, возвращающее Promise."
  },
  {
    "q": "Что такое JSON в JavaScript? Как его можно использовать?",
    "cat": "js-base",
    "a": "JSON — текстовый формат обмена данными. Используется для передачи данных между клиентом и сервером."
  },
  {
    "q": "Что такое и как работает коэффициент сжатия (compression ratio) в контексте веб-разработки?",
    "cat": "web-performance",
    "a": "Compression ratio показывает, насколько уменьшился размер данных после сжатия."
  },
  {
    "q": "Что делает Promise.finally()? Сценарий его применения?",
    "cat": "js-promises",
    "a": "<code>Promise.finally()</code> выполняется независимо от результата Promise. Используется для cleanup логики, например скрытия loader."
  }
];
export const ECMASCRIPT_QUESTIONS = [
  {
    "q": "Что такое ECMAScript? В чём отличие от JavaScript?",
    "cat": "es-base",
    "a": "ECMAScript — стандарт языка, описывающий его синтаксис и возможности. JavaScript — реализация стандарта ECMAScript."
  },
  {
    "q": "Разница между let, const и var?",
    "cat": "es-base",
    "a": "<code>var</code> имеет функциональную область видимости и hoisting. <code>let</code> и <code>const</code> имеют блочную область видимости. <code>const</code> запрещает переназначение переменной."
  },
  {
    "q": "Можно ли изменить значение определённое через const?",
    "cat": "es-base",
    "a": "Да, если это объект или массив, можно изменять их содержимое, но нельзя переназначить саму переменную."
  },
  {
    "q": "Что такое временная мёртвая зона (temporal dead zone)?",
    "cat": "es-base",
    "a": "TDZ — период между началом области видимости переменной и её инициализацией, когда доступ к <code>let</code> и <code>const</code> вызывает ошибку."
  },
  {
    "q": "Разница между Rest и Spread операторами?",
    "cat": "es6",
    "a": "Rest собирает значения в массив, а Spread разворачивает массивы или объекты."
  },
  {
    "q": "Что такое деструктуризация?",
    "cat": "es6",
    "a": "Механизм извлечения значений из массивов или объектов в отдельные переменные."
  },
  {
    "q": "Для чего используется цикл for…of?",
    "cat": "es6",
    "a": "<code>for...of</code> используется для перебора итерируемых объектов: массивов, строк, Set, Map."
  },
  {
    "q": "Что такое шаблонные литералы (Template Literals)?",
    "cat": "es6",
    "a": "Строки в обратных кавычках, поддерживающие интерполяцию через <code>${}</code> и многострочность."
  },
  {
    "q": "Что такое Set, Map, WeakMap и WeakSet?",
    "cat": "es6-collections",
    "a": "<code>Set</code> — коллекция уникальных значений. <code>Map</code> — коллекция пар ключ-значение. <code>WeakMap</code> и <code>WeakSet</code> хранят слабые ссылки на объекты."
  },
  {
    "q": "Разница между обычными функциями и стрелочными?",
    "cat": "es6-functions",
    "a": "Стрелочные функции не имеют собственного <code>this</code>, <code>arguments</code> и не могут использоваться как конструкторы."
  },
  {
    "q": "Разница между методом Object.freeze() и const?",
    "cat": "es-base",
    "a": "<code>const</code> запрещает переназначение переменной, а <code>Object.freeze()</code> делает объект неизменяемым."
  },
  {
    "q": "Что такое итераторы?",
    "cat": "es6",
    "a": "Итераторы — объекты с методом <code>next()</code>, позволяющие последовательно получать значения."
  },
  {
    "q": "Что такое генераторы? Когда стоит использовать генераторы?",
    "cat": "es6",
    "a": "Генераторы — функции с <code>function*</code>, которые могут приостанавливать выполнение через <code>yield</code>. Используются для ленивых вычислений и сложной асинхронной логики."
  },
  {
    "q": "Что такое ES6 модули?",
    "cat": "es6-modules",
    "a": "Система модулей JavaScript с использованием <code>import</code> и <code>export</code>."
  },
  {
    "q": "Что такое символ (Symbol) в ES6?",
    "cat": "es6",
    "a": "<code>Symbol</code> — уникальный и неизменяемый примитивный тип данных."
  },
  {
    "q": "Для чего используется метод .includes()?",
    "cat": "es6-methods",
    "a": "Проверяет наличие элемента в массиве или подстроки в строке."
  },
  {
    "q": "Для чего используется метод .getOwnPropertyDescriptors()?",
    "cat": "es6-methods",
    "a": "Возвращает дескрипторы всех собственных свойств объекта."
  },
  {
    "q": "Расскажите о методах .keys(), .values(), .entries()?",
    "cat": "es6-methods",
    "a": "<code>keys()</code> возвращает ключи, <code>values()</code> — значения, <code>entries()</code> — пары ключ-значение."
  },
  {
    "q": "Для чего используется метод .fromEntries()?",
    "cat": "es6-methods",
    "a": "Преобразует iterable с парами ключ-значение в объект."
  },
  {
    "q": "Для чего используются методы .flat() и .flatMap()?",
    "cat": "es6-methods",
    "a": "<code>flat()</code> разворачивает вложенные массивы, а <code>flatMap()</code> объединяет <code>map()</code> и <code>flat()</code>."
  },
  {
    "q": "Для чего используются методы .padStart() и .padEnd()?",
    "cat": "es6-methods",
    "a": "Добавляют символы в начало или конец строки до заданной длины."
  },
  {
    "q": "Для чего используются методы .startsWith() и .endsWith()?",
    "cat": "es6-methods",
    "a": "Проверяют, начинается или заканчивается ли строка определённой подстрокой."
  },
  {
    "q": "Как в JavaScript удалять пробельные символы в начале и в конце строки?",
    "cat": "es6-methods",
    "a": "Через методы <code>trim()</code>, <code>trimStart()</code> и <code>trimEnd()</code>."
  },
  {
    "q": "Расскажите об операторе Optional Chaining (?.)?",
    "cat": "es2020",
    "a": "Оператор <code>?.</code> безопасно обращается к вложенным свойствам без ошибки при <code>null</code> или <code>undefined</code>."
  },
  {
    "q": "Для чего используется метод .replaceAll()?",
    "cat": "es2021",
    "a": "Заменяет все вхождения подстроки в строке."
  },
  {
    "q": "Что такое оператор логического присваивания?",
    "cat": "es2021",
    "a": "Операторы <code>&&=</code>, <code>||=</code> и <code>??=</code> объединяют логическую операцию и присваивание."
  },
  {
    "q": "Как увеличить читаемость больших чисел?",
    "cat": "es2021",
    "a": "Через numeric separators: <code>1_000_000</code>."
  },
  {
    "q": "Что такое приватные аксессоры?",
    "cat": "es2022",
    "a": "Приватные поля и методы класса, объявляемые через <code>#</code>."
  },
  {
    "q": "Разница между ES6-классами и конструкторами функций?",
    "cat": "es6-classes",
    "a": "Классы — синтаксический сахар над прототипным наследованием, обеспечивающий более читаемый синтаксис."
  },
  {
    "q": "Что такое оператор нулевого слияния (??)?",
    "cat": "es2020",
    "a": "Оператор возвращает правое значение только если левое равно <code>null</code> или <code>undefined</code>."
  },
  {
    "q": "В чём отличие оператора нулевого слияния (??) и оператора \"ИЛИ\" (||)?",
    "cat": "es2020",
    "a": "<code>||</code> учитывает все falsy-значения, а <code>??</code> — только <code>null</code> и <code>undefined</code>."
  },
  {
    "q": "Назовите основные методы и свойства работы с коллекцией Map?",
    "cat": "es6-collections",
    "a": "<code>set()</code>, <code>get()</code>, <code>has()</code>, <code>delete()</code>, <code>clear()</code>, свойство <code>size</code>."
  },
  {
    "q": "Назовите основные методы и свойства работы с коллекцией Set?",
    "cat": "es6-collections",
    "a": "<code>add()</code>, <code>has()</code>, <code>delete()</code>, <code>clear()</code>, свойство <code>size</code>."
  },
  {
    "q": "Как осуществить перебор элементов в коллекциях Map и Set?",
    "cat": "es6-collections",
    "a": "Через <code>for...of</code>, <code>forEach()</code>, а также методы <code>keys()</code>, <code>values()</code> и <code>entries()</code>."
  },
  {
    "q": "Как работают дефолтные параметры в ES6?",
    "cat": "es6-functions",
    "a": "Параметры функции могут иметь значения по умолчанию: <code>function fn(a = 1) {}</code>."
  },
  {
    "q": "Что такое BigInt в ES2020 и для чего он используется?",
    "cat": "es2020",
    "a": "<code>BigInt</code> — тип данных для работы с числами больше <code>Number.MAX_SAFE_INTEGER</code>."
  },
  {
    "q": "Какие нововведения были представлены в ECMAScript 2021 (ES12)?",
    "cat": "es2021",
    "a": "<code>replaceAll()</code>, logical assignment operators, numeric separators, <code>Promise.any()</code>."
  },
  {
    "q": "Разница между for...of и for...in?",
    "cat": "es6",
    "a": "<code>for...of</code> перебирает значения iterable-объектов, а <code>for...in</code> — ключи объекта."
  }
];
export const REACT_QUESTIONS = [
  {
    "q": "Что такое React?",
    "cat": "react-base",
    "a": "React — JavaScript-библиотека для создания пользовательских интерфейсов. Основана на компонентном подходе и Virtual DOM."
  },
  {
    "q": "Перечислите особенности React?",
    "cat": "react-base",
    "a": "Компонентный подход, Virtual DOM, однонаправленный поток данных, JSX, Hooks, высокая производительность и декларативный стиль."
  },
  {
    "q": "Что такое Virtual DOM? Как он работает с React?",
    "cat": "react-base",
    "a": "Virtual DOM — виртуальная копия DOM в памяти. React сравнивает предыдущую и новую версии Virtual DOM и обновляет только измененные части реального DOM."
  },
  {
    "q": "Для чего нужен атрибут key при рендере списков?",
    "cat": "react-base",
    "a": "<code>key</code> помогает React определять, какие элементы были изменены, удалены или добавлены."
  },
  {
    "q": "Что такое PureComponent?",
    "cat": "react-performance",
    "a": "<code>PureComponent</code> — компонент, который выполняет поверхностное сравнение props и state и предотвращает лишние ререндеры."
  },
  {
    "q": "Что такое Компонент высшего порядка (Higher-Order Component/HOC)?",
    "cat": "react-patterns",
    "a": "HOC — функция, принимающая компонент и возвращающая новый компонент с дополнительной логикой."
  },
  {
    "q": "Разница между управляемыми (controlled) и не управляемыми (uncontrolled) компонентами?",
    "cat": "react-forms",
    "a": "В controlled-компонентах состояние формы хранится в React state. В uncontrolled данные хранятся внутри DOM."
  },
  {
    "q": "Методы жизненного цикла компонента в React?",
    "cat": "react-lifecycle",
    "a": "<code>componentDidMount()</code>, <code>componentDidUpdate()</code>, <code>componentWillUnmount()</code> и другие методы классовых компонентов."
  },
  {
    "q": "Стадии жизненного цикла компонента в React?",
    "cat": "react-lifecycle",
    "a": "Монтирование, обновление и размонтирование."
  },
  {
    "q": "Что такое React Reconciliation?",
    "cat": "react-base",
    "a": "Reconciliation — процесс сравнения Virtual DOM деревьев для минимального обновления реального DOM."
  },
  {
    "q": "Что такое портал (Portal)?",
    "cat": "react-advanced",
    "a": "Portal позволяет рендерить компонент вне текущего DOM-дерева через <code>ReactDOM.createPortal()</code>."
  },
  {
    "q": "Что такое контекст (Context)?",
    "cat": "react-base",
    "a": "Context API позволяет передавать данные через дерево компонентов без prop drilling."
  },
  {
    "q": "Что такое React хуки (Hooks)?",
    "cat": "react-hooks",
    "a": "Hooks позволяют использовать state и lifecycle в функциональных компонентах."
  },
  {
    "q": "Что Такое JSX?",
    "cat": "react-base",
    "a": "JSX — синтаксическое расширение JavaScript для описания UI."
  },
  {
    "q": "Разница между JSX и HTML?",
    "cat": "react-base",
    "a": "JSX похож на HTML, но использует JavaScript-синтаксис: например <code>className</code> вместо <code>class</code>."
  },
  {
    "q": "Разница между состоянием(state) и пропсами(props)?",
    "cat": "react-base",
    "a": "Props передаются компоненту извне и readonly. State хранит внутреннее изменяемое состояние компонента."
  },
  {
    "q": "Что такое React Fiber?",
    "cat": "react-advanced",
    "a": "React Fiber — новый алгоритм reconciliation, позволяющий делать рендеринг асинхронным и приоритетным."
  },
  {
    "q": "Что такое фрагмент (Fragment)? Почему фрагмент лучше, чем div?",
    "cat": "react-base",
    "a": "Fragment позволяет группировать элементы без лишнего DOM-узла."
  },
  {
    "q": "Что такое синтетические события в React?",
    "cat": "react-events",
    "a": "SyntheticEvent — кроссбраузерная обертка React над нативными событиями браузера."
  },
  {
    "q": "Что такое React-ссылка (ref)? Как создать ссылку?",
    "cat": "react-base",
    "a": "Ref дает доступ к DOM-элементу или экземпляру компонента. Создается через <code>useRef()</code> или <code>createRef()</code>."
  },
  {
    "q": "Разница между теневым (Shadow) и виртуальным (Virtual) DOM?",
    "cat": "react-base",
    "a": "Shadow DOM изолирует DOM и стили браузером, а Virtual DOM — виртуальное представление DOM для оптимизации рендера."
  },
  {
    "q": "Назовите преимущества использования React?",
    "cat": "react-base",
    "a": "Переиспользуемость компонентов, высокая производительность, Virtual DOM, большая экосистема и удобство поддержки."
  },
  {
    "q": "Что такое условный рендеринг (Conditional Rendering)? Как его выполнить?",
    "cat": "react-base",
    "a": "Это рендеринг UI в зависимости от условий. Используют <code>if</code>, тернарный оператор или <code>&&</code>."
  },
  {
    "q": "Что такое компонент-переключатель (Switching Component)?",
    "cat": "react-patterns",
    "a": "Компонент, который рендерит разные компоненты в зависимости от состояния или props."
  },
  {
    "q": "Разница между React и ReactDOM?",
    "cat": "react-base",
    "a": "<code>React</code> отвечает за создание компонентов, а <code>ReactDOM</code> — за рендеринг в браузерный DOM."
  },
  {
    "q": "Разница между компонентом и контейнером?",
    "cat": "react-patterns",
    "a": "Контейнер содержит бизнес-логику и работу с данными, а компонент отвечает за отображение UI."
  },
  {
    "q": "Как React обрабатывает, или ограничивает использование пропсов определенного типа?",
    "cat": "react-base",
    "a": "Через <code>PropTypes</code> или TypeScript."
  },
  {
    "q": "Что такое строгий режим в React? Его преимущества?",
    "cat": "react-base",
    "a": "<code>StrictMode</code> помогает находить потенциальные проблемы и устаревшие API."
  },
  {
    "q": "Что такое «бурение пропсов» (Prop Drilling)? Как его избежать?",
    "cat": "react-base",
    "a": "Prop drilling — передача props через много уровней компонентов. Избегают через Context API или state managers."
  },
  {
    "q": "Что такое «опрос» (Polling)? Как его реализовать в React?",
    "cat": "react-browser",
    "a": "Polling — периодический запрос данных. Обычно реализуется через <code>setInterval()</code> внутри <code>useEffect()</code>."
  },
  {
    "q": "Разница между элементом и компонентом?",
    "cat": "react-base",
    "a": "Элемент — описание UI, а компонент — функция или класс, создающий элементы."
  },
  {
    "q": "Что такое ReactDOMServer?",
    "cat": "react-ssr",
    "a": "<code>ReactDOMServer</code> используется для серверного рендеринга React-приложений."
  },
  {
    "q": "Что такое предохранители (Error Boundaries)?",
    "cat": "react-errors",
    "a": "Error Boundaries перехватывают ошибки дочерних компонентов и отображают fallback UI."
  },
  {
    "q": "Что такое «ленивая» (Lazy) функция?",
    "cat": "react-performance",
    "a": "<code>React.lazy()</code> позволяет загружать компонент динамически."
  },
  {
    "q": "Разница между рендерингом и монтированием?",
    "cat": "react-lifecycle",
    "a": "Рендеринг — создание Virtual DOM, а монтирование — вставка компонента в DOM."
  },
  {
    "q": "Что такое children?",
    "cat": "react-base",
    "a": "<code>children</code> — специальный prop для передачи вложенных элементов."
  },
  {
    "q": "Что такое события указателя (Pointer Events)?",
    "cat": "react-events",
    "a": "Pointer Events объединяют mouse, touch и pen события в единую модель."
  },
  {
    "q": "Что такое инверсия наследования (Inheritance Inversion)?",
    "cat": "react-patterns",
    "a": "Паттерн HOC, при котором оборачиваемый компонент расширяется через наследование."
  },
  {
    "q": "Как в React реализовать двустороннее связывание данных?",
    "cat": "react-forms",
    "a": "Через controlled components: значение хранится в state и обновляется через <code>onChange</code>."
  },
  {
    "q": "Разница между классовым и функциональным компонентами?",
    "cat": "react-base",
    "a": "Классовые компоненты используют lifecycle methods и <code>this</code>. Функциональные используют Hooks."
  },
  {
    "q": "Разница между useEffect() и componentDidMount()?",
    "cat": "react-hooks",
    "a": "<code>useEffect()</code> объединяет логику lifecycle методов. При пустом dependency array работает аналогично <code>componentDidMount()</code>."
  },
  {
    "q": "Преимущества хуков?",
    "cat": "react-hooks",
    "a": "Повторное использование логики, меньше boilerplate-кода и удобство работы с состоянием."
  },
  {
    "q": "Недостатки хуков?",
    "cat": "react-hooks",
    "a": "Сложности с dependency arrays, возможные лишние ререндеры и необходимость понимать closures."
  },
  {
    "q": "Правила (ограничения) использования хуков?",
    "cat": "react-hooks",
    "a": "Hooks нельзя вызывать в циклах, условиях и вложенных функциях. Hooks вызываются только на верхнем уровне компонента."
  },
  {
    "q": "Что такое поднятие состояния вверх (Lifting State Up)?",
    "cat": "react-state",
    "a": "Это перенос общего state в ближайший общий родительский компонент."
  },
  {
    "q": "Что делает метод shouldComponentUpdate?",
    "cat": "react-performance",
    "a": "Позволяет контролировать необходимость ререндера компонента."
  },
  {
    "q": "Разница между createElement() и cloneElement()?",
    "cat": "react-base",
    "a": "<code>createElement()</code> создает новый React-элемент, а <code>cloneElement()</code> клонирует существующий."
  },
  {
    "q": "Что такое useReducer()?",
    "cat": "react-hooks",
    "a": "<code>useReducer()</code> — Hook для управления сложным состоянием через reducer-функцию."
  },
  {
    "q": "Как реализовать однократное выполнение операции при начальном рендеринге?",
    "cat": "react-hooks",
    "a": "Через <code>useEffect(() => {}, [])</code>."
  },
  {
    "q": "Что такое распределенный компонент?",
    "cat": "react-patterns",
    "a": "Компонент, логика которого разделена между несколькими вложенными компонентами."
  },
  {
    "q": "Расскажите о хуках useCallback(), useMemo(), useImperativeHandle(), useLayoutEffect()?",
    "cat": "react-hooks",
    "a": "<code>useCallback()</code> мемоизирует функцию, <code>useMemo()</code> — значение, <code>useImperativeHandle()</code> управляет ref API, <code>useLayoutEffect()</code> выполняется синхронно после DOM mutations."
  },
  {
    "q": "Как отрендерить HTML код в React-компоненте?",
    "cat": "react-base",
    "a": "Через <code>dangerouslySetInnerHTML</code>."
  },
  {
    "q": "Зачем в setState() нужно передавать функцию?",
    "cat": "react-state",
    "a": "Чтобы использовать актуальное предыдущее состояние при асинхронных обновлениях."
  },
  {
    "q": "Для чего предназначен метод registerServiceWorker() в React?",
    "cat": "react-pwa",
    "a": "Используется для регистрации service worker и поддержки offline-режима."
  },
  {
    "q": "Чем React Router отличается от обычной маршрутизации?",
    "cat": "react-router",
    "a": "React Router обеспечивает клиентскую маршрутизацию без полной перезагрузки страницы."
  },
  {
    "q": "Какие хуки были добавлены в React Router версии 5?",
    "cat": "react-router",
    "a": "<code>useHistory()</code>, <code>useLocation()</code>, <code>useParams()</code>, <code>useRouteMatch()</code>."
  },
  {
    "q": "Как передавать пропсы в React Router?",
    "cat": "react-router",
    "a": "Через render props, wrapper-компоненты или state/navigation params."
  },
  {
    "q": "Что такое Reselect и как он работает?",
    "cat": "react-redux",
    "a": "Reselect — библиотека для создания мемоизированных selector-функций."
  },
  {
    "q": "Назовите основную цель React Fiber?",
    "cat": "react-advanced",
    "a": "Сделать рендеринг асинхронным, приоритетным и более отзывчивым."
  },
  {
    "q": "Какие типы данных может возвращать render?",
    "cat": "react-base",
    "a": "React-элементы, массивы элементов, строки, числа, <code>null</code>, <code>boolean</code>."
  },
  {
    "q": "Разница между memo и useMemo?",
    "cat": "react-performance",
    "a": "<code>React.memo</code> мемоизирует компонент, а <code>useMemo()</code> — вычисляемое значение."
  },
  {
    "q": "Что такое синтетические события (SyntheticEvent) в React?",
    "cat": "react-events",
    "a": "SyntheticEvent — кроссбраузерная обертка React над нативными событиями."
  },
  {
    "q": "Является ли React реактивным?",
    "cat": "react-base",
    "a": "Да, React обновляет UI автоматически при изменении state или props."
  },
  {
    "q": "Техники оптимизации перфоманса React?",
    "cat": "react-performance",
    "a": "Мемоизация, lazy loading, virtualization списков, code splitting, правильные keys и предотвращение лишних ререндеров."
  },
  {
    "q": "Лучшие практики безопасности в React?",
    "cat": "react-security",
    "a": "Не использовать небезопасный HTML, экранировать данные, избегать XSS и хранить sensitive data безопасно."
  },
  {
    "q": "Как работает пропс children в React?",
    "cat": "react-base",
    "a": "<code>children</code> автоматически содержит вложенные элементы между открывающим и закрывающим тегом компонента."
  },
  {
    "q": "Что такое обратный поток данных в React?",
    "cat": "react-base",
    "a": "Это передача данных от дочернего компонента к родителю через callback-функции."
  },
  {
    "q": "Как использовать React.lazy и React.Suspense для запуска кода приложения?",
    "cat": "react-performance",
    "a": "<code>React.lazy()</code> загружает компонент динамически, а <code>Suspense</code> показывает fallback во время загрузки."
  },
  {
    "q": "Что такое \"Hydration\" в контексте серверного-рендеренга React-приложений?",
    "cat": "react-ssr",
    "a": "Hydration — процесс подключения React к HTML, сгенерированному сервером."
  },
  {
    "q": "Разница между контролируемым и неконтролируемым компонентами в React?",
    "cat": "react-forms",
    "a": "В controlled-компонентах данные формы управляются React state. В uncontrolled — самим DOM через refs."
  }
];
export const NEXT_QUESTIONS = [];
export const SECURITY_QUESTIONS = [
  {
    "q": "Разница между идентификацией, аутентификацией, авторизацией?",
    "cat": "security-base",
    "a": "Идентификация — сообщение системой, кто пользователь. Аутентификация — проверка личности пользователя. Авторизация — определение прав доступа пользователя."
  },
  {
    "q": "Виды аутентификации?",
    "cat": "security-auth",
    "a": "Парольная, двухфакторная (2FA), биометрическая, OAuth, SSO, сертификаты, токены."
  },
  {
    "q": "Что такое \"распределенная система аутентификации\"?",
    "cat": "security-auth",
    "a": "Это система, в которой аутентификация выполняется централизованным сервисом для нескольких приложений или сервисов."
  },
  {
    "q": "Что такое токены JWT? Как их можно использовать для аутентификации пользователей?",
    "cat": "security-auth",
    "a": "JWT — JSON Web Token. Используется для передачи данных между клиентом и сервером в подписанном виде. После логина сервер выдает токен, который клиент отправляет в заголовке <code>Authorization</code>."
  },
  {
    "q": "Что такое безопасные (Secure) и HttpOnly cookies?",
    "cat": "security-cookies",
    "a": "<code>Secure</code> cookie передаются только по HTTPS. <code>HttpOnly</code> запрещает доступ к cookie через JavaScript."
  },
  {
    "q": "Что такое Content Security Policy (CSP)?",
    "cat": "security-browser",
    "a": "CSP — механизм безопасности, ограничивающий загрузку и выполнение ресурсов для защиты от XSS."
  },
  {
    "q": "Что такое CORS?",
    "cat": "security-browser",
    "a": "CORS — механизм, позволяющий браузеру контролировать междоменные HTTP-запросы."
  },
  {
    "q": "Что такое межсайтовый скриптинг (XSS)?",
    "cat": "security-xss",
    "a": "XSS — атака, при которой злоумышленник внедряет вредоносный JavaScript-код на страницу."
  },
  {
    "q": "Методы повышения безопасности веб-приложений?",
    "cat": "security-base",
    "a": "HTTPS, CSP, защита от XSS и CSRF, валидация данных, безопасные cookie, ограничение прав доступа и регулярные обновления зависимостей."
  },
  {
    "q": "Что такое OWASP Top 10?",
    "cat": "security-base",
    "a": "OWASP Top 10 — список самых критичных уязвимостей веб-приложений."
  },
  {
    "q": "Что такое SSL/TLS? Зачем они используются в веб-разработке?",
    "cat": "security-network",
    "a": "SSL/TLS — криптографические протоколы для защищенной передачи данных между клиентом и сервером."
  },
  {
    "q": "Какие основные угрозы безопасности могут возникать на веб-страницах?",
    "cat": "security-base",
    "a": "XSS, CSRF, SQL Injection, Clickjacking, утечки данных, DDoS и MITM-атаки."
  },
  {
    "q": "Какие типы HTTP заголовков могут быть полезны для обеспечения безопасности веб-приложений?",
    "cat": "security-http",
    "a": "<code>Content-Security-Policy</code>, <code>X-Frame-Options</code>, <code>Strict-Transport-Security</code>, <code>X-Content-Type-Options</code>, <code>Referrer-Policy</code>."
  },
  {
    "q": "Какие принципы следует учитывать при разработке стратегии безопасности?",
    "cat": "security-base",
    "a": "Минимизация привилегий, defense in depth, secure by default, регулярные обновления и мониторинг."
  },
  {
    "q": "Что такое принцип наименьших привилегий (POLP)?",
    "cat": "security-base",
    "a": "Пользователь или система должны иметь только минимально необходимые права доступа."
  },
  {
    "q": "Как можно защищаться от DDoS-атак (Distributed Denial of Service)?",
    "cat": "security-network",
    "a": "Rate limiting, CDN, балансировка нагрузки, caching и использование anti-DDoS сервисов."
  },
  {
    "q": "Как можно защищаться от CSRF-атак (Cross-Site Request Forgery)?",
    "cat": "security-csrf",
    "a": "Использовать CSRF-токены, SameSite cookies и проверку origin/referer."
  },
  {
    "q": "Как можно защищаться от межсайтового скриптинга (XSS)?",
    "cat": "security-xss",
    "a": "Экранировать пользовательские данные, использовать CSP и избегать небезопасного HTML."
  },
  {
    "q": "Какие меры безопасности следует принять при работе с cookie на стороне клиента?",
    "cat": "security-cookies",
    "a": "Использовать <code>Secure</code>, <code>HttpOnly</code>, <code>SameSite</code>, минимизировать срок жизни cookie и не хранить чувствительные данные."
  },
  {
    "q": "Подходы для междоменных запросов в JavaScript?",
    "cat": "security-browser",
    "a": "CORS, прокси-сервер, JSONP для старых систем и postMessage для взаимодействия между окнами."
  },
  {
    "q": "Лучшие практики при работе с веб-хранилищем?",
    "cat": "security-storage",
    "a": "Не хранить sensitive data в <code>localStorage</code>, очищать данные и использовать короткое время жизни токенов."
  },
  {
    "q": "Что такое SRI (Subresource Integrity)? Как его использовать для улучшения безопасности?",
    "cat": "security-browser",
    "a": "SRI проверяет целостность подключаемых ресурсов через hash-сумму в атрибуте <code>integrity</code>."
  },
  {
    "q": "Что такое обфускация кода? Зачем она может быть использована в JavaScript проектах?",
    "cat": "security-code",
    "a": "Обфускация усложняет чтение кода и затрудняет reverse engineering."
  },
  {
    "q": "Разница между обфускацией и минификацией кода?",
    "cat": "security-code",
    "a": "Минификация уменьшает размер кода, а обфускация делает код трудночитаемым."
  },
  {
    "q": "Как можно защититься от кликджекинг-атак (Clickjacking)?",
    "cat": "security-browser",
    "a": "Использовать заголовки <code>X-Frame-Options</code> или CSP <code>frame-ancestors</code>."
  }
];
export const OPTIMIZATION_QUESTIONS = [
  {
    "q": "Способы уменьшения времени загрузки веб-страницы?",
    "cat": "performance",
    "a": "Минификация ресурсов, lazy loading, code splitting, CDN, кеширование, оптимизация изображений, preload/preconnect, уменьшение количества запросов и использование сжатия gzip/brotli."
  },
  {
    "q": "Что такое Core Web Vitals? Какие основные метрики туда входят?",
    "cat": "performance-core-web-vitals",
    "a": "Core Web Vitals — набор метрик производительности от Google. Основные метрики: <code>LCP</code>, <code>INP</code> и <code>CLS</code>."
  },
  {
    "q": "Расскажите о метриках Core Web Vitals?",
    "cat": "performance-core-web-vitals",
    "a": "<code>LCP</code> измеряет скорость загрузки основного контента. <code>INP</code> — отзывчивость интерфейса. <code>CLS</code> — визуальную стабильность страницы."
  },
  {
    "q": "Разница между preload, prefetch, preconnect и prerender?",
    "cat": "performance-loading",
    "a": "<code>preload</code> загружает критически важный ресурс заранее. <code>prefetch</code> подготавливает ресурсы для будущей навигации. <code>preconnect</code> заранее устанавливает соединение с сервером. <code>prerender</code> полностью рендерит страницу в фоне."
  },
  {
    "q": "Для чего нужен паттерн PRPL?",
    "cat": "performance-architecture",
    "a": "PRPL — архитектурный паттерн для ускорения загрузки PWA: Push, Render, Pre-cache, Lazy-load."
  },
  {
    "q": "Разница между <code>&lt;script&gt;</code>, <code>&lt;script async&gt;</code> и <code>&lt;script defer&gt;</code>?",
    "cat": "performance-loading",
    "a": "Обычный <code>&lt;script&gt;</code> блокирует парсинг HTML. <code>async</code> загружается параллельно и выполняется сразу после загрузки. <code>defer</code> загружается параллельно, но выполняется после построения DOM."
  },
  {
    "q": "Почему хорошей практикой считается располагать <code>&lt;link&gt;</code> для подключения CSS стилей внутри тэга <code>&lt;head&gt;</code>, а <code>&lt;script&gt;</code> для подключения JS ставить перед закрывающимся тэгом <code>&lt;/body&gt;</code>?",
    "cat": "performance-rendering",
    "a": "CSS нужен для корректного рендера страницы без FOUC, поэтому подключается в <code>&lt;head&gt;</code>. JS может блокировать парсинг HTML, поэтому его обычно подключают перед <code>&lt;/body&gt;</code>."
  },
  {
    "q": "Назовите критические этапы рендеринга?",
    "cat": "performance-rendering",
    "a": "Парсинг HTML → построение DOM → построение CSSOM → Render Tree → Layout → Paint → Composite."
  },
  {
    "q": "Разница между layout, painting и compositing?",
    "cat": "performance-rendering",
    "a": "<code>Layout</code> вычисляет размеры и позиции элементов. <code>Painting</code> отрисовывает пиксели. <code>Compositing</code> объединяет слои на экране."
  },
  {
    "q": "Что такое Flash Of Unstyled Content (FOUC)? Как его избежать?",
    "cat": "performance-rendering",
    "a": "FOUC — отображение страницы без стилей до загрузки CSS. Избежать можно через critical CSS и раннюю загрузку стилей."
  },
  {
    "q": "Почему важно минимизировать количество reflow и repaint в браузере? Как этого достигнуть?",
    "cat": "performance-rendering",
    "a": "Reflow и repaint — дорогие операции для браузера. Их уменьшают через batch updates, использование <code>transform</code>/<code>opacity</code> и минимизацию изменений DOM."
  },
  {
    "q": "Как оптимизировать загрузку изображений для улучшения производительности?",
    "cat": "performance-images",
    "a": "Использовать WebP/AVIF, responsive images, lazy loading, compression и CDN."
  },
  {
    "q": "Методы оптимизации загрузки шрифтов?",
    "cat": "performance-fonts",
    "a": "Использование <code>font-display</code>, preload, subset fonts, современных форматов WOFF2 и локального кеширования."
  },
  {
    "q": "Что такое TTI (Time to Interactive)? Как его измерить и улучшить?",
    "cat": "performance-metrics",
    "a": "TTI — время до полной интерактивности страницы. Улучшается через уменьшение JS bundle, code splitting и оптимизацию main thread."
  },
  {
    "q": "Разница между \"Render Blocking\" и \"Layout Thrashing\"?",
    "cat": "performance-rendering",
    "a": "Render Blocking — ресурсы, блокирующие рендер страницы. Layout Thrashing — частые принудительные перерасчеты layout из-за чередования чтения и записи DOM."
  }
];
export const OOP_QUESTIONS = [
  {
    "q": "Основные принципы ООП?",
    "cat": "oop-base",
    "a": "Инкапсуляция, наследование, полиморфизм и абстракция."
  },
  {
    "q": "Что такое SOLID?",
    "cat": "oop-solid",
    "a": "SOLID — набор принципов проектирования: Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
  },
  {
    "q": "Разница между классовым и прототипным наследованием?",
    "cat": "oop-js",
    "a": "Классовое наследование основано на классах и экземплярах. Прототипное — на делегировании объектов через prototype chain."
  },
  {
    "q": "Однонаправленный поток данных и двусторонняя связь данных? В чем между ними разница?",
    "cat": "architecture",
    "a": "При однонаправленном потоке данные идут сверху вниз. При двустороннем изменяются одновременно и в UI, и в модели."
  },
  {
    "q": "Что такое функциональное программирование?",
    "cat": "fp-base",
    "a": "Парадигма, основанная на чистых функциях, иммутабельности и отсутствии side effects."
  },
  {
    "q": "Что такое MVC?",
    "cat": "architecture-patterns",
    "a": "MVC — Model View Controller. Модель хранит данные, View отображает UI, Controller обрабатывает действия пользователя."
  },
  {
    "q": "Что такое MVVM?",
    "cat": "architecture-patterns",
    "a": "MVVM — Model View ViewModel. ViewModel связывает View и Model через data binding."
  },
  {
    "q": "Что такое MVP?",
    "cat": "architecture-patterns",
    "a": "MVP — Model View Presenter. Presenter содержит бизнес-логику и управляет View."
  },
  {
    "q": "Недостатки паттерна MVW?",
    "cat": "architecture-patterns",
    "a": "MVW часто приводит к размытым зонам ответственности и усложнению поддержки приложения."
  },
  {
    "q": "Разница между функцией и методом?",
    "cat": "js-base",
    "a": "Функция существует отдельно, а метод — это функция как свойство объекта."
  },
  {
    "q": "Что такое каррирование (Currying)?",
    "cat": "fp-base",
    "a": "Техника преобразования функции с несколькими аргументами в цепочку функций с одним аргументом."
  },
  {
    "q": "Разница между ООП и ФП в JavaScript?",
    "cat": "paradigms",
    "a": "ООП строится вокруг объектов и состояния, а ФП — вокруг функций и иммутабельности."
  },
  {
    "q": "Плюсы и минусы ФП и ООП?",
    "cat": "paradigms",
    "a": "ООП удобно моделирует сложные сущности, но может приводить к сильной связанности. ФП улучшает предсказуемость и тестируемость, но сложнее для понимания новичкам."
  },
  {
    "q": "Разница между монолитной и микросервисной архитектурами?",
    "cat": "architecture",
    "a": "Монолит — единое приложение. Микросервисы — набор независимых сервисов."
  },
  {
    "q": "Плюсы и минусы монолитной и микросервисной архитектур?",
    "cat": "architecture",
    "a": "Монолит проще разрабатывать и деплоить на старте. Микросервисы лучше масштабируются, но сложнее в поддержке."
  },
  {
    "q": "Какие принципы можно использовать вместе с наследованием?",
    "cat": "oop-base",
    "a": "Композиция, полиморфизм, интерфейсы и dependency injection."
  },
  {
    "q": "Какие ещё принципы кроме SOLID вы знаете?",
    "cat": "architecture",
    "a": "DRY, KISS, YAGNI, Separation of Concerns, Law of Demeter."
  },
  {
    "q": "Что такое дескрипторы свойств объектов?",
    "cat": "js-objects",
    "a": "Это объект с настройками свойства: <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code>, <code>get</code>, <code>set</code>."
  },
  {
    "q": "В чем заключаются особенности геттеров и сеттеров?",
    "cat": "js-objects",
    "a": "Позволяют управлять чтением и записью свойств через функции."
  },
  {
    "q": "Что такое статический метод класса (static)? Как осуществляется его вызов?",
    "cat": "oop-js",
    "a": "Static метод принадлежит самому классу, а не экземпляру. Вызывается через имя класса."
  },
  {
    "q": "Разница между композицией и наследованием?",
    "cat": "oop-base",
    "a": "Наследование описывает отношение \"is-a\", композиция — \"has-a\"."
  },
  {
    "q": "Что такое композиция в контексте JavaScript?",
    "cat": "oop-js",
    "a": "Подход, при котором объект собирается из независимых частей или функций."
  },
  {
    "q": "Что такое паттерн, или шаблон проектирования?",
    "cat": "design-patterns",
    "a": "Повторно используемое решение типовых архитектурных задач."
  },
  {
    "q": "Типы паттернов?",
    "cat": "design-patterns",
    "a": "Порождающие, структурные и поведенческие."
  },
  {
    "q": "Что такое GOF паттерны?",
    "cat": "design-patterns",
    "a": "Паттерны из книги Gang of Four — классический набор из 23 шаблонов проектирования."
  },
  {
    "q": "Что такое GRASP паттерны?",
    "cat": "design-patterns",
    "a": "GRASP — набор принципов распределения ответственности между объектами."
  },
  {
    "q": "Типы полиморфизма?",
    "cat": "oop-base",
    "a": "Ad-hoc полиморфизм, параметрический и полиморфизм подтипов."
  },
  {
    "q": "Можно ли в JavaScript реализовать абстрактный класс и как это сделать?",
    "cat": "oop-js",
    "a": "Да, через проверку <code>new.target</code> или выбрасывание ошибки в конструкторе."
  },
  {
    "q": "Как работает механизм прототипов в JavaScript?",
    "cat": "oop-js",
    "a": "Объекты наследуют свойства и методы через цепочку прототипов."
  },
  {
    "q": "Основные принципы функционального программирования?",
    "cat": "fp-base",
    "a": "Чистые функции, иммутабельность, композиция функций и отсутствие side effects."
  },
  {
    "q": "Плюсы функционального программирования?",
    "cat": "fp-base",
    "a": "Предсказуемость, удобство тестирования, переиспользуемость и упрощение параллельных вычислений."
  },
  {
    "q": "Разница между императивным и декларативным подходами программирования?",
    "cat": "paradigms",
    "a": "Императивный подход описывает как выполнить задачу, декларативный — что нужно получить."
  },
  {
    "q": "Что такое реактивное программирование?",
    "cat": "reactive-programming",
    "a": "Подход, основанный на потоках данных и автоматическом реагировании на изменения."
  },
  {
    "q": "Плюсы и минусы реактивного программирования?",
    "cat": "reactive-programming",
    "a": "Плюсы: удобная работа с асинхронностью и событиями. Минусы: высокая сложность и steep learning curve."
  },
  {
    "q": "Что такое Inversion of control?",
    "cat": "architecture",
    "a": "Принцип, при котором управление зависимостями передается внешнему контейнеру или фреймворку."
  },
  {
    "q": "Что такое Dependency injection?",
    "cat": "architecture",
    "a": "Способ передачи зависимостей объекту извне вместо их создания внутри."
  },
  {
    "q": "Разница между агрегацией и композицией?",
    "cat": "oop-base",
    "a": "При композиции объект полностью владеет зависимыми объектами. При агрегации объекты могут существовать отдельно."
  },
  {
    "q": "Разница между процедурным и функциональным программированием?",
    "cat": "paradigms",
    "a": "Процедурное программирование строится вокруг последовательности команд, а функциональное — вокруг вычисления функций."
  },
  {
    "q": "Что такое паттерн \"обратный плагин\" (Reverse-Plugin Pattern)? Когда его стоит использовать?",
    "cat": "architecture-patterns",
    "a": "Паттерн, при котором ядро приложения предоставляет API, а внешние модули расширяют функциональность. Используется в extensible systems."
  },
  {
    "q": "Что такое агрегация в ООП?",
    "cat": "oop-base",
    "a": "Тип связи между объектами, при котором один объект содержит ссылки на другие, но не управляет их жизненным циклом."
  }
];
export const TESTING_QUESTIONS = [];
export const OTHER_QUESTIONS = [];
export const ACCESSIBILITY_QUESTIONS = [
  {
    "q": "Что такое WCAG?",
    "cat": "a11y-base",
    "a": "WCAG — Web Content Accessibility Guidelines. Это международные рекомендации по созданию доступных веб-интерфейсов."
  },
  {
    "q": "Основные принципы доступности?",
    "cat": "a11y-base",
    "a": "Основные принципы WCAG: воспринимаемость, управляемость, понятность и надежность."
  },
  {
    "q": "Что такое скринридер?",
    "cat": "a11y-tools",
    "a": "Скринридер — программа, озвучивающая содержимое интерфейса для пользователей с нарушением зрения."
  },
  {
    "q": "Уровни доступности?",
    "cat": "a11y-base",
    "a": "WCAG определяет уровни A, AA и AAA. AA считается основным стандартом для большинства проектов."
  },
  {
    "q": "Как скрыть содержимое тэга от скринридеров?",
    "cat": "a11y-aria",
    "a": "Через атрибут <code>aria-hidden=\"true\"</code>."
  },
  {
    "q": "Как удалить семантику у элемента?",
    "cat": "a11y-aria",
    "a": "Через <code>role=\"presentation\"</code> или <code>role=\"none\"</code>."
  },
  {
    "q": "Что такое ARIA роли в веб приложении?",
    "cat": "a11y-aria",
    "a": "ARIA-роли описывают назначение элементов для assistive technologies."
  },
  {
    "q": "Для чего используется атрибут aria-roledescription?",
    "cat": "a11y-aria",
    "a": "<code>aria-roledescription</code> позволяет задать пользовательское описание роли элемента."
  },
  {
    "q": "Какие HTML атрибуты можно использовать для улучшения доступности?",
    "cat": "a11y-html",
    "a": "<code>alt</code>, <code>title</code>, <code>aria-label</code>, <code>aria-labelledby</code>, <code>lang</code>, <code>tabindex</code>."
  },
  {
    "q": "Назовите средства и методы тестирования доступности?",
    "cat": "a11y-testing",
    "a": "Lighthouse, axe DevTools, NVDA, VoiceOver, keyboard navigation и ручное тестирование."
  },
  {
    "q": "Какие стандарты доступности следует учитывать при разработке?",
    "cat": "a11y-base",
    "a": "WCAG, WAI-ARIA и требования ADA или EN 301 549 в зависимости от региона."
  },
  {
    "q": "Разница между usability и accessibility?",
    "cat": "a11y-base",
    "a": "Usability — удобство использования интерфейса. Accessibility — доступность интерфейса для людей с ограничениями."
  },
  {
    "q": "Что нужно учитывать при разработке доступного сайта?",
    "cat": "a11y-base",
    "a": "Семантическую HTML-разметку, keyboard navigation, контрастность, alt-тексты, ARIA и поддержку скринридеров."
  },
  {
    "q": "Как структура заголовков (H1-H6) влияет на доступность? Как правильно их использовать для улучшения навигации и доступности контента?",
    "cat": "a11y-html",
    "a": "Заголовки формируют логическую структуру документа и помогают навигации в скринридерах. Нужно соблюдать иерархию от <code>h1</code> до <code>h6</code> без пропуска уровней."
  },
  {
    "q": "Какие правила следует соблюдать при работе с цветом для обеспечения лучшей доступности?",
    "cat": "a11y-design",
    "a": "Соблюдать достаточный контраст, не передавать информацию только цветом и учитывать дальтонизм."
  },
  {
    "q": "Какие рекомендации существуют для работы с мультимедиа-контентом для обеспечения лучшей доступности?",
    "cat": "a11y-media",
    "a": "Добавлять субтитры, транскрипции, alt-тексты и избегать autoplay без контроля пользователя."
  },
  {
    "q": "Как создать доступный список в HTML с помощью ARIA ролей?",
    "cat": "a11y-aria",
    "a": "Можно использовать <code>role=\"list\"</code> для контейнера и <code>role=\"listitem\"</code> для элементов, если невозможно использовать нативные <code>ul/li</code>."
  },
  {
    "q": "Что такое \"skip-links\" и как они используются для улучшения доступности?",
    "cat": "a11y-navigation",
    "a": "Skip-links позволяют быстро перейти к основному контенту, минуя повторяющиеся элементы навигации."
  },
  {
    "q": "Разница между role и aria-label в контексте accessibility?",
    "cat": "a11y-aria",
    "a": "<code>role</code> определяет тип элемента, а <code>aria-label</code> задает его текстовое описание для assistive technologies."
  }
];
export const BROWSER_API_QUESTIONS = [
  {
    "q": "Что такое DOM?",
    "cat": "dom-base",
    "a": "DOM — Document Object Model. Это объектное представление HTML-документа в виде дерева узлов."
  },
  {
    "q": "Типы узлов DOM-дерева?",
    "cat": "dom-base",
    "a": "Основные типы: Document, Element, Text, Comment, Attribute."
  },
  {
    "q": "Методы поиска элементов в DOM?",
    "cat": "dom-api",
    "a": "<code>getElementById()</code>, <code>getElementsByClassName()</code>, <code>getElementsByTagName()</code>, <code>querySelector()</code>, <code>querySelectorAll()</code>."
  },
  {
    "q": "Свойства для перемещения по DOM-дереву?",
    "cat": "dom-api",
    "a": "<code>parentNode</code>, <code>children</code>, <code>firstElementChild</code>, <code>lastElementChild</code>, <code>nextElementSibling</code>, <code>previousElementSibling</code>."
  },
  {
    "q": "Разница между attribute и property у DOM-элементов?",
    "cat": "dom-api",
    "a": "Attributes — данные HTML-разметки, properties — свойства DOM-объекта в JavaScript."
  },
  {
    "q": "Что такое BOM?",
    "cat": "browser-api",
    "a": "BOM — Browser Object Model. Это API браузера для работы с окном, историей, location и navigator."
  },
  {
    "q": "Виды событий в JavaScript?",
    "cat": "events",
    "a": "Mouse events, keyboard events, form events, touch events, pointer events, drag-and-drop и lifecycle events."
  },
  {
    "q": "Как добавить обработчик события на DOM-элемент?",
    "cat": "events",
    "a": "Через <code>addEventListener()</code>."
  },
  {
    "q": "Как удалить обработчик события с DOM-элемента?",
    "cat": "events",
    "a": "Через <code>removeEventListener()</code>."
  },
  {
    "q": "Что такое распространение события (Event Propagation)?",
    "cat": "events",
    "a": "Это процесс прохождения события через DOM: capturing → target → bubbling."
  },
  {
    "q": "Что такое делегирование событий (Event Delegation)?",
    "cat": "events",
    "a": "Подход, при котором обработчик вешается на родителя вместо каждого дочернего элемента."
  },
  {
    "q": "Как использовать media выражения в JavaScript?",
    "cat": "browser-api",
    "a": "Через <code>window.matchMedia()</code>."
  },
  {
    "q": "Расскажите про координаты в браузере?",
    "cat": "browser-api",
    "a": "Есть координаты относительно viewport, документа и экрана: <code>clientX</code>, <code>pageX</code>, <code>screenX</code>."
  },
  {
    "q": "Разница между HTMLCollection и NodeList?",
    "cat": "dom-api",
    "a": "<code>HTMLCollection</code> содержит только HTML-элементы и является live collection. <code>NodeList</code> может содержать любые узлы."
  },
  {
    "q": "Как динамически добавить элемент на HTML-страницу?",
    "cat": "dom-api",
    "a": "Через <code>document.createElement()</code> и методы <code>append()</code> или <code>appendChild()</code>."
  },
  {
    "q": "Разница между feature detection, feature inference и анализом строки user-agent?",
    "cat": "browser-api",
    "a": "Feature detection проверяет поддержку API напрямую. Feature inference делает выводы косвенно. User-agent parsing анализирует строку браузера."
  },
  {
    "q": "Разница между e.preventDefault() и e.stopPropagation()?",
    "cat": "events",
    "a": "<code>preventDefault()</code> отменяет действие браузера, а <code>stopPropagation()</code> останавливает всплытие события."
  },
  {
    "q": "Разница между event.target и event.currentTarget?",
    "cat": "events",
    "a": "<code>event.target</code> — элемент, вызвавший событие. <code>event.currentTarget</code> — элемент, на котором висит обработчик."
  },
  {
    "q": "Разница между .stopPropagation() и .stopImmediatePropagation()?",
    "cat": "events",
    "a": "<code>stopPropagation()</code> останавливает всплытие, а <code>stopImmediatePropagation()</code> также предотвращает выполнение других обработчиков."
  },
  {
    "q": "Разница между событиями load и DOMContentLoaded?",
    "cat": "events",
    "a": "<code>DOMContentLoaded</code> срабатывает после построения DOM, а <code>load</code> — после загрузки всех ресурсов."
  },
  {
    "q": "Сколько аргументов принимает addEventListener?",
    "cat": "events",
    "a": "Три: тип события, callback и объект/options или boolean."
  },
  {
    "q": "Разница между innerHTML и outerHTML?",
    "cat": "dom-api",
    "a": "<code>innerHTML</code> изменяет содержимое элемента, а <code>outerHTML</code> — сам элемент вместе с содержимым."
  },
  {
    "q": "Разница между JSON и XML?",
    "cat": "data-format",
    "a": "JSON компактнее и удобнее для JavaScript. XML более многословный и поддерживает сложные схемы."
  },
  {
    "q": "Как узнать об использовании метода event.preventDefault()?",
    "cat": "events",
    "a": "Через свойство <code>event.defaultPrevented</code>."
  },
  {
    "q": "Для чего используется свойство window.navigator?",
    "cat": "browser-api",
    "a": "Содержит информацию о браузере и устройстве пользователя."
  },
  {
    "q": "Для чего используется метод .focus()?",
    "cat": "dom-api",
    "a": "Устанавливает фокус на элемент."
  },
  {
    "q": "Для чего используется свойство .forms?",
    "cat": "dom-api",
    "a": "Содержит коллекцию всех форм документа."
  },
  {
    "q": "Для чего используется метод .scrollIntoView()?",
    "cat": "dom-api",
    "a": "Прокручивает страницу к указанному элементу."
  },
  {
    "q": "Разница между методами .submit() и .requestSubmit()?",
    "cat": "forms",
    "a": "<code>submit()</code> отправляет форму без валидации и событий. <code>requestSubmit()</code> запускает обычный процесс submit."
  },
  {
    "q": "Расскажите о IntersectionObserver?",
    "cat": "browser-api",
    "a": "API для отслеживания появления элементов в viewport."
  },
  {
    "q": "Расскажите о URLSearchParams?",
    "cat": "browser-api",
    "a": "<code>URLSearchParams</code> используется для работы с query-параметрами URL."
  },
  {
    "q": "Какие есть ограничения у window.close()?",
    "cat": "browser-api",
    "a": "Можно закрыть только окно, открытое через JavaScript."
  },
  {
    "q": "Как можно создавать пользовательское событие (custom events) в JavaScript?",
    "cat": "events",
    "a": "Через конструктор <code>CustomEvent</code> и метод <code>dispatchEvent()</code>."
  },
  {
    "q": "Что такое IndexedDB? Как работает IndexedDB?",
    "cat": "browser-storage",
    "a": "IndexedDB — встроенная NoSQL база данных браузера для хранения больших объемов структурированных данных."
  },
  {
    "q": "Расскажите о методе requestAnimationFrame()?",
    "cat": "browser-api",
    "a": "<code>requestAnimationFrame()</code> синхронизирует анимацию с repaint браузера для более плавного рендера."
  }
];
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
    name: 'ASYNC JAVASCRIPT',
    questions: ASYNC_JAVASCRIPT_QUESTIONS,
  },
  {
    name: 'BROWSER API',
    questions: BROWSER_API_QUESTIONS,
  },
  {
    name: 'ECMASCRIPT',
    questions: ECMASCRIPT_QUESTIONS,
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
    name: 'ACCESSIBILITY',
    questions: ACCESSIBILITY_QUESTIONS,
  },
  {
    name: 'OOP',
    questions: OOP_QUESTIONS,
  },
  {
    name: 'OTHER',
    questions: OTHER_QUESTIONS,
  },
]