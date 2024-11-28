import { keyPicker, tagAs } from 'factions/metatagger'
import {
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_SHOOTING_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  TURN_ONE_START_OF_ROUND,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import Prayers from './prayers'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

const MagmadrothEffects = [
 /* {
    name: `Roaring Fyrestream`,
    desc: `The Attacks characteristic of a Roaring Fyrestream is equal to the number of models in the target unit (to a maximum Attacks characteristic of 10).`,
    when: [SHOOTING_PHASE],
    shared: true,
  },
  {
    name: `Roaring Fyrestream`,
    desc: `At the end of your shooting phase, if this unit did not make an attack with its Roaring Fyrestream in that phase, you can say that an inferno is raging inside this unit. If an inferno is raging inside this unit, improve the Rend characteristic of its Roaring Fyrestream by 2. After the next attack made with this unit's Roaring Fyrestream has been resolved, an inferno is no longer raging inside this unit.`,
    when: [END_OF_SHOOTING_PHASE],
    shared: true,
  },
  {
    name: `Lashing Tail`,
    desc: `At the end of the combat phase, roll a dice for each enemy unit within 3" of this unit. If the roll is equal to or less than the number of models in that enemy unit, that unit suffers D3 mortal wounds.`,
    when: [END_OF_COMBAT_PHASE],
    shared: true,
  },
  {
    name: `Volcanic Blood`,
    desc: `Roll a dice each time a wound caused by an attack made with a melee weapon is allocated to this unit. On a 4+, the attacking unit suffers 1 mortal wound.`,
    when: [WOUND_ALLOCATION_PHASE],
    shared: true,
  }, */
]
const WhirlwindOfDestructionEffect = {
/*  name: `Whirlwind of Destruction`,
  desc: `Add 1 to the Attacks characteristic of this unit's melee weapons if this unit made a charge move in the same turn.`,
  when: [COMBAT_PHASE],
  shared: true, */
} 
const BerserkFuryEffect = {
 /* name: `Berserk Fury`,
  desc: `Once per battle, at the start of the combat phase, you can say that this unit will unleash its berserk fury. If you do so, until the end of that phase, if a model in this unit is slain, that model can fight before it is removed from play.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true, */
}
const LordOfTheLodgeEffect = {
 /* name: `Lord of the Lodge`,
  desc: `Once per battle, at the start of your combat phase, you can pick 1 friendly unit on the battlefield with this ability to unleash the wrath of Grimnir. If you do so, until the end of that phase, add 1 to the Attacks characteristic of melee weapons used by friendly FYRESLAYERS units while they are wholly within 12" of that unit.`,
  when: [START_OF_COMBAT_PHASE],
  shared: true, */
}
const AuricRetinueEffect = {
 /* name: `Retinue`,
  desc: `At the start of the first battle round, before determining who has the first turn, you can pick 1 friendly AURIC HEARTHGUARD or HEARTHGUARD BERZERKERS unit on the battlefield that is not another unit's retinue to be this unit's retinue.`,
  when: [TURN_ONE_START_OF_ROUND],
  shared: true, */
}
const RoyalRetinueEffect = {
 /* name: `Royal Retinue`,
  desc: `Before you allocate a wound or mortal wound to this unit, or instead of making a ward roll for a wound or mortal wound that would be allocated to this unit, if this unit is within 3" of its retinue, you can roll a dice. On a 1-2, that wound or mortal wound is allocated to this unit as normal. On a 3+, that wound or mortal wound is allocated to this unit's retinue instead. If the retinue has a ward, you can make a ward roll before allocating that wound or mortal wound to it.`,
  when: [WOUND_ALLOCATION_PHASE],
  shared: true, */
}
const DauntlessAssaultEffect = {
 /* name: `Dauntless Assault`,
  desc: `After this unit has fought in the combat phase for the first time, if its retinue has not yet fought in that combat phase, is within 3" of an enemy unit and is wholly within 12" of this unit, this unit's retinue can fight immediately.`,
  when: [COMBAT_PHASE],
  shared: true, */
}
const VyingForGloryEffect = {
 /* name: `Vying for Glory`,
  desc: `If the unmodified hit roll for an attack made by this unit that targets a MONSTER is 6, that attack causes a number of mortal wounds to the target equal to the weapon's Damage characteristic and the attack sequence ends.`,
  when: [COMBAT_PHASE, SHOOTING_PHASE],
  shared: true, */
}
const ChampionEffect = {
 /* name: `Champion`,
  desc: `1 model in this unit can be a Karl. Add 1 to the Attacks characteristic of that model's melee weapons.`,
  when: [COMBAT_PHASE],
  shared: true, */
}
const VulkiteBezerkersBaseEffects = [
 /* ChampionEffect,
  {
    name: `Musician`,
    desc: `1 in every 5 models in this unit can be a Hornblower of Grimnir. Add 1 to charge rolls for this unit if it includes any Hornblowers of Grimnir.`,
    when: [CHARGE_PHASE],
    shared: true, 
  }, */
  BerserkFuryEffect,
]

const Units = {
  'Auric Runefather': {
    effects: [
      // AuricRetinueEffect, RoyalRetinueEffect, DauntlessAssaultEffect, LordOfTheLodgeEffect
      {
        name: `Royal Retinue - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Hero Fyreslayers Infantry unit within this units combat range to be the royal retinue. 
        Effect: For the rest of the battle, while the royal retinue is wholly within 6" of this unit, add 1 to hit rolls for attacks made by the royal retinue and this unit has Ward (4+).`,
        when: [DURING_SETUP],
      },
      {
        name: `Commanding Presence`,
        desc: `Effect: Add the current battle round number to the control scores of friendly Fyreslayers Infantry units wholly within 12" of this unit for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Auric Runefather on Magmadroth': {
    effects: [
      //...MagmadrothEffects, LordOfTheLodgeEffect
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Magmadroths Claws and Horns is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Raging Inferno - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from save rolls for the target for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Warrior-Kings - Once Per Battle`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Fyreslayers units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Volcanic Blood - Passive`,
        desc: `Effect: If you make an unmodified save roll of 1 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },  
    ],
  },
  'Auric Runeson': {
    effects: [
      //AuricRetinueEffect, RoyalRetinueEffect, DauntlessAssaultEffect, VyingForGloryEffect
      {
        name: `Dauntless Assault - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Fyreslayers Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fearless Charge - Passive`,
        desc: `Effect: If this unit charged this turn, for the rest of the turn, add 1 to charge rolls for friendly Fyreslayers Infantry units while they are wholly within 18" of this unit.`,
        when: [CHARGE_PHASE],
      }, 
    ],
  },
  'Auric Runeson on Magmadroth': {
    effects: [
      //...MagmadrothEffects, VyingForGloryEffect
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Magmadroths Claws and Horns is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vying for Glory - Passive`,
        desc: `Effect: Each time this unit destroys a Monster, add 1 to the Attacks characteristic of this units Ancestral Weapons for the rest of the battle. This unit can be affected by this ability multiple times and the effects are cumulative.`,
        when: [DURING_GAME],
      },
      {
        name: `Dominating Roar - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: If this unit has fewer damage points than the target, subtract 10 from the targets control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Volcanic Blood - Passive`,
        desc: `Effect: If you make an unmodified save roll of 1 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      }, 
    ],
  },
  'Auric Runesmiter': {
   /* mandatory: {
      prayers: [keyPicker(Prayers, ['Runic Empowerment'])],
    }, */
    effects: [
      {
        name: `Magmic Tunneling`,
        desc: `Declare: Pick this unit and up to 1 unit in its regiment if neither unit has been deployed. 
        Effect: Set up those units in reserve underground. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Emergence`,
        desc: `Declare: Pick this unit if it is underground. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units. Then, set up the other unit that was set up underground with it (if any) wholly within 6" of this unit and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Auric Runesmiter on Magmadroth': {
   /* mandatory: {
      prayers: [keyPicker(Prayers, ['Runic Empowerment'])],
    }, */
    effects: [
      //...MagmadrothEffects
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Magmadroths Claws and Horns is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Runic Empowerment`,
        desc: `Declare: Pick a friendly Fyreslayers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to wound rolls for the targets attacks for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Lashing Tail - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 2D6. If the roll is equal to or less than the number of models in the target unit, inflict D3+3 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Volcanic Blood - Passive`,
        desc: `Effect: If you make an unmodified save roll of 1 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      }, 
    ],
  }, 
  'Auric Flamekeeper': {
    effects: [
      {
        name: `Masterflame Rune - Once Per Turn`,
        desc: `Declare: If any friendly units have been destroyed during the battle, pick a friendly Fyreslayers Infantry unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. If the roll is equal to or less than the number of Fyreslayers units that have been destroyed during the battle, pick 1 of the following effects to apply until the start of your next turn: 
        Grimnirs Grit: The target has Ward (5+). 
        Grimnirs Resolve: Add 2 to charge rolls for the target. 
        Grimnirs Vengeance: Add 1 to the Damage characteristic of the targets melee weapons.`,
        when: [HERO_PHASE],
      },
    ],
  },
 /* 'Fjul-Grimnir': {
    effects: [
      {
        name: `Retinue`,
        desc: `This unit's retinue is the The Chosen Axes unit in your army.`,
        when: [DURING_GAME],
      },
      DauntlessAssaultEffect,
      RoyalRetinueEffect, 
    ], 
  }, */
 /* 'The Chosen Axes': {
    effects: [
      {
        name: `Champion`,
        desc: `Tefk Flamebearer is the unit champion. Add 1 to the Attacks characteristic of that model's melee weapons.`,
        when: [COMBAT_PHASE],
      },
      BerserkFuryEffect,
      WhirlwindOfDestructionEffect, 
    ], 
  }, */
  Battlesmith: {
    effects: [
      {
        name: `Icon of Grimnir - Passive`,
        desc: `Effect: Ignore negative modifiers to the control scores of friendly Fyreslayers units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Bard of the Lodge - Passive`,
        desc: `Effect: If a friendly unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Auric Runemaster': {
   /* mandatory: {
      prayers: [keyPicker(Prayers, ["Volcano's Call"])],
    }, */
    effects: [
      {
        name: `High Priest of the Zharrgrim - Passive`,
        desc: `Effect: Each time a Prayer chanted by this unit is answered, this unit gains a magmic power token.`,
        when: [HERO_PHASE],
      },
      {
        name: `Master of the Runes - Reaction: You declared an Ur-Gold Rune ability`,
        desc: `Effect: Remove 3 of this units magmic power tokens. If you do so, apply the effect below that corresponds to the Ur-gold Rune ability that was used:`,
        when: [DURING_GAME],
      },
      {
        name: `Master of the Runes - Rune of Fury`,
        desc: `Rune of Fury: For the rest of the battle round, add 1 to wound rolls for combat attacks made by friendly Fyreslayers units while they have Strike-first.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Master of the Runes - Rune of Fiery Determination`,
        desc: `Rune of Fiery Determination: Add 1 to save rolls for friendly Fyreslayers units for the rest of the battle round.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Master of the Runes - Rune of Relentless Zeal`,
        desc: `Rune of Relentless Zeal: Add 1 to run rolls and charge rolls for friendly Fyreslayers units for the rest of the battle round.`,
        when: [MOVEMENT_PHASE, CHARGE_PHASE],
      },
      {
        name: `Master of the Runes - Rune of Searing Heat`,
        desc: `Rune of Searing Heat: Add 1 to the Rend characteristic of melee weapons used by friendly Fyreslayers units for the rest of the battle round.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Master of the Runes - Rune of Farsight`,
        desc: `Rune of Farsight: Increase the range of the Rune of Farsight ability to 16".`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Grimwrath Berzerker': {
    effects: [
      {
        name: `Battle-fury - Once Per Battle`,
        desc: `Effect: If this unit is in combat, it can use 2 Fight abilities this phase. After the first is used, however, this unit has Strike-last for the rest of the phase.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grimwrath Oaths`,
        desc: `Effect: Pick 1 of the following oaths for this unit to swear: 
        I will guard them with my life!: While this unit is wholly within 6" of another friendly Fyreslayers Hero:  Add 1 to hit rolls for this units attacks.  Add 1 to ward rolls for this unit. If a friendly Fyreslayers Hero wholly within 6" of this unit is destroyed, this effect no longer applies. 
        I will not be stopped!: Add 1 to charge rolls for this unit, and add 1 to save rolls for this unit while it is in combat. If this unit uses the Retreat or Rally abilities, this effect no longer applies.`,
        when: [DURING_SETUP],
      },
    ],
  },
  Doomseeker: {
    effects: [
      {
        name: `Oathbound`,
        desc: `Declare: Pick an enemy unit to be this units quarry. You can pick a unit that has been deployed in reserve. 
        Effect: Add 1 to hit rolls and wound rolls for attacks made by this unit that target its quarry. If this unit is destroyed while it is in combat with its quarry, inflict 3 mortal damage on this units quarry immediately after the ability that destroyed this unit has been resolved.`,
        when: [DURING_SETUP],
      },
      {
        name: `Runic Power - Passive`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons while this unit has 1 damage point. Add 2 to the Damage characteristic of this units melee weapons instead while this unit has 2 or more damage points.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Vulkite Berzerkers with Bladed Slingshields': {
    effects: [
     // ...VulkiteBezerkersBaseEffects,
      {
        name: `Berserk Fury - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit aer the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Vulkite Berzerkers with Fyresteel Handaxes': {
    effects: [
      //...VulkiteBezerkersBaseEffects, WhirlwindOfDestructionEffect
      {
        name: `Whirlwind of Destruction - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of this units melee weapons if this unit charged this turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Auric Hearthguard': {
    effects: [
      {
        name: `Molten Rockbolts - Passive`,
        desc: `Effect: Each time a shooting attack made by this unit scores a critical hit, subtract 1" from the target units Move characteristic until the start of your next turn. This ability cannot reduce the target units unmodified Move characteristic below half.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Hearthguard Berzerkers with Flamestrike Poleaxes': {
    effects: [
     // ChampionEffect,
      {
        name: `Duty Unto Death - Passive`,
        desc: `Effect: While any friendly Fyreslayers Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Smouldering Braziers`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [END_OF_TURN],
      },
    ],
  },
'Hearthguard Berzerkers with Bezerker Broadaxes': {
  effects: [
   // ChampionEffect,
    {
      name: `Duty Unto Death - Passive`,
      desc: `Effect: While any friendly Fyreslayers Infantry Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
      when: [DURING_GAME],
    },
    {
      name: `Fires of Vengeance - Passive`,
      desc: `Effect: While this unit is within the combat ranges of any damaged friendly Fyreslayers Heroes, add 1 to the Attacks characteristic of this unit's melee weapons.`,
      when: [COMBAT_PHASE],
    },
  ],
},
  'Vulkyn Flameseekers': {
    effects: [
      {
        name: `Drothmaster`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract D3 from the Damage characteristic of the targets Companion melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Grimhold Exile': {
    effects: [
      {
        name: `Last of the Lodge-fire - Once Per Battle`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the targets Health characteristic. For each 4+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_1],
      },
      {
        name: `Honour to Grimnir! - Once Per Battle`,
        desc: `Declare: Pick up to 3 friendly Fyreslayers Infantry units wholly within 12" of this unit to be the targets. 
        Effect: You can re-roll charge rolls for the targets for the rest of the turn`,
        when: [HERO_PHASE],
        rule_sources: [meta_rule_sources.BOOK_DAWNBRINGERS_BOOK_1],
      },
    ],
  },
  'ROR: Saviours of Cinderfall': {
    effects: [
      {
        name: `Callis and Toll: Right Tools for the Job - Passive`,
        desc: `Effect: Double the Damage characteristic of this units weapons for attacks that target Wizards, Priests and Manifestations.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      {
        name: `Callis and Toll: Wily to the Last - Passive`,
        desc: `Effect: If this unit has 2 models and would be automatically destroyed, it is not automatically destroyed. Instead, 1 model in this unit is slain.`,
        when: [DURING_GAME],
      },
      {
        name: `Callis and Toll: Get it Done - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Tolls Companions unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Toll's Companions: Hidden Agents`,
        desc: `Declare: Pick this unit and a friendly Callis and Toll unit in the same regiment as this unit if those units have not been deployed. 
        Effect: Set up those units in reserve in the shadows. Those units have now been deployed.`,
        when: [DURING_SETUP],
       },
       {
        name: `Toll's Companions: Saviours of Cinderfall - Passive`,
        desc: `Effect: While a friendly Callis and Toll unit is wholly within this units combat range, both this unit and that Callis and Toll unit have Ward (5+).`,
        when: [DURING_GAME],
       },
       {
         name: `Toll's Companions: Emerge from the Shadows`,
         desc: `Declare: Pick this unit if it is in the shadows. 
         Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units. Then, set up the Callis and Toll unit that was set up in the shadows with this unit wholly within 6" of it and more than 9" from all enemy units.`,
         when: [MOVEMENT_PHASE],
       },
       {
        name: `Duty Bound - Passive`,
        desc: `Effect: While every model in the same unit in the Regiment of Renown is contesting the same objective, add 1 to save rolls and ward rolls for that unit.`,
        when: [DURING_GAME],
       },
       {
         name: `Sigmar's Justice - Once Per Turn`,
         desc: `Declare: Pick an enemy unit to be marked for justice. You can pick a unit that is in reserve. 
         Effect: For the rest of the battle, add 1 to wound rolls for combat attacks made by units in this Regiment of Renown that target a unit that is marked for justice.`,
         when: [DURING_SETUP],
       },
    ],
  },
  'ROR: Norgrimm`s Rune Throng': {
    effects: [
      {
        name: `Runelord: Runes of Spellbreaking - Passive`,
        desc: `Effect: This unit can use the Unbind ability as if it had Wizard (1).`,
        when: [HERO_PHASE],
      },
      {
        name: `Runelord: Forgefire: Chant value of 5`,
        desc: `Declare: Pick a friendly Cities of Sigmar Duardin unit wholly within 12" of this unit to be the target, then make a chanting roll of D6. 
        Effct: Until the start of your next turn, add 1 to the Rend characteristic of the targets melee weapons. In addition, if the chanting roll was 10+, pick another friendly Cities of Sigmar Duardin unit wholly within 12" of this unit. Add 1 to the Rend characteristic of that units melee weapons until the start of your next turn as well.`,
        when: [HERO_PHASE],
      },
      {
        name: `Irondrakes: Cinderblast Bomb - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a visible enemy unit within 6" of it to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Longbeards: I Thought Duardin Were Made of Sterner Stuff! - Passive`,
        desc: `Effect: Add 2 to the control scores of friendly Cities of Sigmar Duardin units, excluding Longbeards units, while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
       {
        name: `Rune of Restored Hearth - Once Per Battle`,
        desc: `Effect: If the Runelord in the Regiment of Renown is contesting an objective, for the rest of the battle, units in this Regiment of Renown have Ward (5+) while they are contesting that objective.`,
        when: [HERO_PHASE],
       },
       {
         name: `Wrath and Ruin: Chant value of 4`,
         desc: `Declare: Pick the Runelord in this Regiment of Renown to chant this prayer, pick a visible enemy unit within 18" of them to be the target, then make a chanting roll of D6. 
         Effect: Roll 6 dice. If the chanting roll was 8+, roll 9 dice instead. For each 5+, inflict 1 mortal damage on the target. If 3 or more damage points are allocated to the target as a result of those dice rolls, ignore positive modifiers to save rolls for the target until the start of your next turn.`,
         when: [HERO_PHASE],
       },
    ],
  },
  'ROR: Elthwin`s Thorns': {
    effects: [
      {
        name: `Arch-Revenant: Crescent Shield`,
        desc: `Effect: Pick 1 of the following effects to apply to this unit for the rest of the turn: 
        Defensive Stance: This unit has Ward (4+). 
        Aggressive Stance: Add 1 to the Attacks characteristic of this units melee weapons, and add 1 to wound rolls for this units combat attacks.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Gossamid Archers: Forest Fighters - Passive`,
        desc: `Effect: This unit has a coherency range of 2".`,
        when: [DURING_GAME],
      },
      {
        name: `Gossamid Archers: Zephyrspites - Once Per Turn`,
        desc: `Effect: If this unit used a Shoot ability this phase, this unit can move D6". It cannot move into combat during any part of that move.`,
        when: [SHOOTING_PHASE],
      },
       {
        name: `Gossamid Champion`,
        desc: `Declare: Pick the Arch-Revenant in this Regiment of Renown to use this ability, the pick a visible enemy unit within 12" of them to be the target. 
        Effect: Until the start of your next turn, subtract X from charge rolls for the target, where X is the number of damage points allocated to the target this phase by shooting attacks made by the Gossamid Archers unit in the Regiment of Renown, to a maximum of 6.`,
        when: [SHOOTING_PHASE],
       },
       {
         name: `Flight of the Zephyrspites - Once Per Turn`,
         desc: `Effect: If both units in this Regiment of Renown are within each others combat range and neither unit is in combat, roll a dice. On a 3+, remove both units from the battlefield, then set them up again within each others combat range, wholly within 3" of a terrain feature and more than 9" from all enemy units.`,
         when: [SHOOTING_PHASE],
       },
    ],
  },
  'ROR: Gotrek Gurnisson': {
    effects: [
      {
        name: `Command Ability - Unstoppable Battle Fury`,
        desc: `Effect: This unit can use 2 Fight abilities this phase. After the first is used, however, this unit has Strikelast for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `I'll Get There Myself! - Passive`,
        desc: `Effect: This unit cannot be set up in reserve and cannot be targeted by abilities that would remove it from the battlefield.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Blacktalons': {
    effects: [
      {
        name: `Neave Blacktalon: Justice from Azyr`,
        desc: `Effect: Add 1 to the Damage characteristic of this units Whirlwind Axes for attacks that target Heroes.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave Blacktalon: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Neave Blacktalon: Windrider`,
        desc: `Declare: If this unit is in combat or charged this turn, this unit can make a pile-in move. Then, if this unit is in combat, you must pick 1 or more enemy units to be the target(s) of this units attacks. 
        Effect: Resolve combat attacks against the target unit(s). Then, roll a dice. On a 3+, remove this unit from the battlefield and set it up again on the battlefield more than 3" from all enemy units and wholly within the combat range of a friendly The Blacktalons unit that is not in combat.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neave's Companions: Shield of Azyr`,
        desc: `Effect: While any friendly The Blacktalons Heroes are wholly within this units combat range, both this unit and those friendly units have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Lorai: Aquatic Illusions`,
        desc: `Effect: Subtract 1 from hit rolls for attacks that target this unit.`,
        when: [COMBAT_PHASE, SHOOTING_PHASE],
      },
      {
        name: `Lorai: Nebulous Sea-Fog: Casting value of 6`,
        desc: `Effect: Until the start of your next turn, while a friendly The Blacktalons unit is wholly within 6" of this unit, if the unmodified hit roll for a shooting attack that targets that unit is 1-5, the attack fails and the attack sequence ends.`,
        when: [HERO_PHASE],
      },
      {
        name: `Justice Will Be Served - Once Per Battle`,
        desc: `Declare: Pick the Neave Blacktalon in this Regiment of Renown to be the target if it is in combat with an enemy Hero. 
        Effect: The target can use 2 Fight abilities this phase. Each time it does so, if it is in combat with an enemy Hero, all of its attacks must target an enemy Hero. In addition, after the first Fight ability is used, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Bundo Whalebiter': {
    effects: [
      {
        name: `Get Orf Me Land! - Once Per Turn`,
        desc: `Declare: Pick an objective within 1" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, move the target 2D6" to a new position on the battlefield more than 1" from all models, terrain features and other objectives.`,
        when: [HERO_PHASE],
      },
      {
        name: `Stuff 'Em In Me Net - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll 3 dice. For each roll that is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Son of Behemat - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Longshanks - Passive`,
        desc: `Effect: This unit can pass through models in non-Monster units and parts of terrain features that are less than 4" tall.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Shipwrecka Warclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Dead Cunning for a Gargant - Once Per Turn`,
        desc: `Effect: For the rest of the turn, add 1 to the Attacks characteristic of this units weapons. Then, roll a dice. On a 4+, this unit has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: The Horizon Seekers': {
    effects: [
      {
        name: `Lord-Aquilor: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Lord-Aquilor: Ride the Winds Aetheric`,
        desc: `Declare: If this unit is not in combat, you can pick up to 2 friendly Vanguard-Palladors units that are not in combat to be the targets. 
        Effect: Remove this unit and the targets (if any) from the battlefield. Set this unit up again on the battlefield more than 9" from all enemy units. Then, set up each target wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Vanguard-Hunters: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard-Hunters: Astral Compass - Once Per Battle`,
        desc: `Declare: Pick an enemy unit to be the target. 
        Effect: The target has the Hunted keyword for the rest of the battle.`,
        when: [DURING_SETUP],
      },
      {
        name: `Vanguard-Hunters: Star-Marked - Passive`,
        desc: `Effect: Add 2" to this units Move characteristic while a Hunted enemy unit is on the battlefield. In addition, add 1 to hit rolls for this units attacks that target a Hunted enemy unit.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard Palladors: Vanguard Chamber - Passive`,
        desc: `Effect: This unit can use Shoot and/or Charge abilities even if it used a Run or Retreat ability in the same turn.`,
        when: [MOVEMENT_PHASE, SHOOTING_PHASE, CHARGE_PHASE],
      },
      {
        name: `Vanguard Palladors with Javelins: Charging Volley`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit in combat with it to be the target. 
        Effect: This unit can immediately use a Shoot ability as if it were your shooting phase, but it must target that enemy unit. This units Starstrike Javelins have Shoot in Combat this phase.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Hunters' Cohesion - Passive`,
        desc: `Effect: Each time this Regiment of Renown's Lord-Aquilor uses its Ride the Winds Aetheric ability, you can pick all units in this Regiment of Renown that are not in combat to be the targets. 
        In addition, add 1 to hit rolls for attacks made by this Regiment of Renown's Lord-Aquilor and Vanguard-Palladors units that target a Hunted enemy unit.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Valnirs Stormwing': {
    effects: [
      {
        name: `Knight-Draconis: Wrath of the Draconith - Once Per Turn`,
        desc: `Declare: Pick a friendly Stormdrake Guard unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, add 1 to the Attacks characteristic of both this units and the targets Draconiths Fangs and Talons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Knight-Draconis: Arcane Heritage - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit or a friendly Stormdrake Guard unit wholly within 12" of this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit or that friendly unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Knight-Draconis: Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      },
      {
        name: `Stormdrake Guard: Extremis Chamber - Passive`,
        desc: `Effect: Each time you make an unmodified save roll of 6 for a combat attack that targets this unit, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE]
      }, 
      {
        name: `Hour of Retribution - Once Per Battle`,
        desc: `Effect: For the rest of the turn:
        Add 1 to wound rolls for attacks made by units in this Regiment of Renown.
        Add 1 to save rolls for units in this Regiment of Renwon.`,
        when: [HERO_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
