import { keyPicker, tagAs } from 'factions/metatagger'
import { GenericEffects } from 'generic_rules'
import {
  BATTLESHOCK_PHASE,
  CHARGE_PHASE,
  COMBAT_PHASE,
  DURING_GAME,
  DURING_SETUP,
  END_OF_COMBAT_PHASE,
  END_OF_HERO_PHASE,
  END_OF_MOVEMENT_PHASE,
  END_OF_TURN,
  HERO_PHASE,
  MOVEMENT_PHASE,
  SHOOTING_PHASE,
  START_OF_COMBAT_PHASE,
  START_OF_HERO_PHASE,
  START_OF_TURN,
  WARDS_PHASE,
  WOUND_ALLOCATION_PHASE,
} from 'types/phases'
import CommandAbilities from './command_abilities'
import Spells from './spells'
import meta_rule_sources from 'meta/rule_sources'
import { TItemDescriptions } from 'factions/factionTypes'

/*const TheWillOfTheLegionsEffect = {
  name: `The Will of the Legions`,
  desc: `Once per turn, this unit can issue a command to a friendly OSSIARCH BONEREAPERS unit without a command point being spent.`,
  when: [DURING_GAME],
  shared: true,
}
const GrimOpponentsEffect = {
  name: `Grim Opponents`,
  desc: `If you make an unmodified charge roll of 8+ for this unit, the strike-first effect applies to this unit until the end of that turn.`,
  when: [CHARGE_PHASE],
  shared: true,
}
const NecrophorosEffect = {
  name: `Standard Bearer`,
  desc: `Add 1 to run rolls and charge rolls for this unit if it includes any Necrophoroi.`,
  when: [MOVEMENT_PHASE, CHARGE_PHASE],
  shared: true,
}
const HeraldsOfTheAccursedOneEffect = {
  name: `Heralds of the Accursed One`,
  desc: `Enemy units cannot receive commands while they are within 3" of any friendly units with this ability.`,
  when: [DURING_GAME],
  shared: true,
}
const MortekHekatosEffect = {
  name: `Champion`,
  desc: `1 model in this unit can be a Mortek Hekatos. Add 1 to the Attacks characteristic of that model's melee weapon.`,
  when: [COMBAT_PHASE],
  shared: true,
}
const UnstoppableChargeEffects = [
  {
    name: `Unstoppable Charge`,
    desc: `After this unit makes a charge move, you can pick 1 enemy unit within 1" of this unit and roll a number of dice equal to the unmodified charge roll for that charge move. For each 5+, that enemy unit suffers 1 mortal wound.`,
    when: [CHARGE_PHASE],
    shared: true,
  },
  {
    name: `Unstoppable Charge`,
    desc: `This unit can move an extra 3" when it piles in if it made a charge move in the same turn.`,
    when: [COMBAT_PHASE],
    shared: true,
  },
] */

const Units = {
  'Arkhan the Black, Mortarch of Sacrament': {
    /* mandatory: {
      spells: [keyPicker(spells, ['Curse of Years'])],
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Razaraks Ebon Claws is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `The Doom of Traitors - Once Per Turn`,
        desc: `Declare: If this unit charged this turn, pick an enemy unit in combat with it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. If the target is a Hero, double the amount of mortal damage inflicted.`,
        when: [COMBAT_PHASE],
      },
      //  FeasterOfSoulsEffect,
      {
        name: `Staff of Spirits - Passive`,
        desc: `Effect: Add 1 to casting rolls for this unit. Each time this unit successfully casts a spell, Heal (1) this unit.`,
        when: [HERO_PHASE],
      },
      {
        name: `Curse of Years: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Roll 10 dice. For each 6: 
        Inflict 1 mortal damage on the target. 
        Roll an extra dice. 
        For each 5+ on those extra dice, repeat the above bullet points. Then, do the same for each 4+, then each 3+, then each 2+.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortarch of Sacrament - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If a friendly Ossiarch Bonereapers unit wholly within 18" of this unit was picked to be the target of that spell, roll a dice. On a 4+, ignore the effect of that spell on that unit. This unit can use this ability more than once per phase but only once per Spell ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Teratic Cohort': {
    effects: [
      {
        name: `Predator's Cunning`,
        desc: `Declare: Pick this unit if it has not been deployed. 
         Effect: Set up this unit in reserve outflanking the enemy. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Hunters Unleashed`,
        desc: `Declare: Pick this unit if it is outflanking the enemy. 
         Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'Nagash, Supreme Lord of the Undead': {
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, subtract 3 from its power level.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Staff of Power - Passive`,
        desc: `Effect: Add 2 to casting rolls for this unit while it has not miscast any spells this turn. If this unit miscasts a spell, ignore the restriction that would stop this unit from casting any more spells this turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Hand of Dust - Once Per Turn`,
        desc: `Declare: Pick a visible enemy Hero or Monster in combat with this unit to be the target. 
        Effect: Hide a dice in one of your hands or under one of two appropriate containers. Your opponent must pick one of your hands or containers. If they pick the one hiding the dice, this ability has no effect. If they pick the empty one, the target is automatically destroyed.`,
        when: [END_OF_TURN],
      },
      {
        name: `Supreme Lord of the Undead - Once Per Battle`,
        desc: `Declare: Pick a friendly non-Hero non-Unique Death unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit identical to the target wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Invocation of Nagash: Casting value of 7`,
        desc: `Declare: This unit can cast this spell more than once per phase. Pick a visible unit wholly within 18" of this unit that has not been picked to be the target of this spell this turn to be the target, then make a casting roll of 2D6. 
        Effect: If the target is an enemy unit, inflict D3 mortal damage on it. If the target is a friendly Death unit, pick 1 of the following effects: 
        Return a number of slain models to the target unit with a combined Health characteristic of up to 3. The target has Ward (5+) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Gothizzar Harvester': {
    effects: [
      {
        name: `Bone Harvest - Passive`,
        desc: `Effect: Each time an enemy model from a unit in combat with this unit is slain, give this unit 1 bone-tithe point. This unit can have a maximum of 6 bone-tithe points at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Gruesome Surgery - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll. For each model slain by this ability, you can return 1 slain model to a friendly Mortek Guard unit wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Repair Construct`,
        desc: `Declare: Pick a friendly Ossiarch Bonereapers unit wholly within 12" of this unit to be the target. 
        Effect: Return a number of slain models to the target with a combined Health characteristic equal to the number of bone-tithe points this unit has. Then, reset this units bone-tithe points to 0.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'Immortis Guard': {
    /*  mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Crushing Assault'])],
    }, */
    effects: [
      //  GenericEffects.Elite,
      {
        name: `Soulbound Protectors - Passive`,
        desc: `Effect: Add 1 to ward rolls for friendly Ossiarch Bonereapers Heroes within this units combat range. However, each time you make a ward roll of 1 for a friendly Ossiarch Bonereapers Hero within this units combat range, allocate 1 damage point to this unit after the damage sequence for that Hero has been resolved (ward rolls cannot be made for those damage points).`,
        when: [DURING_GAME],
      },
    ],
  },
  'Mortek Guard': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Shieldwall'])],
    }, */
    effects: [
      {
        name: `Shieldwall - Passive`,
        desc: `Effect: Ignore all modiifers to save rolls for this unit (positive and negative) for the rest of the turn if this unit did not use a Move ability in the same turn.`,
        when: [DURING_GAME],
      },
      //  NecrophorosEffect,
    ],
  },
  'Mortek Guard (SoG)': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Shieldwall'])],
    }, */
    effects: [
      {
        name: `Shields of the Legion - Once Per Phase - Reaction: A friendly Ossiarch Boneshapers War Machine, Monster, or Mortisan unit within this unit's combat range was targeted by an Attack ability`,
        desc: `Effect: For the rest of the phase, subtract 1 from the Rend characteristic of weapons used for attacks that target that friendly unit.`,
        when: [SHOOTING_PHASE, COMBAT_PHASE],
      },
      //  NecrophorosEffect,
    ],
  },
  'Kavalos Deathriders': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Deathrider Wedge'])],
    }, */
    effects: [
      {
        name: `Deathrider Wedge - Passive`,
        desc: `Effect: When this unit uses a Charge ability, models in this unit can pass through models in enemy Infantry units as if this unit had Fly.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Unstoppable Charge - Passive`,
        desc: `Declare: If this unit charged this phase, pick an enemy Infantry unit that it passed across to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      //  NecrophorosEffect, MortekHekatosEffect, ...UnstoppableChargeEffects
    ],
  },
  'Necropolis Stalkers': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Hunt and Kill'])],
    }, */
    effects: [
      //  GenericEffects.Elite,
      {
        name: `Quadrarch Aspects`,
        desc: `Effect: Pick 1 of the following effects to apply for the rest of the turn: 
        Domination Aspect: Subtract 3 from the control scores of enemy units while they are in combat with this unit. 
        Blade-Parry Aspect: Subtract 1 from hit rolls for combat attacks that target this unit. 
        Destroyer Aspect: Ward rolls cannot be made for damage points inflicted by this units combat attacks. 
        Precision Aspect: This units melee weapons have Anti-Hero (+1 Rend) while this unit is in combat with an enemy Hero.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mortek Crawler': {
    effects: [
      {
        name: `Deathly Barrage`,
        desc: `Declare: Pick an enemy unit that was targeted by all of this units shooting attacks this phase to be the target. 
        Effect: Roll a dice. Add 1 to the roll if this unit is wholly within 12" of a friendly Mortisan Ossifector, and add 1 to the roll if any other friendly Mortek Crawler units picked that enemy unit to be the target of this ability this turn. On a 4+, the target has Strike-last for the rest of the turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'Morghast Archai': {
    effects: [
      // GenericEffects.Elite,
      // HeraldsOfTheAccursedOneEffect,
      // GrimOpponentsEffect,
      {
        name: `Ebon-Wrought Armour - Passive`,
        desc: `Effect: This unit has Ward (3+) against damage points inflicted by Spell abilities, Prayer abilities and abilities used by Manifestations. If you make a successful ward roll for this unit, or if this unit destroys an enemy Manifestation, give this unit an arcane charge token. This unit cannot have more than 1 arcane charge token at once.`,
        when: [DURING_GAME],
      },
      {
        name: `Discharge Armour`,
        desc: `Declare: If this unit has an arcane charge token, pick a friendly Ossiarch Bonereapers Wizard wholly within 12" of this unit to be the target. 
        Effect: Remove this units arcane charge token, then add 1 to casting rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Morghast Harbingers': {
    effects: [
      //  GenericEffects.Elite,
      //  HeraldsOfTheAccursedOneEffect,
      //  GrimOpponentsEffect,
      {
        name: `Heralds of Nagash - Once Per Turn - Reaction: You declared a Relentless Discipline ability`,
        desc: `Effect: This unit is affected by that Relentless Discipline ability as if it were wholly within range of the friendly Hero picked to use it.`,
        when: [DURING_GAME],
      },
      {
        name: `Harbingers of Death - Passive`,
        desc: `Effect: Add 1 to the number of dice rolled when making charge rolls for this unit, to a maximum of 3.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'Arch-Kavalos Zandtos': {
    /*  mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Still Their Breath!'])],
    }, */
    effects: [
      //  ...UnstoppableChargeEffects,
      {
        name: `Unstoppable Charge - Passive`,
        desc: `Declare: If this unit charged this phase, pick an enemy Infantry unit that it passed across to be the target. 
      Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Spear of the Kavaloi - Passive`,
        desc: `Effect: When this unit uses a Charge ability, it can pass through models in enemy Infantry units as if it had Fly.`,
        when: [CHARGE_PHASE],
      },
      // TheWillOfTheLegionsEffect,
      {
        name: `Still Their Breath - Once Per Battle`,
        desc: `Effect: If this unit is in combat, for the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly non-Hero Ossiarch Bonereapers units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  Vokmortian: {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Mortal Touch'])],
    }, */
    effects: [
      {
        name: `Voice of Nagash - Once Per Battle`,
        desc: `Declare: Pick a visible enemy unit within 12" of this unit to be the target. 
        Effect: For the rest of the turn, non-Fight Core abilities cost 1 command point for the target to use. Those abilities do not count as commands.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mortal Contract: Casting value of 7`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be bound, pick a visible friendly Ossiarch Bonereapers unit wholly within 18" of this unit to be bound, then make a casting roll of 2D6. 
        Effect: Until the start of your next turn, each time the bound friendly unit is picked to be the target of an ability used by the bound enemy unit, roll a D3. On a 2+, inflict an amount of mortal damage on the bound enemy unit equal to the roll as a reaction. If the bound enemy unit is destroyed by this ability, do not resolve the effect of the enemy ability.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Liege-Kavalos': {
    /* mandatory: {
      command_abilities: [keyPicker(CommandAbilities, ['Endless Duty'])],
    }, */
    effects: [
      {
        name: `Unstoppable Charge - Passive`,
        desc: `Declare: If this unit charged this phase, pick an enemy Infantry unit that it passed across to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Spear of the Kavaloi - Passive`,
        desc: `Effect: When this unit uses a Charge ability, it can pass through models in enemy Infantry units as if it had Fly.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Master of Cavalry - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly Kavalos Deathriders unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved.`,
        when: [COMBAT_PHASE],
      },
      //  TheWillOfTheLegionsEffect, ...UnstoppableChargeEffects
    ],
  },
  'Mortisan Boneshaper': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Shard-storm'])],
    }, */
    effects: [
      //   GenericEffects.WizardOneSpellEffect,
      {
        name: `Boneshaper - Once Per Turn`,
        desc: `Declare: Pick a friendly Ossiarch Bonereapers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+: 
        If the target is damaged, Heal (3) the target. 
        If the target is not damaged, return a number of slain models to the target unit with a combined Health characteristic of up to 3.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mortisan Boneshaper (SoG)': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Shard-storm'])],
    }, */
    effects: [
      //   GenericEffects.WizardOneSpellEffect,
      {
        name: `Legion Quartermaster - Passive`,
        desc: `Effect: Each time a friendly non-Hero Ossiarch Bonereapers unit wholly within 12" of this unit uses the Rally command, you can make 3 additional rally rolls of D6.`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: Boneshaper`,
        desc: `Declare: If this unit is not in combat, pick a friendly Mortek Guard unit that has been destroyed to be the target. 
        Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 12" of this unit and more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mortisan Soulmason': {
    /*  mandatory: {
      spells: [keyPicker(Spells, ['Soul-guide'])],
    }, */
    effects: [
      {
        name: `Soul-Guide: Casting value of 7`,
        desc: `Declare: Pick a visible friendly Ossiarch Bonereapers unit wholly within 12" of the caster to be the target, then make a casting roll of 2D6. 
        Effect: The target has Strike-first for the rest of the turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'Mortisan Soulreaper': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Soul-blast'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Soulreaper - Passive`,
        desc: `Effect: Subtract 1 from wound rolls for combat attacks made by enemy units while they are in combat with this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Necrotic Impetus - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: Pick a friendly non-Hero Ossiarch Bonereapers Infantry unit that has not used a Fight ability this turn and is within this units combat range to be the target. The target can be picked to use a Fight ability immediately after the Fight ability used by this unit has been resolved. If it is picked to do so, add 1 to hit rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
    ],
  },
  'Mortisan Ossifector': {
    /* mandatory: {
      spells: [keyPicker(Spells, ['Empower Ossification'])],
    }, */
    effects: [
      // GenericEffects.WizardOneSpellEffect,
      {
        name: `Refined Creations - Once Per Turn`,
        desc: `Declare: Pick a friendly Gothizzar Harvester, Morghast Archai or Morghast Harbingers unit wholly within 12" of this unit to be the target. 
        Effect: Roll a dice. On a 3+, add 1 to the Rend characteristic of the targets melee weapons until the start of your next turn.`,
        when: [HERO_PHASE],
      },
    ],
  },
  Katakros: {
    /* mandatory: {
      command_abilities: [
        keyPicker(CommandAbilities, ['Supreme Lord of the Bonereaper Legions', 'Endless Duty']),
      ], 
    }, */
    effects: [
      {
        name: `Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Inda-Khaat is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mortarch of the Necropolis - Passive`,
        desc: `Effect: If this unit uses a Relentless Discipline ability, that ability affects friendly Ossiarch Bonereapers units wholly within 18" of this unit instead of wholly within 12".`,
        when: [HERO_PHASE],
      },
      {
        name: `Prime Necrophoros - Passive`,
        desc: `Effect: Add 3 to the control scores of other friendly Ossiarch Bonereapers units while they are wholly within 18" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Aviarch Spymaster - Once Per Turn - Reaction: Opponent declared a command for a unit within 18" of this unit`,
        desc: `Effect: Roll a dice. On a 5+, that command has no effect, it still counts as having been used and the command points spent to use it are still lost.`,
        when: [DURING_GAME],
      },
      {
        name: `Command Ability - Supreme Lord of the Bonereaper Legions`,
        desc: `Declare: Pick up to 3 friendly Ossiarch Bonereapers units wholly within 18" of this unit to be the targets. 
        Effect: Until the start of your next turn, add 1 to save rolls for the targets while they are wholly within 18" of this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  /* 'Mir Kainan': {
    mandatory: {
      spells: [keyPicker(Spells, ['Dire Ultimatum'])],
    },
    effects: [
      GenericEffects.WizardOneSpellEffect,
      {
        name: `Bone-tithe`,
        desc: `This unit has a tithe score that starts at 0 at the start of the battle. Each time an enemy model is slain by this unit's attacks, increase this unit's tithe score by 1. If that slain model had a Wounds characteristic of 4 or more, increase this unit's tithe score by 2 instead of 1.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Bone-tithe`,
        desc: `At the start of your hero phase, if this unit has a tithe score of 1 or more, you can reduce its tithe score by 1. If you do so, pick 1 of the following abilities:

        Built for War: Pick 1 friendly KAINAN'S REAPERS unit wholly within 6" of this unit. You can return up to 3 slain models to that unit.
        
        Invigorated: Until your next hero phase, add 1 to the Attacks characteristic of melee weapons used by this unit and by friendly KAINAN'S REAPERS units wholly within 6" of this unit.`,
        when: [START_OF_HERO_PHASE],
      },
    ],
  },
  "Kainan's Reapers": {
    effects: [
      {
        name: `Dark Efficiency`,
        desc: `If a friendly MIR KAINAN is within 3" of this unit, before you allocate a wound or mortal wound to that HERO, or instead of making a ward roll for a wound or mortal wound that would be allocated to that HERO, roll a dice. On a 2+, that wound or mortal wound is allocated to this unit instead of MIR KAINAN and cannot be negated.`,
        when: [WOUND_ALLOCATION_PHASE],
      },
      {
        name: `Tithe Reapers`,
        desc: `Each model in this unit counts as 3 models for the purposes of controlling objectives.`,
        when: [DURING_GAME],
      },
    ], 
  }, */
  'ROR: The Summerking`s Entourage': {
    effects: [
      {
        name: `Ushoran: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Monstrous Talons is 6.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ushoran: Epicentre of Delusion`,
        desc: `Effect: Pick 1 of the following effects to apply until the start of your next turn: 
          The Royal Hunt: Add 1 to wound rolls for attacks made by friendly Flesh-eater Courts units that target a Monster. 
          Crusading Army: Add 1 to run rolls and charge rolls for friendly Flesh-eater Courts units. 
          Defenders of the Realm: Add 1 to save rolls for friendly Flesh-eater Courts units while they are contesting an objective you control. 
          The Grand Tournament: Add 1 to hit rolls for attacks made by other friendly Flesh-eater Courts Heroes if they charged in the same turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ushoran: Shroudcage Fragment - Once Per Turn`,
        desc: `Declare: Pick up to 3 enemy units in combat with this unit to be the targets. 
          Effect: Roll a dice for each target. If the roll exceeds the targets Control characteristic, the target has Strike-last for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ushoran: Glimpse of Delusion: Casting value of 7`,
        desc: `Declare: Pick a visible enemy model within 18" of this unit to be the target, pick another enemy unit within the targets combat range to be the victim, then make a casting roll of 2D6. 
          Effect: Pick 1 of the targets melee weapons. Immediately resolve combat attacks made with that weapon against the victim.`,
        when: [HERO_PHASE],
      },
      {
        name: `Crypt Guard: Armoury of Madness - Reaction: You declared a Fight ability for this unit`,
        desc: `Effect: If any damage points inflicted by attacks made as part of that Fight ability are allocated to any enemy units, those enemy units cannot use commands until the start of your next turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crypt Guard: Royal Bodyguard - Passive`,
        desc: `Effect: While any friendly Flesh-eater Courts Heroes are wholly within this units combat range, both this unit and those Heroes have Ward (5+).`,
        when: [DURING_GAME],
      },
      {
        name: `Morbheg Kinghts: Shrieking Charge`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of this unit to be the target. 
          Effect: Roll a D3. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Morbheg Knights: Predator's Pounce - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Deranged Transformation: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Ushoran in this Regiment of Renown to cast this spell, pick another visible unit in this Regiment of Renown wholly within 12" of them to be the target, then make a casting roll of 2D6. 
          Effect: Until the start of your next turn: 
          Add 2" to the targets Move characteristic. 
          Add 1 to wound rolls for the targets combat attacks.`,
        when: [HERO_PHASE],
      },
      {
        name: `Maddening Radiance - Passive`,
        desc: `Effect: Add 1 to the Attacks characteristic of melee weapons used by units in this Regiment of Renown while they are wholly within 12" of the Ushoran in this Regiment of Renown.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Summon Deluded Throngs - Once Per Battle`,
        desc: `Declare: Pick the Ushoran in this Regiment of Renown to use this ability, then pick another unit in this Regiment of Renown that has been destroyed to be the target. 
          Effect: Set up a replacement unit with half the number of models from the target unit (rounding up) wholly within 6" of a battlefield edge and more than 9" from all enemy units. The replacement unit is part of this Regiment of Renown.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Jerrion`s Delegation': {
    effects: [
      {
        name: `Marrowscroll Herald: The King's Entreaty - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a dice. On a 3+, pick 1 of the following effects: 
        Attack the Apostate!: Friendly Flesh-eater Courts units in combat with the target have Strike-first for the rest of the turn. 
        Welcome the Disciple!: The target has the Infected keyword for the rest of the battle. Each time your opponent declares a command, Spell ability or Prayer ability for an Infected unit, roll a dice. On a 5+: 
        If they declared a command, that command has no effect. The command still counts as having been used and the command points spent to use the command are still lost. 
        If they declared a Spell or Prayer ability, that spell or prayer fails.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Marrowscroll Herald: Don't Shoot the Messenger - Passive`,
        desc: `Effect: While this unit is not in combat and is wholly within the combat ranges of 3 or more other friendly Flesh-eater Courts Infantry models, it is not visible to enemy units.`,
        when: [DURING_GAME],
      },
      {
        name: `Crypt Ghouls: Royal Approval - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is wholly within 12" of any friendly Courtiers or Abhorrants.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crypt Horrors: Royal Approval - Passive`,
        desc: `Effect: Add 1 to the Rend characteristic of this units melee weapons while it is wholly within 12" of any friendly Courtiers or Abhorrants.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Crypt Flayers: Escort Courtier - Once Per Turn`,
        desc: `Declare: If this unit is not in combat, pick a friendly Flesh-eater Courts Infantry Hero that does not have Fly and is within this units combat range to be the target. 
        Effect: Remove the target from the battlefield. Then, this unit can move a distance up to its Move characteristic. It cannot end that move in combat. Then, set up the target within this units combat range and more than 3" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Urgent Missive - Passive`,
        desc: `Effect: Units in this Regiment of Renown can use Charge abilities even if they used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on units in this Regiment of Renown by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: The Sorrowmourn Choir': {
    effects: [
      {
        name: `Lady Olynder: Grief-Stricken: Casting value of 6`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: Ignore positive modifiers to hit rolls, wound rolls and save rolls for the target for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Lady Olynder: Mortarch of Grief - Passive`,
        desc: `Effect: Subtract 3 from the control scores of enemy units while they are within 12" of this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Lady Olynder: No Rest For the Wicked - Once Per Battle`,
        desc: `Declare: Pick any number of friendly Nighthaunt units on the battlefield to be the targets. 
        Effect: For each target, you can return a number of slain models to that unit with a combined Health characteristic of up to D3+3.`,
        when: [HERO_PHASE],
      },
      {
        name: `Myrmourn Banshees: Spell-Eaters - Reaction: Opponent declared a Spell ability`,
        desc: `Effect: If a friendly Nighthaunt unit wholly within 12" of this unit was picked to be the target of that spell, this unit can use the Unbind ability as if it had Wizard (1). Add 1 to the unbinding roll for that ability. If the spell is unbound, inflict D3 mortal damage on the caster.`,
        when: [HERO_PHASE],
      },
      {
        name: `Dreadscythe Harridans: Harrowing Shriek - Passive`,
        desc: `Effect: If this unit charged in the same turn, subtract 1 from wound rolls for attacks made by enemy units while they are in combat with this unit.`,
        when: [CHARGE_PHASE],
      },
      {
        name: `Dreadscythe Harridans: Murderous Bloodlust - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for this units combat attacks while it is in combat with any damaged enemy units or while it is in combat with any enemy units that had any models slain in the same turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ghostly Paths: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: This spell can be cast by the same Wizard more than once per phase. Pick the Lady Olynder in this Regiment of Renown to cast this spell, pick a visible friendly unit in this Regiment of Renown that is wholly within 12" of them, that is not in combat and that has not been picked to be the target of this spell this turn to be the target, then make a casting roll of 2D6. 
        Effect: Remove the target from the battlefield and set it up again more than 9" from all enemy units.`,
        when: [HERO_PHASE],
      },
      {
        name: `Insubstantial - Passive`,
        desc: `Effect: Ignore modifiers to save rolls (positive and negative) for units in the Regiment of Renown.`,
        when: [DURING_GAME],
      },
      {
        name: `Harvesters of Sorrow - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with a unit in this Regiment of Renown to be the target. 
        Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
  'ROR: Neferata`s Royal Echelon': {
    effects: [
      {
        name: `Neferata: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Nagadrons Claws is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neferata: Twilight's Allure - Passive`,
        desc: `Effect: Subtract 1 from hit rolls for combat attacks that target friendly Soulblight Gravelords units while they are wholly within 6" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Neferata: Mortarch of Blood`,
        desc: `Declare: Pick up to 3 friendly Deathrattle Infantry or Deadwalkers Infantry units to be the targets. 
          Effect: Each target can use the Normal Move ability as if it were your movement phase.`,
        when: [DURING_SETUP],
      },
      {
        name: `Neferata: The Adevore - Once Per Turn`,
        desc: `Declare: Pick an enemy Hero that was allocated any damage points inflicted by this units Akmet-har this turn to be the target. 
          Effect: Roll a dice. On a 5+, the target is automatically destroyed.`,
        when: [END_OF_TURN],
      },
      {
        name: `Neferata: Dark Mist: Casting value of 7`,
        desc: `Declare: Pick a visible friendly non-Monster Soulblight Gravelords unit wholly within 12" of this unit to be the target, then make a casting roll of 2D6. 
          Effect: Ignore modifiers to save rolls for the target (positive and negative) until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Black Knights: The Deathly Charge - Passive`,
        desc: `Effect: If this unit charged this turn, its Barrow Lances have Crit (Mortal) for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Deathrattle Skeletons: Skeleton Legion`,
        desc: `Effect: You can return D3 slain models to this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Soulpike: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Neferata in this Regiment of Renown to cast this spell, pick a visible enemy unit within 18" of them to be the target, then make a casting roll of 2D6. 
          Effect: Until the start of your next turn, each time the target uses a Charge ability, immediately after that ability has been resolved, roll a number of dice equal to the unmodified charge roll for that ability. For each 4+, inflict 1 mortal damage on the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Premeditated Demise - Once Per Turn`,
        desc: `Declare: Pick an enemy unit within 12" of the Neferata in this Regiment of Renown to be the target. 
          Effect: Until the start of your next turn, ward rolls cannot be made for damage points inflicted on the target by attacks made by units in this Regiment of Renown.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Blood Queen's Will - Once Per Battle`,
        desc: `Declare: Pick an enemy unit contesting an objective that the Neferata in this Regiment of Renown is contesting to be the target. 
          Effect: Roll a dice. On a 2-5, subtract 10 from the control score of the target for the rest of the turn. On a 6, the target has a maximum control score of 1 for the rest of the turn.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: The Sternieste Garrison': {
    effects: [
      {
        name: `Mannfred Von Carstein: Wind of Death: Casting value of 7`,
        desc: `Declare: Pick a point on the battlefield within 18" of the caster, pick up to 3 visible enemy units within 6" of that point to be the targets, then make a casting roll of 2D6. 
        Effect: Roll a D3 for each target. On a 2+, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Sword of Unholy Power - Passive`,
        desc: `Effect: If this unit has slain any enemy models this turn, for the rest of the turn, add 1 to the Attacks characteristic of melee weapons used by friendly Deathrattle and Deadwalkers units while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Mortarch of Night - Reaction: You declared the Redeploy command for a Soulblight Gravelords unit wholly within 12" of this unit`,
        desc: `Effect: The unit using the Redeploy command can move into combat when using that ability.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of Ashigaroths Claws is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Mannfred Von Carstein: Ashigaroth's Hunger - Once Per Turn`,
        desc: `Effect: If this unit charged this turn, roll a dice. On a 3+, this unit has Strike-first for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Fell Bats: Beast - Passive`,
        desc: `Effect: This unit has a maximum control score of 1.`,
        when: [END_OF_TURN],
      },
      {
        name: `Fell Bats: Fleet and Fell - Passive`,
        desc: `Effect: This unit can use Charge abilities even if it used a Retreat ability in the same turn. In addition, no mortal damage is inflicted on this unit by Retreat abilities.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Stalking Blades: Casting value of 7 (UNLIMITED)`,
        desc: `Declare: Pick the Mannfred von Carstein in this Regiment of Renown to cast this spell, pick a visible enemy unit within 12" of them to be the target, then make a casting roll of 2D6. 
          Effect: Inflict 1 mortal damage on the target for each other enemy unit within 3" of the target.`,
        when: [HERO_PHASE],
      },
      {
        name: `Engulfing Shadows - Passive`,
        desc: `Effect: Each time a unit in this Regiment of Renown is set up, add 1 to the Attacks characteristic of that units melee weapons for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Cover of Night - Once Per Turn`,
        desc: `Declare: Pick 1 friendly unit in this Regiment of Renown that is not in combat to be the target. 
          Effect: Remove that unit from the battlefield and set it up again more than 6" from all enemy units.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Veremord`s Shamblers': {
    effects: [
      {
        name: `Corpse Cart: Locus of Undeath - Passive`,
        desc: `Effect: Melee weapons used by other friendly Deadwalkers units have Crit (Auto-wound) while they are wholly within 12" of this unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Deadwalker Zombies: Mindless Ferocity - Passive`,
        desc: `Effect: Each time a model in this unit is slain by a combat attack and that model was in combat with the attacking unit, roll a dice. On a 6+, inflict 1 mortal damage on the attacking unit after the Fight ability has been resolved.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Vitiating Vapours - Passive`,
        desc: `Effect: Subtract 1 from ward rolls for enemy units while they are within 12" of the Corpse Cart in this Regiment of Renown.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Legend Among Graverobbers`,
        desc: `Declare: Pick the Corpse Cart in this Regiment of Renown to use this ability if it is within 3" of the Deadwalker Zombies unit in this Regiment of Renown. Then, pick each enemy Infantry, Cavalry and Beast unit within 12" of the Corpse Cart to be the targets. 
        Effect: For each target that had any models slain this turn, you can return D3 slain models to the Deadwalker Zombies unit in this Regiment of Renown.`,
        when: [END_OF_TURN],
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
  'ROR: The Lost-Long Spirits': {
    effects: [
      {
        name: `Treelord: Battle Damaged - Passive`,
        desc: `Effect: While this unit has 10 or more damage points, the Attacks characteristic of its Sweeping Blows is 3.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Treelord: Lash and Tangle - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
          Effect: Roll a dice. On a 3+, subtract 1 from wound rolls for the targets attacks for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Treelord: Entangling Grasp`,
        desc: `Declare: Pick an enemy unit that had any damage points allocated to it this turn by attacks made with this units Strangleroots to be the target. 
          Effect: Roll a dice. On a 3+, the target cannot use Run or Retreat abilities until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Spite-Revenants: Unbridled Malice`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target. 
          Effect: Roll a dice. On a 3+, the target cannot use commands for the rest of the turn.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Endless Wandering - Once Per Turn - Enemy Hero Phase`,
        desc: `Declare: Pick a unit in this Regiment of Renown that is not in combat to use this ability. 
        Effect: That unit can use the Normal Move ability as if it were your movement phase.`,
        when: [HERO_PHASE],
      },
      {
        name: `Ominous Fog - Passive`,
        desc: `Effect: Units in this Regiment of Renown are not visible to enemy units more than 12" from them while they are wholly within 9" of the Treelord in this Regiment of Renown.`,
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
        desc: `Declare: Pick this unit to use this ability if it has not used a Rampage ability this turn. Then, pick a point on the battlefield within 6" of this unit and pick all other units (friendly and enemy) within 3" of that point to be the targets. 
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
  'ROR: The Beast of Castle Sternieste': {
    effects: [
      {
        name: `Revenant Draconith: Battle Damaged - Passive`,
        desc: `Eect: While this unit has 10 or more damage points, the Attacks characteristic of its Draconic Claws is 5.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Revenant Draconith: Death on Tattered Wings`,
        desc: `Declare: Pick this unit if it has not been deployed. 
        Effect: Set up this unit in reserve high above the battlefield. It has now been deployed.`,
        when: [DURING_SETUP],
      },
      {
        name: `Revenant Draconith: Loathsome Descent`,
        desc: `Declare: Pick this unit if it is high above the battlefield. 
        Effect: Set up this unit anywhere on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Revenant Draconith: Red Ruin - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target. 
        Effect: Roll a D3. On a 2+, resolve the following effects:
        Inflict an amount of mortal damage on the target equal to the roll.
        Heal(X) this unit where X ia amount equal to the roll.
        This unit can be removed from the battlefield and set up in reserve high above the battlefield.`,
        when: [END_OF_TURN],
      },
      {
        name: `Deathless Monstrosity - Once Per Turn`,
        desc: `Effect: Heal (3) this unit.`,
        when: [HERO_PHASE],
      },
    ],
  },
  'ROR: Blades of the Hollow King': {
    effects: [
      {
        name: `Aurelias`,
        desc: `Declare: This unit can use this ability while its Aurelias is on the battlefield. 
        Effect: Pick 1 of the following to apply for the rest of the turn:
        Add 1 to the unit's power level.
        Each time a casting roll is made for this unit, you can reroll 1 of the dice.`,
        when: [HERO_PHASE],
      },
      {
        name: `Solia, the Tutor`,
        desc: `Declare: This unit can use this ability while its Cado Ezechiar is on the battlefield.
        Effect: Pick 1 of the following to apply for the rest of the turn:
        This unit has Ward(5+).
        This unit's Ezechiarian Greatsword has Crit(Mortal).`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Retribution or Salvation: Casting value of 7`,
        desc: `Declare: This unit can cast this spell while its Cado Ezechiar is on the battlefield. Pick a visible unit within 12" of this unit to be the target, then make a casting roll of 2D6. 
        Effect: If the target is an enemy unit, inflict D3 mortal damage on it. If the target is a friendly Deathrattle or Deadwalkers unit, subtract 1 from wound rolls of combat attacks that target that unit for the rest of the turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `The Hunger - Once Per Turn`,
        desc: `Effect: If this unit used a Fight ability this turn, Heal (D3) this unit. Heal (2D3) this unit instead if it destroyed an enemy unit this turn using a Fight ability.`,
        when: [END_OF_TURN],
      },
    ],
  },
  'ROR: Sky-Port Profiteers': {
    effects: [
      {
        name: `Command Ability: Supplies Don't Come Cheap`,
        desc: `Declare: Pick a visible terrain feature within 18" of the Codewright in this Regiment of Renown. Each friendly unit wholly within 3" of that terrain feature is a target.
        Effect: Roll a D3 for each target. On a 2+, Heal (X) the target, where X is an amount equal to the roll.`,
        when: [HERO_PHASE],
      },
      {
        name: `Command Ability: No One Rides for Free`,
        desc: `Declare: Pick a friendly Infantry unit with up to 10 models that is wholly within 9" of the Codewright in this Regiment of Renown and not in combat to be the target.
        Effect: Remove the target from the battlefield, then set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Command Ability: Long-Range Support`,
        desc: `Declare: Pick an objective within 15" of the Codewright in this Regiment of Renown and that no friendly units are contesting. Each unit contesting that objective is a target.
        Effect: Roll a dice for each target. If the roll exceeds the target's Health characteristic, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Codewright: Advisory Role - Once Per Turn`,
        desc: `Declare: Pick up to 3 visible friendly Skyfarers units to be the targets. 
        Effect: Roll a dice for each target. On a 3+, pick 1 of the following effects to apply to that target for the rest of the turn: 
        Seek New Prospects: Add 5 to the targets control score. 
        Dont Argue With the Wind: Add 1 to run rolls and charge rolls for the target. 
        Theres No Trading With Some People: The target can use a Retreat ability and still use Shoot abilities later in the turn. In addition, no mortal damage is inflicted on the target by Retreat abilities.`,
        when: [HERO_PHASE],
      },
      {
        name: `Specialist Grundstok Ammunition - Once Per Turn - Reaction: You declared a Shoot ability for this unit`,
        desc: `Declare: Pick Shieldbreaker ammunition or Thunderdrakk ammunition.
        Effect: If all of the attacks made for that Shoot ability target the same enemy unit, after that Shoot ability has been resolved, roll a dice and add the number of damage points allocated to the target by that Shoot ability. If the roll is higher than the target's Control characteristic, apply the following effect to the target based on the ammunition type picked:
        Shieldbreaker: Ward rolls cannot be made for the target until the start of your next turn.
        Thunderdrakk: That target has a maximum control score of 1 until the start of your next turn.`,
        when: [SHOOTING_PHASE],
      },
    ],
  },
  'ROR: The Horror of Hallows Watch': {
    effects: [
      {
        name: `Dark Hunt - Passive`,
        desc: `Effect: In your charge phase, if this unit is not in combat and has not used a Run or Retreat ability in the same turn, it must use the 'Charge' ability, and if the charge roll would allow it to end the move within 1/2" of a visible enemy unit, it must do so.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Ravenous Shrieks - Passive`,
        desc: `Effect: Each time an enemy unit is destroyed by this unit's shooting attacks, add 1 to the Attacks characteristic of this unit's Death Shriek for the rest of the battle (this effect is cumulative).`,
        when: [SHOOTING_PHASE],
      },
      {
        name: `Royal Terrorgheist: Necromantic Limits - Passive`,
        desc: `Effect: This unit's Terrorgheist's Skeletal Talons have a maximum Attacks characteristic of 10.
        While this unit has 10 or more damage points, the Attacks characteristic of its Terrorgheist's Skeletal Talons is 4.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Terrorgheist: Wicked Predator - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: For each champion, standard bearer and musician in the target unit, add 1 to the Attacks characteristic of this unit's Terrorgheist's Skeletal Talons, to a maximum of 10, for the rest of the phase. Those additional attacks must target that enemy unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Royal Terrorgheist: Shriek of Terror - Once Per Turn`,
        desc: `Declare: Pick an enemy Infantry unit in combat with this unit to be the target.
        Effect: Roll a dice for each model in the target unit. For each 6, inflict 1 mortal damage on the target. If 3 or more damage points are allocated to the target by this ability, subtract 1 from hit rolls for the target's attacks for the rest of the turn.`,
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
  'ROR: The Eternal Nightmare': {
    effects: [
      {
        name: `Enemy of the Throne - Passive`,
        desc: `Effect: Add 1 to hit rolls and wound rolls for units in thie Regiment of Renown for attacks that target a Sentenced unit.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Scriptor Mortis: Judge, Jury, and Executioner - Passive`,
        desc: `Effect: Each time a friendly Nighthaunt Infantry unit uses a Fight ability, if all of its attacks target the same Sentenced enemy unit, that friendly unit's melee weapons have Crit (Mortal) for that Fight ability.`,
        when: [COMBAT_PHASE],
      },
      {
        name: `Scriptor Mortis: Sentenced to Eternal Torment - Once Per Turn`,
        desc: `Declare: Pick a visible enemy unit within 18" of this unit to be the target.
        Effect: Roll a dice. On a 3+, inflict 1 mortal damage on the target and the target has the Sentenced keyword until the start of your next turn.`,
        when: [HERO_PHASE],
      },
      {
        name: `Craventhrone Guard: Black-Hearted Lackeys - Once Per Turn`,
        desc: `Declare: Pick an enemy unit in combat with this unit to be the target.
        Effect: Roll a D3. On a 2+, this unit immediately uses the Retreat ability without any mortal damage being inflicted on it. Then, inflict an amount of mortal damage on the target equal to the roll.`,
        when: [MOVEMENT_PHASE],
      },
    ],
  },
  'ROR: Casket of Resurrections': {
    effects: [
      {
        name: `Dark Resurrection`,
        desc: `Declare: If any damage points were allocated to an enemy unit by this unit's combat attacks this turn and that enemy unit was destroyed this turn, pick a friendly non-Unique Death Infantry Hero that has been destroyed to be the target.
        Effect: Set up a replacement unit identical to the target wholly within 12" of this unit. The replacement unit can only be set up in combat with enemy units that are in combat with this unit.`,
        when: [END_OF_TURN],
      },
      {
        name: `Black Coach: Nimbus of Power - Once Per Turn`,
        desc: `Effect: If this unit is not in combat, remove it from the battlefield and set it up again on the battlefield more than 9" from all enemy units.`,
        when: [MOVEMENT_PHASE],
      },
      {
        name: `Black Coach: Runaway Coach`,
        desc: `Declare: If this unit charged this phase, pick an enemy unit within 1" of it to be the target. 
        Effect: Roll a D3. On a 2+, inflict an amount of mortal damage equal on the target equal to the roll.`,
        when: [CHARGE_PHASE],
      },
    ],
  },
} satisfies TItemDescriptions

export default tagAs(Units, 'unit')
