//Ricreiamo un feed social aggiungendo al layout di base fornito (allegato sotto) il nostro codice javascript in cui:

//- Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
//nome autore, foto profilo, data, testo del post, immagine, numero di likes.
//- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

//1- creo l'array d'oggetti contenente tutti i dati dei post

const posts = [
    {   
        profilepic: "htpps://unsplash.it/300/300?image=15",
        creatorName: 'Phill Mangione',
        date: '4 mesi fa',
        text: "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        image: "https://unsplash.it/600/300?image=171",
        likeNum: 80,
    },

    {   
        profilepic: "pinco pallo.jpg",
        creatorName: 'Pinco Pallo',
        date: '05-11-21',
        text: 'Senza cuore saremmo solo macchine',
        image:"pinco pallo.jpg",
        likeNum: 59,
    },

    {
        profilepic: "tizio-caio.jpg",
        creatorName: 'Tizio Caio',
        date: '05-11-21',
        text: 'Non dire gatto se non è nel sacco',
        image:"tizio-caio.jpg",
        likeNum: 59000,
    },

    {
        profilepic: "grand-prix.jpg",
        creatorName: 'Grand Prix',
        date: '05-11-21',
        text: 'Can che abbaia non morde',
        image:"grand-prix.jpg",
        likeNum: 716,
    },

    {
        profilepic: "pippo-pluto.jpg",
        creatorName: 'Pippo Pluto',
        date: '05-11-21',
        text: 'Hai fatto 30 fai pure 31',
        image:"pippo-pluto.jpg",
        likeNum: 4059,
    },

    {
        profilepic: "lo-hacker.jpg",
        creatorName: 'Lo Hacker',
        date: '05-11-21',
        text: 'Chi dorme non piglia pesci',
        image:"lo-hacker.jpg",
        likeNum: 5189,
    },
];

console.table(posts);

//2 stampo in HTML i post generati

const post = document.querySelector('.posts-list');

postGenerator(posts, post);

function postGenerator(posts, post) {
    for(let i = 0; i < posts.length; i++) {
        const postCard = posts[i];

        post.innerHTML += 
        `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img
                        src="img/${postCard.profilepic}"
                        alt="${postCard.creatorName}"
                        />                  
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${postCard.creatorName}</div>
                        <div class="post-meta__time">${postCard.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${postCard.text}</div>
            <div class="post__image">
                <img
                    src="img/${postCard.image}"
                    alt=""
                />
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${postCard.likeNum}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
    }
}