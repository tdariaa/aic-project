export const useFavorites = (id: string) => {
  let allData = [];
  let isAuth = localStorage.getItem('fgfgfg@mail.ru');
  if (isAuth) {
    allData = JSON.parse(isAuth);
    localStorage.setItem('tdariaa@mail.ru', JSON.stringify(isAuth, ['34188', '117256', '70371', '158457', '184213']));
  }
  console.log(isAuth);
};
