import {
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_SHOOTING_PHASE,
  END_OF_TURN,
  HERO_PHASE,
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
  'Big Waaagh! (AoR)': {
    effects: [
      {
        name: `Notorious Bosses - Once Per Battle`,
        desc: `Declare: Pick up to 1 friendly non-Unique Big Waaagh! Ironjawz Hero and up to 1 friendly non-Unique Big Waaagh! Kruleboyz Hero that do not have a heroic trait to be the targets.
          Effect: Give each target 1 heroic trait from the Big Waaagh! heroic traits.`,
        when: [DURING_SETUP],
      },
      {
        name: `Possessed By the Power of the Waaagh! - Passive`,
        desc: `Effect: While a friendly unit has the Power of the Waaagh! keyword:
          If that unit has the Ironjawz keyword, add 1 to run rolls and charge rolls for that unit.
          If that unit has the Kruleboyz keyword, that unit's attacks score critical hits on unmodified hit rolls of 5+.`,
        when: [DURING_GAME],
      },
      {
        name: `Rally the Warclans - Once Per Turn`,
        desc: `Declare: If your general is on the battlefield, pick a friendly Big Waaagh! unit that started the battle with 3 or more models and has been destroyed to be the target.
          Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of your general and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Notorious Bosses - Once Per Battle`,
        desc: `Declare: Pick up to 1 friendly Big Waaagh! Ironjawz unit and up to 1 friendly Big Waaagh! Kruleboyz unit to be the targets.
          Effect: The targets have the Power of the Waaagh! keyword for the rest of the battle round.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Murkvast Menagerie (AoR)': {
    effects: [
      {
        name: `After it, Ladz! - Once Per Turn`,
        desc: `Declare: Pick a friendly Murkvast Menagerie Monster unit that was not set up this turn to be the target.
          Effect; The target can move up to 3". It can move into combat. If it was in combat at the start of the move, it must end that move in combat.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Crawly Swarm - Passive`,
        desc: `Effect: Subract 1 from hit rolls for combat attacks that target friendly Murkvast Menagerie units while they are whollly within 12" of a friendly Murkvast Menagerie Monster that has not charged this turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Propa Grisly - Once Per Turn`,
        desc: `Declare: Pick a friendly Murkvast Menagerie Monster unit that not used any Rampage abilities this turn to use this ability. Then, pick an enemy unit in combat with it to be the target.
          Effect: Roll a number of dice equal to the Health characteristic of that Murkvast Menagerie Monster. For each 6+, inflict 1 mortal damage on the target.
          After this ability has been resolved, this unit cannot use any other Rampage abilities for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Notorious Bosses - Once Per Battle`,
        desc: `Declare: Pick up to 1 friendly Big Waaagh! Ironjawz unit and up to 1 friendly Big Waaagh! Kruleboyz unit to be the targets.
          Effect: The targets have the Power of the Waaagh! keyword for the rest of the battle round.`,
        when: [HERO_PHASE],
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
