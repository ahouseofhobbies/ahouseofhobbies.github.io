import { Faction } from 'factions/factionClass'
import { DEATH } from 'meta/alliances'
import { FLESH_EATER_COURTS } from 'meta/factions'
import rule_sources from './rule_sources'
import SubFactions from './subfactions'

export const FleshEaterCourtsFaction = new Faction(
  FLESH_EATER_COURTS,
  DEATH,
  SubFactions,
  'Battle Formations',
  rule_sources.BATTLETOME_FLESH_EATER_COURTS
)