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
      resolve({ twitterId }) {
        return Twitter.findById(twitterId);
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
      resolve(parent, { id }) {
        return Person.findById(id);
      }
    },
    persons: {
      type: new GraphQLList(PersonType),
      resolve(parent) {
        return Person.find({});
      }
    },
    twitter: {
      type: TwitterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, { id }) {
        return Twitter.findById(id);
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
      resolve(parent, { name, img, twitterId }) {
        let person = new Person({
          name,
          img,
          twitterId
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
      resolve(
        parent,
        { urlText, countTweets, countFollowers, date, link, authorId }
      ) {
        let twitter = new Twitter({
          urlText,
          countTweets,
          countFollowers,
          date,
          link,
          authorId
        });
        return twitter.save();
      }
    },
    removePerson: {
      type: PersonType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, { id }) {
        return Person.findByIdAndRemove(id);
      }
    },
    removeTwitter: {
      type: TwitterType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parent, { id }) {
        return Twitter.findByIdAndRemove(id);
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
      resolve(parent, { id, name, img, twitterId }) {
        return Person.findOneAndUpdate(
          id,
          {
            $set: { name, img, twitterId }
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
      resolve(
        parent,
        { id, urlText, countTweets, countFollowers, date, link, authorId }
      ) {
        return Twitter.findOneAndUpdate(
          id,
          {
            $set: {
              urlText,
              countTweets,
              countFollowers,
              date,
              link,
              authorId
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
