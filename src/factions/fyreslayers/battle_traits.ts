import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { FYRESLAYERS } from 'meta/factions'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SAVES_PHASE,
  SHOOTING_PHASE,
  START_OF_HERO_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
} from 'types/phases'

const BattleTraits = {
  [FYRESLAYERS]: {
    effects: [
      {
        name: `Ur-Gold Rune - Rune of Fury - Once Per Battle`,
        desc: `Effect: You can only use this ability if you have not used any Ur-gold Rune abilities this battle round. For the rest of the battle round, friendly Fyreslayers units have Strike-first while they are in combat with an enemy unit that charged in the same turn.`,
        when: [START_OF_TURN],
      },
      {
        name: `Ur-Gold Rune - Rune of Farsight - Once Per Battle`,
        desc: `Declare: You can only use this ability if you have not used any Ur-gold Rune abilities this battle round. Pick any number of enemy units within 10" of any visible friendly Fyreslayers units to be targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Ur-Gold Rune - Rune of Fiery Determination - Once Per Battle`,
        desc: `Effect: You can only use this ability if you have not used any Ur-gold Rune abilities this battle round. Friendly Fyreslayers units have Ward (5+) for the rest of the battle round.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ur-Gold Rune - Rune of Relentless Zeal - Once Per Battle`,
        desc: `Effect: You can only use this ability if you have not used any Ur-gold Rune abilities this battle round. For the rest of the battle round, friendly Fyreslayers units can use Charge abilities even if they used a Run ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Ur-Gold Rune - Rune of Searing Heat - Once Per Battle`,
        desc: `Effect: You can only use this ability if you have not used any Ur-gold Rune abilities this battle round. Melee weapons used by friendly Fyreslayers units have Crit (Mortal) for the rest of the battle round.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Magmic Battleforge (Faction Terrain) - Spending the Forge - Once Per Battle`,
        desc: `Declare: Pick a friendly Fyreslayers Priest within this terrain features combat range to expend the power of the forge. 
        Effect: Heal (D3) each friendly Fyreslayers unit on the battlefield. Once this ability has been used, this terrain feature cannot use the Molten Blessing abiity for the rest of the battle.`,
        when: [HERO_PHASE],
      },
      {
        name: `Magmic Battleforge (Faction Terrian) - Molten Blessing`,
        desc: `Declare: Pick a friendly Fyreslayers Priest within this terrain features combat range to be the target. 
        Effect: Add 1 to chanting rolls for the target for the rest of the turn. In addition, the target can use the Unbind ability this turn as if it had Wizard (1).`,
        when: [START_OF_TURN],
      },
    ],
  },

  'Lofnir Drothkeepers': {
    effects: [
     /* {
        name: `Daring Tamers`,
        desc: `The strike-last effect applies to enemy MONSTER units while they are within 3" of 2 or more friendly VULKYN FLAMESEEKERS units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Honourbound Drothmasters`,
        desc: `Friendly VULKYN FLAMESEEKERS units have the Battleline battlefield role. In addition, for each VULKYN FLAMESEEKERS unit included in your army, you can include 1 Auric Runeson on Magmadroth as a Battleline unit.`,
        when: [DURING_GAME],
      },
      {
        name: `Flame-filled Beasts`,
        desc: `You can pick up to 3 LOFNIR DROTHKEEPERS units in your army to have different mount traits instead of 1.`,
        when: [DURING_GAME],
      },
      {
        name: `Skilled Drothwranglers`,
        desc: `Once per turn, in your movement phase, you can pick 1 friendly VULKYN FLAMESEEKERS unit wholly within 6" of a friendly MAGMADROTH that has not yet moved in that phase and say that it will hitch a lift on that MAGMADROTH. If you do so, after you have moved that MAGMADROTH, instead of making a move with that unit, remove it from the battlefield and set it up again on the battlefield wholly within 6" of that MAGMADROTH and more than 3" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Protective Family`,
        desc: `While a friendly VULKYN FLAMESEEKERS Kyndledroth is within 1" of a friendly MAGMADROTH, that VULKYN FLAMESEEKERS unit has a ward of 5+.`,
        when: [WARDS_PHASE],
      }, */
    ], 
  }, 

 'Ur-Gold Runes': {
    effects: [
    /*  {
        name: `Ur-Gold Runes`,
        desc: `At the start of your hero phase, you can activate of the following 6 types of ur-gold rune. To do so, state which rune will be activated and make an activation roll by rolling a dice. On a 1-5, the standard effect applies. On a 6, the enhanced effect also applies. The effects last until the start of your next hero phase.
          
        Each ur-gold rune can only be activated once per battle, and no more than 1 rune can be activated at the same time. Once you have used a rune, you can choose a new one to activate in your next hero phase, but you cannot activate the same one again.`,
        when: [START_OF_HERO_PHASE],
      },
      {
        name: `Rune of Fury`,
        desc: `Standard effect: Add 1 to hit rolls for attacks made with melee weapons by friendly FYRESLAYERS units.

        Enhanced effect: Add 1 to the Attacks characteristic of melee weapons used by friendly FYRESLAYERS units.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Rune of Searing Heat`,
        desc: `Standard effect: If the unmodified wound roll for attack made by a friendly FYRESLAYERS unit is 6, that attack causes 1 mortal wound to the target in addition to any damage it inflicts.

        Enhanced effect: When this rune is activated, roll a dice for each enemy unit within of any friendly FYRESLAYERS units. On a 2+, that enemy unit suffers 1 mortal wound.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Rune of Awakened Steel`,
        desc: `Standard effect: Improve the Rend characteristic of melee weapons used by friendly FYRESLAYERS units by 1.

        Enhanced effect: Improve the Rend characteristic of melee weapons used by friendly FYRESLAYERS units by a further 1.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Rune of Fiery Determination`,
        desc: `Standard effect: Friendly FYRESLAYERS units have a ward of 6+.

        Enhanced effect: Friendly FYRESLAYERS HEROES have a ward of 5+.`,
        when: [SAVES_PHASE],
      },
      {
        name: `Rune of Relentless Zeal`,
        desc: `Standard effect: Add 2" to the Move characteristic of friendly FYRESLAYERS units.

        Enhanced effect: Add 2 to charge rolls for friendly FYRESLAYERS units.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Rune of Farsight`,
        desc: `Standard effect: Add 1 to hit rolls for attacks made with Fyresteel Throwing Axes by friendly FYRESLAYERS units.
          
        Enhanced effect: Add 1 to wound rolls for attacks made with Fyresteel Throwing Axes by friendly FYRESLAYERS units.`,
        when: [SHOOTING_PHASE],
      },*/
    ],
  }, 
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
