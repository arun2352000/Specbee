document.addEventListener('DOMContentLoaded', function () {
    const jsonData = [
        {
            "name": "John Doe",
            "title": "Chief Marketing Officer",
            "company": "Acme Corp",
            "image": "/assets/profile_1.png",
            "description":"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas. ",
        },
        {
            "name": "Jane Smith",
            "title": "Chief Technical Developer",
            "company": "Tech Solutions",
            "image": "/assets/profile_2.png",
            "description":"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas. ",

        },
        {
            "name": "Alice Johnson",
            "title": "Head of Engineering",
            "company": "BuildTech",
            "image": "/assets/profile_3.png",
            "description":"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas. ",

        },
        {
            "name": "John Doe",
            "title": "Chief Marketing Officer",
            "company": "Specbee",
            "image": "/assets/profile_4.png",
            "description":"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas. ",

        },

        {
            "name": "Emily Davis",
            "title": "Marketing Manager",
            "company": "Innovative Media",
            "image": "/assets/profile.png",
            "description":"Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas. ",

        }
    ];

    const container = document.getElementById('cardContainer');
    const leftArrow = document.getElementById('leftArrow');
    const rightArrow = document.getElementById('rightArrow');

    
        // const modal = document.getElementById('myModal');
        // const btn = document.getElementById('moreInfoButton');
        // const span = document.getElementsByClassName('close')[0];
    
        // // Open the modal
        // btn.onclick = function() {
        //     modal.style.display = 'block';
        // }
    
        // // Close the modal
        // span.onclick = function() {
        //     modal.style.display = 'none';
        // }
    
        // // Close the modal when clicking outside of it
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = 'none';
        //     }
        // }
    
    

    let currentIndex = 0; function displayCards(startIndex) {
        container.innerHTML = '';
        let endIndex = startIndex + 4; let cardsToShow = jsonData.slice(startIndex, endIndex);
        while (cardsToShow.length < 4) {
            cardsToShow = cardsToShow.concat(jsonData.slice(0, 4 - cardsToShow.length));

        }
        cardsToShow.forEach(person => {

            const card = document.createElement('div');
            card.classList.add('card');
            card.onclick = () => showHorizontalCard(person);

            const header = document.createElement('div');
            header.classList.add('card__header');

            const img = document.createElement('img');
            img.classList.add('card__image');
            img.src = person.image;
            img.alt = person.name;

            const body = document.createElement('div');
            body.classList.add('card__body');

            const name = document.createElement('h2');
            name.classList.add('card__name');
            name.textContent = person.name;

            const title = document.createElement('h4');
            title.classList.add('card__title');
            title.textContent = person.title;

            const company = document.createElement('h5');
            company.classList.add('card__company');
            company.textContent = person.company;





            container.appendChild(card);
            card.appendChild(header);
            header.appendChild(img);
            card.appendChild(body);
            body.appendChild(name);
            body.appendChild(title);
            body.appendChild(company);
        });
    }
    function rotateAndDisplayNext() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('rotate');
        });
        setTimeout(() => {
            cards.forEach(card => {
                card.classList.remove('rotate');
            }); displayCards(currentIndex);
        }, 500);
        // Wait for the rotation to complete before displaying new cards
    } leftArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex -= 4; rotateAndDisplayNext();
        }
    }); rightArrow.addEventListener('click', () => {
        if (currentIndex + 4 < jsonData.length) {
            currentIndex += 4; rotateAndDisplayNext();

        } else {
            // If at the end of data, wrap around to the beginning
            currentIndex = 0; rotateAndDisplayNext();
        }
    });
    displayCards(currentIndex);
    // Initialize the first set of cards

    function showHorizontalCard(card) {
        const horizontalCard = document.getElementById("horizontalCard");
        horizontalCard.style.display = "flex";
        
        document.getElementById("hCardImage").src = card.image;
        document.getElementById("hCardName").textContent = card.name;
        document.getElementById("hCardPosition").textContent = card.title;
        document.getElementById("hCardCompany").textContent = card.company;
        document.getElementById("hCardDescription").textContent = card.description;
    }
    
    
});
function hideHorizontalCard() {
    document.getElementById("horizontalCard").style.display = "none";
}








