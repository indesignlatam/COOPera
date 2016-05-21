Template.organizationDetail.onCreated(function organizationDetailOnCreated() {
	this.autorun((v) => {
		this.subscribe('subscription');
	});
});

Template.organizationDetail.onRendered(function organizationDetailOnRendered() {

});



Template.organizationDetail.events({
	'click .class'(event, instance) {
	}
});

Template.organizationDetail.helpers({
	helper() {
		return 'miaw';
	}
});
