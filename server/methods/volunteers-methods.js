// Volunteers Methods
Meteor.methods({
  'volunteers.create'(eventId){
    check(eventId, String);
    Volunteers.insert({ eventId: eventId, volunteerId: Meteor.userId() });
  },
  'volunteers.update'(objectId, data){
    Volunteers.update({_id: objectId}, {$set: data});
  },
  'volunteers.delete'(eventId){
    Volunteers.remove({ eventId: eventId, volunteerId: Meteor.userId() });
  }
});
