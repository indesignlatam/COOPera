FlowRouter.route('/', {
	name: 'home',
	title: 'Inicio',
	action(params) {
		GAnalytics.pageview();
		BlazeLayout.render("Layout", {content: "home"});
	}
});
