    const getPhoto = () => {
    return axios.get("https://jsonplaceholder.typicode.com/photos");
    };

    const createItem = (photo) => {
    const item = document.createElement("div");
    item.classList.add("item");

    const img = document.createElement("img");
    img.src = photo.thumbnailUrl;

    const idItem = document.createElement("h3");
    idItem.classList.add("id");
    idItem.textContent = photo.id;

    const titleItem = document.createElement("div");
    titleItem.classList.add("title");
    titleItem.textContent = photo.title;

    item.append(img, idItem, titleItem);

    return item;
    };

    const renderItem = async () => {
    try {
        const { data } = await getPhoto();
        const itemPhoto = data.map((photo) => createItem(photo));
        document.querySelector(".list-item").append(...itemPhoto);
    } catch (err) {
        console.log(err);
    }
    };

    renderItem();
