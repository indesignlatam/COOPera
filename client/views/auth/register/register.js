Template.register.onCreated(function registerOnCreated() {

});

Template.register.onRendered(function registerOnRendered() {
	$('#city').dropdown({
		placeholder:false
	});
});


Template.register.events({
	'click .button.volunteer'(event, instance) {
		event.preventDefault();

		$('.segment.sponsor, .fa.sponsor').addClass('hidden');
		$('.segment.ong, .fa.ong').addClass('hidden');
		$('.segment.volunteer, .fa.volunteer').removeClass('hidden');
	},
	'click .button.sponsor'(event, instance) {
		event.preventDefault();

		$('.segment.sponsor, .fa.sponsor').removeClass('hidden');
		$('.segment.ong, .fa.ong').addClass('hidden');
		$('.segment.volunteer, .fa.volunteer').addClass('hidden');
	},
	'click .button.ong'(event, instance) {
		event.preventDefault();

		$('.segment.sponsor, .fa.sponsor').addClass('hidden');
		$('.segment.ong, .fa.ong').removeClass('hidden');
		$('.segment.volunteer, .fa.volunteer').addClass('hidden');
	},
	'submit #registerVolunteerForm'(event) {
		event.preventDefault();

		$(event.currentTarget).addClass('loading');

		let category = event.target.category;
		let categories = []

		for (var i = 0; i < category.length; i++) {
			if(category[i].checked){
				categories.push(category[i].value)
			}
		}

		const data = {
			email: event.target.email.value,
			password: event.target.password.value,
			profile: {
				name: event.target.name.value,
				categories: categories,
				city: event.target.city.value,
				phone: event.target.phone.value,
				type: "volunteer",
				source: 'web'
			}
		};

		Accounts.createUser(data, function(error) {
			$(event.currentTarget).removeClass('loading');

			if (error) {
				if (error.reason == "Email already exists.") {
					Bert.alert('El correo electrónico ya esta registrado', 'danger');
				}
			} else {
				$('#registerModal').modal('hide');
				FlowRouter.go("myEvents")
				setTimeout(function() {
					Bert.alert('Bienvenid@ ' + Meteor.user().profile.name, 'success');
				}, 750);
			}
		});
	},
	'submit #registerOngForm'(event) {
		event.preventDefault();

		$(event.currentTarget).addClass('loading');

		const orgData = {
			name: event.target.company.value,
			description: event.target.description.value,
			address: event.target.address.value,
		  phone: event.target.phone.value,
			url: event.target.url.value
		};

		Meteor.call("organizations.create", orgData, (error, result) =>{
			console.log("Hello");
			if(error){
				console.log("error", error);
			} else {
				const userData = {
					email: event.target.email.value,
					password: event.target.password.value,
					profile: {
						name: event.target.name.value,
						organizationId: result,
						type: "ong",
						source: 'web'
					}
				};

				console.log("Hello");

				Accounts.createUser(userData, (error) => {
					console.log("Hello");
					$(event.currentTarget).removeClass('loading');
					if (error) {
						if (error.reason == "Email already exists.") {
							Bert.alert('El correo electrónico ya esta registrado', 'danger');
						}
					} else {
						$('#registerModal').modal('hide');
						FlowRouter.go("myEvents")
						setTimeout(function() {
							Bert.alert('Bienvenid@ ' + Meteor.user().profile.name, 'success');
						}, 750);
					}
				});
			}
		});


	},
	'submit #registerSponsorForm'(event) {
		event.preventDefault();

		$(event.currentTarget).addClass('loading');

		const sponsorData = {
			name: event.target.company.value,
			address: event.target.address.value,
			phone: event.target.phone.value,
		  url: event.target.url.value
		};

		Meteor.call("sponsors.create", sponsorData, function(error, result){
			if(error){
				console.log("error", error);
			} else {

				const userData = {
					email: event.target.email.value,
					password: event.target.password.value,
					profile: {
						name: event.target.name.value,
						sponsorId: result,
						type: "sponsor",
						source: 'web'
					}
				};

				Accounts.createUser(userData, function(error) {
					$(event.currentTarget).removeClass('loading');
					if (error) {
						if (error.reason == "Email already exists.") {
							Bert.alert('El correo electrónico ya esta registrado', 'danger');
						}
					} else {
						$('#registerModal').modal('hide');
						FlowRouter.go("myEvents")
						setTimeout(function() {
							Bert.alert('Bienvenid@ ' + Meteor.user().profile.name, 'success');
						}, 750);
					}
				});
			}
		});

	}
});

Template.register.helpers({
	categories() {
		return EventCategories.find();
	},
	cities(){
		return Cities.find();
	}
});
