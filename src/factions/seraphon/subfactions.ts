import { IItemDescription, TItemDescriptions } from 'factions/factionTypes'
import { keyPicker, pickEffects } from '../metatagger'
import Artifacts from './artifacts'
import Battalions from './battalions'
import BattleTactics from './battle_tactics'
import BattleTraits from './battle_traits'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import Flavors from './flavors'
import MountTraits from './mount_traits'
import GrandStrategies from './grand_strategies'
import MonstrousRampages from './monstrous_rampages'
import Scenery from './scenery'
import Spells from './spells'
import Units from './units'
import { SERAPHON } from 'meta/factions'

const baseSubFaction = {
  effects: [],
  available: {
    artifacts: [Artifacts],
    battalions: [Battalions],
    battle_tactics: [BattleTactics],
    command_abilities: [CommandAbilities],
    command_traits: [CommandTraits],
    grand_strategies: [GrandStrategies],
    monstrous_rampages: [MonstrousRampages],
    scenery: [Scenery],
    spells: [Spells],
    units: [Units],
  },
} satisfies IItemDescription

const subFactions = {
  [SERAPHON]: {
    //  ...baseSubfaction,
    effects: pickEffects(BattleTraits, [SERAPHON]),

    available: {
      artifacts: [Artifacts],
      battalions: [Battalions],
      battle_tactics: [BattleTactics],
      command_abilities: [CommandAbilities],
      command_traits: [CommandTraits],
      mount_traits: [MountTraits],
      //endless_spells: [EndlessSpells],
      flavors: [Flavors],
      grand_strategies: [GrandStrategies],
      //prayers: [Prayers],
      spells: [Spells],
      units: [Units],
    },
  },

  /* Coalesced: {
    effects: pickEffects(BattleTraits, ['COALESCED']),

    available: {
      ...baseSubFaction.available,
      flavors: [keyPicker(Flavors, ["Koatl's Claw", 'Thunder Lizard'])],
    },
  },

  Starborne: {
    effects: pickEffects(BattleTraits, ['STARBORNE']),

    available: {
      ...baseSubFaction.available,
      flavors: [keyPicker(Flavors, ["Dracothion's Tail", 'Fangs of Sotek'])],
    },
  }, */
} satisfies TItemDescriptions

export default subFactions
