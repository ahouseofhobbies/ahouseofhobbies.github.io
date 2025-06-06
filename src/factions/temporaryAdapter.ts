import deepmerge from 'deepmerge'
import { TSubfactionArmy } from 'types/army'
import { TEntry } from 'types/data'
import { IItemDescription, TItemKey, TItemDescriptions } from './factionTypes'

type TAdapter = (subFaction: IItemDescription, subFactionName: string, FlavorType?: string) => TSubfactionArmy

/**
 * To see how a new data-structure army might feel in the UI as-is
 */
export const temporaryAdapter: TAdapter = (subFaction, subFactionName, FlavorType = 'Flavors') => {
  const army: TSubfactionArmy = {
    AlliedUnits: mergeData(subFaction, 'allied_units'),
    Artifacts: mergeData(subFaction, 'artifacts'),
    Battalions: mergeData(subFaction, 'battalions'),
    BattleTactics: mergeData(subFaction, 'battle_tactics'),
    BattleTraits: subFaction.effects,
    CommandAbilities: mergeData(subFaction, 'command_abilities'),
    CommandTraits: mergeData(subFaction, 'command_traits'),
    CoreRules: mergeData(subFaction, 'core_rules'),
    EndlessSpells: mergeData(subFaction, 'endless_spells'),
    Flavors: mergeData(subFaction, 'flavors'),
    FlavorType,
    GrandStrategies: mergeData(subFaction, 'grand_strategies'),
    Incarnates: mergeData(subFaction, 'incarnates'),
    MonstrousRampages: mergeData(subFaction, 'monstrous_rampages'),
    MountTraits: mergeData(subFaction, 'mount_traits'),
    Prayers: mergeData(subFaction, 'prayers'),
    Scenery: mergeData(subFaction, 'scenery'),
    Spells: mergeData(subFaction, 'spells'),
    SubFaction: subFactionAdapter(subFaction, subFactionName),
    Triumphs: mergeData(subFaction, 'triumphs'),
    Units: mergeData(subFaction, 'units'),
    Manifestations: mergeData(subFaction, 'manifestations'),
  }

  return army
}

export const getAggregateArmy = (subFactions: TItemDescriptions, flavorType = 'Flavors'): TSubfactionArmy => {
  return Object.entries(subFactions).reduce((a, [key, value]) => {
    const b = temporaryAdapter(value, key, flavorType)
    return deepmerge(a, b)
  }, {} as TSubfactionArmy)
}

const subFactionAdapter = (subFaction: IItemDescription, name: string): TEntry => {
  const { mandatory = {}, effects = [] } = subFaction
  return { mandatory, effects, name }
}

const mergeData = (subFaction: IItemDescription, slice: TItemKey): TEntry[] => {
  const { available = {}, mandatory = {} } = subFaction
  const merged: TItemDescriptions[] = [...(available[slice] || []), ...(mandatory[slice] || [])]
  return mergeParentEffectObjs(merged)
}

export const mergeParentEffectObjs = <T extends TItemDescriptions>(
  objs: T[]
): (TItemDescriptions & TEntry)[] => {
  return objs.reduce((a, obj) => {
    const arr = parentEffectObjConverter(obj)
    a = a.concat(arr)
    return a
  }, [] as (TItemDescriptions & TEntry)[])
}

const parentEffectObjConverter = <T extends TItemDescriptions>(obj: T): (T & TEntry)[] => {
  return Object.keys(obj).reduce((a, name) => {
    const entry = { ...obj[name], name }
    a.push(entry as T & TEntry)
    return a
  }, [] as (T & TEntry)[])
}
