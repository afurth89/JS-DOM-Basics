var animals = [
  //name: 'name', sound: 'sound',
  {name: "Dog", sound: "woof"}, 
  {name: "Cat", sound: "meow"}, 
  {name: "Cow", sound: "moo"}, 
  {name: "Pig", sound: "oink"}, 
  {name: "Duck", sound: "quack"}];


//create table and tbody
var table = document.createElement('table');
var tbody = document.createElement('tbody');

var trs = []; //created to store trs
var tds = []; //created to stroe tds

//append table and tbody to the DOM
document.querySelector('body').appendChild(table);
table.appendChild(tbody);

//create table rows, append them to tbody
for (var i = 0; i < 5; i++) {
  trs.push(document.createElement('tr'));
}

//create table data cells, append them to trows
for (var i = 0; i < trs.length; i++) {
  for (var j = 0; j < 2; j++) {
    tds.push(document.createElement('td'));
  }
}

//adds the animal name as innerText to the evenly indexed tds
for (var i = 0; i < animals.length; i++) {
  var j = i*2;
  tds[j].innerText = animals[i].name;
}

//adds the animal sound as innerText to the oddly indexed tds
for (var i = 0; i < animals.length; i++) {
  var j = i*2 + 1;
  tds[j].innerText = animals[i].sound;
}

//append the tds to the trs
for (var i = 0; i < trs.length; i++) {
  trs[i].appendChild(tds[i*2]);
  trs[i].appendChild(tds[i*2+1]);
}

// append the trs to the tbody
for (var i = 0; i < trs.length; i++) {
  tbody.appendChild(trs[i]);
}

table.style['border-collapse'] = 'collapse';

// add border lines to inner tds
for (var i = 0; i < tds.length; i++) {
  tds[i].style.border = "1px solid black";  //border
  tds[i].style['font-size'] = "36px";       //font size
  tds[i].style.padding = "10px";            //padding
  if (i % 2 !== 0) {
    tds[i].style['font-style'] = "italic";  //font style - only for sounds
  }
}

// 1. create trs - DONE
// 2. for each tr, create two tds - DONE
// 3. for each td, modify the innerText - DONE
// 4. append the tds to the trs - DONE
// 5. append the trs to the tbody


// <body>
//   <table>
//     <tbody>
//       <tr>
//         <td>Dog</td>
//         <td>woof</td>
//       </tr>
//       <tr>
//         <td>Cat</td>
//         <td>meow</td>
//       </tr>
//       <tr>
//         <td>Cow</td>
//         <td>moo</td>
//       </tr>
//       <tr>
//         <td>Pig</td>
//         <td>oink</td>
//       </tr>
//       <tr>
//         <td>Duck</td>
//         <td>quack</td>
//       </tr>
//     </tbody>
//   </table>
// </body>