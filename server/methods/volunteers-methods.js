// Organizations Methods
Meteor.methods({
  'volunteers.create'(data){
    check(data, Object);
    Volunteers.insert(data);
  },
  'volunteers.update'(objectId, data){
    check(data, Object);
    check(objectId, String);
    Volunteers.update({_id: objectId}, {$set: data});
  },
  'volunteers.delete'(objectId){
    check(objectId, String);
    Volunteers.remove(objectId);
  }
});
