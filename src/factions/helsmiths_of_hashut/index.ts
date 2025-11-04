import { Faction } from 'factions/factionClass'
import { CHAOS } from 'meta/alliances'
import { HELSMITHS_OF_HASHUT } from 'meta/factions'
import rule_sources from './rule_sources'
import SubFactions from './subfactions'

export const HelsmithsOfHashutFaction = new Faction(
  HELSMITHS_OF_HASHUT,
  CHAOS,
  SubFactions,
  'Battle Formations'
  /*rule_sources.BATTLETOME_HELSMITHS_OF_HASHUT*/
)
