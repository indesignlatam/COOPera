Meteor.methods({
  'event_reviews.create'(review){
    EventReviews.insert(review);
  }
})
