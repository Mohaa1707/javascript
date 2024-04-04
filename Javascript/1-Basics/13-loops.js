//FOR LOOP

//Loop can execute a block of code number of time.

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

//=======================================================

//
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log(`${i} is my favourite number`);
//   }
// }
//========================================================

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log(`${i} is my favourite number`);
//   }
//   console.log(i);
// }
//=========================================================
//continue
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log(`${i} is my favourite number`);
//     continue; // To skip the number 2
//   }
//   console.log(i);
// }

//==============================================================
//BREAK:
// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     console.log(`${i} is my favourite number`);
//     continue; // To skip the the number 2
//   }

//   if (i === 5) {
//     console.log(`${i} then Break the loop`);
//     break;
//   }
//   console.log(i);
// }
//===================================================================
//How to loop a Array:

const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(`${i} - ${arr[i]}`);
}
