export type TSelectionTypes =
  | 'artifacts'
  | 'battalions'
  | 'battle_tactics'
  | 'command_abilities'
  | 'command_traits'
  | 'core_rules'
  | 'endless_spells'
  | 'flavors'
  | 'grand_strategies'
  | 'incarnates'
  | 'monstrous_rampages'
  | 'mount_traits'
  | 'prayers'
  | 'scenery'
  | 'spells'
  | 'triumphs'
  | 'units'
  | 'manifestations'

export type TSelections = Record<TSelectionTypes, string[]>
export type IAllySelections = Pick<TSelections, 'units' | 'battalions'>
