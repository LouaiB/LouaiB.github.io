const imageCard = document.querySelectorAll('.image-card');

imageCard.forEach(card => {
    const image = card.getElementsByTagName('img')[0];
    const btn = card.getElementsByTagName('button')[0];
    const text = card.getElementsByClassName('image-card-text')[0];

    const colorScheme = text.style.backgroundColor;
    btn.style.backgroundColor = colorScheme;
    btn.style.top = (card.clientHeight - 50) + 'px';
    btn.style.left = (card.clientWidth - 50) + 'px';

    btn.addEventListener('mouseover', () => {
        if(btn.style.transform != 'rotate(45deg)')
            btn.style.transform = 'rotate(180deg)';
        else
            btn.style.transform = 'rotate(225deg)';
        
    });
    btn.addEventListener('mouseout', () => {
        if(btn.style.transform =='rotate(225deg)' )
            btn.style.transform = 'rotate(45deg)';
        else if(btn.style.transform != 'rotate(45deg)')
            btn.style.transform = 'rotate(0deg)';
    });

    btn.addEventListener('click', () => {
        if(image.clientHeight != 0){
            // image.style.opacity = '0';
            image.style.height = '0';
            btn.style.transform = 'rotate(45deg)';
            btn.style.backgroundColor = 'whitesmoke';
            btn.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.3)';
            btn.style.color = '#333';
        }
        else {
            // image.style.opacity = '1';
            image.style.height = card.clientHeight + 'px';
            btn.style.transform = 'rotate(0deg)';
            btn.style.backgroundColor = colorScheme;
            btn.style.boxShadow = '3px 3px 3px rgba(0, 0, 0, 0)';
            btn.style.color = 'whitesmoke';
        }
    });
});