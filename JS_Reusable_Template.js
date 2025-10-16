// 1. This Can Be Used For Search Function With Pressing Enter

const searchFunc = async () => {
  const query = document.querySelector("#search").value.trim().toLowerCase();
  if (!query) return;

  try {
    let [searchFetch] = await Promise.all([fetch(api)]);
    const filter = document.querySelector("#filter");
    filter.style.display = "none";
    const pagination = document.querySelector("#pagination");
    pagination.style.display = "none";
    const [data1] = await Promise.all([searchFetch.json()]);

    const filtered = await data1.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
    appenddata(filtered);
    document.querySelector("#search").value = "";
  } catch (err) {
    console.error("Search failed:", err);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector("#search");
  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") searchFunc();
    });
  }
});
