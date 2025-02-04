import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { move } from 'superagent'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_HERO_PHASE,
} from 'types/phases'

const IronjawzBattleTraits = {
  'Mighty Destroyers': {
    effects: [
      {
        name: `Mighty Destroyers - Once Per Turn`,
        desc: `Declare: Pick a friendly Ironjawz unit that was not set up this turn to be the target. 
        Effect: The target can move up to 3". It can move into combat. If it was in combat at the start of the move, it must end that move in combat.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ironjawz Waaagh!': {
    effects: [
      {
        name: `Ironjawz Waaagh! - Once Per Turn`,
        desc: `Declare: Pick a friendly Ironjawz Hero to be the target. You cannot pick the same Hero to be the target of this ability more than once per battle.
        Effect: For the rest of the turn, the following effects apply to friendly Ironjawz units while they are wholly within 18" of the target: 
        Add 1 to charge rolls for those units. 
        Add 1 to the Attacks characteristic of those units melee weapons.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Bossrokk Tower': {
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
        desc: `Declare: If this terrain feature does not have a Shouty Boss, pick a friendly Ironjawz Infantry Hero that is not in comnbat and is within 3" of it to be target. 
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
        name: `Aggressively Bossy - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 18" of this terrain feature to be the target. 
        Effect: Roll a dice. Add 1 to the roll if this terrain feature has a Shouty Boss. On a 4+ pick 1 of the following effects to apply to the target until the start of your next turn. 
        Subtract 3 from the targets control score. 
        Subtract 1 from the casting rolls and/or chanting rolls for the target. 
        Subtract 1 from the number of dice rolled when making charge rolls from the target, to a minimum of 1.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(IronjawzBattleTraits, 'battle_trait')
