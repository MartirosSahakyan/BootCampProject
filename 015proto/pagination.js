const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
let pages = [];
let currentPage = 0;
const Pagination = {
  init: (array, pageSize) => {
    let fakePages = [];
    array.forEach((el, i) => {
      fakePages[i] = array.slice(i, i + pageSize);
    });
    pages = fakePages.filter((e) => e);
    return pages;
  },
  getPageItems: () => {
    console.log(pages[currentPage]);
  },
  nextPage: () => {
    currentPage += 1;
    return Pagination;
  },
  prevPage: () => {
    currentPage -= 1;
    return Pagination;
  },
  firstPage: () => {
    currentPage = 0;
  },
  lastPage: () => {
    currentPage = pages.length - 1;
  },
  goToPage: (number) => {
    currentPage = number - 1;
  },
};

Pagination.init(alphabetArray, 2);

Pagination.getPageItems();
Pagination.nextPage();
Pagination.getPageItems();
Pagination.nextPage().nextPage();
Pagination.goToPage(3);
