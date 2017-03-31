import Realm from 'realm';

function setupRealm(realm) {
  realm.write(() => {
    realm.create('Game', {
       name: 'Game of War: Fire Age'
    });
  });
}

export default setupRealm
