import Realm from 'realm';

const PersonSchema = {
  name: 'Person',
  properties: {
    name: 'string',
    age: 'int',
    affinities:  {type: 'list', objectType: 'GameAffinity'}
  }
};

const GameSchema = {
  name: 'Game',
  properties: {
    name: 'string',
    affinities: {type: 'list', objectType: 'GameAffinity'}
  }
};

const GameAffinitySchema = {
  name: 'GameAffinity',
  properties: {
    person: 'Person',
    game: 'Game',
    score: 'int'
  }
};

function createRealm() {
  return new Realm({
    schema: [PersonSchema, GameSchema, GameAffinitySchema]
  });
}

export default createRealm
