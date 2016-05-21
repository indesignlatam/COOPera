// Event Donations Methods
Meteor.methods({
  'event_donations.create'(data){
    check(data, Object);
    EventDonations.insert(data);
  },
  'event_donations.update'(objectId, data){
    check(data, Object);
    check(objectId, String);
    EventDonations.update({_id: objectId}, {$set: data});
  },
  'event_donations.delete'(objectId){
    check(objectId, String);
    EventDonations.remove(objectId);
  }
});
