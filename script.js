document.addEventListener('DOMContentLoaded', function(){
    const emailButton = document.querySelector('.email');
    emailButton.addEventListener('click', function(){
        const email='etiegnim@gmail.com';
        navigator.clipboard.writeText(email).then(function(){
            alert('Email copied to clipboard');
        },function(err) {
            console.error('Couldnt copy text: ', err);
        });
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link =>{
        link.addEventListener('click', function(e){
            e.preventDefault();
            const targetId = this.getAttribute('href').sybstring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement){
                targetElement.scrollIntoView({behavior: 'smooth'});
            }
        });
    });
    window.addEventListener('scroll', function(){
        let current = '';
        const sections = documnet.querySelectorAll('div[id]');
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60){
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link =>{
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1)=== current){
                link.classList.add('active');
            }
        });
    });

    const workItems = document.querySelectorAll('.works .item');
    workItems.forEach(item =>{
        item.addEventListener('mouseenter', function(){
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseleave', function(){
            this.style.transform = 'scale(1)';
        });
    });

    const tagline = documnet.querySelectorAll('.info p');
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;
    function typeWriter(){
        if (i < text.length){
            tagline.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = 'Top';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom= '20px';
    scrollTopButton.setHTMLUnsafe.right = '20px';
    scrollTopButton.style.display = 'none';
    documnet.body.appendChild(scrolltopbutton);

    window.addEventListener('scroll', function(){
        if(this.window.pageYOffset > 300) {
            scrollTopButton.style.display = 'block';
        }else{
            scrollTopButton.style.display = 'none';
        }
    });
    scrollTopButton.addEventListener('click', function(){
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
});