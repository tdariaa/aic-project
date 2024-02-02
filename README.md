### **1 уровень (обязательный - необходимый минимум)**

- [ ] Реализованы **Требования к функциональности.**
- [ ] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**. [redux-persist](https://www.npmjs.com/package/redux-persist) библиотеку использовать **нельзя** из-за того, что привнесется большая автоматизация процесса сохранения, и это будет неравносильно затратам по времени других людей, которые используют LocalStorage напрямую.

**React**

- [ ] **Пишем функциональные компоненты c хуками** в приоритете над классовыми. (Классовый скорее всего у вас будет только один в котором будет реализация Error Boundaries. Это не значит, что можно забить на теорию классовых компонентов. Нет. Методы жизненного цикла - очень частый вопрос на выходном интервью. Прочую инфу по классовым компонентам тоже стоит пропустить через себя и усвоить)
- [ ] Есть разделение на **умные и глупые компоненты** (https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0, перевод - https://habr.com/ru/post/266559/. Это пункт - лишь общая рекомендация. Обратите внимание на Update from 2019 по первой ссылке от Дэна. Поэтому не относитесь к этому пункту слишком серьезно. Он тут для того, чтобы вы знали, что существуют такие термины в комьюнити, и не растерялись на собесе, если в каком-то вопросе они прозвучат).
- [x] Есть **рендеринг списков** (https://ru.reactjs.org/docs/lists-and-keys.html)
- [x] Реализована хотя бы одна **форма** (https://ru.reactjs.org/docs/forms.html). Можно использовать UI kit библиотеку ([MUI](https://mui.com/), [AntDesign](https://ant.design/), [ChakraUI](https://chakra-ui.com/) и т.п.), спец. библиотеку построения форм ([Formik](https://formik.org/), [React Hook Form](https://react-hook-form.com/) и т.п.).
- [x] Есть применение **Контекст API** (https://ru.reactjs.org/docs/context.html). Да, вроде бы у нас есть ридакс, зачем тогда нам контекст? Помните, что мы лишь трогаем и играемся со всякой апишкой реакта. Да и использование этих инструментов одновременно - это дискуссионный вопрос. Где-то это уместно, где-то не особо. Если не знаете, где применить в своем приложении, делайте _темную/светлую тему_. Достаточно цвет шапки или кнопку перекрашивать. Не нужно глобально делать темный/светлый дизайн всего приложения.
- [x] Есть применение **предохранителя** (https://ru.reactjs.org/docs/error-boundaries.html). Можно и свой написать, можно и пакет [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) заюзать. Главное, чтобы вы понимали что это и зачем.
- [ ] Есть хотя бы один **кастомный хук** (https://ru.reactjs.org/docs/hooks-custom.html). Какой-нибудь useActions внутри которого bindActionCreators - не засчитаю. Хук должен быть чуть масштабнее. useDebounce - уже лучше, но вдруг вы его бездумно взяли из интернета. Так что лучше несмотря на useDebounce, был ещё какой-нибудь кастомный хук.
- [ ] Хотя бы несколько компонентов используют **PropTypes** (https://ru.reactjs.org/docs/typechecking-with-proptypes.html). Если пишите на TS, всё равно добавьте на 2, 3 компонента PropTypes, чтобы закрыть этот пункт.
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**) (https://ru.reactjs.org/docs/faq-functions.html#how-can-i-prevent-a-function-from-being-called-too-quickly-or-too-many-times-in-a-row). Использовать useDebounce из интернета - ок.
- [x] Есть применение **lazy + Suspense** (https://ru.reactjs.org/docs/code-splitting.html#route-based-code-splitting)

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit** (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux)
- [ ] Используем **слайсы** (https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#using-createslice)
- [ ] Есть хотя бы одна **кастомная мидлвара** (**[store ⇒ next ⇒ action ⇒ {}](https://redux.js.org/understanding/history-and-design/middleware)** или **`[createListenerMiddleware](https://redux-toolkit.js.org/api/createListenerMiddleware)`** )
- [x] Используется **RTK Query** (https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
- [x] Используется **Transforming Responses** (https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced#transforming-responses). Если у вас такая апишка, что особо “готовить” в данных нечего, то будет достаточно простой функции, которая залезет в свойство ответа от сервера. Что-то типа response ⇒ response.results, в зависимости как ваша апишка данные вам отдаёт. Это лишь пример. Главное в этом пункте знать, что есть такая вот штука - transformResponse.
