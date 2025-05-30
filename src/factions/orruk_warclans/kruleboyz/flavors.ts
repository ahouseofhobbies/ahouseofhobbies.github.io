import {
  COMBAT_PHASE,
  DURING_GAME,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  TURN_ONE_SHOOTING_PHASE,
} from 'types/phases'
import rule_sources from '../rule_sources'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const KruleboyzFlavors = {
  'Kruleboyz Klaw': {
    effects: [
      {
        name: `Swamp Shroud - Passive`,
        desc: `Effect: Friendly Kruleboyz units that are wholly within 3" of a terrain feature are not visible to enemy units that are more than 12" away from them.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Middul Finga': {
    effects: [
      {
        name: `Far-Killa Bolts`,
        desc: `Declare: Pick up to 3 friendly Man-skewer Boltboyz or Beast-skewer Killbow units to be the targets. 
        Effect: For the rest of the turn, add 3" to the Range characteristic of the targets ranged weapons.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Light Finga': {
    effects: [
      {
        name: `Ded Sneaky - Passive`,
        desc: `Effect: You can use the Sneaky Sneakin' Dirty Trick ability twice per turn instead of only once per turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Trophy Finga': {
    effects: [
      {
        name: `Meanest Beasts - Passive`,
        desc: `Effect: Companion weapons used by friendly Kruleboyz units have Crit (2 Hits).`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Swamphorde Bullies': {
    effects: [
      {
        name: `Gangin' Up - Once Per Turn`,
        desc: `Declare: Pick a friendly Kruleboyz unit to be the target. That unit must be in combat with an enemy unit that is in combat with another friendly Kruleboyz unit. Kragnos cannot be picked to be the target. 
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of the targets melee weapons.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Badmouthing Baiterz': {
    effects: [
      {
        name: `Krule Mockery - Once Per Turn`,
        desc: `Declare: Pick a friendly Kruleboyz unit to be the Insult Hurla, pick a visible enemy unit within 18" of it to be the target, then make a dirty trick roll. 
        Effect: Until the start of your next turn, each time the target uses a Move ability and does not end that move closer to the Insult Hurla than it was at the start of that move, inflict D6 mortal damage on the target after that Move ability has been resolved.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  /*  Skulbugz: {
    effects: [
      {
        name: `Crawly Swarm`,
        desc: `When an enemy unit is picked to fight, roll a dice if it is within 3" of any friendly SKULBUGZ units. Add 2 to the roll if that enemy unit is within 3" of any friendly SKULBUGZ MONSTERS. On a roll of 6+, subtract 1 from hit rolls for attacks made by that enemy unit in that phase.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
} satisfies TItemDescriptions

// Note: We do NOT use tagAs for Flavors
export default KruleboyzFlavors
