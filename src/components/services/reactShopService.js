export default class ReactShopService {

    data = [
        {
            id: 1,
            title: 'Frontal',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 163,
            coverImage: 'https://ee1.pigugroup.eu/colours/517/951/517951/acdea53464578a6a843f80076d6a77a9_xbig.jpg'
        },
        {
            id: 2,
            title: 'Felipe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 174,
            coverImage: 'https://ee1.pigugroup.eu/colours/517/951/517951/acdea53464578a6a843f80076d6a77a9_xbig.jpg'
        },
        {
            id: 3,
            title: 'Balace',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 280,
            coverImage: 'https://ee3.pigugroup.eu/colours/293/917/6/2939176/kiiktool-koos-tumbaga-balance-68-tumesininemust_xbig.jpg'
        },
        {
            id: 4,
            title: 'Meble',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 78,
            coverImage: 'https://ee3.pigugroup.eu/colours/132/048/5/1320485/f81cda328fee108e58589f5994be0f91_xbig.jpg'
        },
        {
            id: 5,
            title: 'Astro',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 89,
            coverImage: 'https://ee1.pigugroup.eu/colours/227/743/0/2277430/c81d3efcb564308a57d71535819bfdd2_xbig.jpg'
        },
        {
            id: 6,
            title: 'Purio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 112,
            coverImage: 'https://ee1.pigugroup.eu/colours/150/326/2/1503262/db802663bfd19e68d8ec0179065ff0f9_xbig.jpg'
        },
        {
            id: 7,
            title: 'Cotto',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 148,
            coverImage: 'https://ee3.pigugroup.eu/colours/151/279/6/1512796/2f35cf70f684fa7797378b393bee5df7_xbig.jpg'
        },
    ];
  
    getShopItems() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.75) {
            reject(new Error('Something bad happened'));
          } else {
            resolve(this.data);
          }
        }, 700);
      });
    }
  }