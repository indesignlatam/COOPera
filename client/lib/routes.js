FlowRouter.route('/', {
	name: 'home',
	title: 'Inicio',
	action(params) {
		BlazeLayout.render("Layout", {content: "home"});
	}
});

FlowRouter.route('/my-events', {
	name: 'myEvents',
	title: 'Inicio',
	action(params) {
		BlazeLayout.render("Layout", {content: "myEvents"});
	}
});
