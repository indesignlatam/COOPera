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
			return Events.find();
		}
		else if(Helpers.isOrganization()){
			return Events.find();
		}
		else if(Helpers.isSponsor()){
			return Events.find();
		}
	},
	my_events_count(){
		return Counts.get("myEventsCount");
	},
	next_event(){
		return Events.findOne();
	}
});
