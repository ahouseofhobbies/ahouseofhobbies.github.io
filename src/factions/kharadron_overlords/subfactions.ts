import { pickEffects } from '../metatagger'
import { KHARADRON_OVERLORDS } from 'meta/factions'
import Artifacts from './artifacts'
import Battalions from './battalions'
import BattleTactics from './battle_tactics'
import BattleTraits from './battle_traits'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import Flavors from './flavors'
import GrandStrategies from './grand_strategies'
import MountTraits from './mount_traits'
import Units from './units'
import { IItemDescription, TItemDescriptions } from 'factions/factionTypes'

/* const baseSubfaction = {
  effects: [],
  available: {
    artifacts: [Artifacts],
    battalions: [Battalions],
    battle_tactics: [BattleTactics],
    command_abilities: [CommandAbilities],
    command_traits: [CommandTraits],
    flavors: [Flavors],
    grand_strategies: [GrandStrategies],
    mount_traits: [MountTraits],
    units: [Units],
  }, 
} satisfies IItemDescription */

const subFactions = {
  [KHARADRON_OVERLORDS]: {
    //  ...baseSubfaction,
    effects: pickEffects(BattleTraits, [KHARADRON_OVERLORDS]),

    available: {
      artifacts: [Artifacts],
      battalions: [Battalions],
      battle_tactics: [BattleTactics],
      command_abilities: [CommandAbilities],
      command_traits: [CommandTraits],
      //endless_spells: [EndlessSpells],
      mount_traits: [MountTraits],
      flavors: [Flavors],
      grand_strategies: [GrandStrategies],
      //prayers: [Prayers],
      //spells: [Spells],
      units: [Units],
    },
  },
  /* 'Grundstok Expeditionary Force': {
    ...baseSubfaction,
    effects: pickEffects(BattleTraits, ['Grundstok Expeditionary Force']),
  }, */
} satisfies TItemDescriptions

export default subFactions
