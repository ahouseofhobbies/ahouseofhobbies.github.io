import { Faction } from 'factions/factionClass'
import { ORDER } from 'meta/alliances'
import { SERAPHON } from 'meta/factions'
import rule_sources from './rule_sources'
import SubFactions from './subfactions'

export const SeraphonFaction = new Faction(
  SERAPHON,
  ORDER,
  SubFactions,
  'Battle Formations',
  rule_sources.BATTLETOME_SERAPHON
)
