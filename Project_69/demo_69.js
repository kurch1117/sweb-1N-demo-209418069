function change (index) {
    const p = document.querySelector('.show-classdemo');
    console.log('p',p)
    switch(index) {
        case 1:
            p.innerHTML = `<iframe src="../demo/w01_69/index.html" width="100%" height="100%" />`
            break;
        case 2:
            p.innerHTML = `<iframe src="../demo/w02_69/card_69.html" width="100%" height="100%" />`
            break;
        case 3:
            p.innerHTML = `<iframe src="../demo/w04_69/blog_69.html" width="100%" height="100%" />`
            break;
        case 4:
            p.innerHTML = `<iframe src="../demo/w06_69/blog_69.html" width="100%" height="100%" />`
            break;
        case 5:
            p.innerHTML = `<iframe src="../demo/W08_69/quiz1_69.html" width="100%" height="100%" />`
            break;
        case 6:
            p.innerHTML = `<iframe src="../demo/W09_69/resume_69.html" width="100%" height="100%" />`
            break;
        case 7:
            p.innerHTML = `<iframe src="../demo/w12_69/portfolio/index.html" width="100%" height="100%" />`
            break;
        case 8:
            p.innerHTML = `<iframe src="../demo/w13_69/portfolio/index.html" width="100%" height="100%" />`
            break;
        case 9:
            p.innerHTML = `<iframe src="../demo/w14_69/portfolio/index.html" width="100%" height="100%" />`
            break; 
        case 10:
            p.innerHTML = `<iframe src="../demo/w15_69/portfolio/index.html" width="100%" height="100%" />`
            break;                        
    }
}