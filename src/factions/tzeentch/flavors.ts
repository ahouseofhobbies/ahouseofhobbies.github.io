import { pickEffects } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
  START_OF_TURN,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import BattleTraits from './battle_traits'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Fated Blades': {
    effects: [
      {
        name: `Cometh The Hour - Passive`,
        desc: `Effect: If you make a Charge roll of 9+ for a friendly Disciples of Tzeentch unit, add 1 to the Attacks characteristic of that unit's melee weapons for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Denizens of the Silver Towers': {
    effects: [
      {
        name: `Twist of Fate - Passive`,
        desc: `Effect: Each time a friendly Disciples of Tzeentch unit uses an ability that requires you to spend 1 or more fate points, after that ability has been resolved, roll a dice. On a 4+, gain 1 fate point. If you remove 1 or more damage points from the damage pool of a friendly Disciples of Tzeentch unit as a result of the 'Destined to Serve' ability, after the damage sequence for that unit has been resolved, roll a dice. On a 4+, gain 1 fate point.`,
        when: [DURING_GAME],
      },
    ],
  },
  'Malevolent Schemers': {
    effects: [
      {
        name: `Inevitable Ending - Once Per Turn`,
        desc: `Declare: Pick a unit (friendly or enemy) to be the target.
        Effect: If the target is destroyed this turn, gain 1 fate point.`,
        when: [START_OF_TURN],
      },
    ],
  },
  'Mutants and Mad Things': {
    effects: [
      {
        name: `Hideous Unpredictabilty - Once Per Turn`,
        desc: `Declare: Pick a friendly unit that is masked by illusion to be the target.
        Effect: Set up the target wholly within 6" of a battlefield edge and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Masters of Fate': {
    effects: [
      {
        name: `Symbiotic Madness - Passive`,
        desc: `Effect: Friendly Arcanite units melee weapons have Crit (2 Hits) while they are wholly within 12" of a friendly Disciples of Tzeentch Daemon unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Spellweaver Coven': {
    effects: [
      {
        name: `Sorcerers of War - Once Per Turn`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Wizard that is in combat to be the target. 
        Effect: The target can use a non-Summon Spell ability as if it were your hero phase, but only the caster or enemy units in combat with the caster can be picked to be the targets of that Spell ability.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Change-Cult Uprising (AoR)': {
    effects: [
      {
        name: `Silver Simulacrum - Once Per Battle`,
        desc: `Effect: If there is a friendly Argent Shard on the battlefield, you can set up 1 additional Argent Shard on the battlefield. It must be set up wholly within friendly territory and more than 3" from all objectives and other terrain features.`,
        when: [DURING_SETUP],
      },
      {
        name: `Illusory Infiltration - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly non-reinforced Change-Cult Kairic Acolytes units to be the targets.
        Effect: Remove the targets from the battlefield and set them up again wholly within 3" of a terrain feature and not in combat.`,
        when: [DURING_SETUP],
      },
      {
        name: `Puppet on a String - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero within 24" of and visible to a friendly Change-Cult Hero to be the target.
        Effect: For the rest of the turn, each time the target uses a Core ability, gain 1 fate point.`,
        when: [HERO_PHASE],
      },
      {
        name: `Overtaken by Events - Once Per Turn`,
        desc: `Declare: Spend 1 fate point. Then, pick an enemy unit within 24" of and visible to a friendly Change-Cult Hero to be the target.
        Effect: The target cannot use commands for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Seeds of Discord - Once Per Turn`,
        desc: `Declare: Spend 1 fate point. Then, pick an enemy model within 24" of and visible to a friendly Change-Cult Hero to be the target, then pick another enemy unit within the target's combat range to be the victim.
        Effect: Pick 1 of the target's melee weapons. Immediately resolve combat attacks for the target made with that weapon against the victim.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'The Oracles of Fate (AoR)': {
    effects: [
      {
        name: `Masters of Destiny`,
        desc: `Effect: Roll 9 dice and place them to one side. These are your destiny dice. Destiny dice can be spent during the battle to change certain dice rolls. You can never have more than 9 destiny dice at once.
        During the battle, instead of making a roll from the list below for a friendly Oracles of Fate unit, you can spend your destiny dice. The roll you would have made is replaced with the roll on the destiny dice you spend. If you want to replace a 2D6 roll, 3D6 roll, etc. you must spend a number of destiny dice equal to the number before 'D6'. Any rolls that have been replaced count as unmodified rolls, and they cannot be rerolled or modified by other friendly abilities except for those that apply negative modifiers (but they can be modified by enemy abilities). You cannot spend destiny dice to replace rerolls.
        Destiny dice can be spent in place of the following dice rolls:
        Casting rolls
        Unbinding rolls
        Banishment rolls
        Run rolls
        Charge rolls in your turn
        Hit rolls
        Wound rolls
        Save rolls`,
        when: [DURING_SETUP],
      },
      {
        name: `Ninefold Blessings - Once Per Battle Round`,
        desc: `Declare: You can only use this ability if the total value of your unspent destiny dice is exactly 9.
        Effect: Reroll all of your unspent destiny dice. Then, until the start of your next turn:
        Friendly Oracles of Fate units have Ward (5+).
        Subtract 1 from save rolls for enemy units.`,
        when: [START_OF_TURN],
      },
    ],
  },
  /*  'The Eternal Conflagration': {
    effects: [...pickEffects(BattleTraits, ['Twisters of Materiality'])],
  },

  'Hosts Duplicitous': {
    effects: [...pickEffects(BattleTraits, ['Ranks of Mischievous Mirages'])],
  },

  'Hosts Arcanum': {
    effects: [...pickEffects(BattleTraits, ['Thieves of All Things Arcane'])],
  },

  'Cult of the Transient Form': {
    effects: [...pickEffects(BattleTraits, ['The Change-gift'])],
  },

  'Pyrofane Cult': {
    effects: [...pickEffects(BattleTraits, ['Arrows of Tzeentch'])],
  },

  'Guild of Summoners': {
    effects: [...pickEffects(BattleTraits, ['Scions of the Exiled'])],
  }, */
} satisfies TItemDescriptions

export default Flavors
