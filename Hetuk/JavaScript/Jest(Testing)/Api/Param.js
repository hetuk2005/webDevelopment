export const SearchParam = (url, param) => {
  const u = new URL(url);
  console.log("U: ", u);

  const params = new URLSearchParams(u.searchParams);
  console.log("Params: ", params);

  const dataSearch = params.get(param);
  console.log("DataSearch: ", dataSearch);

  return dataSearch;
};
