import { IItemDescription, TItemDescriptions } from 'factions/factionTypes'
import { keyPicker, pickEffects } from 'factions/metatagger'
import Artifacts from './artifacts'
import Battalions from './battalions'
import BattleTactics from './battle_tactics'
import BattleTraits from './battle_traits'
import CommandTraits from './command_traits'
import EndlessSpells from './endless_spells'
import Flavors from './flavors'
import GrandStrategies from './grand_strategies'
import Spells from './spells'
import Units from './units'
import { SYLVANETH, TZEENTCH } from 'meta/factions'


const baseSubFaction = {
  /* mandatory: {
     spells: [keyPicker(Spells, ['Verdant Blessing'])],
   }, */
   available: {
     artifacts: [Artifacts],
     battalions: [Battalions],
     battle_tactics: [BattleTactics],
    //command_abilities: [CommandAbilities],
     command_traits: [CommandTraits],
     endless_spells: [EndlessSpells],
     flavors: [Flavors],
     grand_strategies: [GrandStrategies],
   //  monstrous_rampages: [MonstrousRampages],
    // scenery: [Scenery],
     spells: [Spells],
     units: [Units],
   },
   effects: [],
 } satisfies IItemDescription

const subFactions = {
  [TZEENTCH]: {
    effects: pickEffects(BattleTraits, [TZEENTCH]),

    available: {
      artifacts: [Artifacts],
      battalions: [Battalions],
      battle_tactics: [BattleTactics],
      command_traits: [CommandTraits],
      spells: [Spells],
      endless_spells: [EndlessSpells],
      units: [
        Units,
       /* keyOmitter(SlavesToDarknessUnits, [
          'Theddra Skull-Scryer',
          'Godsworn Hunt',
          'Darkoath Warqueen',
          'Darkoath Chieftain',
          'Furies',
          'Raptoryx',
          'Splintered Fang',
          'Corvus Cabal',
          'The Unmade',
          'Cypher Lords',
          'Iron Golems',
          'Untamed Beasts',
          'Spire Tyrants',
          'Scions of the Flame',
          "Be'Lakor",
          'Mutalith Vortex Beast',
          'Fomoroid Crusher',
          'Mindstealer Sphiranx',
        ]), 
        keyPicker(BeastsOfChaosUnits, [
          'Beastlord',
          'Bestigors',
          'Bullgors',
          'Centigors',
          'Cygor',
          'Doombull',
          'Dragon Ogor Shaggoth',
          'Dragon Ogors',
          'Ghorgon',
          'Gors',
          'Great Bray-Shaman',
          'Tuskgor Chariots',
          'Ungor Raiders',
          'Ungors',
        ]), */
      ],
      flavors: [Flavors],
      grand_strategies: [GrandStrategies],
    },
  },
} satisfies TItemDescriptions

export default subFactions
