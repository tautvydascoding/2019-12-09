// Code for products Search bar

const searchInput = document.querySelector('input[name="search"]');
const matchList = document.querySelector('#match_list');


const searchProducts = async searchText => {
    const res = await fetch('data/visos_prekes.json');
    const products = await res.json();

    let matches = products.filter(product => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return product.title.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
console.log(matches.length);

    outputHtml(matches);
};
    // Show results list into HTML
    const outputHtml = matches => {
        if(matches.length > 0) {
            const html = matches.map(
                match => `
            <div class="card ml-0 w-100 mt-1 ">
                <p class="pl-2 pt-1 mb-0">${match.title}<p>
            </div>
            `)
            .join('');

            matchList.innerHTML = html;
        }
    }




searchInput.addEventListener('input', () => searchProducts(searchInput.value));

// end
