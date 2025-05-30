import { IItemDescription } from 'factions/factionTypes'
import { TRuleSource } from 'meta/rule_sources'
import { TCollection } from 'types/army'
import { TTurnWhen } from 'types/phases'
import { TSelectionTypes } from 'types/selections'

export type TEntryProperties =
  | 'artifact'
  | 'battalion'
  | 'battle_trait'
  | 'battle_tactic'
  | 'command_ability'
  | 'command_trait'
  | 'core_rule'
  | 'endless_spell'
  | 'grand_strategy'
  | 'incarnate'
  | 'monstrous_rampage'
  | 'mount_trait'
  | 'prayer'
  | 'scenery'
  | 'spell'
  | 'triumph'
  | 'unit'
  | 'manifestations'

export const ENTRY_PROPERTIES: TEntryProperties[] = [
  'artifact',
  'battalion',
  'battle_trait',
  'battle_tactic',
  'command_ability',
  'command_trait',
  'core_rule',
  'endless_spell',
  'grand_strategy',
  'incarnate',
  'monstrous_rampage',
  'mount_trait',
  'prayer',
  'scenery',
  'spell',
  'triumph',
  'unit',
  'manifestations',
]

export const SELECTION_TYPES: TSelectionTypes[] = [
  'artifacts',
  'battalions',
  'battle_tactics',
  'command_abilities',
  'command_traits',
  'core_rules',
  'endless_spells',
  'flavors',
  'grand_strategies',
  'incarnates',
  'monstrous_rampages',
  'mount_traits',
  'prayers',
  'scenery',
  'spells',
  'triumphs',
  'units',
  'manifestations',
]

export const lowerToUpperLookup: Record<TSelectionTypes, keyof TCollection> = {
  artifacts: 'Artifacts',
  battalions: 'Battalions',
  battle_tactics: 'BattleTactics',
  command_abilities: 'CommandAbilities',
  command_traits: 'CommandTraits',
  core_rules: 'CoreRules',
  endless_spells: 'EndlessSpells',
  flavors: 'Flavors',
  grand_strategies: 'GrandStrategies',
  incarnates: 'Incarnates',
  monstrous_rampages: 'MonstrousRampages',
  mount_traits: 'MountTraits',
  prayers: 'Prayers',
  scenery: 'Scenery',
  spells: 'Spells',
  triumphs: 'Triumphs',
  units: 'Units',
  manifestations: `Manifestations`,
}

export const upperToLowerLookup: Record<keyof TCollection, TSelectionTypes> = {
  Artifacts: 'artifacts',
  Battalions: 'battalions',
  BattleTactics: 'battle_tactics',
  CommandAbilities: 'command_abilities',
  CommandTraits: 'command_traits',
  CoreRules: 'core_rules',
  EndlessSpells: 'endless_spells',
  Flavors: 'flavors',
  GrandStrategies: 'grand_strategies',
  Incarnates: 'incarnates',
  MonstrousRampages: 'monstrous_rampages',
  MountTraits: 'mount_traits',
  Prayers: 'prayers',
  Scenery: 'scenery',
  Spells: 'spells',
  Triumphs: 'triumphs',
  Units: 'units',
  Manifestations: `manifestations`,
}

export const entryKeyToSelectionsKey: Record<Exclude<TEntryProperties, 'battle_trait'>, TSelectionTypes> = {
  artifact: 'artifacts',
  battalion: 'battalions',
  battle_tactic: 'battle_tactics',
  command_ability: 'command_abilities',
  command_trait: 'command_traits',
  core_rule: 'core_rules',
  endless_spell: 'endless_spells',
  grand_strategy: 'grand_strategies',
  incarnate: 'incarnates',
  monstrous_rampage: 'monstrous_rampages',
  mount_trait: 'mount_traits',
  prayer: 'prayers',
  scenery: 'scenery',
  spell: 'spells',
  triumph: 'triumphs',
  unit: 'units',
  manifestations: `manifestations`,
}

export const selectionsKeyToEntryKey: Record<
  Exclude<TSelectionTypes, 'battle_traits' | 'flavors'>,
  TEntryProperties
> = {
  artifacts: 'artifact',
  battalions: 'battalion',
  battle_tactics: 'battle_tactic',
  command_abilities: 'command_ability',
  command_traits: 'command_trait',
  core_rules: 'core_rule',
  endless_spells: 'endless_spell',
  grand_strategies: 'grand_strategy',
  incarnates: 'incarnate',
  monstrous_rampages: 'monstrous_rampage',
  mount_traits: 'mount_trait',
  prayers: 'prayer',
  scenery: 'scenery',
  spells: 'spell',
  triumphs: 'triumph',
  units: 'unit',
  manifestations: `manifestations`
}

type TEntryMetadata = IItemDescription & {
  [prop in TEntryProperties]?: boolean
}

export type TEntry = {
  name: string
  isSideEffect?: boolean
} & TEntryMetadata

export type TEffects = {
  name: string
  desc: string
  when: TTurnWhen[]
  rule_sources?: TRuleSource[]
  shared?: boolean
} & {
  [prop in TEntryProperties]?: boolean
}

export interface IReminder {
  [key: string]: TTurnAction[]
}

export type TTurnAction = {
  id: string
  actionTitle?: string
  condition: string[]
  desc: string
  name: string
  rule_sources?: TRuleSource[]
  when: TTurnWhen
} & {
  [prop in TEntryProperties]?: boolean
}
