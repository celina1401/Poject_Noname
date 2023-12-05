    var imgFeature = document.querySelector('.img-feature')
    var listImg = document.querySelectorAll('.list-img img')
    var prevBtn = document.querySelector('prev')
    var nextBtn = document.querySelector('next')

    listImg.forEach(imgElement=>{
        imgElement.addEventListener('click', e=>{
            imgFeature.src = e.target.getAttribute('src')
        })
    })

// console.log("hello nhó!")