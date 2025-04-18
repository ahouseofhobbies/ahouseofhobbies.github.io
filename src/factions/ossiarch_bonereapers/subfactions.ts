import { keyPicker } from 'factions/metatagger'
import { OSSIARCH_BONEREAPERS } from 'meta/factions'
import Battalions from './battalions'
import BattleTactics from './battle_tactics'
import LegionsOfNagashUnits from '../legions_of_nagash/units'
import NighthauntUnits from '../nighthaunt/units'
import Artifacts from './artifacts'
import CommandAbilities from './command_abilities'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import Scenery from './scenery'
import Spells from './spells'
import Units from './units'
import { TItemDescriptions } from 'factions/factionTypes'
import grand_strategies from './grand_strategies'

const subFactions = {
  [OSSIARCH_BONEREAPERS]: {
    effects: [],
   /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Unstoppable Advance'])],
    }, */
    available: {
      artifacts: [Artifacts],
      battalions: [Battalions],
      battle_tactics: [BattleTactics],
      command_abilities: [CommandAbilities],
      command_traits: [CommandTraits],
      endless_spells: [EndlessSpells],
      flavors: [Flavors],
      grand_strategies: [grand_strategies],
      scenery: [Scenery],
      spells: [Spells],
      units: [
        Units,
       /* keyPicker(LegionsOfNagashUnits, ['Arkhan the Black, Mortarch of Sacrament']),
        keyPicker(NighthauntUnits, ['Nagash, Supreme Lord of the Undead']), */
      ], 
    },
  },
} satisfies TItemDescriptions

export default subFactions
