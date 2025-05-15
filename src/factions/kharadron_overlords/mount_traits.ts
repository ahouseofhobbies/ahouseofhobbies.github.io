import { tagAs } from 'factions/metatagger'
import { GreatEndrinworks } from './common'
import { TItemDescriptions } from 'factions/factionTypes'
import { CHARGE_PHASE, COMBAT_PHASE, HERO_PHASE, SHOOTING_PHASE } from 'types/phases'

const MountTraits = {
  'Voidstone Repulser Vents': {
    effects: [
      {
        name: `Voidstone Repulser Vents - Reaction: A friendly unit within 12" of this unit was picked to be the target of an enemy Spell ability`,
        desc: `Effect: Roll a dice. On a 4+: 
        Ignore the effect of that spell on that friendly unit. 
        Inflict D3 mortal damage on the caster. 
        This unit can use this ability more than once per phase but you can only roll once for each friendly unit per spell cast.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Blazebeard and Sons Ejector Pod': {
    effects: [
      {
        name: `Blazebeard and Sons Ejector Pod - Once Per Battle`,
        desc: `Declare: If this unit is in combat, pick a visible friendly Kharadron Overlords Hero wholly within 6" of this unit to be the target. 
        Effect: Remove the target from the battlefield, then set it up again wholly within 18" of this unit and more than 9" from all enemy units.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Zonbarcorp Dealbreaker Battleram': {
    effects: [
      {
        name: `Zonbarcorp Dealbreaker Battleram`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a number of dice equal to the unmodified charge roll. For each 4+, inflict 1 mortal damage on the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(MountTraits, 'mount_trait')
