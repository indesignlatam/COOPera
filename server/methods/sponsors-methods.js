// Sponsors Methods
Meteor.methods({
  'sponsors.create'(data){
    check(data, Object);
    Sponsors.insert(data);
  },
  'sponsors.update'(objectId, data){
    check(data, Object);
    check(objectId, String);
    Sponsors.update({_id: objectId}, {$set: data});
  },
  'sponsors.delete'(objectId){
    check(objectId, String);
    Sponsors.remove(objectId);
  }
});
