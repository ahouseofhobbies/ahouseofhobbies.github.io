import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { COMBAT_PHASE, START_OF_COMBAT_PHASE, WOUND_ALLOCATION_PHASE } from 'types/phases'

const Artifacts = {
  'Crown of Raven Feathers': {
    effects: [
      {
        name: `Crown of Raven Feathers`,
        desc: `Roll a D6 each time you allocate a wound or mortal wound to the bearer. On a 5+ it is negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  'Silvered Blade': {
    effects: [
      {
        name: `Silvered Blade`,
        desc: `Pick one of the bearers melee weapons. Add 1 to the damage characteristic of that weapon. Add 2 instead if it is targeting a Death unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Flask of Lethisian Darkwater': {
    effects: [
      {
        name: `Flask of Lethisian Darkwater`,
        desc: `Once per battle, you can use this artefact to heal D6 wounds that have been allocated to the bearer.`,
        when: [START_OF_COMBAT_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Artifacts, 'artifact')
