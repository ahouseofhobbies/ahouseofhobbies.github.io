import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { SOULBLIGHT_GRAVELORDS } from 'meta/factions'
import meta_rule_sources from 'meta/rule_sources'
import {
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  END_OF_SHOOTING_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_SETUP,
  WARDS_PHASE,
} from 'types/phases'

const BattleTraits = {
  [SOULBLIGHT_GRAVELORDS]: {
    effects: [
      {
        name: `The Unquiet Dead`,
        desc: `Declare: Pick a friendly Deathrattle or Deadwalkers unit that has not been deployed. 
        Effect: Set up that unit in reserve in the grave. It has now been deployed. You cannot set up more friendly units in the grave than there are on the battlefield.`,
        when: [DURING_SETUP],
      },
      {
        name: `The Rising Dead`,
        desc: `Declare: Pick a friendly unit that is in the grave. 
        Effect: Set up that unit wholly within 6" of a terrain feature and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `The Hunger - Once Per Turn`,
        desc: `Declare: Pick each friendly Vampire unit that used a Fight ability this turn to be the targets. 
        Effect: Heal (D3) each target. Heal (2D3) the target instead if it destroyed an enemy unit this turn using a Fight ability.`,
        when: [END_OF_TURN],
      },
      {
        name: `Command Ability - Endless Legions - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Unique Deathrattle or Deadwalkers unit that started the battle with 2 or more models and that has been destroyed to be the target.
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of a friendly Soulblight Gravelords Hero or wholly within 6" of a terrain feature. It must be set up more than 9" from all enemy units. If it is your movement phase, you can set up the replacement unit more than 3" from all enemy units instead of more than 9", but if you set it up within 9" of any enemy units, it cannot use Charge abilities this turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Deathly Invocation - Once Per Turn`,
        desc: `Declare: Pick a friendly Soulblight Gravelords Hero to use this ability, then pick up to 3 friendly Deathrattle or Deadwalkers units wholly within 12" of that Hero to be the targets. 
        Effect: For each target:  
        If the target is damaged, Heal (3) the target.  
        If the target is not damaged, return a number of slain models to it with a combined Health characteristic of up to 3.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
