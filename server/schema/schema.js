const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLBoolean} = graphql;

const Items = require('../models/items');

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


// const Mutation = new GraphQLObjectType({
// 	name: 'Mutation',
// 	fields: {
// 		addDirector: {
// 			type: DirectorType,
// 			args: {
// 				name: { type: new GraphQLNonNull(GraphQLString) },
// 				age: { type: new GraphQLNonNull(GraphQLInt) },
// 			},
// 			resolve(parent, { name, age }) {
// 				const director = new Directors({
// 					name,
// 					age,
// 				});
// 				return director.save();
// 			},
// 		},
// 		addMovie: {
// 			type: MovieType,
// 			args: {
// 				name: { type: new GraphQLNonNull(GraphQLString) },
// 				genre: { type: new GraphQLNonNull(GraphQLString) },
// 				directorId: { type: GraphQLID },
//         watched: { type: new GraphQLNonNull(GraphQLBoolean) },
//         rate: { type: GraphQLInt },
// 			},
// 			resolve(parent, { name, genre, directorId, watched, rate }) {
// 				const movie = new Movies({
// 					name,
// 					genre,
// 					directorId,
//           watched,
//           rate,
// 				});
// 				return movie.save();
// 			},
// 		},
// 		deleteDirector: {
// 			type: DirectorType,
// 			args: { id: { type: GraphQLID } },
// 			resolve(parent, { id }) {
// 				return Directors.findByIdAndRemove(id);
// 			}
// 		},
// 		deleteMovie: {
// 			type: MovieType,
// 			args: { id: { type: GraphQLID } },
// 			resolve(parent, { id }) {
// 				return Movies.findByIdAndRemove(id);
// 			}
// 		},
// 		updateDirector: {
// 			type: DirectorType,
// 			args: {
// 				id: { type: GraphQLID },
// 				name: { type: new GraphQLNonNull(GraphQLString) },
// 				age: { type: new GraphQLNonNull(GraphQLInt) },
// 			},
// 			resolve(parent, { id, name, age }) {
// 				return Directors.findByIdAndUpdate(
// 					id,
// 					{ $set: { name, age } },
// 					{ new: true },
// 				);
// 			},
// 		},
// 		updateMovie: {
// 			type: MovieType,
// 			args: {
// 				id: { type: GraphQLID },
// 				name: { type: new GraphQLNonNull(GraphQLString) },
// 				genre: { type: new GraphQLNonNull(GraphQLString) },
// 				directorId: { type: GraphQLID },
//         watched: { type: new GraphQLNonNull(GraphQLBoolean) },
//         rate: { type: GraphQLInt },
// 			},
// 			resolve(parent, { id, name, genre, directorId, watched, rate }) {
// 				return Movies.findByIdAndUpdate(
// 					id,
// 					{ $set: { name, genre, directorId, watched, rate } },
// 					{ new: true },
// 				);
// 			},
// 		},
// 	}
// });

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
// mutation: Mutation,
});