import { keyPicker, pickEffects } from 'factions/metatagger'
import { FYRESLAYERS } from 'meta/factions'
import Artifacts from './artifacts'
import BattleTraits from './battle_traits'
import BattleTactics from './battle_tactics'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import GrandStrategies from './grand_strategies'
import MonstrousRampages from './monstrous_rampages'
import MountTraits from './mount_traits'
import Prayers from './prayers'
import Scenery from './scenery'
import Units from './units'
import { IItemDescription, TItemDescriptions } from 'factions/factionTypes'

/* const baseSubfaction = {
  effects: [],
  available: {
    artifacts: [Artifacts],
    battle_tactics: [BattleTactics],
    command_abilities: [CommandAbilities],
    command_traits: [CommandTraits],
    endless_spells: [EndlessSpells],
    flavors: [Flavors],
    grand_strategies: [GrandStrategies],
    monstrous_rampages: [MonstrousRampages],
    mount_traits: [MountTraits],
    prayers: [Prayers],
    scenery: [Scenery],
    units: [Units],
  },
 /* mandatory: {
    command_abilities: [keyPicker(CommandAbilities, ['Fierce Counter-Attack'])],
  }, 
} satisfies IItemDescription */

const subFactions = {
  [FYRESLAYERS]: {
    //  ...baseSubfaction,
    effects: pickEffects(BattleTraits, [FYRESLAYERS]),

    available: {
      artifacts: [Artifacts],
      // battalions: [Battalions],
      battle_tactics: [BattleTactics],
      command_abilities: [CommandAbilities],
      command_traits: [CommandTraits],
      endless_spells: [EndlessSpells],
      mount_traits: [MountTraits],
      flavors: [Flavors],
      grand_strategies: [GrandStrategies],
      prayers: [Prayers],
      //spells: [Spells],
      units: [Units],
    },
  },
} satisfies TItemDescriptions

export default subFactions
