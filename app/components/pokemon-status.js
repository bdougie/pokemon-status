import Ember from 'ember';
import isPokemonGoUp from 'npm:is-pokemon-go-up';

export default Ember.Component.extend({
  answer: isPokemonGoUp,
});
