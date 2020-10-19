const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean} = graphql;

const Items = require('../models/items');
const Clients = require('../models/clients');
const OrderItems = require('../models/order-items');

const ItemType = new GraphQLObjectType({
  name: 'Item',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    coverImage: { type: new GraphQLNonNull(GraphQLString) }
  }),
});

const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },
    adress: { type: new GraphQLNonNull(GraphQLString) },
    orderId: { type: new GraphQLNonNull(GraphQLString) }
  }),
});

const OrderItemType = new GraphQLObjectType({
  name: 'OrderItem',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    itemCount: { type: new GraphQLNonNull(GraphQLInt) },
    itemId: { type: new GraphQLNonNull(GraphQLString) }
  }),
});


const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addClient: {
			type: ClientType,
			args: {
				name: { type: new GraphQLNonNull(GraphQLString) },
        adress: { type: new GraphQLNonNull(GraphQLString) },
        orderId: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parent, { name, adress, orderId}) {
				const client = new Clients({
          name,
          adress,
          orderId
				});
				return client.save();
			},
    },

    addOrderItem: {
			type: OrderItemType,
			args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
				name: { type: new GraphQLNonNull(GraphQLString) },
        itemId: { type: GraphQLID  },
        itemCount: { type: new GraphQLNonNull(GraphQLInt) }
			},
			resolve(parent, { name, itemId, itemCount, id}) {
				const orderItem = new OrderItems({
          id,
          name,
          itemId,
          itemCount
				});
				return orderItem.save();
			},
		},
	}
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    item: {
      type: ItemType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
				return Items.findById(id);
      },
    },
    items: {
        type: new GraphQLList(ItemType),
        resolve() {
            return Items.find({});
        }
    },
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});