var Users = Meteor.users;

Users.helpers({
    recommendedEvents() {
        const user = Meteor.user();

        if(!user){
          return 'Error'
        }

        let query = {};
        if (user.profile.categories && user.profile.categories.length > 0) {
            query.categoryId = {
                $in: user.profile.categories
            };
        }
        return Events.find(query);
    }
});
