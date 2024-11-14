import { Wizard } from '../models/wizard';

export const mockWizard: Wizard = {
  id: '1',
  name: 'Harry Potter',
  alternate_names: ['The Chosen One', 'The Boy Who Lived'],
  species: 'human',
  gender: 'male',
  house: 'Gryffindor',
  dateOfBirth: '31-07-1980',
  yearOfBirth: 1980,
  wizard: true,
  ancestry: 'half-blood',
  eyeColour: 'green',
  hairColour: 'black',
  wand: {
    wood: 'holly',
    core: 'phoenix feather',
    length: 11,
  },
  patronus: 'stag',
  hogwartsStudent: true,
  hogwartsStaff: false,
  actor: 'Daniel Radcliffe',
  alternate_actors: [],
  alive: true,
  image: 'http://example.com/harry.jpg',
};
