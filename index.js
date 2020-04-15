const searchbar = document.forms['.cards'].querySelector('.src');

searchbar.addEventListener('keyup',function(e){
    const term=e.target.value.toLowerCase();
    const movies=list.getElementsByclassName('content');
    Array.from(movies).forEach(function(movies){
        const title=movies.firstElementChild()
    })
})
