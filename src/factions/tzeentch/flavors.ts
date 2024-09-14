import { pickEffects } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_ROUND,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import BattleTraits from './battle_traits'
import { TItemDescriptions } from 'factions/factionTypes'

const Flavors = {
  'Arcanite Cabal': {
    effects: [
      {
        name: `Sinister Counter-Hexes - Passive`,
        desc: `Effect: Add 1 to unbinding rolls for friendly Arcanite units. In addition, if a friendly Arcanite unit unbinds a spell, no command points are spent for that unit to use the Magical Intervention command in that phase.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Change Host': {
    effects: [
      {
        name: `Twist of Fate - Once Per Battle`,
        desc: `Declare: Pick a friendly Disciples of Tzeentch Daemon unit that is in combat to be the target. 
        Effect: Roll a dice. On a 3+, remove the target from the battlefield and set it up again on the battlefield. Each model in the target unit must be set up in combat with any of the enemy units that the target was in combat with before it was removed from the battlefield.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Tzaangor Coven': {
    effects: [
      {
        name: `Screeching Warflock - Passive`,
        desc: `Effect: Each time a friendly Warflock unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Wyrdflame Host': {
    effects: [
      {
        name: `Mutagenic Inferno - Passive`,
        desc: `Effect: Subtract 1 from wound rolls for attacks made by Burning enemy units.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
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
