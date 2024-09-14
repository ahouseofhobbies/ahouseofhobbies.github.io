import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { SONS_OF_BEHEMAT } from 'meta/factions'
import meta_rule_sources from 'meta/rule_sources'
import { CHARGE_PHASE, COMBAT_PHASE, DURING_GAME, SHOOTING_PHASE, WARDS_PHASE } from 'types/phases'

const BattleTraits = {
  [SONS_OF_BEHEMAT]: {
    effects: [
      {
        name: `Timberrrrr! - Passive`,
        desc: `Effect: Each time a friendly Mega-Gargant or Gargant model is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
      {
        name: `Gargant Charge`,
        desc: `Declare: Pick a friendly Mega-Gargant or Gargant unit that charged this turn and has not used a Rampage ability this turn to use this ability, then pick a visible enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Earthshaking Roar - Once Per Turn`,
        desc: `Declare: Pick a friendly Mega-Gargant or Gargant unit that has not used a Rampage ability this turn to use this ability, then pick an enemy unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Colossal Slam - Once Per Turn`,
        desc: `Declare: Pick a friendly Mega-Gargant that has not used a Rampage ability this turn to use this ability, then pick an enemy Monster or War Machine within 1" of it to be the target. 
        Effect: Roll a dice. On a 3+, remove the target from the battlefield and set it up again within 1" of the unit using this ability. Then, inflict D3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Jump Up and Down - Once Per Turn`,
        desc: `Declare: Pick a friendly Mega-Gargant or Gargant unit that has not used a Rampage ability this turn to use this ability, then pick an enemy Infantry unit in combat with it to be the target. 
        Effect: Roll a dice. On a 3+, roll a dice for each model in the target unit. If the unit using this ability is a Gargant, inflict 1 mortal damage on the target for each 6. If it is a Mega-Gargant, inflict 1 mortal damage on the target for each 5+.`,
        when: [COMBAT_PHASE],
      },
    ],
  },

 /* "King Brodd's Stomp": {
    effects: [
      {
        name: `These Realms Is Ours`,
        desc: `Each MEGA-GARGANT has a Mightier Makes Righlier value listed on its damage table on its warscroll. For the purposes of contesting objectives, each MEGA-GARGANT model in a King Brodd's Stomp army counts as a number of models equal to its Mightier Makes Rightier value, while each MANCRUSHER GARGANT model counts as 10 models.`,
        when: [DURING_GAME],
      },
      {
        name: `The World Titan's Prophet`,
        desc: `If your army includes KING BRODD, he has a ward of 5+ while he is within 3" of any other friendly units.`,
        when: [WARDS_PHASE],
      },
      {
        name: `Smash It All To Bits`,
        desc: `Once per turn, in your shooting phase, you can pick 1 terrain feature that does not have any units with the Monster keyword wholly or partially on it and 1 friendly Mega-Gargant within 1" of it. If you do so, roll a dice. On a 2+, that terrain feature is sundered.

        If a terrain feature is sundered, roll a dice for each unit that has any models on or garrisoning that terrain feature. On a 2+, that unit suffers D3 mortal wounds. Then, starting with the active player, each player must remove all friendly models that were on or garrisoning that terrain feature and set them up wholly within 6" of, but not on, that terrain feature and more than 3" from all enemy units. Those models must be set up in coherency with any models in their unit, including those that were not on or garrisoning that terrain feature. If a model cannot be set up following these restrictions, it is slain. The terrain feature is then removed from play.

        Finally, the Mega-Gargant you picked can make a shooting attack in that phase with the Hurled Terrain missile weapon below (this is treated as an additional weapon profile that can be used when you pick that unit to shoot)`,
        when: [SHOOTING_PHASE],
        rule_sources: [meta_rule_sources.ERRATA_DAWNBRINGERS_BOOK_2],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
