// Organizations Methods
Meteor.methods({
  'organizations.create'(data){
    check(data, Object);
    Organizations.insert(data);
  },
  'organizations.update'(objectId, data){
    check(data, Object);
    check(objectId, String);
    Organizations.update({_id: objectId}, {$set: data});
  },
  'organizations.delete'(objectId){
    check(objectId, String);
    Organizations.remove(objectId);
  }
});
