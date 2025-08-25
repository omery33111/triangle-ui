document.addEventListener('DOMContentLoaded', () => {
    
    const triangle = document.querySelector('.triangle');

    const params = new URLSearchParams(window.location.search);

    const x1 = params.get('x1');
    const y1 = params.get('y1');
    const x2 = params.get('x2');
    const y2 = params.get('y2');
    const x3 = params.get('x3');
    const y3 = params.get('y3');

    if (x1 && y1 && x2 && y2 && x3 && y3) {
        const polygonValue = `polygon(${x1}px ${y1}px, ${x2}px ${y2}px, ${x3}px ${y3}px)`;
        
        triangle.style.clipPath = polygonValue;

        const p1 = document.querySelector('.p1');
        const p2 = document.querySelector('.p2');
        const p3 = document.querySelector('.p3');

        p1.style.left = `${x1}px`;
        p1.style.top = `${y1}px`;
    
        p2.style.left = `${x2}px`;
        p2.style.top = `${y2}px`;
    
        p3.style.left = `${x3}px`;
        p3.style.top = `${y3}px`;
    }

});