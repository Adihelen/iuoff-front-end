import Ember from 'ember';

export default Ember.Component.extend({
  scrollDuration: 500,
  showNavbar: false, 
  menuItemExternal: false,

  actions: {
   
    scrollTo(section) {
      Ember.run.schedule("afterRender", () => {
        if (Ember.$(section)) {          
          Ember.$("html,body").animate(
            {
              scrollTop: Ember.$(section).offset().top - 50
            }, 
            this.get('scrollDuration'));
        } else {
          
          return;
        }
      });
    }, 

    toggleNavbar(navbar){
      this.toggleProperty('showNavbar');
      Ember.$(navbar).slideToggle();
    }
  },
  click(event) {
    if (event.target.tagName.toLowerCase() === 'a') {
      this.$('#navbarResponsive').hide();
    }
  }
});
