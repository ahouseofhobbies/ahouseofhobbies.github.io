import { tagAs } from 'factions/metatagger'
import { GreatEndrinworks } from './common'
import { TItemDescriptions } from 'factions/factionTypes'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'

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
  'Hegsson Solutions Old Reliable Hullplates': {
    effects: [
      {
        name: `Hegsson Solutions Old Reliable Hullplates - Passive`,
        desc: `Effect: This unit has Ward (5+) against damage inflicted by Shoot abilities.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Gruksson Wide-Bore Cylinders': {
    effects: [
      {
        name: `Gruksson Wide-Bore Cylinders - Passive`,
        desc: `Effect: Add 2" to this unit's Move characteristic.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Coalbeards Collapsible Bombrack': {
    effects: [
      {
        name: `Coalbeards Collapsible Bombrack - Passive`,
        desc: `Effect: Add 1 to each dice roll when using this unit's 'Heavy Bomb Racks', 'Medium Bomb Racks' or 'Light Bomb Racks' ability.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Tracer-Fire Rounds': {
    effects: [
      {
        name: `Tracer-Fire Rounds - Reaction: You declared a Shoot ability for this unit`,
        desc: `Effect: If all of the attacks target the same enemy unit, ignore negative modifiers to hit rolls for those attacks.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Grandiose Fuselage': {
    effects: [
      {
        name: `Grandiose Fuselage - Passive`,
        desc: `Effect: Add 5 to this unit's Control characteristic.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Nullstone Galvanisation': {
    effects: [
      {
        name: `Nullstone Galvanisation`,
        desc: `Effect: Inflict D6 mortal damage on each enemy Manifestation within this unit's combat range.`,
        when: [END_OF_TURN],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(MountTraits, 'mount_trait')
