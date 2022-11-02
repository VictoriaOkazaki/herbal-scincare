const loader = () => {
    const imgs = document.images;
    const imgsLen = imgs.length;
    let loadImgCount = 0;

    document.addEventListener('DOMContentLoaded', (event) => {
        [].forEach.call(imgs, function(img) {
            if(img.complete) {
                incrementImgCounter();
            } else {
                img.addEventListener( 'load', incrementImgCounter, false );
            }
        });
        setTimeout(hideLoader, 5000);
    });


    let loaderVisible = true;
    function hideLoader() {
        if (!loaderVisible) return;
        loaderVisible = false;
        // console.log('All images on page loaded');
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.wrapper').style.visibility = 'visible';
    }

    function incrementImgCounter() {
        loadImgCount++;
        if (loadImgCount === imgsLen) {
            hideLoader();
            // For testing timeot to sea in development mode
            // setTimeout(hideLoader, 300);
        }
    }
};