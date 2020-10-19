import { itemsQuery } from './queries';
import {client} from '../../index';

class ReactShopService {
    async getShopItems() {
      return client.query({query: itemsQuery});
    }
  }

export default ReactShopService;