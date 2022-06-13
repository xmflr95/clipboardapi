import CustomException from "./CustomException.js";
import ClipBoardAPI from "./ClipBoardAPI.js";

// const x = new ClipBoardAPI(navigator.clipboard);
// // console.log(x)
// x.checkWritePermission();
// x.checkReadPermission();

// ClipBoard
const ipt = document.getElementById('ipt');
const btn = document.getElementById('btn');
const txtArea = document.getElementById('txt-area');

// ipt.addEventListener('change', iptChange);
// txtArea.addEventListener('change', change);
txtArea.addEventListener('keyup', change);

txtArea.addEventListener('focus', ({ target }) => {
  const value = target.value;
  txtArea.focus();
  // txtArea.ariaSelected();
  txtArea.setSelectionRange(0, value.length);
});

btn.addEventListener('click', ClipBoardAPI.read);

function change(e) {
  const value = e.target.value;
  console.log(value);
  // write(value);
  ClipBoardAPI.write(value);
}

// permission
// navigator.permissions.query({ name: 'clipboard-read' }).then(permission => {
//   console.log(permission.state);
//   // change permission event
//   // [prompt, granted, denied]
//   permission.onchange = () => {
//     console.log(permission.state);
//   };
// });

// read
// function read() {
//   navigator.clipboard.readText().then(text => {
//     console.log(`Pasted content: ${text}`);
//   })
//   .catch(err => {
//     // new CustomException("Permission Error");
//     console.error(err);
//   });
// }

// write
// function write(inputText) {
//   navigator.clipboard.writeText(inputText).then(() => {
//     console.log('success');
//   })
//   .catch(err => {
//     // new CustomException("writeText Erorr");
//     console.error(err);
//   });
// }