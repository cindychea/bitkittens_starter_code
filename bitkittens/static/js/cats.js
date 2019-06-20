document.addEventListener("DOMContentLoaded", function() {

    const summonCats = document.querySelector('.summon-cats');

    summonCats.addEventListener('click', function(e) {
        axios.get('http://bitkittens.herokuapp.com/cats.json', {
            params: {number: 5}
        })
        .then(response => {
            let catData = response.data.cats;
            catData.forEach(function (element, index) {
                let catPic = document.createElement('img');
                catPic.src = element.photo;
                catPic.alt = 'Photo of ' + element.name;
                const catDiv = document.getElementsByClassName('cat-box');
                catDiv[index].innerText = '';
                catDiv[index].append(catPic);
            });
        })
        .catch(error => {
            console.log(error);
        })
    });

});
