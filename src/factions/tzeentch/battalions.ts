import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { StrategistsBattalionEffect } from 'generic_rules/core_battalions'

const TzeentchBattalions = {
 /* 'Battle Formations': {
    effects: [StrategistsBattalionEffect],
  }, */
} satisfies TItemDescriptions

export default tagAs(TzeentchBattalions, 'battalion')