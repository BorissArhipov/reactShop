export default class ReactShopService {

    data = [
        {
            id: 1,
            title: 'Frontal',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 163,
            coverImage: 'https://ee3.pigugroup.eu/colours/293/917/6/2939176/kiiktool-koos-tumbaga-balance-68-tumesininemust_large.jpg'
        },
        {
            id: 2,
            title: 'Felipe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 174,
            coverImage: 'https://ee3.pigugroup.eu/colours/278/257/6/2782576/tugitool-johan-hall-tellida_large.jpg'
        },
        {
            id: 3,
            title: 'Balace',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 280,
            coverImage: 'https://ee1.pigugroup.eu/colours/132/048/5/1320485/f81cda328fee108e58589f5994be0f91_large.jpg'
        },
        {
            id: 4,
            title: 'Meble',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 78,
            coverImage: 'https://ee2.pigugroup.eu/colours/227/743/0/2277430/c81d3efcb564308a57d71535819bfdd2_large.jpg'
        },
        {
            id: 5,
            title: 'Astro',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 89,
            coverImage: 'https://ee3.pigugroup.eu/colours/209/306/5/2093065/f288ab09cf6754ac78fe4fd3f7a179c7_large.jpg'
        },
        {
            id: 6,
            title: 'Purio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 112,
            coverImage: 'https://ee1.pigugroup.eu/colours/271/588/3/2715883/ed544766e14ab49b06d38fdbd3505392_large.jpg'
        },
        {
            id: 7,
            title: 'Cotto',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 148,
            coverImage: 'https://ee2.pigugroup.eu/colours/150/890/5/1508905/c52a2a9ce2b542e2b1fdfe08941f5550_large.jpg'
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