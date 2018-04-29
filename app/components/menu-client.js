import Ember from 'ember';

export default Ember.Component.extend({

  scrollDuration: 750,
  showNavbar: false, 

  actions: {

    scrollTo(section) {
      // Ember.run.schedule("afterRender", () => {
        if (section) {          
          $("html,body").animate(
            { scrollTop: $(section).offset().top - 50 }, 
            this.get('scrollDuration'));
        }
      // });
    }, 

    toggleNavbar(navbar){
      this.toggleProperty('showNavbar');
      $(navbar).slideToggle();
    }

  }
});
