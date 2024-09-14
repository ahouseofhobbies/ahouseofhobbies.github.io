import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import { CHARGE_PHASE, COMBAT_PHASE, DURING_GAME, END_OF_SETUP, HERO_PHASE, MOVEMENT_PHASE, SHOOTING_PHASE } from 'types/phases'
import rule_sources from '../rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const KruleboyzBattleTraits = {
  'Venom-Encrusted Weapons': {
    effects: [
      {
        name: `Venom-Encrusted Weapons - Once Per Turn`,
        desc: `Declare: Pick a friendly Kruleboyz Infantry unit to be the target, then make a dirty trick roll. 
        Effect: Until the start of your next turn, the targets attacks score critical hits on unmodified hit rolls of 5+.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Lethal Surprise': {
    effects: [
      {
        name: `Lethal Surprise - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that charged this turn and is in combat with any friendly Kruleboyz units to be the target, then make a dirty trick roll. 
        Effect: Inflict D3 mortal damage on the target. In addition, for the rest of the turn, the targets weapons cannot be affected by the Charge (+1 Damage) weapon ability.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Sneaky Sneakin`': {
    effects: [
      {
        name: `Sneaky Sneakin' - Once Per Turn`,
        desc: `Declare: Pick a friendly Kruleboyz Infantry unit that has 10 or fewer models and is not in combat to be the target, then make a dirty trick roll. 
        Effect: Remove the target from the battlefield and set it up again wholly within 3" of a terrain feature and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Noisy Racket': {
    effects: [
      {
        name: `Noisy Racket - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with any friendly Kruleboyz units to be the target, then make a dirty trick roll. 
        Effect: The target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Dirty Tricks': {
    effects: [
      {
        name: `Dirty Tricks - Passive`,
        desc: `Effect: Your army can use 1 Dirty Trick ability per phase. The effect of a Dirty Trick ability is only applied if you make a successful dirty trick roll. The success of a dirty trick roll depends on the number of Dirty Trick abilities your army has already used this battle round: 
        Dirty Trick 
        First 2+
        Second 3+
        Third 4+
        Fourth or subsequent 5+`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(KruleboyzBattleTraits, 'battle_trait')
