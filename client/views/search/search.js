Template.search.onCreated(function searchOnCreated() {
    this.search = new ReactiveVar(null);
    this.category = new ReactiveVar(null);
    this.city = new ReactiveVar(null);
    this.limit = new ReactiveVar(9);
    this.autorun((v) => {
        this.subscribe('events.search',
            this.search.get(),
            this.limit.get(),
            this.category.get(),
            this.city.get()
        );
        this.subscribe('event-categories');
        this.subscribe('cities');
        this.subscribe('events.volunteers');
        this.subscribe('sponsors');
    });
});

Template.search.onRendered(function searchOnRendered() {
	$('#categoryId, #cityId').dropdown({
		placeholder:false
	});
});



Template.search.events({
    'keyup .search' (event, instance) {
        Template.instance().search.set(event.currentTarget.value);
    },
    'click .more' (event, instance) {
        let limit = Template.instance().limit.get() + 6;
        Template.instance().limit.set(limit);
    },
    'change #cityId' (event, instance) {
        Template.instance().city.set(event.currentTarget.value);
    },
    'change #categoryId' (event, instance) {
        Template.instance().category.set(event.currentTarget.value);
    }
});

Template.search.helpers({
	events() {
		return Events.find();
	},
	eventsCount(){
		return Counts.get("cantidadEventos");
	},
	remainingEvents(){
		return Counts.get("cantidadEventos") > Events.find().count();
	},
	categories() {
		return EventCategories.find();
	},
	cities() {
		return Cities.find();
	},
});
