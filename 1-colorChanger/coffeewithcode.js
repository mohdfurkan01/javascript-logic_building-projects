const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.target.id);
    switch (e.target.id) {
      case 'green':
        body.style.backgroundColor = e.target.id;
        console.log(e.target.id);
        break;
      case 'aqua':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'tomato':
        body.style.backgroundColor = e.target.id;
        break;
      default:
        console.log('Invalid choice');
        break;
    }
  });
});

// buttons.forEach(function (btn) {
//   //console.log(btn);
//   //callback function anonymous
//   btn.addEventListener('click', function (e) {
//     //console.log(e);
//     //console.log(e.target);
//     if (e.target.id === 'green') {
//       //body.style.backgroundColor = "green"
//       body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === 'aqua') {
//       body.style.backgroundColor = e.target.id;
//     }

//     if (e.target.id === 'blue') {
//       body.style.backgroundColor = e.target.id;
//     }
//     if (e.target.id === 'tomato') {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });
