import { itemsQuery } from './queries';
import {client} from '../../index';

class ReactShopService {
    datata = [
        {
            id: 1,
            title: 'Frontal',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 163,
            coverImage: 'https://images.unsplash.com/photo-1537212013010-de9c76f8f0ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            id: 2,
            title: 'Felipe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 174,
            coverImage: 'https://images.unsplash.com/photo-1551298698-66b830a4f11c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            "id": 5,
            "title": "Cotto",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.",
            "price": 148,
            "coverImage": "https://images.unsplash.com/photo-1565105336789-e9392607c17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        },
        {
            id: 4,
            title: 'Meble',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 78,
            coverImage: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            id: 5,
            title: 'Astro',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 89,
            coverImage: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            id: 6,
            title: 'Purio',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 112,
            coverImage: 'https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
        {
            id: 7,
            title: 'Cotto',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda tenetur inventore accusantium numquam officia voluptatibus amet dolor saepe aliquam tempora, odio eligendi voluptate ipsam minus dicta deleniti ea odit est.',
            price: 148,
            coverImage: 'https://images.unsplash.com/photo-1565105336789-e9392607c17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
        },
    ];
  
    async getShopItems() {
      return client.query({query: itemsQuery});
    }
  }

export default ReactShopService;