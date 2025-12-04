import { keyPicker, pickEffects } from 'factions/metatagger'
import { HELSMITHS_OF_HASHUT } from 'meta/factions'
import Artifacts from './artifacts'
import Battalions from './battalions'
import BattleTactics from './battle_tactics'
import BattleTraits from './battle_traits'
import CommandAbilities from './command_abilities'
import MountTraits from './mount_traits'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import GrandStrategies from './grand_strategies'
import Prayers from './prayers'
import Spells from './spells'
import Units from './units'
import { TItemDescriptions } from 'factions/factionTypes'

const subFactions = {
  [HELSMITHS_OF_HASHUT]: {
    effects: pickEffects(BattleTraits, [HELSMITHS_OF_HASHUT]),

    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['All-out Slaughter'])],
    }, */

    available: {
      artifacts: [Artifacts],
      battalions: [Battalions],
      battle_tactics: [BattleTactics],
      command_abilities: [CommandAbilities],
      command_traits: [CommandTraits],
      mount_traits: [MountTraits],
      endless_spells: [EndlessSpells],
      flavors: [Flavors],
      grand_strategies: [GrandStrategies],
      prayers: [Prayers],
      spells: [Spells],
      units: [Units],
    },
  },
} satisfies TItemDescriptions

export default subFactions
