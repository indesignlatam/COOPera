// Events Methods
Meteor.methods({
  'events.create'(data){
    check(data, Object);
    Events.insert(data);
  },
  'events.update'(objectId, data){
    check(data, Object);
    check(objectId, String);
    Events.update({_id: objectId}, {$set: data});
  },
  'events.delete'(objectId){
    check(objectId, String);
    Events.remove(objectId);
  }
});
