import { tagAs } from 'factions/metatagger'
import meta_rule_sources from 'meta/rule_sources'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  END_OF_SETUP,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
} from 'types/phases'
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
        when: [HERO_PHASE],
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
  'Skaregob Totem': {
    effects: [
      {
        name: `Man Da Tower - Passive`,
        desc: `Effect: While this terrain feature has a Shouty Boss:
        The Shoutyboss cannot use Move abiltiies
        Instead of measuring range or visibity to and from the Shouty Boss, measure to and from this terrain feature and instead. 
        If this terrain feature is destroyed before removing it from the battlefield, inflict D3 mortal damage on the Shouty Boss. Then, set up the Shouty Boss on the battlefield within 3" of this terrain feature and not in combat. That unit is no longer the Shorty Boss. Tf it is not possible to set up the Shouty Boss, it is slain." 
        `,
        when: [DURING_GAME],
      },
      {
        name: `Up we Go!`,
        desc: `Declare: If this terrain feature does not have a Shouty Boss, pick a friendly Kruleboyz Infantry Hero that is not in comnbat and is within 3" of it to be target. 
        Place the target on this tarrian feature. The target is now a Shourty Boss = (see Man da Tower!")
        Effect: Place the target on this terrain feature. The target is now a Shouty Boss. 
        `,
        when: [HERO_PHASE],
      },
      {
        name: `I'm Off`,
        desc: `Effect: If this terrain feature has a Shouty Boss that was not placed on it this turn, set up the Shouty Boss on the battlefield wholly within 6" of this terrain feature and not in combat. That unit is no longer a Shouty Boss.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sinister Stare - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit or a friendly Kruleboyz unit wholly within 12" of this terrain feature to be the target. If this terrain feature has a Shouty Boss, you can pick an eligible unit wholly within 18" instead.
        Effect: Until the start of your next turn, if the target is picked to be the target of a Dirty Trick ability while it is wholly within 12" of this terrain feature, add 1 to the Dirty Trick roll for that ability. if this terrain feature has a Shouty Boss, this ability applies to the targets picked to be the target of the Dirty Trick ability while they are wholly within 18" of this terrain feature instead of 12".`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(KruleboyzBattleTraits, 'battle_trait')
