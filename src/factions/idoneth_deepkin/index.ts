import { Faction } from 'factions/factionClass'
import { ORDER } from 'meta/alliances'
import { IDONETH_DEEPKIN } from 'meta/factions'
import rule_sources from './rule_sources'
import SubFactions from './subfactions'

export const IdonethDeepkinFaction = new Faction(
  IDONETH_DEEPKIN,
  ORDER,
  SubFactions,
  'Battle Formations',
  rule_sources.BATTLETOME_IDONETH_DEEPKIN
)
