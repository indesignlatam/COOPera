// Event Donations Methods
Meteor.methods({
  'volunteers.create'(data){
    check(data, Object);
    EventDonations.insert(data);
  },
  'volunteers.update'(objectId, data){
    check(data, Object);
    check(objectId, String);
    EventDonations.update({_id: objectId}, {$set: data});
  },
  'volunteers.delete'(objectId){
    check(objectId, String);
    EventDonations.remove(objectId);
  }
});
