import '../styles/AOS.scss';

function cb(e) {
    console.log(e);
}

function AOS() {
    let observer = new IntersectionObserver(cb, {
        threshold: 1
    });
    setTimeout(function () {
        observer.observe(document.querySelector('.aos-container'));
    }, 300);

    return (
        <div className="aos-container"></div>
    );
}

export default AOS;
