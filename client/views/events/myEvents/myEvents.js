Template.myEvents.onCreated(function myEventsOnCreated() {

});

Template.myEvents.onRendered(function myEventsOnRendered() {

});

Template.myEvents.events({
	// 'click .class'(event, instance) {
	// }
});

Template.myEvents.helpers({
	my_events() {
		if(Helpers.isVolunteer()){
			let volunteers = Volunteers.find({ volunteerId: Meteor.userId() }, {fields: { eventId: 1 }});
			let eventIDs = [];

			volunteers.map((volunteer)=>{
				eventIDs.push(volunteer.eventId);
			})

			let today = new Date();
			let events = Events.find({_id: {$in: eventIDs}, scheduledDate:{	$gte: today }}, { sort: { scheduledDate:1 }}, { fields: Events.basicFields});
  		return events;
		}
		else if(Helpers.isOrganization()){
			let user = Meteor.users.findOne(Meteor.userId())
			let organizationId = user.profile.organizationId;
			let organization = Organizations.findOne(organizationId);
			let today = new Date();
			let cursor = Events.find({organizationId:organizationId, scheduledDate:{	$gte: today }}, { fields: Events.basicFields});
			return cursor;
		}
		else if(Helpers.isSponsor()){
			let user = Meteor.users.findOne(Meteor.userId());
			let sponsorId = user.profile.sponsorId;
			let donations = EventDonations.find({sponsorId:sponsorId}, {fields:{ eventId: 1 }});
			let eventIds = [];

			donations.map((donation)=>{
				eventIds.push(donation.eventId)
			});

			let uniqueEventIds = _.uniq(eventIds);
			let today = new Date();
			let cursor =  Events.find({_id: {$in: uniqueEventIds}, scheduledDate:{ $gte: today }},{fields: Events.basicFields });
			return cursor;
		}
	},
	my_events_count(){
		if(Helpers.isVolunteer()){
			let volunteers = Volunteers.find({ volunteerId: Meteor.userId() }, {fields: { eventId: 1 }});
			let eventIDs = [];

			volunteers.map((volunteer)=>{
				eventIDs.push(volunteer.eventId);
			})

			let today = new Date();
			let events = Events.find({_id: {$in: eventIDs}, scheduledDate:{	$gte: today }}, { sort: { scheduledDate:1 }}, { fields: Events.basicFields});
			return events.count();
		}
		else if(Helpers.isOrganization()){
			let user = Meteor.users.findOne(Meteor.userId())
			let organizationId = user.profile.organizationId;
			let organization = Organizations.findOne(organizationId);
			let today = new Date();
			let cursor = Events.find({organizationId:organizationId, scheduledDate:{	$gte: today }}, { fields: Events.basicFields});
			return cursor.count();
		}
		else if(Helpers.isSponsor()){
			let user = Meteor.users.findOne(Meteor.userId());
			let sponsorId = user.profile.sponsorId;
			let donations = EventDonations.find({sponsorId:sponsorId}, {fields:{ eventId: 1 }});
			let eventIds = [];

			donations.map((donation)=>{
				eventIds.push(donation.eventId)
			});

			let uniqueEventIds = _.uniq(eventIds);
			let today = new Date();
			let cursor =  Events.find({_id: {$in: uniqueEventIds}, scheduledDate:{ $gte: today }},{fields: Events.basicFields });
			return cursor.count();
		}
	},
	next_event(){
		return Events.findOne();
	}
});
