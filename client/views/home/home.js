Template.home.onCreated(function homeCreated() {
	this.autorun((v) => {
		this.subscribe('events.public');
		this.subscribe('event-categories');
		this.subscribe('cities');
		this.subscribe('events.volunteers');
	});
});

Template.home.onRendered((v) => {

});



Template.home.events({

});

Template.home.helpers({
	events(){
		return Events.find();
	}
});
