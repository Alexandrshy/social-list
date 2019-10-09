const graphql = require("graphql");
const Person = require("../modules/person");
const Twitter = require("../modules/twitter");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const PersonType = new GraphQLObjectType({
  name: "Person",
  fields: () => ({
    id: { type: GraphQLID },
    img: { type: GraphQLString },
    name: { type: GraphQLString },
    twitterId: {
      type: GraphQLID
    },
    twitter: {
      type: TwitterType,
      resolve(parent, args) {
        return Twitter.findById(parent.twitterId);
      }
    }
  })
});

const TwitterType = new GraphQLObjectType({
  name: "Twitter",
  fields: () => ({
    id: { type: GraphQLID },
    urlText: { type: GraphQLString },
    countTweets: { type: GraphQLString },
    countFollowers: { type: GraphQLString },
    date: { type: GraphQLString },
    link: { type: GraphQLString },
    authorId: { type: GraphQLID }
  })
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    person: {
      type: PersonType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Person.findById(args.id);
      }
    },
    persons: {
      type: new GraphQLList(PersonType),
      resolve(parent, args) {
        return Person.find({});
      }
    },
    twitter: {
      type: TwitterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Twitter.findById(args.id);
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPerson: {
      type: PersonType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        img: { type: new GraphQLNonNull(GraphQLString) },
        twitterId: { type: GraphQLID }
      },
      resolve(parent, args) {
        let person = new Person({
          name: args.name,
          img: args.img,
          twitterId: args.twitterId
        });
        return person.save();
      }
    },
    addTwitter: {
      type: TwitterType,
      args: {
        urlText: { type: new GraphQLNonNull(GraphQLString) },
        countTweets: { type: new GraphQLNonNull(GraphQLString) },
        countFollowers: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        let twitter = new Twitter({
          urlText: args.urlText,
          countTweets: args.countTweets,
          countFollowers: args.countFollowers,
          date: args.date,
          link: args.link,
          authorId: args.authorId
        });
        return twitter.save();
      }
    },
    removePerson: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Person.findByIdAndRemove(args.id);
      }
    },
    removeTwitter: {
      type: TwitterType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Twitter.findByIdAndRemove(args.id);
      }
    },
    updatePerson: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        img: { type: new GraphQLNonNull(GraphQLString) },
        twitterId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Person.findOneAndUpdate(
          args.id,
          {
            $set: { name: args.name, img: args.img, twitterId: args.twitterId }
          },
          { new: true, useFindAndModify: false }
        );
      }
    },
    updateTwitter: {
      type: TwitterType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        urlText: { type: new GraphQLNonNull(GraphQLString) },
        countTweets: { type: new GraphQLNonNull(GraphQLString) },
        countFollowers: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLString) },
        link: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, args) {
        return Twitter.findOneAndUpdate(
          args.id,
          {
            $set: {
              urlText: args.urlText,
              countTweets: args.countTweets,
              countFollowers: args.countFollowers,
              date: args.date,
              link: args.link,
              authorId: args.authorId
            }
          },
          { new: true, useFindAndModify: false }
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
