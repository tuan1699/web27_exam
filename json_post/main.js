const getPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const renderPost = async () => {
  try {
    const { data } = await getPost(0);
    const html = data
      .map((post) => {
        return `<div class="post">
            <h3>
              ${post.title}
            </h3>
            <p>
              ${post.body}
            </p>
          </div>`;
      })
      .join("");

    document.querySelector(".list-post").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

renderPost();
