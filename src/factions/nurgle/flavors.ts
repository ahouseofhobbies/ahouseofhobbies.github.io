import { pickEffects } from 'factions/metatagger'
import BattleTraits from './battle_traits'
import { TItemDescriptions } from 'factions/factionTypes'
import { BATTLESHOCK_PHASE, COMBAT_PHASE, DURING_GAME, DURING_SETUP, END_OF_TURN, HERO_PHASE, SHOOTING_PHASE } from 'types/phases'


const Flavors = {
/*  'Munificent Wanderers': {
    effects: pickEffects(BattleTraits, ['Infested With Wonders']),
  },

  'Befouling Host': {
    effects: pickEffects(BattleTraits, ['Festerbark Pox']),
  },

  'Droning Guard': {
    effects: pickEffects(BattleTraits, ['Cloying Stench']),
  },

  'Blessed Sons': {
    effects: pickEffects(BattleTraits, ["Nurgle's Embrace"]),
  },

  'Drowned Men': {
    effects: pickEffects(BattleTraits, ['Lords of Sea and Sky']),
  },

  Filthbringers: {
    effects: pickEffects(BattleTraits, ['Rot Covens']),
  }, */
  'Tallyband of Nurgle': {
    effects: [
      {
        name: `Disease and Pestilence Personified - Passive`,
        desc: `Effect: From the second battle round onwards, add 1 to the amount of mortal damage inflicted, if any, by the Wracked with Disease ability.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Nurgles Menagerie': {
    effects: [
      {
        name: `Tenders of the Garden Grotesque - Passive`,
        desc: `Effect: During army composition, you can include 2 Feculent Gnarlmaws in your army instead of 1.`,
        when: [DURING_SETUP],
      },
    ],
  },
  'Plague Cyst': {
    effects: [
      {
        name: `Vectors of Contagion - Passive`,
        desc: `Effct: Each time a model in a friendly Rotbringers unit is slain by a combat attack and that model was in combat with the attacking unit, roll a number of dice equal to the slain models Health characteristic, to a maximum of 4. For each 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Affliction Cyst': {
    effects: [
      {
        name: `From Noxious Skies - Once Per Battle`,
        desc: `Declare: Pick up to 2 friendly Maggotkin of Nurgle units that have Fly. 
        Effect: Remove the targets from the battlefield and set them up again on the battlefield more than 9" from all enemy units.`,
        when: [DURING_SETUP],
      },
    ],
  },
} satisfies TItemDescriptions

export default Flavors
