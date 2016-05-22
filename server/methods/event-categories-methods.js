// Event Categories Methods
Meteor.methods({
  'event_categories.create'(categories){
    Meteor.users.update(this.userId,{
      $set:{
          categories: categories
      }
    },{
      bypassCollection2:true
    });
  }
});
