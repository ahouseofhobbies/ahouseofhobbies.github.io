import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_CHARGE_PHASE,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_CHARGE_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
} from 'types/phases'
import rule_sources from '../rule_sources'
import spells from './spells'
import monstrous_rampages from './monstrous_rampages'
import { TItemDescriptions } from 'factions/factionTypes'
import meta_rule_sources from 'meta/rule_sources'

/*const MawGruntaSharedEffects = [
  {
    name: `Unstoppable Momentum`,
    desc: `Each time this unit finishes a run or charge move, add D3 to its momentum score. This unit's momentum score can never exceed 6 or go below 1. At the end of the battle round, subtract 1 from this unit's momentum score (to a minimum of 1).`,
    when: [DURING_GAME],
    rule_sources: [
      rule_sources.BATTLETOME_SUPPLEMENT_IRONJAWZ,
      meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
    ],
    shared: true,
  },
  {
    name: `Unstoppable Momentum`,
    desc: `Each time this unit finishes a run add D3 to its momentum score. This unit's momentum score can never exceed 6.`,
    when: [MOVEMENT_PHASE],
    rule_sources: [
      rule_sources.BATTLETOME_SUPPLEMENT_IRONJAWZ,
      meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
    ],
    shared: true,
  },
  {
    name: `Unstoppable Momentum`,
    desc: `Each time this unit finishes a charge move, add D3 to its momentum score. This unit's momentum score can never exceed 6.`,
    when: [CHARGE_PHASE],
    rule_sources: [
      rule_sources.BATTLETOME_SUPPLEMENT_IRONJAWZ,
      meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
    ],
    shared: true,
  },
  {
    name: `Unstoppable Momentum`,
    desc: `At the end of the battle round, subtract 1 from this unit's momentum score (to a minimum of 1).`,
    when: [END_OF_TURN],
    rule_sources: [
      rule_sources.BATTLETOME_SUPPLEMENT_IRONJAWZ,
      meta_rule_sources.BATTLESCROLL_NULLSTONE_CACHE,
    ],
    shared: true,
  },
  {
    name: `Headlong Charger`,
    desc: `While this unit has a momentum score of 4 or more, this unit can charge even if it ran earlier in the turn.`,
    when: [CHARGE_PHASE],
    rule_sources: [rule_sources.BATTLETOME_SUPPLEMENT_IRONJAWZ],
    shared: true,
  },
]

const StrengthFromVictoryEffect = {
  name: `Strength from Victory`,
  desc: `At the end of the combat phase, if any models were slain by a wound caused by an attack made by this unit in that combat phase, add 1 to this unit's Wounds characteristic and add 1 to the Attacks characteristic of this unit's melee weapons, excluding those of its mount.`,
  when: [END_OF_COMBAT_PHASE],
  shared: true,
}

const DestructiveBulkEffect = {
  name: `Destructive Bulk`,
  desc: `If you carry out a Stomp monstrous rampage with this unit and the enemy unit you picked suffers any mortal wounds, that enemy unit suffers an additional number of mortal wounds equal to the Destructive Bulk value on this unit's damage table. After all models slain by those mortal wounds have been removed from play, if there are no enemy models within 3" of this unit, you can move this unit D6" and then you can carry out another Stomp monstrous rampage with this unit even though you have already carried out the Stomp monstrous rampage in that phase.`,
  when: [END_OF_CHARGE_PHASE],
  shared: true,
}

const DuffUpdaBigThingEffect = {
  name: `Duff Up da Big Thing`,
  desc: `Add 1 to hit rolls for attacks made by this unit that target a unit with a Wounds characteristic of 4 or more.`,
  when: [COMBAT_PHASE],
  shared: true,
}

const BerserkersEffect = {
  name: `Berserkers`,
  desc: `This unit can run and still charge later in the turn.`,
  when: [CHARGE_PHASE],
  shared: true,
} */

const IronjawzUnits = {
  Kragnos: {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of The Dread Mace is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Shield Inviolate - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 3+, ignore the effect of that spell on this unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
      {
        name: `Avatar of Destruction - Passive`,
        desc: `Effect: If this unit would be automatically destroyed, it is not automatically destroyed. Instead, allocate 6 damage points to it (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
      {
        name: `Rampaging Destruction - Once Per Turn`,
        desc: `Effect: If this unit charged this phase, pick 1 of the following effects: 
        Roll a dice for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll. 
        Pick an enemy Monster in combat with this unit and roll 2D6. On a 7, this ability has no effect. Otherwise, inflict an amount of mortal damage on that unit equal to the results on the dice used for the 2D6 roll multiplied together. For example, a 2D6 roll of 2 and 6 would inflict 12 mortal damage (2x6).`,
        when: [CHARGE_PHASE],
      },
      {
        name: `The End of Empires - Passive`,
        desc: `Effect: For the rest of the turn, add 1 to the number of dice rolled when making charge rolls for friendly Destruction units while they are wholly within 12" of this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Gordrakk the Fist of Gork': {
    effects: [
      // DestructiveBulkEffect,
      // StrengthFromVictoryEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Bigteefs Fists and Tail is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Monster Grapple - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, pick 1 of the targets weapons. You must pick a Companion weapon if it has any. Halve the Attacks characteristic of that weapon (rounding up) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Voice of Gork - Once Per Battle - Reaction: You declared a Waaagh! ability`,
        desc: `Effect: Until the start of your next turn, add 1 to hit rolls for combat attacks made by friendly Ironjawz units while they are wholly within 18" of this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Strength from Victory`,
        desc: `Effect: If any damage points were allocated to an enemy unit by this units combat attacks this turn and that enemy unit has been destroyed, give this unit a Waaagh! token, to a maximum of 3. 
        Until the end of the next turn, add 1 to the Attacks characteristic of this units weapons for each Waaagh! token it has.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Megaboss on Maw-Krusha': {
    effects: [
      //  StrengthFromVictoryEffect,
      //  DestructiveBulkEffect,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Maw-krushas Fists and Tail is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Strength from Victory`,
        desc: `Effect: If any damage points were allocated to an enemy unit by this units combat attacks this turn and that enemy unit has been destroyed, give this unit a Waaagh! token, to a maximum of 3. 
        Until the end of the next turn, add 1 to the Attacks characteristic of this units weapons for each Waaagh! token it has.`,
        when: [END_OF_TURN],
      },
      {
        name: `Destructive Bulk - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a D3. On a 2+, this unit can move 2D6". It can pass through the combat ranges of enemy units and can end that move in combat. Then, pick an enemy unit that this unit passed across during the move. inflict an amount of mortal damage on the target equal to the D3 roll. If that enemy unit is Infantry, double the mortal damage inflicted.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Orruk Megaboss': {
    effects: [
      //  StrengthFromVictoryEffect,
      {
        name: `Lead Da Brutes - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Brute unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit been resovled. If it is picked to do so, add 1 to the attacks characteristic of the targets melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Strength from Victory`,
        desc: `Effect: If any damage points were allocated to an enemy unit by this units combat attacks this turn and that enemy unit has been destroyed, give this unit a Waaagh! token, to a maximum of 3. 
        Until the end of the next turn, add 1 to the Attacks characteristic of this units weapons for each Waaagh! token it has.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Orruk Warchanter': {
    effects: [
      {
        name: `Rhythm of Destruction`,
        desc: `Effect: If any enemy models were slain this turn by this units combat attacks, give this unit D3 ritual points.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Orruk Weirdnob Shaman': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Green Puke'])],
    }, */
    effects: [
      {
        name: `Brutal Power - Passive`,
        desc: `Effect: Add 1 to this units power level while there are any friendly Ironjawz units that have 10 or more models wholly within 12" of it.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Ardboy Big Boss': {
    effects: [
      {
        name: `Iron-Fisted Commander - Passive`,
        desc: `Effect: If a friendly Ardboyz unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Get Bashin!' - Passive`,
        desc: `Effect: Add 1 to shield bash rolls for friendly Ardboyz units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Orruk Ardboys': {
    effects: [
      {
        name: `Shield Bash`,
        desc: `Declare: Pick an enemy unit within 1" of this unit to be the target. 
        Effect: Make a shield bash roll of D6 for each model in this unit. For each 6+, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Orruk Brutes': {
    effects: [
      // DuffUpdaBigThingEffect,
      {
        name: `You Messin'?`,
        desc: `Effect: Enemy models with a Health characteristic of 1 or 2 cannot contest objectives while they are in combat with this unit.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Orruk Gore-Gruntas': {
    effects: [
      {
        name: `Gore-Grunta Charge`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Add 1 to the mortal damage inflicted (if any) if the target is Cavalry`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Orruk Gore-Gruntas (SoG)': {
    effects: [
      {
        name: `Barge Through - Passive`,
        desc: `Effect: When this unit moves, it can pass through models in enemy Infantry units and can pass through the combat ranges of enemy Infantry units, but it cannot end the move in combat unless specified in the ability used.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  /* "Ironskull's Boyz": {
    effects: [
      {
        name: `Dead 'Ard`,
        desc: `Gurzag Ironskull has a ward of 5+. The other models in this unit have a ward of 6+.`,
        when: [WARDS_PHASE],
      },
    ],
  },
  "Morgok's Krushas": {
    effects: [
    //  DuffUpdaBigThingEffect,
      {
        name: `Beastbashas`,
        desc: `The first time a MONSTER is destroyed by an attack made by this unit, add 1 to wound rolls for attacks made by this unit for the rest of the battle.`,
        when: [COMBAT_PHASE],
      },
    ],
  }, */
  'Tuskboss On Maw-Grunta': {
    /*  mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Carve a Path'])],
    }, */
    effects: [
      // ...MawGruntaSharedEffects,
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Maw-gruntas Tusks is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Head of the Stampede - Once Per Turn`,
        desc: `Declare: If this unit charged this phase, pick up to 3 friendly Maw-grunta units wholly within 12" of this unit that charged this turn to be the targets. 
        Effect: Add 1 momentum point to each target.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Unstoppable Momentum - Passive`,
        desc: `Effect: Each time this unit has charged as a result of using a Charge ability, it gains 1 momentum point. Each time it uses a Run ability, it gains 2 momentum points. It can have a maximum of 3 momentum points at once. 
        Add the number of momentum points this unit has to the Damage characteristic of its Maw-gruntas Tusks. At the end of each battle round, subtract 1 from its momentum points, to a minimum of 0`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  "Maw-Grunta with Hakkin' Krew": {
    /* mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Carve a Path'])],
    }, */
    effects: [
      {
        name: `Unstoppable Momentum - Passive`,
        desc: `Effect: Each time this unit has charged as a result of using a Charge ability, it gains 1 momentum point. Each time it uses a Run ability, it gains 2 momentum points. It can have a maximum of 3 momentum points at once. 
        Add the number of momentum points this unit has to the Damage characteristic of its Maw-gruntas Tusks. At the end of each battle round, subtract 1 from its momentum points, to a minimum of 0`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Carve a Path - Once Per Turn`,
        desc: `Effect: If this unit is in combat, it can move a distance up to its Move characteristic. It can pass through models and the combat ranges of enemy units, but it cannot end that move in combat. 
        Then, pick each enemy unit that this unit passed across during that move to be the targets. Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll. Then, this unit gains 2 momentum points.`,
        when: [MOVEMENT_PHASE],
      },
      // ...MawGruntaSharedEffects
    ],
  },
  'Maw-Grunta Gougers': {
    /*mandatory: {
      monstrous_rampages: [keyPicker(monstrous_rampages, ['Flattened into the Mud'])],
    }, */
    effects: [
      {
        name: `Unstoppable Momentum - Passive`,
        desc: `Effect: Each time this unit has charged as a result of using a Charge ability, it gains 1 momentum point. Each time it uses a Run ability, it gains 2 momentum points. It can have a maximum of 3 momentum points at once. 
        Add the number of momentum points this unit has to the Damage characteristic of its Maw-gruntas Tusks. At the end of each battle round, subtract 1 from its momentum points, to a minimum of 0`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Flattened Into the Mud - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a dice and add the number of momentum points this unit has to the roll. On a 5+, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      //  ...MawGruntaSharedEffects
    ],
  },
  'Zoggrok Anvilsmasha': {
    effects: [
      {
        name: `Klonk - Passive`,
        desc: `Effect: Klonk is a token. You can reroll forgin rolls for this unit while this units Klonk is on the battlefield. If you make an unmodified save roll of 1 for this unit, remove this units Klonk from the battlefield after the Attack ability has been resolved (the damage point is still inflicted).`,
        when: [DURING_GAME],
      },
      {
        name: `Power of Da Great Green God`,
        desc: `Declare: Pick a visible friendly Ironjawz Infantry unit wholly within 12" of this unit to be the target. 
        Effect: Make a forgin roll of D6. Add 1 to the roll if this unit is armed with Grunta-tongs. On a 4+, the targets melee weapons have Crit (Mortal) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ward-Smashing Choppa - Passive`,
        desc: `Effect: If an attack made with this units Ward-Smashing Choppa scores a hit, the target has the Ward-Smashed keyword for the rest of the battle. Ward rolls cannot be made for a Ward-Smashed unit even if this unit has been destroyed.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Brute Ragerz': {
    effects: [
      //  GenericEffects.Elite,
      // BerserkersEffect,
      {
        name: `Berserkers - Passive`,
        desc: `Effect: This unit can use a Run ability and still use Charge abilities later in the turn.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Unleasehed Rage - Passive`,
        desc: `Effect: This unit has Strike-first if it charged in the same turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Weirdbrute Wrekkaz': {
    effects: [
      //  GenericEffects.Elite,
      //  BerserkersEffect,
      {
        name: `Berserkers - Passive`,
        desc: `Effect: This unit can use a Run ability and still use Charge abilities later in the turn.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Weirdbrute Wrekkaz (SoG)': {
    effects: [
      {
        name: `Propa Wonky - Once Per Turn`,
        desc: `Declare: If this unit is in combat, pick a friendly Ironjawz unit wholly within 12" of this unit to be the target. 
        Effect: Add 1 to hit rolls for the targets combat attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Braggit`s Bottle-Snatchaz': {
    effects: [
      {
        name: `Super-Secret Tunnels`,
        desc: `Declare: Pick a unit in this Regiment of Renown that has not been deployed. 
        Effect: Set up that unit in reserve in a super-secret tunnel. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Sudden Emergence - Once Per Turn`,
        desc: `Declare: If the Rabble-Rowza in this Regiment of Renown is in a super-secret tunnel, pick it to be the target. 
        Effect: Set up the target anywhere on the battlefield more than 9" from all enemy units. Then, set up all other friendly units that are in a super-secret tunnel within 3" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Rabble-Rowza: Neh Neh Na-Neh Neh! Can't Catch me! - Once Per Turn`,
        desc: `Declare: Pick a visible friendly Monster or Beast unit to be the target. 
        Effect: For the rest of the turn, the target can use Charge abilities even if it used a Run ability in the same turn, but each time it uses a Move ability, it must end the move closer to this unit. 
        In addition, for the rest of the turn, the first time the target ends a move within this units combat range, inflict D6 mortal damage on this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Gobbapalooza: Hallucinogenic Fungus Brews - Passive`,
        desc: `Effect: In the first battle round, this unit has Ward (4+). In the second battle round, this unit has Ward (5+). In the third and subsequent battle rounds, this unit has Ward (6+).`,
        when: [DURING_GAME],
      },
      {
        name: `Gobbapalooza: Gobbapalooza Know-Wotz`,
        desc: `Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Glareface Dance: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to run rolls and charge rolls for that unit until the start of your next turn. 
        Nasty Poisons: Pick a friendly Gloomspite Gitz unit within this units combat range. Add 1 to the Rend characteristic of that units weapons until the start of your next turn. 
        Mesmerise: Pick a visible enemy unit within 12" of this unit. Until the start of your next turn, that unit cannot use commands.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Herd: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Squig Herd: Squigs Gone Wild - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 5+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Squig Herd: Herding Squigs`,
        desc: `Effect: Roll a dice for each Squig Herder in this unit. For each 2+, you can return D3 slain Cave Squigs to this unit. For each 1, 1 Squig Herder in this unit is slain.`,
        when: [HERO_PHASE],
      },
      {
        name: `Squig Hoppers: Boing! Boing! Boing!`,
        desc: `Declare: Pick an enemy unit that this unit passed across this phase to be the target. 
        Effect: Roll a dice for each model in this unit that passed across the target. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sneaky Distraction: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Gobbapalooza in this Regiment of Renown to cast this spell, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, subtract 1 from hit rolls for attacks made by enemy units while they are wholly within 12" of the caster.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Big Grikk`s Kruleshots': {
    effects: [
      {
        name: `Beast-Skewer Killbow: Skewering Bolts - Once Per Turn`,
        desc: `Effect: For the rest of the turn, the Damage characteristic of this units Beast-Skewer Bolts is 6 if the target is a Monster.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Beast-Skewer Killbow: Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Man-Skewer Boltboyz: Man-Skewer Crossbows - Passive`,
        desc: `Effect: Each time this unit uses a Shoot ability, pick either the Hasty Shot or Aimed Shot weapon characteristics for all the attacks it makes with its Man-skewer Crossbows.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Man-Skewer Boltboyz: Pick 'Em Off`,
        desc: `Effect: If this unit has not used a Move ability this turn and was not set up this turn, add 1 to hit rolls for this units shooting attacks for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Skewer It Again! - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster that had any damage points allocated to it this phase by a shooting attack made by the Beast-skewer Killbow in this Regiment of Renown. Then, pick any number of Man-skewer Boltboyz units in this Regiment of Renown to focus fire. 
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of the ranged weapons used by the units you picked to focus fire but all of their attacks must target the enemy Monster you picked.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: Odo Godswallow': {
    effects: [
      {
        name: `Beast-Breaking Strike`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 5D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Behemoth Brawler - Passive`,
        desc: `Effect: Subtract 1 from the Attacks characteristic of enemy Monsters while they are in combat with this unit.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Menhir Club is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mighty Walloper - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Big Drogg Fort-Kicka': {
    effects: [
      {
        name: `Pulverising Strike`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: This unit can make a pile-in move. Then, roll a dice. On a 4+, inflict 4D6 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Smash Down - Once Per Turn`,
        desc: `Declare: Pick a terrain feature within 3" of this unit to be the target. 
        Effect: If the target is Faction Terrain, inflict D3+3 mortal damage on it. Then, roll a D3 for each non-Monster unit (friendly and enemy) within 3" of the target. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Fortcrusha Flail is 4 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Grievous Halitosis - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
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
  'ROR: One-Eyed Grunnock': {
    effects: [
      {
        name: `Hurled Body`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in that unit is slain and you can pick a visible enemy unit within 12" of this unit. Inflict an amount of mortal damage on that unit equal to the targets Health characteristic.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Titanic Boulderclub - Passive`,
        desc: `Effect: If all of the attacks made with this units Titanic Boulderclub target the same enemy unit, for every 5 models in the target unit, add 2 to its Attacks characteristic for the rest of the phase.`,
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
        desc: `Effect: While this unit has 15 or more damage points, the Attacks characteristic of its Titanic Boulderclub is 3 and this unit has a Control characteristic of 10.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Shake the Earth - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: 
        Inflict an amount of mortal damage on the target equal to the roll. If the target is Infantry, double the amount of mortal damage inflicted. 
        Subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Timberrr! - Passive`,
        desc: `Effect: When the Mega-Gargant in this regiment of renown is slain, before removing it from play, the players must roll off. The winner picks a point on the battlefield within 3" of that model. Inflict D3 mortal damage on each unit (friendly and enemy) within 3" of that point that has a lower Health characteristic than that model.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Exile Scavengers': {
    effects: [
      {
        name: `Endrinmaster with Dirigible Suit: By Grungi, I Have My Eye On You! - Passive`,
        desc: `Effect: Add 1 to field repairs rolls for friendly Endrinriggers units while they are wholly within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Endrinmaster with Dirigible Suit: Endrinmaster`,
        desc: `Declare: Pick a friendly Skyvessel within this units combat range to be the target. 
        Effect: Roll a dice. On a 2+, Heal (3) the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Skywardens: Timed Charges`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+: Inflict an amount of mortal damage on the target equal to the roll. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Grundstok Gunhauler: Light Bomb Racks`,
        desc: `Declare: Pick an enemy unit that does not have Fly and that this unit passed across this phase to be the target. 
        Effect: Roll 4 dice. For each 4+, inflict 1 mortal damage on the target.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `An Eye for Loot`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve studying the battlefield. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Swoop In`,
        desc: `Declare: Pick the Grundstok Gunhauler in this Regiment of Renown to use this ability if it is studying the battlefield. 
        Effect: Set up the Grundstok Gunhauler on the battlefield more than 6" from all enemy units that have an artefact of power and more than 9" from all other enemy units. Then, set up all other units in this Regiment of Renown wholly within 3" of the Grundstok Gunhauler and more than 6" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `What's Yours is Mine - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with a unit in this Regiment of Renown to be the target. Then, pick an artefact of power the target has. 
        Effect: Roll a dice. Add 1 to the roll for each unit in this Regiment of Renown that is in combat with the target. On a 6+, the target no longer has that artefact of power.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: Nurgles Gift': {
    effects: [
      {
        name: `Nurglings: Endless Swarm - Passive`,
        desc: `Effect: Heal (3) this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Incubation Period`,
        desc: `Declare: This ability must be used to deploy this Regiment of Renown. 
        Effect: Set up the units in this Regiment of Renown in reserve festering within. They have now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Bursting with Life - Passive`,
        desc: `Effect: If a friendly non-Nurgles Gift unit would be destroyed, before the last model is removed from play, roll a dice. Add 1 to the roll for each other friendly non-Nurgles Gift unit that has been destroyed this battle. On a 5+, pick a friendly unit that is festering within and set it up wholly within 6" of that model. It can be set up in combat.`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Stumblefoot Gargant': {
    effects: [
      {
        name: `Mancrusher Gargant: Stuff 'Em in Me Bag - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. If the roll is at least double the targets Health characteristic, 1 model in the target unit is slain.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Projectile Vomit - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick each enemy unit within 3" of that point to be the targets. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on that target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Bellowing Mockery - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn, then pick an enemy unit within this units combat range to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Whatre You Lookin At? - Once Per Turn`,
        desc: `Declare: Pick this unit to use this ability if it charged this turn and has not used a Rampage ability this turn. Then, pick an enemy unit within 9" of this unit to be the target. 
        Effect: Roll 2D6. This unit can move a number of inches equal to the roll. It can pass through enemy models and must end that move in combat with the target.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Snerks Trogg-Fer-Hire': {
    effects: [
      {
        name: `Dankhold Troggoth: Greater Regeneration`,
        desc: `Effect: Heal (D6) this unit.`,
        when: [START_OF_TURN],
      },
      {
        name: `Dankhold Troggoth: Magical Resistance - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dankhold Troggoth: Wade and Smash - Once Per Turn`,
        desc: `Effect: If this unit is in combat, it can move 6" but must end that move in combat. Then, roll a D3 for each enemy unit within 1" of this unit. On a 2+, inflict an amount of mortal damage on that unit equal to the roll.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Go Dat Way!`,
        desc: `Declare: Pick the Dankhold Troggoth in this Regiment of Renown to be the target if it is within 12" of the Loonboss in this Regiment of Renown. 
        Effect: For the rest of the turn, the target can still use Charge abilities even if it used a Retreat ability in the same turn.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Taktikal Cowering - Passive`,
        desc: `Effect: While the Loonboss in this Regiment of Renown is within the combat range of the Dankhold Troggoth in this Regiment of Renown: 
        That Loonboss has Ward (4+). 
        Each time you make a successful ward roll for that Loonboss, allocate 1 damage point to that Dankhold Troggoth after the damage sequence for that Loonboss has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
  'ROR: Goroan Scions': {
    effects: [
      {
        name: `Ogroid Myrmidon: Pit Master - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Ogroid Theridons unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Myrmidon: Myrmidon Rage - Passive`,
        desc: `Effect: While this unit is damaged, add 2 to the Attacks characteristic of its melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Thaumaturge: Thaumaturge Rage - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks while it is damaged.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Thaumaturge: Burning Fury - Once Per Turn`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by this units combat attacks to be the target. 
        Effect: The target has the Burning keyword.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ogroid Theridons: Unleashed Savagery - Once Per Battle`,
        desc: `Effect: Add 1 to the Damage characteristic of this units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Goroan Forgecraft - Once Per Turn`,
        desc: `Declare: Pick a friendly Destruction Hero that is wholly within the combat range of a Hero in this Regiment of Renown to be the target. 
        Effect: On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Bellow of Gorkamorka: Casting value of 7`,
        desc: `Declare: Pick the Ogroid Thaumaturge in this Regiment of Renown to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
        Effect: The target has Strike-last until the start of your next turn. In addition, while the target has the Burning keyword, subtract 1 from hit rolls for the target until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Da Kountin Krew': {
    effects: [
      {
        name: `Swampboss Skumdrekk: Bet-Master`,
        desc: `Declare: Pick an enemy unit on the battlefield to be the bet. 
        Effect: Add 1 to wound rolls for attacks made by this unit and friendly Hobgrot Slittaz units that target the bet.`,
        when: [DURING_SETUP],
      },
      {
        name: `Swampboss Skumdrekk: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Sloppklaws Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Swampboss Skumdrekk: Kountin' Krew`,
        desc: `Declare: Pick a friendly Hobgrot Slittaz unit within this units combat range to be the target. 
        Effect: For the rest of the battle, the targets Slitta-knives have Crit (Mortal) while they are wholly within 12" of this unit.`,
        when: [DURING_SETUP],
      },
      {
        name: `Swampboss Skumdrekk: Aggravate Wounds - Once Per Turn`,
        desc: `Declare: Pick an enemy Monster in combat with this unit to be the target. 
        Effect: Roll a number of dice equal to the number of damage points the target has. For each 5+, inflict 1 mortal damage on the target.`,
        when: [END_OF_TURN],
      },
      {
        name: `Hobgrot Slittaz: Scrap-Bang`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+: 
        Inflict 1 mortal damage on the target. 
        This unit can immediately use the Retreat ability as if it were your movement phase without any mortal damage being inflicted on it.`,
        when: [END_OF_TURN],
      },
      {
        name: `Bombz Away, Ladz! - Passive`,
        desc: `Effect: Friendly units in this Regiment of Renown can use Run abilities and still use Shoot abiliites later in the turn while they are wholly within 12" of this Regiment of Renown's Swampboss Skumdrekk.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Snatch 'Em Up! - Once Per Turn (Enemy Hero Phase)`,
        desc: `Declare: Pick an enemy unit in combat with this Regiment of Renown's Swampboss Skumdrekk to be the target. 
        Effect: Roll a dice. If the roll is at least double the target's Health characteristic, 1 model in the target unit is slain.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: The Shinestealaz': {
    effects: [
      {
        name: `Snarlboss: Boss Snarlfang - Passive`,
        desc: `Effect: Add 2 to charge rolls for friendly Gitmob Cavalry units while they are wholly within 12" of this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Snarlboss: Vicious Snarls and Great Howls - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick this unit and up to 2 friendly Gitmob Cavalry units within this unit's combat range to be the targets.
        Effect: For the rest of the turn, add 1 to the Attacks characteristic of the targets' Companion melee weapons.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Wolfgit Retinue: I Got Dis, Boss - Passive`,
        desc: `Effect: While a friendly Snarlboss is within this unit's combat range, both this unit and that Snarlboss have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Snarlpack Cavalry: Markin' Territory - Passive`,
        desc: `Effect: If this unit charged this turn, add 5 to its control score for the rest of the turn.`,
        when: [END_OF_TURN],
      },
      {
        name: `Snarlpack Cavalry: Frazzleburned Scrap - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, it has Strike-First for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Sunsteala Wheelas: Careening Destruction - Once Per Turn`,
        desc: `Effect: This unit can move a distance up to its Move characteristic. It can pass through other models and the combat ranges of enemy units, but it cannot end that move in combat. Then, pick up to 1 enemy Infantry unit that this unit passed across during that move to be the target. Inflict D3 mortal damage on the target. Add 1 to the amount of mortal damage inflicted for each model in this unit.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Sneaky Prowlin'`,
        desc: `Declare: Pick all units in this Regiment of Renown if none of them have been deployed.
        Effect: Set up these units in reserve prowlin' around. They have been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Ambush Time! - Once Per Battle`,
        desc: `Declare: Pick all units in this Regiment of Renown if they are prowlin' around.
        Effect: Set up those units anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Skulkriks Loonladz': {
    effects: [
      {
        name: `Loonboss: Let's Get Stabbin'! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Moonclan Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Loonboss: I'm Da Boss`,
        desc: `Declare: Pick a visible friendly Moonclan Stabbas unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 2+, pick one of the following effects: 
        Get Back Ere!: If the target is not in combat, you can return D6 slain models to it. 
        Stab Em Good!: Add 1 to wound rolls for the targets attacks until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Moonclan Stabbas: Netters`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, subtract 1 from hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Loonsmasha Fanatics: Release the Fanatics!`,
        desc: `Declare: Pick this unit if it is hidden among the mobs. Then, pick a friendly Moonclan Shootas or Moonclan Stabbas unit that has 10 or more models to be the target. 
        Effect: Set up this unit anywhere on the battlefield wholly within 6" of the target and more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Loonsmasha Fanatics: Hidden Loons`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve hidden among the mobs. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Loonsmasha Fanatics: Whirling Death - Passive`,
        desc: `Effect: This unit has Strike-first.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `On Da Moons Trail - Passive`,
        desc: `Effect: The melee weapons of units in this Regiment of Renown have Anti-Charge (+1 Rend) while they are contesting an objective you control.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'ROR: The Scarlet Jury': {
    effects: [
      {
        name: `Punishment Fits the Crime - Passive`,
        desc: `Effect: You believe the 'Accusations of Regicide' Delusion (see Grand Justice Gormayne's warscroll).`,
        when: [DURING_SETUP],
      },
      {
        name: `Grand Justice Gormayne: Arrest Those Miscreants`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Roll a dice. On a 3+, until the start of your next turn, the target has Strike-Last while it is in combat with any friendly Flesh-Eater Courts Heroes and any friendly Serfs or Knights units.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Grand Justice Gormayne: Accusations of Regicide (Delusion) - Passive`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: While you believe this Delusion, add 1 to the Damage characteristic of melee weapons used by friendly Serfs and Knights units while they are wholly within 12" of any friendly Flesh-Eater Courts Heroes that had any damage points allocated to them in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Decapitator: Executioner's Entourage - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Serfs unit that has not used a Fight ability this turn and is within this unit's combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, the target's melee weapons have Crit (2 Hits) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Decapitator: Off with their Head! - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Immediately after that Fight ability has been resolved, pick an enemy Infantry Hero in combat with this unit to be the target. Roll 2D6. If the roll exceeds the target's Health characteristic, it is automatically destroyed.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cryptguard: Elite Guardians - Once Per Turn`,
        desc: `Effect: If this unit is in combat with any enemy units that charged this turn, roll a dice. On a 3+, for the rest of the turn, this unit has Strike-First but ward rolls cannot be made for it.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cryptguard: Royal Bodyguard - Passive`,
        desc: `Effect: While any friendly non-Monster Flesh-Eater Courts Heroes are wholly within this unit's combat range, both this unit and those Heroes have Ward (5+).`,
        when: [DURING_GAME],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(IronjawzUnits, 'unit')
