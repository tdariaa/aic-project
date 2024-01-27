const a = 42;

export { a }

let data = {};

// function getResponseData(res) {
//   if (res.ok) {
//     return res.json();
//   }
//   return Promise.reject(`Ошибка ${res.status}`);
// }

// fetch(`https://api.artic.edu/api/v1/artworks?page=10&limit=100`, {
//   // credentials: 'include',
// })
//   .then((res) => {
//     return getResponseData(res)
//   })
// .then((res) => {

//   let data = res.data.filter((item) => item.image_id != null); // выводит только те объекты, у которых доступны изображения
//   console.log(res.data, data);

//   // console.log(res.data.map((item) => item.artwork_type_title));
//   let a = res.data.map((item) => item.artwork_type_title); // выводит все техники
//   function uniq(a) {
//     var seen = {};
//     return a.filter(function (item) {
//       return seen.hasOwnProperty(item) ? false : (seen[item] = true);
//     });
//   }

//   console.log(uniq(a)); // выводит все техники без повторок
//   //image_id


// })

