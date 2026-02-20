import { TItemDescriptions } from 'factions/factionTypes'
import { tagAs } from 'factions/metatagger'
import { TZEENTCH } from 'meta/factions'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_MOVEMENT_PHASE,
  END_OF_SETUP,
  END_OF_SHOOTING_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  TURN_FIVE_HERO_PHASE,
  TURN_ONE_HERO_PHASE,
  TURN_ONE_START_OF_ROUND,
  TURN_THREE_HERO_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'

const BattleTraits = {
  // Tzeentch Allegiance
  [TZEENTCH]: {
    effects: [
      {
        name: `Eldritch Illusions - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly non-Monster Disciples of Tzeentch units on the battlefield to be the targets.
        Effect: Remove the targets from the battlefield and set them up in reserve masked by illusion. Friendly units that are masked by illusion are destroyed at the end of the fifth battle round and not at the start of the fourth battle round.`,
        when: [DURING_SETUP],
      },
      {
        name: `Smoke and Mirrors - Once Per Turn`,
        desc: `Declare: Pick a friendly non-Monster Disciples of Tzeentch unit that was not set up using this ability in the previous turn to be the target, then pick a friendly unit that is masked by illusion to be the substitute. 
        Effect: Set up the substitute wholly within 6" of the target and not in combat. Then, remove the target from the battlefield and set it up in reserve masked by illusion.`,
        when: [HERO_PHASE],
      },
      {
        name: `Silver Simulacrum - Once Per Battle`,
        desc: `Effect: If there is a friendly Argent Shard on the battlefield, you can set up 1 additional Argent Shard on the battlefield. It must be set up wholly within friendly territory and more than 3" from all objectives and other terrain features.`,
        when: [DURING_SETUP],
      },
      {
        name: `All Part of the Plan - Passive`,
        desc: `Effect: You start the battle with 0 fate points. Gain 1 fate point each time:
        You lose the priority roll.
        A spell cast by a friendly Disciples of Tzeentch unit is unbound.
        A friendly Disciples of Tzeentch unit miscasts a spell.
        Your opponent gains control of an objective that you controlled at the start of the turn.
        A friendly Argent Shard is destroyed.`,
        when: [DURING_GAME],
      },
      {
        name: `Destined to Serve - Passive`,
        desc: `Effect: Before allocating damage points to a friendly Disciples of Tzeentch unit, you can spend any number of fate points. For each fate point you spend, remove 1 damage point in that unit's damage pool.`,
        when: [DURING_GAME],
      },
      {
        name: `Destined Arcana - Reaction: You declared a spell ability for a Disciples of Tzeentch unit`,
        desc: `Used By: The unit using that spell ability.
        Effect: Spend any number of fate points. For each fate point you spend, add 1 to the casting roll for that spell.`,
        when: [HERO_PHASE],
      },
      {
        name: `Destined for Battle - Reaction: You declared a Charge ability for a Disciples of Tzeentch unit in your turn`,
        desc: `Used By: The unit using that charge ability.
        Effect: Spend any number of fate points. For each fate point you spend, add 1 to the charge roll for that charge ability.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Argent Shard (Faction Terrain) - Magical Focus - Once Per Turn`,
        desc: `Effect: The next time a friendly Disciples of Tzeentch unit uses a Spell ability this phase, when picking targets for that spell, you can measure range and visibility from this terrain feature instead of from the caster, and your opponent can measure range and visibility to this terrain feature instead of to the caster for the purposes of the 'Unbind' ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Argent Shard (Faction Terrain) - Sorcerous Duplication - Once Per Turn`,
        desc: `Effect: Pick 1 of the following effects:
        If there is only 1 friendly Argent Shard on the battlefield, set up another Argent Shard wholly within 12" of this terrain feature, more than 1" from all other terrain features, more than 3" from all objectives and more than 9" from all enemy units.
        Remove this terrain feature from the battlefield and set it up again on the battlefield more than 1" from all other terrain features, more than 3" from all objectives and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },

  // Eternal Conflagration Flavor
  /* 'Masters of Destiny': {
    effects: [
      {
        name: `Masters of Destiny`,
        desc: `Effect: Roll 9 dice and place them to one side. These are your destiny dice. Destiny dice can be spent during the battle to change certain dice rolls. You can never have more than 9 destiny dice at once. 
        During the battle, instead of making a roll from the list below for a friendly Disciples of Tzeentch unit, you can spend your destiny dice. The roll you would have made is replaced with the roll on the destiny dice you spend. If you want to replace a 2D6 roll, 3D6 roll, etc. you must spend a number of destiny dice equal to the number before D6. Any rolls that have been replaced count as unmodified rolls, and they cannot be rerolled, they cannot be changed and they cannot be modified by other friendly abilities (but they can be modied by enemy abilities). You cannot spend destiny dice to replace rerolls. Destiny dice can be spent in place of the following dice rolls: 
        Casting rolls  
        Unbinding rolls  
        Banishment rolls  
        Run rolls  
        Charge rolls in your turn  
        Hit rolls  
        Wound rolls  
        Save rolls`,
        when: [DURING_SETUP],
      },
    ],
  },
  // Hosts Duplicitous Flavor
  'Ranks of Mischievous Mirages': {
    effects: [
      {
        name: `Ranks of Mischievous Mirages`,
        desc: `Enemy units within 3" of a friendly Hosts Duplicitous unit models cannot retreat.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Ranks of Mischievous Mirages`,
        desc: `Once per battle, when a Hosts Horrors of Tzeentch unit from your starting army is destroyed a dice. On a 4+, add a Hosts Duplicitous Horrors of Tzeentch models to your army. Set up the new unit wholly within 12" of a friendly Hosts Duplicitious Hero and more than 9" from all enemy units.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
    ],
  },
  // Hosts Arcanum Flavor
  'Thieves of All Things Arcane': {
    effects: [
      {
        name: `Thieves of All Things Arcane`,
        desc: `Once per turn, in the first, third, and fifth battle rounds, when a friendly Host Arcanum Wizard attempts to unbind a spell, you can choose for the spell to be automatically unbound (do not roll 2D6).`,
        when: [TURN_ONE_HERO_PHASE, TURN_THREE_HERO_PHASE, TURN_FIVE_HERO_PHASE],
      },
    ],
  },
  // Cult of Transient Form Flavor
  'The Change-gift': {
    effects: [
      {
        name: `The Change-gift`,
        desc: `Roll a dice each time a friendly Cult of the Transient Form Kairic Acolyte model is slain in the combat phase. On a 2-5, before removing that model from play, that model can fight. On a 6, before removing that model from play, you can add 1 Tzaangor model to a friendly Tzaangor Host unit within 9" of the slain model. The new model can only be set up within 3" of an enemy unit if the unit to which it is added is within 3" of that enemy unit.'`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  // Pyrofane Cult Flavor
 /* 'Arrows of Tzeentch': {
    effects: [
      {
        name: `Arrows of Tzeentch`,
        desc: `Add 1 to hit rolls for attacks made with Sorcerous Bolts by friendly Pyrofane Cult Kairic Acolytes units. In addition, at the end of your shooting phase, roll a dice for each enemy unit that suffered any wounds caused by attacks made with Sorcerous Bolts by friendly Pyrofane Cult units in that phase. On a 5+, that unit suffers D3 mortal wounds.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Arrows of Tzeentch`,
        desc: `At the end of your shooting phase, roll a dice for each enemy unit that suffered any wounds caused by attacks made with Sorcerous Bolts by friendly Pyrofane Cult units in that phase. On a 5+, that unit suffers D3 mortal wounds.`,
        when: [END_OF_SHOOTING_PHASE],
      },
    ],
  },
  // Guild of Summoners Flavor
  'Scions of the Exiled': {
    effects: [
      {
        name: `Scions of the Exiled`,
        desc: `If your army has the Guild of Summoners keyword, your Fate Points can only be used to summon Lord of Change units. Instead of a Fate Point cost of 30, a Guild of Summoners Lord of Change costs 9 Fate Points to summon the first time, and 18 Fate Points each time thereafter for the rest of the battle. In addition, Lord of Change units summoned in this way must be set up wholly within 9" of a Guild of Summoners Arcanite Hero and more than 9" from all enemy units.`,
        when: [DURING_GAME],
      },
    ],
  }, */
} satisfies TItemDescriptions

export default tagAs(BattleTraits, 'battle_trait')
