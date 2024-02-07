<div align="center">

### **1 уровень (обязательный - необходимый минимум)**

</div>

- [x] Реализованы **Требования к функциональности.**
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**.

**React**

- [x] **Пишем функциональные компоненты c хуками** в приоритете над классовыми.
- [x] Есть разделение на **умные и глупые компоненты**. Глупый - ([CardSection](https://github.com/tdariaa/aic-project/blob/main/src/components/CardSection/CardSection.tsx)), умный - ([MainPage](https://github.com/tdariaa/aic-project/blob/main/src/pages/MainPage/MainPage.tsx))
- [x] Есть **рендеринг списков**. ([CardSection](https://github.com/tdariaa/aic-project/blob/main/src/components/CardSection/CardSection.tsx), [History](https://github.com/tdariaa/aic-project/blob/main/src/components/History/Histoty.tsx))
- [x] Реализована хотя бы одна **форма**. ([Authentication](https://github.com/tdariaa/aic-project/blob/main/src/components/Authentication/Authentication.tsx) - выполнена при помощи библиотеки React Hook Form)
- [x] Есть применение **Контекст API**. Если не знаете, где применить в своем приложении, делайте _темную/светлую тему_. Достаточно цвет шапки или кнопку перекрашивать. ([ThemeContext](https://github.com/tdariaa/aic-project/blob/main/src/context/ThemeContext.tsx))
- [x] Есть применение **предохранителя**. ([App](https://github.com/tdariaa/aic-project/blob/main/src/App.tsx))
- [x] Есть хотя бы один **кастомный хук**. ([useDebounce](https://github.com/tdariaa/aic-project/blob/main/src/hooks/useDebounce.tsx), [useAuthCheck](https://github.com/tdariaa/aic-project/blob/main/src/hooks/useAuthCheck.tsx))
- [x] Хотя бы несколько компонентов используют **PropTypes**. ([ThemeContext](https://github.com/tdariaa/aic-project/blob/main/src/context/ThemeContext.tsx), [Histoty](https://github.com/tdariaa/aic-project/blob/main/src/components/History/Histoty.tsx), [CardSection](https://github.com/tdariaa/aic-project/blob/main/src/components/CardSection/CardSection.tsx))
- [x] Поиск не должен триггерить много запросов к серверу (**debounce**). ([useDebounce](https://github.com/tdariaa/aic-project/blob/main/src/hooks/useDebounce.tsx), [SearchForm](https://github.com/tdariaa/aic-project/blob/main/src/components/SearchForm/SearchForm.tsx))
- [x] Есть применение **lazy + Suspense**. ([App](https://github.com/tdariaa/aic-project/blob/main/src/App.tsx))

**Redux**

- [x] Используем **Modern Redux with Redux Toolkit**. ([index](https://github.com/tdariaa/aic-project/blob/main/src/store/index.ts))
- [x] Используем **слайсы**. ([authenticationSlice](https://github.com/tdariaa/aic-project/blob/main/src/store/slice/authenticationSlice.tsx), [favotiteSlice](https://github.com/tdariaa/aic-project/blob/main/src/store/slice/favotiteSlice.tsx), [historySlice](https://github.com/tdariaa/aic-project/blob/main/src/store/slice/historySlice.tsx))
- [x] Есть хотя бы одна **кастомная мидлвара**. ([middleware](https://github.com/tdariaa/aic-project/blob/main/src/store/middleware/middleware.tsx))
- [x] Используется **RTK Query**. ([api](https://github.com/tdariaa/aic-project/blob/main/src/store/api/api.tsx))
- [x] Используется **Transforming Responses**. ([api](https://github.com/tdariaa/aic-project/blob/main/src/store/api/api.tsx))

<div align="center">

### **2 уровень (необязательный)**

</div>

- [x] Использование **TypeScript**.

---

В проекте используется [Art Institute of Chicago API](https://api.artic.edu/docs/), [GitHub](https://github.com/art-institute-of-chicago/data-aggregator).

---

<div align="center">

**Функциональность проекта**

</div>

- Пользователи могут _регистрироваться_ и _авторизироваться_. Для доступа к некоторым страницам необходима авторизация.
- Реализована логика _поиска_. При помощи строки поиска пользователь может найти интересующие его произведения искусства.
- Все _поисковые запросы пользователя хранятся_ в разделе «История».
- Зарегистрированный пользователь может _сохранять в избранное или удалять_ из него.
- Вся информация о пользователе, включая его избранное и историю поиска, хранится в _localStorage_.

**Для запуска проекта, необходимо:**

- Установить пакеты `npm install`
- Запустить приложение `npm start`
