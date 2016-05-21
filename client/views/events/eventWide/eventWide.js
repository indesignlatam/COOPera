Template.eventWide.onCreated(function eventWideOnCreated() {
	this.autorun((v) => {
		this.subscribe('subscription');
	});
});

Template.eventWide.onRendered(function eventWideOnRendered() {

});

Template.eventWide.events({
	'click .class'(event, instance) {
	}
});

Template.eventWide.helpers({
	helper() {
		return 'miaw';
	}
});
