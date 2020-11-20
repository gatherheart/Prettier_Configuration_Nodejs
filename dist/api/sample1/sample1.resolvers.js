"use strict";
exports.__esModule = true;
var resolvers = {
    Query: {
        sample1: function (_, args) {
            return "Hello " + args.name;
        }
    },
    Mutation: {
        sample1: function (_, _a, _b) {
            var channel = _a.channel, text = _a.text;
            var pubsub = _b.pubsub;
            var message = { channel: channel, text: text };
            pubsub.publish(channel, { sample1: message });
            return message;
        }
    },
    Subscription: {
        sample1: {
            subscribe: function (_, _a, _b) {
                var channel = _a.channel;
                var pubsub = _b.pubsub;
                return pubsub.asyncIterator(channel);
            }
        }
    }
};
exports["default"] = resolvers;
//# sourceMappingURL=sample1.resolvers.js.map