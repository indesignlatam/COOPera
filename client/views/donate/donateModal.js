Template.donateModal.onCreated(function donateModalOnCreated() {
	this.id = FlowRouter.getParam("id");
});

Template.donateModal.onRendered(function donateModalOnRendered() {
	$(this.firstNode).modal({
		detachable: false,
		observeChanges: true,
		onApprove() {
			return false;
		},
		onHidden() {
			return true;
		}
	});
});

Template.donateModal.events({
	'keyup [name="ammount"]'(event, instance) {
		event.preventDefault();
		let value = $(event.currentTarget).val();
		value = accounting.formatMoney(value, '$', 0);

		$(event.currentTarget).val(value);
	},
	'submit #donateForm'(event, instance) {
		event.preventDefault();

		$(event.currentTarget).addClass('loading');

		const target = event.target;

		const donation = {
			ammount: target.ammount.value.replace(/\D/g,''),
			eventId: Template.instance().id
		}

		// When response from server remove loading class
		setTimeout(function(){
			$(event.currentTarget).removeClass('loading');
		}, 1000);

		Meteor.call("event_donations.create", donation, function(error, result){
			if(error){
				console.log("error", error);
			}
			else{
				target.reset();
				$('#donateModal').modal('hide');
				setTimeout(function() {
					Bert.alert('Gracias por contribuir a nuestra causa! ' + Meteor.user().profile.name, 'success');
				}, 750);
			}
		});
	}
});

Template.donateModal.helpers({

});
