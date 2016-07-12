import Ember from 'ember';
import isPokemonGoUp from 'is-pokemon-go-up';

export default Ember.Component.extend({
  answer: isPokemonGoUp().then((result) => result)
})
