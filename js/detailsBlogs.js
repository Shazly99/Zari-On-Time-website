const queryString = window.location.search; 
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
console.log(id);

(async function () {
    let response = await fetch(`https://zariontime.com/api/web/blog/${id}`)
    let responseData = await response.json();
    Blogs=responseData.Blog
    console.log(Blogs)
    displayBlogEn()
})();

function displayBlogEn() {
    var cartona = ``; 
        cartona += `
        <div class="main-title text-center py-4"> 
            <h2 class="fw-bold fs-1 blog__title-h2  ">${Blogs.BlogTitleEn}</h2>
        </div>
        <div class="app__blog col-12 mb-3 p-2 position-relative ">
            <div   class="w-100 rounded-3 overflow-hidden  p-3 ">
                    <img class="blog-img w-100" src="${Blogs.BlogImage}">
                    <div class="app__Blog-footer py-3">
                    <div class="app__Blog-footer-right ">
                        <i class="fa fa-user"></i>
                        <span class='mt-3 blogAuthor' >${Blogs.BlogAuthorEn}</span>
                    </div>
                    <div class="app__Blog-footer-left">
                        <span>${Blogs.BlogDate}</span>
                    </div>
                </div>
                <p class='mt-2'>${Blogs.BlogBodyEn}</p>
            </div>
        </div>
    `;

    document.getElementById("rowData").innerHTML = cartona;
}

function displayBlogAr() {
    var cartona = ``; 
        cartona += `
        <div class="main-title text-center py-4"> 
            <h2 class="fw-bold fs-1 blog__title-h2  ">${Blogs.BlogTitleAr}</h2>
        </div>
        <div class="app__blog col-12  mb-3 p-2 position-relative ">
            <div   class="w-100    rounded-3 overflow-hidden  p-3 ">
          
                    <img class="blog-img w-100" src="${Blogs.BlogImage}">
                    <div class="app__Blog-footer py-3">
                    <div class="app__Blog-footer-right ">
                        <i class="fa fa-user"></i>
                        <span class='mt-3 blogAuthor' >${Blogs.BlogAuthorAr}</span>
                    </div>
                    <div class="app__Blog-footer-left">
                        <span>${Blogs.BlogDate}</span>
                    </div>
                </div>
                <p class='mt-2'>${Blogs.BlogBodyAr}</p>
            </div>
        </div>
    `;

    document.getElementById("rowData").innerHTML = cartona;
}