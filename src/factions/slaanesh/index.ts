import { Faction } from 'factions/factionClass'
import { pickEffects } from 'factions/metatagger'
import { CHAOS } from 'meta/alliances'
import { SLAANESH } from 'meta/factions'
import battle_traits from './battle_traits'
import rule_sources from './rule_sources'
import SubFactions from './subfactions'

export const SlaaneshFaction = new Faction(
  SLAANESH,
  CHAOS,
  SubFactions,
  'Battle Formations',
  rule_sources.BATTLETOME_SLAANESH,
  pickEffects(battle_traits, [SLAANESH])
)
