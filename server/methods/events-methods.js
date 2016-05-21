// Events Methods
Meteor.methods({
  'events.create'(data){
    check(data, Object);
    const user = Meteor.users.findOne({_id: this.userId});

    if(user.profile.type != "ong") {
      throw new Meteor.Error('not-allowed', 'No tienes permiso para realizar esta acción');
    }

    let organization = Organizations.findOne(user.profile.organizationId)
    data.organizationId = organization._id;
    Events.insert(data);
  },
  'events.update'(objectId, data){
    check(data, Object);
    check(objectId, String);
    const user = Meteor.users.findOne({_id: this.userId});

    if(user.profile.type != "ong") {
      throw new Meteor.Error('not-allowed', 'No tienes permiso para realizar esta acción');
    }

    let organization = Organizations.findOne(user.profile.organizationId)
    data.organizationId = organization._id;

    Events.update({_id: objectId}, {$set: data});
  },
  'events.delete'(objectId){
    check(objectId, String);
    const user = Meteor.users.findOne({_id: this.userId});

    if(user.profile.type != "ong") {
      throw new Meteor.Error('not-allowed', 'No tienes permiso para realizar esta acción');
    }

    Events.remove(objectId);
  }
});
