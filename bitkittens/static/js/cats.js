document.addEventListener("DOMContentLoaded", function() {

    const summonCats = document.querySelector('.summon-cats');

    const catCounter = {}
    
    summonCats.addEventListener('click', function(e) {
        axios.get('http://bitkittens.herokuapp.com/cats.json', {
            params: {number: 5}
        })
        .then(response => {
            let catData = response.data.cats;
            catData.forEach(function (cat, index) {
                let catPic = document.createElement('img');
                catPic.src = cat.photo;
                catPic.alt = 'Photo of ' + cat.name;
                const catDiv = document.getElementsByClassName('cat-box');
                catDiv[index].innerText = '';
                catDiv[index].append(catPic);

                console.log(cat.name)
                console.log(catCounter)
                if (cat.name in catCounter){
                    console.log('already there')
                    catCounter[cat.name] += 1
                } else {
                    catCounter[cat.name] = 1
                }

                
            })
            const catBookList = document.getElementById('cat-book-list');
            catBookList.innerHTML = '<h3>Cat Visits... Meow!</h3>'
            console.log(Object.keys(catCounter))
                    Object.keys(catCounter).forEach(function(key) {
                        let catCount = document.createElement('li');
                        catCount.innerText = key, catCounter[key];
                        catBookList.appendChild(catCount);
            });

            let catOne = document.getElementById('cat1');

            let count = 0;
            const interval = setInterval(function() {
                count ++
                if (count === 100) {
                    clearInterval(interval)
                } else {
                    catOne.style.position = 'relative';
                    console.log(parseInt(catOne.style.left) + 1)
                    catOne.style.left = (parseInt(catOne.style.left) + 1) + 'px'
                    console.log(catOne.style.left)
                }
            }, 20)

        })
        .catch(error => {
            console.log(error);
        })
    });

});