const getComment = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
};

const bodyE = document.querySelector("body");
const table = document.createElement("table");
const thead = document.createElement("thead");
const tbody = document.createElement("tbody");

let thr = document.createElement("tr");
let th1 = document.createElement("th");
th1.appendChild(document.createTextNode("STT"));

let th2 = document.createElement("th");
th2.appendChild(document.createTextNode("Name"));

let th3 = document.createElement("th");
th3.appendChild(document.createTextNode("Email"));

let th4 = document.createElement("th");
th4.appendChild(document.createTextNode("Comment"));

thr.append(th1, th2, th3, th4);
thead.append(thr);
table.append(thead, tbody);
bodyE.append(table);

const creatTable = (user) => {
  const bodyE = document.querySelector("body");
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  const tr = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.append(document.createTextNode(user.id));

  const td2 = document.createElement("td");
  td2.append(document.createTextNode(user.name));

  const td3 = document.createElement("td");
  td3.append(document.createTextNode(user.email));

  const td4 = document.createElement("td");
  td4.append(document.createTextNode(user.body));

  tr.append(td1, td2, td3, td4);
  tbody.append(tr);
  table.append(thead, tbody);
  bodyE.append(table);

  return tr;
};

const renderComment = async () => {
  try {
    const { data } = await getComment();
    const commentUser = data.map((user) => creatTable(user));
    document.querySelector("tbody").append(...commentUser);
    console.log(test);
  } catch (err) {
    console.log(err);
  }
};

renderComment();
