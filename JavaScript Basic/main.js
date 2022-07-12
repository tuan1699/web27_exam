// Xử lý số
//--------------------------------------------------
console.log("Bài 1");
function volumnOfCircle(r) {
  let V = (4 * Math.PI * r ** 3) / 3;
  return V;
}
console.log(volumnOfCircle(1));

//--------------------------------------------------
console.log("Bài 2");
function sumIntermediary(a, b) {
  let sum = 0;
  for (i = a + 1; i < b; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumIntermediary(3, 8));

//--------------------------------------------------
console.log("Bài 3");
function sumDivisor(number) {
  let sum = 0;
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumDivisor(8));

//--------------------------------------------------
console.log("Bài 4");
function isPrime(number) {
  let count = 0;
  for (i = 1; i <= number; i++) {
    if (number % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return true;
  } else {
    return false;
  }
}
console.log(isPrime(3));
console.log(isPrime(10));
console.log(isPrime(9));

//--------------------------------------------------
console.log("Bài 5");
function sumPrime(number) {
  let sum = 0;
  for (n = 1; n < number; n++) {
    if (isPrime(n)) {
      sum += n;
    }
  }
  return sum;
}
console.log(sumPrime(10));
//--------------------------------------------------

//Xử lý chuỗi
console.log("Bài 1");
function firstWordUpperCase(str) {
  str = str.trim();

  let strToArr = str.split(" ");
  for (i = 0; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i]
      .slice(0, 1)
      .toUpperCase()
      .concat(strToArr[i].slice(1).toLowerCase());
  }
  return (str = strToArr.join(" "));
}

console.log(firstWordUpperCase("HELLO world"));
//--------------------------------------------------
console.log("Bài 2");

function spinalCase(str) {
  str = str.trim();
  let strToArr = str.split(" ");
  for (i = 0; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i].toLowerCase();
  }
  return (str = strToArr.join("-"));
}
console.log(spinalCase("HELLO world"));
//--------------------------------------------------
console.log("Bài 3");

function isPalindrome(str) {
  let oldStr = str.toLowerCase().replaceAll(" ", "");
  let newStr = str
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .reverse()
    .join("");
  if (oldStr == newStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("Race car"));
console.log(isPalindrome("hello world"));
//--------------------------------------------------
console.log("Bài 4");
//--------------------------------------------------
//Xử lý mảng
console.log("Bài 1");
function remove(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (
      isNaN(arr[i]) ||
      arr[i] === 0 ||
      arr[i] === false ||
      arr[i] === "" ||
      arr[i] === undefined ||
      arr[i] === null
    ) {
      arr.splice(i, 1);
    }
  }

  console.log(arr);
}

remove([1, NaN, false, 10, 20, ""]);
//--------------------------------------------------
console.log("Bài 2");
function findMaxLength(arr) {
  let maxLength = arr[0].length;
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length >= maxLength) {
      maxLength = arr[i].length;
      newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
findMaxLength(["aba", "aa", "ad", "c", "vcd"]);
//--------------------------------------------------
console.log("Bài 3");

function diff(arr1, arr2) {
  var newArray = [];
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) == -1) newArray.push(arr1[i]);
  }
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) newArray.push(arr2[i]);
  }
  return newArray;
}

console.log(diff([1, 2, 3], [1, 3, 4, 5, 5]));
//--------------------------------------------------
//Xử lý Object
console.log("Bài 1");
let sinhvien = [
  { name: "Huy", age: 24 },
  { name: "An", age: 24 },
  { name: "Tuan", age: 25 },
  { name: "Hoang", age: 22 },
  { name: "Tu", age: 23 },
  { name: "Linh", age: 30 },
];

function averageAge(arr) {
  let sumAge = arr.reduce(function (sum, obj) {
    return (sum += obj.age);
  }, 0);

  return sumAge / arr.length;
}

console.log(averageAge(sinhvien));
//--------------------------------------------------
console.log("Bài 2");

function sortAge(arr) {
  let sorted = arr.sort(function (obj1, obj2) {
    return obj1.age - obj2.age;
  });

  console.log(sorted);
}

sortAge(sinhvien);
//--------------------------------------------------
console.log("Bài 3");
function sortName(arr) {
  let sortname = arr.sort(function (obj1, obj2) {
    if (obj1.name < obj2.name) return -1;
    else return 1;
  });

  console.log(sortname);
}

sortName(sinhvien);
//--------------------------------------------------
console.log("Bài 4");
function filterArrbyName(arr) {
  result = arr.filter(function (obj) {
    return obj.name.startsWith("H");
  });
  console.log(result);
}
console.log(filterArrbyName(sinhvien));
//--------------------------------------------------
//Bài tập tổng hợp
console.log("Bài 1");

//--------------------------------------------------
console.log("Bài 2");
// Bổ sung thêm điều kiện x > y nhé thầy
function dayToTarget(x, y, h) {
  let day = 0;
  while (x * day - y * day < h) {
    day++;
  }
  return day;
}

console.log(dayToTarget(3, 2, 10));
