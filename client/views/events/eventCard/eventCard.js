Template.eventCard.onCreated(function eventCardOnCreated() {
	this.autorun((v) => {
		this.subscribe('event-donations', Template.instance().data._id);
		this.subscribe('event-pictures', Template.instance().data._id);
	});
});

Template.eventCard.onRendered(function eventCardOnRendered() {
});

Template.eventCard.events({
	'click .card'(event, instance) {
		FlowRouter.go("eventDetail", { id: this._id })
	}
});

Template.eventCard.helpers({
	date() {
		return moment(this.scheduledDate).format("DD/MM/YYYY")
	},
	progress(){
		$('#donationProgress' + this._id).progress({
			percent: this.donationProgressCapped()
		});
	}
});
